import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@heroicons/react', 'recharts', 'mapbox-gl', 'react-color', '@radix-ui/react-icons'],
  },
  transpilePackages: ['@trylinky/ui', '@trylinky/common'],
  serverExternalPackages: [
    '@prisma/client',
    '.prisma/client',
    '@prisma/adapter-d1',
    '@trylinky/prisma'
  ],
  webpack: (config, { isServer }) => {
    const path = require('path');
    config.resolve.alias['@prisma/client/runtime/client'] = path.resolve(__dirname, '../../packages/prisma/node_modules/@prisma/client/runtime/client.js');
    if (isServer) {
      const mockPath = path.resolve(__dirname, 'server-mock.js');
      config.resolve.alias['mapbox-gl$'] = mockPath;
      config.resolve.alias['react-grid-layout$'] = mockPath;
      config.resolve.alias['react-color$'] = mockPath;
      config.resolve.alias['recharts$'] = mockPath;
      config.resolve.alias['framer-motion$'] = mockPath;
    }
    return config;
  },
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

export default nextConfig;
