'use server'

import { cookies, headers } from 'next/headers'

import { localeConfig } from '@/config/locale'

export async function getEnvironmentLocale(): Promise<string> {
    const localeDefault = localeConfig.defaultLang
    const acceptLanguage = headers().get('accept-language')
    let browserLanguage = acceptLanguage?.split(',')[0].split('-')[0]

    if (!localeConfig.availableLangs.includes(browserLanguage ?? '')) {
        browserLanguage = localeDefault
    }

    const locale = cookies().get('locale')?.value || browserLanguage

    return locale || localeDefault
}

export const setLocaleCookie = async (locale: string) => {
    cookies().set('locale', locale)
}
