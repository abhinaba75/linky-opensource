import { PrismaClient } from '@trylinky/prisma';

const prismaClientSingleton = () => {
  // Cloudflare D1 environment check
  const env = (globalThis as any).env || process.env;
  if (env && env.DB) {
    const { PrismaD1 } = require('@prisma/adapter-d1');
    const adapter = new PrismaD1(env.DB);
    return new PrismaClient({ adapter });
  }

  // Local development SQLite fallback (dynamic require to prevent bundler errors on Workers)
  const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
  const Database = require('better-sqlite3');
  const db = new Database('./dev.db');
  const adapter = new PrismaBetterSqlite3(db);

  return new PrismaClient({ adapter }).$extends({
    query: {
      async $allOperations({ model, operation, args, query }) {
        const before = Date.now();
        const result = await query(args);
        const after = Date.now();

        console.log(`Query ${model}.${operation} took ${after - before}ms`);

        return result;
      },
    },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const getPrisma = (): PrismaClient => {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prismaClientSingleton();
  }
  return globalForPrisma.prisma as any;
};

const prisma = new Proxy({} as any, {
  get(target, prop) {
    const client = getPrisma();
    const value = Reflect.get(client, prop);
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  }
}) as unknown as PrismaClient;

export default prisma;
