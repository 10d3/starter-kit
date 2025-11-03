import MagicLinkEmail from '@/components/email-template/magic-link';
import OrganizationInvitationEmail from '@/components/email-template/organization-invitation';
import ForgotPasswordEmail from '@/components/email-template/reset-password';
import VerifyEmail from '@/components/email-template/verify-email';
import { Resend } from 'resend';
import { email } from 'zod';

export const resend = new Resend(process.env.RESEND_API_KEY);


export const sendMagicLink = async (email: string, url: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: MagicLinkEmail({ email, url }),
    });

    if (error) {
      return error
    }
    return data
  } catch (error) {
    console.log(error)
  }
}

export const sendOrgInvitation = async (email: string, teamName: string, invitedByUsername: string, invitedByEmail: string, inviteLink: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: "",
      react: OrganizationInvitationEmail({ email, teamName, inviteLink, invitedByEmail, invitedByUsername })
    })
    if (error) {
      return error
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

export const sendResetPassowrdMail = async (email: string, userEmail: string, username: string, resetUrl: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: "",
      react: ForgotPasswordEmail({ userEmail, username, resetUrl })
    })

    if (error) {
      return error
    }

    return data
  } catch (error) {
    console.error(error)
  }
}

export const sendEmailVerificaiton = async (email: string, username: string, verifyUrl: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: "",
      react: VerifyEmail({ username, verifyUrl })
    })

    if (error) {
      return error
    }

    return data
  } catch (error) {
    console.error(error)
  }
}




