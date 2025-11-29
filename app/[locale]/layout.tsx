import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n/config'
import type { Metadata } from 'next'
import '../globals.css'

type Locale = (typeof locales)[number]

// Note: For static export, we need to handle locale via params, not headers

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const currentLocale = locale as Locale

  return {
    title: {
      default: 'Diligent Visionary Consultancy',
      template: '%s | Diligent Visionary Consultancy',
    },
    description:
      currentLocale === 'ar'
        ? 'خدمات استشارية متخصصة في الإدارة والمالية والعقود في سلطنة عمان'
        : 'Professional Management, Financial, and Contract Consultancy services in Oman',
    openGraph: {
      title: 'Diligent Visionary Consultancy',
      description:
        currentLocale === 'ar'
          ? 'خدمات استشارية متخصصة في الإدارة والمالية والعقود'
          : 'Professional Consultancy Services in Management, Finance, and Contracts',
      type: 'website',
      locale: currentLocale === 'ar' ? 'ar_OM' : 'en_US',
      alternateLocale: currentLocale === 'ar' ? 'en_US' : 'ar_OM',
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  unstable_setRequestLocale(locale)

  const messages = await getMessages()
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
