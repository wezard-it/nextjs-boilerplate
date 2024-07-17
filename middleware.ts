import { NextResponse } from 'next/server'

import { authRoutes, Routes } from '@/config/routes'
import { auth } from '@/lib/auth'

export default auth(async (req) => {
    const url = req.nextUrl.origin

    const route = req.nextUrl.pathname
    const isLoggedIn = !!req.auth

    const userIsInAuthRoutes = authRoutes.includes(route) || route.includes('auth')

    if (userIsInAuthRoutes && isLoggedIn) {
        return NextResponse.redirect(new URL(url + Routes.home), 302)
    }
    // how to handle private routes
    // if (!userIsInAuthRoutes && !isLoggedIn) {
    //     return NextResponse.redirect(new URL(url + Routes.login), 302)
    // }
})

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images|icons|manifest).*)',
        '/public/((?!images|icons).*)',
        '/api/og/routes.tsx',
    ],
}
