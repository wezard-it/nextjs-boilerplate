import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const messages = await getMessages()
    return (
        <html lang='en'>
            <NextIntlClientProvider messages={messages}>
                <body className={inter.className}>{children}</body>
            </NextIntlClientProvider>
        </html>
    )
}
