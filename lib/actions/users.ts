import { AuthUser } from '@/types/auth'
import { auth } from '@/lib/auth'

export async function getCurrentUser(): Promise<AuthUser | null> {
    const session = await auth()
    if (session) return session?.user as AuthUser
    return null
}

/** Use only when sure the session exists */
export async function getSafeCurrentUser(): Promise<AuthUser> {
    const session = await auth()
    return session?.user as AuthUser
}
