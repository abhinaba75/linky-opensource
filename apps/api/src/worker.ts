let fastifyInstance: any = null;

async function getFastify() {
  if (fastifyInstance) return fastifyInstance;
  const mod = await import('./index');
  fastifyInstance = mod.fastify;
  return fastifyInstance;
}

export default {
  async fetch(request: Request, env: any, ctx: any) {
    // Inject wrangler env into global so that Fastify/Prisma can access bindings
    (globalThis as any).env = env;
    
    // Copy string environment variables to process.env
    for (const [key, value] of Object.entries(env)) {
      if (typeof value === 'string') {
        process.env[key] = value;
      }
    }

    const url = new URL(request.url);
    const method = request.method;
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    const body = method !== 'GET' && method !== 'HEAD' ? await request.text() : undefined;

    const app = await getFastify();
    const res = await app.inject({
      method: method as any,
      url: url.pathname + url.search,
      headers,
      payload: body,
    });

    const responseHeaders = new Headers();
    Object.entries(res.headers).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => responseHeaders.append(key, v.toString()));
        } else {
          responseHeaders.append(key, value.toString());
        }
      }
    });

    return new Response(res.rawPayload, {
      status: res.statusCode,
      headers: responseHeaders,
    });
  }
};
