import { NextResponse } from 'next/server';

export function GET(request: Request) {
  // Cloudflare Workers provide geolocation via cf object
  const cf = (request as any).cf;
  const country = cf?.country ?? null;

  return NextResponse.json({
    location: country,
  });
}
