export const supportedLocales = [
    {
        key: 'it',
        label: 'Italiano',
    },
    {
        key: 'en',
        label: 'English',
    },
]

export const localeConfig = {
    defaultLang: 'it',
    availableLangs: supportedLocales.map((locale) => locale.key),
    fallbackLang: 'en',
}
