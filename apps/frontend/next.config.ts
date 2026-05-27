import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@heroicons/react', 'recharts', 'mapbox-gl', 'react-color', '@radix-ui/react-icons'],
  },
  transpilePackages: ['@app/ui', '@app/common'],
  serverExternalPackages: [
    '@prisma/client',
    '.prisma/client',
    '@prisma/adapter-d1',
    '@app/prisma'
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
        hostname: 'cdn.dev.itsabhinaba.in',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.itsabhinaba.in',
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
