/**
 * An array of supported locales for the application.
 * Each locale object contains a `key` representing the language code
 * and a `label` representing the language name.
 */

type Locale = {
    key: string
    label: string
}

type LocaleConfig = {
    defaultLang: string
    availableLangs: string[]
}

export const supportedLocales: Locale[] = [
    {
        key: 'it',
        label: 'Italiano',
    },
    {
        key: 'en',
        label: 'English',
    },
]

export const localeConfig: LocaleConfig = {
    defaultLang: 'it',
    availableLangs: supportedLocales.map((locale) => locale.key),
}
