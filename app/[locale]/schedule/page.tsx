import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'

export default async function SchedulePage() {
  const t = await getTranslations('schedule')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white transition-all duration-300">
          <div className="container section">
            <div className="h-group">
              <Reveal>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {t('hero.title')}
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="max-w-3xl text-white/90 text-lg md:text-xl">
                  {t('hero.subtitle')}
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        {/* Steps Section */}
        <section className="section transition-colors duration-300">
          <div className="container">
            <div className="grid md:grid-cols-3 grid-gap mb-[var(--s-12)]">
              <Reveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('steps.review.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('steps.review.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('steps.prepare.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('steps.prepare.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('steps.deliver.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('steps.deliver.description')}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-primary mb-[var(--s-8)]">{t('note')}</p>
                <div className="bg-neutral-light p-[var(--s-12)] rounded-lg">
                  <p className="text-primary mb-[var(--s-6)]">
                    {/* TODO: Integrate Calendly or Cal.com widget here */}
                    Scheduling widget will be integrated here
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity"
                  >
                    {t('button')}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
