/**
 * This module exports a default function that returns a promise resolving to an i18n configuration object.
 * The configuration object includes the locale and the corresponding translation messages.
 *
 */

import { getRequestConfig } from 'next-intl/server'

import { getEnvironmentLocale } from '@/lib/locale'

export default getRequestConfig(async () => {
    const locale = await getEnvironmentLocale()

    return {
        locale,
        messages: (await import(`../../public/locales/${locale}/translation.json`)).default,
    }
})
