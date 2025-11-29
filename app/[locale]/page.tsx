import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

export default async function HomePage() {
  const t = await getTranslations('home')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Full Screen Navy */}
        <section className="relative bg-[#002b57] text-white min-h-screen flex items-center py-20">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="max-w-4xl space-y-10 md:space-y-12">
              {/* Company Branding */}
              <Reveal>
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0">
                    <Image 
                      src="/assets/logo/Mark_2-removebg-preview.png" 
                      alt="Diligion" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-white">
                      Diligion
                    </h1>
                    <p className="text-sm md:text-base text-[#cb5b2b] uppercase tracking-wider font-semibold">
                      {t('hero.eyebrow')}
                    </p>
                  </div>
                </div>
              </Reveal>
              
              {/* Main Headline */}
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  {t('hero.title')}
                </h2>
              </Reveal>
              
              {/* Subtitle */}
              <Reveal delay={200}>
                <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl">
                  {t('hero.subtitle')}
                </p>
              </Reveal>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                <Reveal delay={300}>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center bg-[#cb5b2b] hover:bg-[#cb5b2b]/90 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                  >
                    {t('hero.primaryCta')}
                  </Link>
                </Reveal>
                <Reveal delay={350}>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all backdrop-blur-sm border border-white/30 hover:border-white/50"
                  >
                    {t('hero.secondaryCta')}
                  </Link>
                </Reveal>
              </div>
              
              {/* Trust Badge */}
              <Reveal delay={400}>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <svg className="w-5 h-5 text-[#cb5b2b]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-medium">
                    {t('hero.trustBadge')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/60 uppercase tracking-wider">Scroll</span>
              <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Gradient Transition: Navy → Beige */}
        <div className="gradient-navy-to-beige"></div>

        {/* Stats Section - Beige */}
        <section className="py-16 md:py-20 bg-[#f4e0cf]">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
              <Reveal>
                <li className="text-center space-y-3">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002b57]">
                    140+
                  </div>
                  <div className="text-sm md:text-base text-[#7b7b7b] font-medium leading-relaxed max-w-xs mx-auto">
                    {t('stats.projects.label')}
                  </div>
                </li>
              </Reveal>
              <Reveal delay={100}>
                <li className="text-center space-y-3">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002b57]">
                    96%
                  </div>
                  <div className="text-sm md:text-base text-[#7b7b7b] font-medium leading-relaxed max-w-xs mx-auto">
                    {t('stats.satisfaction.label')}
                  </div>
                </li>
              </Reveal>
              <Reveal delay={200}>
                <li className="text-center space-y-3">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002b57]">
                    18 yrs
                  </div>
                  <div className="text-sm md:text-base text-[#7b7b7b] font-medium leading-relaxed max-w-xs mx-auto">
                    {t('stats.experience.label')}
                  </div>
                </li>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* Gradient Transition: Beige → Navy */}
        <div className="gradient-beige-to-navy"></div>

        {/* Values Section - Navy */}
        <section className="py-20 md:py-28 bg-[#002b57] text-white">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14 md:mb-16">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {t('values.title')}
                </h2>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              <Reveal>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#cb5b2b]">
                    {t('values.insight.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">
                    {t('values.insight.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#cb5b2b]">
                    {t('values.precision.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">
                    {t('values.precision.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-[#cb5b2b]">
                    {t('values.partnership.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">
                    {t('values.partnership.description')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gradient Transition: Navy → Beige */}
        <div className="gradient-navy-to-beige"></div>

        {/* Services Section - Beige */}
        <section className="py-20 md:py-28 bg-[#f4e0cf]">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14 md:mb-16 space-y-4">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002b57]">
                  {t('services.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-sm md:text-base lg:text-lg text-[#7b7b7b] max-w-3xl mx-auto leading-relaxed">
                  {t('services.description')}
                </p>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Reveal>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-[#002b57]/10 hover:border-[#002b57]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#002b57]/5 rounded-bl-3xl"></div>
                  <div className="w-12 h-12 rounded-xl bg-[#002b57]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002b57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#002b57] mb-4">
                    {t('services.management.title')}
                  </h3>
                  <p className="text-sm md:text-base text-[#7b7b7b] leading-relaxed flex-grow">
                    {t('services.management.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-[#002b57]/10 hover:border-[#002b57]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#002b57]/5 rounded-bl-3xl"></div>
                  <div className="w-12 h-12 rounded-xl bg-[#002b57]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002b57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#002b57] mb-4">
                    {t('services.financial.title')}
                  </h3>
                  <p className="text-sm md:text-base text-[#7b7b7b] leading-relaxed flex-grow">
                    {t('services.financial.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-[#002b57]/10 hover:border-[#002b57]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#002b57]/5 rounded-bl-3xl"></div>
                  <div className="w-12 h-12 rounded-xl bg-[#002b57]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#002b57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#002b57] mb-4">
                    {t('services.contract.title')}
                  </h3>
                  <p className="text-sm md:text-base text-[#7b7b7b] leading-relaxed flex-grow">
                    {t('services.contract.description')}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Reveal delay={300}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-[#cb5b2b] hover:bg-[#cb5b2b]/90 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl"
                >
                  {t('services.cta')}
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gradient Transition: Beige → Navy */}
        <div className="gradient-beige-to-navy"></div>

        {/* CTA Section - Navy */}
        <section className="py-20 md:py-28 bg-[#002b57] text-white">
          <div className="container max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="space-y-6 md:space-y-8">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  {t('cta.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  {t('cta.subtitle')}
                </p>
              </Reveal>
              <div className="pt-4">
                <Reveal delay={200}>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center bg-[#cb5b2b] hover:bg-[#cb5b2b]/90 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    {t('cta.button')}
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
