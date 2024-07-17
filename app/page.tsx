import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
    const t = await getTranslations()
    return (
        <main className='flex min-h-screen flex-col items-center justify-between bg-yellow-100 p-24'>
            <h1 className='text-4xl font-bold text-black'>{t('welcome')}</h1>
            <p className='text-lg text-black'>{t('slogan')}</p>
            <Image src='/next.svg' alt='Next.js logo' width={500} height={500} />
        </main>
    )
}
