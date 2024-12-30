import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res })
    const { data: { session } } = await supabase.auth.getSession()

    // Routes protégées du dashboard
    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // Si l'utilisateur est connecté mais n'a pas vérifié son email
    if (session?.user && !session.user.email_confirmed_at && 
        !request.nextUrl.pathname.startsWith('/auth/verify-email') &&
        !request.nextUrl.pathname.startsWith('/auth/callback')) {
      return NextResponse.redirect(new URL('/auth/verify-email', request.url))
    }

    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'auth
    if (session && (
      request.nextUrl.pathname.startsWith('/auth/login') ||
      request.nextUrl.pathname.startsWith('/auth/register')
    )) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

// Configuration pour le middleware
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
    '/sites/:path*'
  ]
}