import './globals.css';
import './react-grid-layout.scss';
import { getSession } from '@/app/lib/auth';
import { PostHogIdentify, PostHogProvider } from '@/app/posthog-provider';
import { Toaster } from '@app/ui';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { headers } from 'next/headers';
import Script from 'next/script';

const seasonFont = localFont({
  src: './ssn.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Links',
  description:
    'Personal links page',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://links.itsabhinaba.in'),
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://links.itsabhinaba.in'}/assets/og.png`,
      },
    ],
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://links.itsabhinaba.in',
    title: 'Links',
    description:
      'Personal links page',
    siteName: 'Links',
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    images: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://links.itsabhinaba.in'}/assets/og.png`,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession({
    fetchOptions: { headers: await headers() },
  });

  const sessionData = session.data;

  const { user } = sessionData ?? {};

  return (
    <html lang="en" className={seasonFont.className}>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="uOVisnglxzaKbI/UovGA7w"
            defer={true}
          />
        )}
      </head>
      <PostHogProvider>
        <body className="bg-stone-50 min-h-screen relative">
          {children}
          <Toaster />
        </body>
        {user && (
          <PostHogIdentify
            userId={user.id}
            organizationId={sessionData?.session.activeOrganizationId ?? ''}
          />
        )}
      </PostHogProvider>
    </html>
  );
}
