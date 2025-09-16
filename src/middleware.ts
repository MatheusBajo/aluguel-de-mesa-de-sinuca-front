// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Add security headers
    const response = NextResponse.next();

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Cache control for static assets
    if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }

    return response;
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};