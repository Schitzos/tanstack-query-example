import { NextResponse, } from 'next/server';
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('usertoken')

  if (!cookie && !request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  if (cookie && request.nextUrl.pathname==='/auth/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}

export const config = {
  matcher: [
    '/','/((?!api|_next|static|public|favicon.ico).*)'
  ],
};