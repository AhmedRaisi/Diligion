'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/lib/i18n/routing'
import Image from 'next/image'

function useScrolled(th = 8) {
  const [s, setS] = useState(false)
  useEffect(() => {
    const onScroll = () => setS(window.scrollY > th)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [th])
  return s
}

export default function Header() {
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrolled = useScrolled()

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    router.replace(pathname, { locale: newLocale })
  }

  const navItems = [
    { href: '/about', label: tNav('about') },
    { href: '/services', label: tNav('services') },
    { href: '/faq', label: tNav('faq') },
    { href: '/contact', label: tNav('contact') },
    { href: '/schedule', label: tNav('schedule') },
  ]

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300 overflow-visible"
    >
      <nav className="container h-16 flex items-center justify-between overflow-visible" dir="ltr">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 mr-8">
          <div className="relative h-10 w-[200px]">
            <Image 
              src="/assets/logo/Short 1.png" 
              alt="Diligion" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="text-primary hover:text-accent transition-colors duration-200"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 border border-neutral bg-neutral-light/50 transition-colors duration-200">
            <button
              onClick={toggleLocale}
              type="button"
              className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                locale === 'en'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-primary hover:bg-neutral'
              }`}
            >
              EN
            </button>
            <button
              onClick={toggleLocale}
              type="button"
              className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                locale === 'ar'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-primary hover:bg-neutral'
              }`}
            >
              AR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-lg border border-neutral text-primary hover:bg-neutral-light transition-colors duration-200"
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral bg-white transition-all duration-300" dir="ltr">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-primary hover:text-accent transition-colors duration-200 py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 rounded-full px-2 py-1.5 mt-2 w-fit border border-neutral bg-neutral-light/50">
              <button
                onClick={() => {
                  toggleLocale()
                  setMobileMenuOpen(false)
                }}
                type="button"
                className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-primary text-white'
                    : 'text-primary hover:bg-neutral'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  toggleLocale()
                  setMobileMenuOpen(false)
                }}
                type="button"
                className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                  locale === 'ar'
                    ? 'bg-primary text-white'
                    : 'text-primary hover:bg-neutral'
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
