import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { stripe } from "@better-auth/stripe"
import { stripeClient } from "@/lib/stripe"
import { magicLink, lastLoginMethod, haveIBeenPwned, organization } from "better-auth/plugins";
import { sendEmailVerificaiton, sendMagicLink, sendOrgInvitation, sendResetPassowrdMail } from "./resend";
import { nextCookies } from "better-auth/next-js";
import { env } from "./env";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ user, url }) {
      sendResetPassowrdMail(user.email, user.email, user.name, url)
    },
    requireEmailVerification: true
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      sendEmailVerificaiton(user.email, user.name, url)
    },
    sendOnSignUp: true
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    stripe({
      stripeClient,
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
    }),
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        sendMagicLink(email, url)
      }
    }),
    organization({
      async sendInvitationEmail(data) {
        const inviteLink = `${env.BETTER_AUTH_URL}/api/accept-invitaion/${data.id}`
        sendOrgInvitation(data.email, data.organization.name, data.inviter.user.name, data.inviter.user.email, inviteLink)
      },
      roles: {}
    }),
    lastLoginMethod(),
    haveIBeenPwned(),
    nextCookies()
  ]
});
