import { getTranslations } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'

export default async function ServicesPage() {
  const t = await getTranslations('services')

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
            <div className="mt-[var(--s-6)]">
              <Reveal delay={200}>
                <button className="bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity">
                  {t('hero.cta')}
                </button>
              </Reveal>
            </div>
          </div>
        </header>

        {/* Management Consultancy */}
        <section className="section transition-colors duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('management.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-primary max-w-3xl text-lg md:text-xl">
                  {t('management.description')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('management.highlights.operating')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('management.highlights.governance')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('management.highlights.pmos')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Financial Consultancy */}
        <section className="section bg-neutral-light transition-colors duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('financial.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-primary max-w-3xl text-lg md:text-xl">
                  {t('financial.description')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div className="p-6 md:p-7 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('financial.highlights.planning')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="p-6 md:p-7 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('financial.highlights.valuation')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="p-6 md:p-7 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('financial.highlights.capital')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contract Consultancy */}
        <section className="section">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('contract.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-primary max-w-3xl text-lg md:text-xl">
                  {t('contract.description')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('contract.highlights.strategy')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('contract.highlights.compliance')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="p-6 md:p-7 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {t('contract.highlights.disputes')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-neutral-light transition-colors duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('process.title')}
                </h2>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('process.steps.discovery.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('process.steps.discovery.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('process.steps.coDesign.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('process.steps.coDesign.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('process.steps.enablement.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('process.steps.enablement.description')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
