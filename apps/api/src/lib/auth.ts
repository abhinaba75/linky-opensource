import { trustedOrigins } from '@/lib/origins';
import prisma from '@/lib/prisma';
import { createContact } from '@/lib/resend';
import { createUserInitialFlags, handleUserCreated } from '@/lib/user-created';
import {
  sendMagicLinkEmail,
  sendOrganizationInvitationEmail,
  sendWelcomeEmail,
  sendWelcomeFollowUpEmail,
} from '@/modules/notifications/service';
import { sendNewUserSlackMessage } from '@/modules/slack/service';
import { PrismaClient } from '@app/prisma';
import { betterAuth, BetterAuthPlugin } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { admin, magicLink, organization } from 'better-auth/plugins';

export const auth = betterAuth({
  baseUrl: process.env.API_BASE_URL,
  rateLimit: {
    window: 10, // time window in seconds
    max: 100, // max requests in the window
  },
  trustedOrigins,
  database: prismaAdapter(prisma as PrismaClient, {
    provider: 'sqlite',
  }),
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
      // redirectURI: `${process.env.API_BASE_URL}/api/auth/callback/google`,
    },
    twitter: {
      clientId: process.env.AUTH_TWITTER_CLIENT_ID as string,
      clientSecret: process.env.AUTH_TWITTER_CLIENT_SECRET as string,
      // redirectURI: `${process.env.API_BASE_URL}/api/auth/callback/twitter`,
    },
    tiktok: {
      clientKey: process.env.AUTH_TIKTOK_CLIENT_KEY as string,
      clientSecret: process.env.AUTH_TIKTOK_CLIENT_SECRET as string,
      // redirectURI: `${process.env.API_BASE_URL}/api/auth/callback/tiktok`,
    },
  },
  advanced: {
    database: {
      generateId: false, // Let the database generate UUIDs
    },
    crossSubDomainCookies:
      process.env.NODE_ENV === 'production'
        ? {
            enabled: true,
            domain: (() => {
              if (process.env.COOKIE_DOMAIN) {
                return process.env.COOKIE_DOMAIN;
              }
              if (process.env.APP_FRONTEND_URL) {
                try {
                  const url = new URL(process.env.APP_FRONTEND_URL);
                  const parts = url.hostname.split('.');
                  if (parts.length >= 2) {
                    return `.${parts.slice(-2).join('.')}`;
                  }
                } catch (e) {
                  // ignore
                }
              }
              return '.itsabhinaba.in';
            })(),
          }
        : {
            enabled: false,
          },
    defaultCookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: 'none', // Allows CORS-based cookie sharing across subdomains
      partitioned: true, // New browser standards will mandate this for foreign cookies
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  emailAndPassword: {
    enabled: false,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const userCount = await prisma.user.count();
          if (userCount > 0) {
            const allowedEmailsStr = process.env.ALLOWED_EMAILS;
            if (allowedEmailsStr) {
              const allowedEmails = allowedEmailsStr.split(',').map((e) => e.trim().toLowerCase());
              if (!user.email || !allowedEmails.includes(user.email.toLowerCase())) {
                throw new Error('Registration is restricted to authorized users.');
              }
            } else {
              throw new Error('Registration is disabled.');
            }
          }
          return { data: user };
        },
        after: async (user) => {
          await handleUserCreated({ userId: user.id });
          await createUserInitialFlags(user.id);
          if (user.email) {
            await createContact(user.email);
            await sendWelcomeEmail(user.email);
            await sendWelcomeFollowUpEmail(user.email);
          }
          await sendNewUserSlackMessage(user);
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          const organization = await getActiveOrganization(session.userId);

          return {
            data: {
              ...session,
              activeOrganizationId: organization?.id || null,
            },
          };
        },
      },
    },
  },
  plugins: [
    admin() as unknown as BetterAuthPlugin,
    organization({
      allowUserToCreateOrganization: false,
      sendInvitationEmail: async (data) => {
        const inviteLink = `${process.env.APP_FRONTEND_URL}/invite/${data.id}`;

        sendOrganizationInvitationEmail({
          email: data.email,
          invitedByUsername: data.inviter.user.name,
          invitedByEmail: data.inviter.user.email,
          teamName: data.organization.name,
          inviteLink,
        });
      },
    }),
    magicLink({
      sendMagicLink: async ({ email, token }) => {
        // There's a bug in better-auth where the invite link is not using
        // the API_BASE_URL, so we need to construct it manually

        const callbackUrl = new URL(
          '/edit',
          process.env.APP_FRONTEND_URL as string
        );

        const magicLinkUrl = new URL(
          `/api/auth/magic-link/verify?token=${token}&callbackURL=${callbackUrl.toString()}`,
          process.env.API_BASE_URL as string
        );

        await sendMagicLinkEmail({ email, url: magicLinkUrl.toString() });
      },
    }),
  ],
});

const getActiveOrganization = async (userId: string) => {
  const organization = await prisma?.organization.findFirst({
    where: {
      members: { some: { userId } },
    },
  });

  return organization;
};
