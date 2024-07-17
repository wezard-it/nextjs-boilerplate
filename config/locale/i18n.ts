import { getRequestConfig } from 'next-intl/server'

import { getEnvironmentLocale } from '@/lib/locale'

export default getRequestConfig(async () => {
    const locale = await getEnvironmentLocale()

    return {
        locale,
        messages: (await import(`../../public/locales/${locale}/translation.json`)).default,
    }
})
