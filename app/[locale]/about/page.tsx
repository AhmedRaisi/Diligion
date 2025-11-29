import { getTranslations } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'

export default async function AboutPage() {
  const t = await getTranslations('about')

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

        {/* Pillars Section */}
        <section className="section transition-colors duration-300">
          <div className="container">
            <div className="grid md:grid-cols-3 grid-gap">
              <Reveal>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    {t('pillars.mission.title')}
                  </h2>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('pillars.mission.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    {t('pillars.vision.title')}
                  </h2>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('pillars.vision.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                    {t('pillars.values.title')}
                  </h2>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('pillars.values.description')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-neutral-light transition-colors duration-300">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('team.title')}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-primary max-w-2xl">
                  {t('team.subtitle')}
                </p>
              </Reveal>
            </div>
            <div className="mt-[var(--s-8)] grid md:grid-cols-2 lg:grid-cols-3 grid-gap">
              {(['yafin', 'shaima', 'buthaina', 'consultant', 'advisor'] as const).map(
                (member, index) => (
                  <Reveal key={member} delay={index * 100}>
                    <div className="bg-white p-6 md:p-7 rounded-lg shadow-sm">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                        {t(`team.members.${member}.name`)}
                      </h3>
                      <p className="text-accent font-semibold mb-2">
                        {t(`team.members.${member}.role`)}
                      </p>
                      <p className="text-sm md:text-base text-primary leading-relaxed">
                        {t(`team.members.${member}.bio`)}
                      </p>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="section">
          <div className="container">
            <div className="h-group">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                  {t('approach.title')}
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
                    {t('approach.steps.diagnose.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('approach.steps.diagnose.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('approach.steps.design.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('approach.steps.design.description')}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
                    {t('approach.steps.deliver.title')}
                  </h3>
                  <p className="text-sm md:text-base text-primary leading-relaxed">
                    {t('approach.steps.deliver.description')}
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
