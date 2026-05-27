import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';


export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /i (internal pages)
     * 4. /_static (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     * 6. _vercel
     * 7. assets
     */
    '/((?!api/|_next/|i/|_static/|_vercel|edit|invite|new|new-api|assets|[\\w-]+\\.\\w+).*)',
  ],
};

const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname and normalize for dev environment - using a regex for better performance
  const hostname = req.headers
    .get('host')!
    .replace(new RegExp(`.dev.glow:3000$`), `.${rootDomain}`);

  // Create base URL once
  const baseUrl = new URL('', req.url);

  const searchParams = req.nextUrl.searchParams.toString();
  const path = url.pathname;

  // Single-tenant: rewrite all traffic (including root) into [domain]/[slug] handler
  if (path === '/') {
    baseUrl.pathname = `/${hostname}/home`;
  } else {
    baseUrl.pathname = `/${hostname}${path}`;
  }

  baseUrl.search = searchParams;
  return NextResponse.rewrite(baseUrl);
}
