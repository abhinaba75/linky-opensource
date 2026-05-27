import { PrismaClient } from '@app/prisma';
import 'server-only';
import { cache } from 'react';

const getDb = cache(() => {
  let d1: any = null;

  // Check for Cloudflare D1 binding via OpenNext
  try {
    const { getCloudflareContext } = require('@opennextjs/cloudflare');
    const ctx = getCloudflareContext();
    if (ctx?.env?.DB) {
      d1 = ctx.env.DB;
    }
  } catch (e) {
    // Not in Cloudflare Workers environment
  }

  // Fallback: check globalThis.env (worker environment)
  if (!d1 && typeof globalThis !== 'undefined' && (globalThis as any).env?.DB) {
    d1 = (globalThis as any).env.DB;
  }

  if (d1) {
    const { PrismaD1 } = require('@prisma/adapter-d1');
    const adapter = new PrismaD1(d1);
    return new PrismaClient({ adapter });
  }

  throw new Error("D1 Database binding not found!");
});

export default new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getDb();
    const value = Reflect.get(client, prop);
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});
