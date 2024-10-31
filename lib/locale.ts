/**
 * Retrieves the environment locale based on the "accept-language" header and cookies.
 *
 * @returns {Promise<string>} A promise that resolves to the locale string.
 *
 * @constant fallbackLocale - The default locale to use if no other locale is available.
 * @constant acceptLanguage - The value of the "accept-language" header, which contains the browser's preferred language.
 * @constant browserLanguage - The preferred language extracted from the "accept-language" header to match XX format.
 *
 * The function first checks the "accept-language" header to determine the browser's preferred language.
 * If the preferred language is not available in the `localeConfig.availableLangs`, it falls back to the default language.
 * It then checks for a "locale" cookie and uses its value if available.
 * If neither the "accept-language" header nor the "locale" cookie provide a valid locale, the default language is used.
 */

/**
 * @function setLocaleCookie
 * Sets the "locale" cookie to the specified locale.
 *
 * @param {string} locale - The locale to set in the cookie. Must be a supported locale, and the format must be "XX" (e.g., "en", "it").
 * @throws {Error} Throws an error if the specified locale is not supported.
 *
 */

'use server'

import { cookies, headers } from 'next/headers'

import { localeConfig } from '@/config/locale'

export async function getEnvironmentLocale(): Promise<string> {
    const fallbackLocale = localeConfig.defaultLang
    const acceptLanguage = headers().get('accept-language')

    let browserLanguage = acceptLanguage?.split(',')[0].split('-')[0]

    if (!localeConfig.availableLangs.includes(browserLanguage ?? '')) {
        browserLanguage = fallbackLocale
    }

    const locale = cookies().get('locale')?.value || browserLanguage

    return locale || fallbackLocale
}

export const setLocaleCookie = async (locale: string) => {
    if (!localeConfig.availableLangs.includes(locale)) {
        throw new Error(`Unsupported locale: ${locale}`)
    }

    cookies().set('locale', locale)
}
