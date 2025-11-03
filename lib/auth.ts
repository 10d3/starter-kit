
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import {
  magicLink,
  lastLoginMethod,
  haveIBeenPwned,
  organization
} from "better-auth/plugins";
import { stripe } from "@better-auth/stripe";
import { prisma } from "./prisma";
import { stripeClient } from "./stripe";
import { env } from "./env";
import {
  sendEmailVerification,
  sendMagicLink,
  sendOrgInvitation,
  sendResetPasswordMail,
} from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword({ user, url }) {
      await sendResetPasswordMail(user.email, user.name, url);
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    async sendVerificationEmail({ user, url }) {
      await sendEmailVerification(user.email, user.name, url);
    },
  },

  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },

  plugins: [
    stripe({
      stripeClient,
      stripeWebhookSecret: env.STRIPE_WEBHOOK_SECRET,
      createCustomerOnSignUp: true,
    }),

    magicLink({
      async sendMagicLink({ email, url }) {
        await sendMagicLink(email, url);
      },
    }),

    organization({
      roles: {},
      async sendInvitationEmail(data) {
        const inviteLink = `${env.BETTER_AUTH_URL}/api/accept-invitation/${data.id}`;
        await sendOrgInvitation(
          data.email,
          data.organization.name,
          data.inviter.user.name,
          data.inviter.user.email,
          inviteLink
        );
      },
    }),

    lastLoginMethod(),
    haveIBeenPwned(),
    nextCookies(),
  ],
});

