'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n/routing'

export default function Footer() {
  const tNav = useTranslations('nav')
  const tCommon = useTranslations('common')
  const tFooter = useTranslations('footer')

  return (
    <footer className="bg-primary text-white">
      <div className="container py-[var(--s-12)] md:py-[var(--s-16)]">
        <div className="grid grid-gap md:grid-cols-4">
          <div className="space-y-5">
            <div className="relative h-12 w-48">
              <Image
                src="/assets/logo/full-white.svg"
                alt="Diligion logo"
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {tFooter('description')}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white/70">
              {tFooter('linksTitle')}
            </h3>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link
                  href="/"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('services')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white/70">
              {tFooter('resourcesTitle')}
            </h3>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link
                  href="/faq"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('faq')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('contact')}
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="transition-opacity duration-200 hover:opacity-100 opacity-80"
                >
                  {tNav('schedule')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-sm text-white/80">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white/70">
              {tFooter('connectTitle')}
            </h3>
            <div className="space-y-2">
              <p>{tCommon('contactEmail')}</p>
              <p>{tCommon('contactPhone')}</p>
              <p>{tCommon('officeHours')}</p>
              <p>{tCommon('muscat')}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {tCommon('brand')}.{' '}
            {tFooter('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
