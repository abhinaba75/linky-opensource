export const trustedOrigins =
  process.env.NODE_ENV === 'production'
    ? [
        process.env.APP_FRONTEND_URL,
        process.env.API_BASE_URL,
        'https://links.itsabhinaba.in', // explicitly fallback to requested domain
      ].filter((origin): origin is string => !!origin)
    : [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3004',
      ];
