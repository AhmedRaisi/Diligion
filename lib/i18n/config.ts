import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string | undefined
  
  // For static export, requestLocale uses headers() which isn't available
  // We need to handle this gracefully. The locale will be set via
  // unstable_setRequestLocale in the layout before this runs.
  try {
    locale = await requestLocale
  } catch {
    // During static generation, fall back to default
    // This will be overridden by unstable_setRequestLocale in layout
    locale = defaultLocale
  }

  // Ensure locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale
  }

  return {
    locale: locale as Locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})

