import { getTranslations } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'
import ScheduleTabs from '@/components/ScheduleTabs'

// Consultant Calendly URLs - Replace with actual URLs when available
const CONSULTANTS = [
  {
    id: 'yafin',
    name: 'Yafin Al Kharusi',
    role: 'Financial & Contract',
    calendlyUrl: 'https://calendly.com/ahmedalraisi/30min', // TODO: Replace with Yafin's URL
  },
  {
    id: 'shaima',
    name: 'Shaima Al Balushi',
    role: 'Management & Contract',
    calendlyUrl: 'https://calendly.com/ahmedalraisi/30min', // TODO: Replace with Shaima's URL
  },
  {
    id: 'buthaina',
    name: 'Buthaina Al Zadjali',
    role: 'Management',
    calendlyUrl: 'https://calendly.com/ahmedalraisi/30min', // TODO: Replace with Buthaina's URL
  },
]

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
        <section className="section bg-neutral-light transition-colors duration-300">
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

            {/* Consultant Tabs with Calendly */}
            <Reveal delay={300}>
              <div>
                <p className="text-primary text-center mb-[var(--s-6)]">{t('note')}</p>
                <ScheduleTabs consultants={CONSULTANTS} />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
