'use client'

import { useEffect } from 'react'

interface Props {
  locale: string
}

export default function LocaleAttributes({ locale }: Props) {
  useEffect(() => {
    const direction = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
    document.documentElement.dir = direction
  }, [locale])

  return null
}

