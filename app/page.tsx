import { permanentRedirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n/config'

export default function IndexPage() {
  permanentRedirect(`/${defaultLocale}`)
}

