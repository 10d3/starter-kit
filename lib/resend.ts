import { Resend } from "resend";
import MagicLinkEmail from "@/components/email-template/magic-link";
import OrganizationInvitationEmail from "@/components/email-template/organization-invitation";
import ForgotPasswordEmail from "@/components/email-template/reset-password";
import VerifyEmail from "@/components/email-template/verify-email";
import { env } from "./env";

export const resend = new Resend(env.RESEND_API_KEY);

const FROM_EMAIL = "Acme <onboarding@resend.dev>";

interface EmailResult {
  success: boolean;
  data?: any;
  error?: any;
}

async function sendEmail(
  to: string,
  subject: string,
  react: React.ReactElement
): Promise<EmailResult> {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject,
      react,
    });

    if (error) {
      console.error("Email send error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email send exception:", error);
    return { success: false, error };
  }
}

export async function sendMagicLink(email: string, url: string): Promise<EmailResult> {
  return sendEmail(
    email,
    "Your Magic Link",
    MagicLinkEmail({ email, url })
  );
}

export async function sendOrgInvitation(
  email: string,
  teamName: string,
  invitedByUsername: string,
  invitedByEmail: string,
  inviteLink: string
): Promise<EmailResult> {
  return sendEmail(
    email,
    `You've been invited to join ${teamName}`,
    OrganizationInvitationEmail({
      email,
      teamName,
      inviteLink,
      invitedByEmail,
      invitedByUsername,
    })
  );
}

export async function sendResetPasswordMail(
  email: string,
  username: string,
  resetUrl: string
): Promise<EmailResult> {
  return sendEmail(
    email,
    "Reset Your Password",
    ForgotPasswordEmail({ userEmail: email, username, resetUrl })
  );
}

export async function sendEmailVerification(
  email: string,
  username: string,
  verifyUrl: string
): Promise<EmailResult> {
  return sendEmail(
    email,
    "Verify Your Email Address",
    VerifyEmail({ username, verifyUrl })
  );
}
