import { AuthUser, Token } from './auth'

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface AdapterUser {
        id: string
        email: string
        access_token: Token
        refresh_token: Token
    }

    interface User {
        id: string
        email: string
        access_token: Token
        refresh_token: Token
    }

    interface Session {
        user: AuthUser
    }
}
