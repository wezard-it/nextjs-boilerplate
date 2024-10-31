/**
 * Retrieves the current authenticated user.
 *
 * @returns {Promise<AuthUser | null>} A promise that resolves to the authenticated user if a session exists, otherwise null.
 * Use this when you are not sure if the session exists
 */

/**
 * Retrieves the current authenticated user, assuming the session exists. Use this when you are sure the session exists.
 *
 * @returns {Promise<AuthUser>} A promise that resolves to the authenticated user.
 */

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
