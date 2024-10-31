/**
 * Initializes and configures NextAuth for authentication.
 * @function authorize - Authorizes the user with the provided credentials. Store a user object in the session (or null) and return it.
 * @function jwt - Adds the user id to the JWT token. It is called every refresh, but user is not undefined only on login.
 * @function session - Adds the user object to the session. It is called on every request, but user is not undefined only on login.
 */

import NextAuth, { CredentialsSignin } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { env } from '@/env.mjs'
import { AuthUser, Token } from '@/types/auth'

class CustomError extends CredentialsSignin {
    status = 400
}

export const { auth, signOut, handlers, signIn } = NextAuth({
    secret: env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        error: '/',
        signIn: '/',
        signOut: '/',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(_credentials) {
                try {
                    const user = {
                        id: '2',
                        email: 'wezard@test.it',
                        access_token: {
                            token: 'access_token',
                            expires_at: '2022-12-12',
                        },
                        refresh_token: {
                            token: 'refresh_token',
                            expires_at: '2022-12-12',
                        },
                    }

                    return user
                } catch (e) {
                    throw new CustomError()
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.access_token = user.access_token
                token.refresh_token = user.refresh_token
            }

            if (Date.now() > new Date((token.access_token as Token).expires_at).getTime()) {
                // REFRESH
            }

            return token
        },
        session({ session, token }) {
            const user = token as AuthUser & {
                emailVerified: Date
                sub: string
                iat: number
                exp: number
                jti: string
            }
            session.user = user
            return session
        },
    },
})

export const getSession = async () => {
    return await auth()
}
