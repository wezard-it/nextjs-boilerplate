import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import * as localeDate from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

// this is for DATE-FNS LOCALIZATION
type Locale = keyof typeof localeDate

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function isHoursValidPattern(hours: string): boolean {
    return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hours)
}

export const formatWithLocale = (date: Date | string | number, pattern: string, locale: Locale): string => {
    return format(date, pattern, {
        locale: localeDate[locale],
    })
}

export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('it-IT', { minimumFractionDigits: 2 }).format(value)
}
