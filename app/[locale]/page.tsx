import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'

export default async function HomePage() {
  const t = await getTranslations('home')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white">
          <div className="container section">
            <div className="h-group">
              <Reveal>
                <p className="text-sm/6 text-accent-light uppercase tracking-wide font-semibold">
                  {t('hero.eyebrow')}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
                  {t('hero.title')}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="max-w-2xl text-white/90 text-lg md:text-xl">
                  {t('hero.subtitle')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-6)] flex flex-col sm:flex-row items-start gap-[var(--s-4)]">
              <Reveal delay={300}>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity"
                >
                  {t('hero.primaryCta')}
                </Link>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
                >
                  {t('hero.secondaryCta')}
                </Link>
              </Reveal>
            </div>
            <Reveal delay={400}>
              <p className="mt-[var(--s-6)] text-sm text-white/70">
                {t('hero.trustBadge')}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Stats Section */}
        <section className="section bg-neutral-light transition-colors duration-300">
          <div className="container">
            <ul className="grid grid-cols-1 md:grid-cols-3 grid-gap">
              <Reveal>
                <li className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {t('stats.projects.value')}
                  </div>
                  <div className="text-sm md:text-base text-primary">
                    {t('stats.projects.label')}
                  </div>
                </li>
              </Reveal>
              <Reveal delay={100}>
                <li className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {t('stats.satisfaction.value')}
                  </div>
                  <div className="text-sm md:text-base text-primary">
                    {t('stats.satisfaction.label')}
                  </div>
                </li>
              </Reveal>
              <Reveal delay={200}>
                <li className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {t('stats.experience.value')}
                  </div>
                  <div className="text-sm md:text-base text-primary">
                    {t('stats.experience.label')}
                  </div>
                </li>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white transition-all duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {t('values.title')}
                </h2>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-accent-light">
                    {t('values.insight.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {t('values.insight.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-accent-light">
                    {t('values.precision.title')}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {t('values.precision.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-accent-light">
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
        <section className="section bg-neutral-light transition-colors duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('services.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-primary max-w-2xl">
                  {t('services.description')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div className="bg-white p-6 md:p-7 rounded-lg shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('services.management.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.management.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="bg-white p-6 md:p-7 rounded-lg shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('services.financial.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.financial.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-white p-6 md:p-7 rounded-lg shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('services.contract.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {t('services.contract.description')}
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="mt-[var(--s-6)] flex justify-center">
              <Reveal delay={300}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity"
                >
                  {t('services.cta')}
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white transition-all duration-300">
          <div className="container text-center">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {t('cta.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl">
                  {t('cta.subtitle')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-6)] flex justify-center">
              <Reveal delay={200}>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity"
                >
                  {t('cta.button')}
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
