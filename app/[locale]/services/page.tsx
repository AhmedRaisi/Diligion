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
        <section className="section bg-neutral-light transition-colors duration-300">
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
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 gap-6 md:gap-8">
              <Reveal>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('management.highlights.operating')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('management.highlights.governance')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('management.highlights.pmos')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Financial Consultancy */}
        <section className="section bg-neutral-light transition-colors duration-300 border-t border-primary/5">
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
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 gap-6 md:gap-8">
              <Reveal>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('financial.highlights.planning')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('financial.highlights.valuation')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('financial.highlights.capital')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contract Consultancy */}
        <section className="section bg-neutral-light transition-colors duration-300 border-t border-primary/5">
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
            <div className="mt-[var(--s-8)] grid md:grid-cols-3 gap-6 md:gap-8">
              <Reveal>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('contract.highlights.strategy')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('contract.highlights.compliance')}
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                  <h3 className="text-lg md:text-xl font-bold text-primary relative z-10">
                    {t('contract.highlights.disputes')}
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-neutral-light transition-colors duration-300 border-t border-primary/5">
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
