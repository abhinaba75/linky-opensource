import { validateEmail } from '@/lib/email';
import { createResendClient } from '@/lib/resend';
import { captureException } from '@sentry/node';
import {
  MagicLinkEmail,
  OrganizationInviteEmail,
  WelcomeEmail,
} from '@app/notifications';
import React from 'react';

export async function sendEmail({
  email,
  subject,
  from = 'Links <noreply@itsabhinaba.in>',
  react,
  text,
  replyTo = 'noreply@itsabhinaba.in',
  scheduledAt,
}: {
  email: string;
  subject: string;
  from?: string;
  replyTo?: string;
  react?: React.ReactNode;
  text?: string;
  scheduledAt?: Date;
}) {
  const resend = createResendClient();

  if (!resend) {
    console.warn('Resend is not enabled, skipping email send');
    return;
  }

  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    console.warn('Invalid email, skipping email send');
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to: [email],
      replyTo,
      subject,
      react,
      text,
      scheduledAt: scheduledAt ? scheduledAt.toISOString() : undefined,
    });

    if (error) {
      console.error('Error sending email', error);
      captureException(error);
    }
  } catch (error) {
    console.error('Error sending email', error);
    captureException(error);
  }

  return;
}



export async function sendOrganizationInvitationEmail({
  email,
  inviteLink,
}: {
  email: string;
  invitedByUsername: string;
  invitedByEmail: string;
  teamName: string;
  inviteLink: string;
}) {
  return await sendEmail({
    email,
    subject: "You've been invited to join a team",
    react: <OrganizationInviteEmail inviteUrl={inviteLink} />,
  });
}

export async function sendWelcomeEmail(email: string) {
  return await sendEmail({
    from: 'Links <noreply@itsabhinaba.in>',
    replyTo: 'noreply@itsabhinaba.in',
    email,
    subject: 'Welcome!',
    react: <WelcomeEmail />,
  });
}

export async function sendWelcomeFollowUpEmail(email: string) {
  const twentyThreeHoursFromNow = new Date(Date.now() + 23 * 60 * 60 * 1000);

  return await sendEmail({
    from: 'Links <noreply@itsabhinaba.in>',
    replyTo: 'noreply@itsabhinaba.in',
    email,
    subject: 'Welcome!',
    scheduledAt: twentyThreeHoursFromNow,
    text: 'Welcome to your links page! If you have any questions, feel free to reply to this email.',
  });
}

export async function sendMagicLinkEmail({
  email,
  url,
}: {
  email: string;
  url: string;
}) {
  return await sendEmail({
    email,
    subject: 'Verify your login',
    react: <MagicLinkEmail url={url} />,
  });
}


