import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'
import StatsSection from '@/components/StatsSection'

export default async function HomePage() {
  const t = await getTranslations('home')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Full Screen */}
        <header className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white min-h-screen flex items-center py-20">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="space-y-8 md:space-y-10">
              {/* Eyebrow */}
              <Reveal>
                <p className="text-sm md:text-base text-accent-light uppercase tracking-widest font-semibold">
                  {t('hero.eyebrow')}
                </p>
              </Reveal>
              
              {/* Main Headline */}
              <Reveal delay={100}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">
                  {t('hero.title')}
                </h1>
              </Reveal>
              
              {/* Subtitle */}
              <Reveal delay={200}>
                <p className="max-w-2xl text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </Reveal>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 mt-10">
                <Reveal delay={300}>
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('hero.primaryCta')}
                  </Link>
                </Reveal>
                <Reveal delay={350}>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all backdrop-blur-sm border border-white/20 hover:border-white/40"
                  >
                    {t('hero.secondaryCta')}
                  </Link>
                </Reveal>
              </div>
              
              {/* Trust Badge */}
              <Reveal delay={400}>
                <div className="flex items-center gap-3 mt-8">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-primary-light border-2 border-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-accent-light border-2 border-white/20"></div>
                  </div>
                  <p className="text-sm text-white/80 font-medium">
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
        </header>

        {/* Stats Section */}
        <StatsSection stats={{
          projects: { value: t('stats.projects.value'), label: t('stats.projects.label') },
          satisfaction: { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
          experience: { value: t('stats.experience.value'), label: t('stats.experience.label') }
        }} />

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white transition-all duration-300">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14 md:mb-16">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {t('values.title')}
                </h2>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              <Reveal>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-accent-light">
                    {t('values.insight.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {t('values.insight.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-accent-light">
                    {t('values.precision.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {t('values.precision.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-accent-light">
                    {t('values.partnership.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {t('values.partnership.description')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 md:py-28 bg-neutral-light transition-colors duration-300">
          <div className="container max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14 md:mb-16 space-y-4">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                  {t('services.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-sm md:text-base lg:text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
                  {t('services.description')}
                </p>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Reveal>
                <div className="bg-white p-7 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {t('services.management.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.management.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="bg-white p-7 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {t('services.financial.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.financial.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-white p-7 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {t('services.contract.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.contract.description')}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Reveal delay={300}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl"
                >
                  {t('services.cta')}
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-white transition-all duration-300">
          <div className="container max-w-4xl mx-auto px-6 md:px-8 text-center">
            <div className="space-y-6 md:space-y-8">
              <Reveal>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
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
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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
