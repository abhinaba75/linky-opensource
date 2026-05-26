import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  transpilePackages: ['@trylinky/ui', '@trylinky/common'],
  serverExternalPackages: [
    '@prisma/client',
    '.prisma/client',
    '@prisma/adapter-d1',
    '@prisma/adapter-better-sqlite3',
    'better-sqlite3'
  ],
  rewrites: async () => {
    const marketingUrl = process.env.NEXT_PUBLIC_MARKETING_URL || 'http://localhost:3000';
    return [
      {
        source: '/',
        destination: `${marketingUrl}/i`,
      },
      {
        source: '/sitemap.xml',
        destination: `${marketingUrl}/i/sitemap.xml`,
      },
      {
        source: '/i/:path*',
        destination: `${marketingUrl}/i/:path*`,
      },
    ];
  },
  redirects: async () => [
    {
      source: '/i/learn/what-is-glow',
      destination: '/i/learn/what-is-linky',
      permanent: true,
    },
    {
      source: '/i/learn/is-glow-free',
      destination: '/i/learn/is-linky-free',
      permanent: true,
    },
  ],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dev.glow.as',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.glow.as',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dev.lin.ky',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lin.ky',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.itsabhinaba.in',
        port: '',
      },
    ],
  },
};

export default process.env.NEXT_PUBLIC_SENTRY_DSN
  ? withSentryConfig(nextConfig, {
      org: 'hyperdusk',
      project: 'glow',
      silent: true,
      sourcemaps: {
        disable: true,
        deleteSourcemapsAfterUpload: true,
      },
    })
  : nextConfig;
