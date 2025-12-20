import { getTranslations } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'
import AboutPageContent from '@/components/AboutPageContent'

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

        {/* Tabbed Content */}
        <AboutPageContent
          subnavLabels={{
            overview: t('subnav.overview'),
            board: t('subnav.board'),
            management: t('subnav.management'),
          }}
          pillars={{
            title: t('pillars.title'),
            mission: {
              title: t('pillars.mission.title'),
              description: t('pillars.mission.description'),
            },
            vision: {
              title: t('pillars.vision.title'),
              description: t('pillars.vision.description'),
            },
            values: {
              title: t('pillars.values.title'),
              description: t('pillars.values.description'),
            },
          }}
          approach={{
            title: t('approach.title'),
            steps: {
              diagnose: {
                title: t('approach.steps.diagnose.title'),
                description: t('approach.steps.diagnose.description'),
              },
              design: {
                title: t('approach.steps.design.title'),
                description: t('approach.steps.design.description'),
              },
              deliver: {
                title: t('approach.steps.deliver.title'),
                description: t('approach.steps.deliver.description'),
              },
            },
          }}
          board={{
            title: t('board.title'),
            subtitle: t('board.subtitle'),
            members: [
              {
                name: t('board.members.chairman.name'),
                role: t('board.members.chairman.role'),
                bio: t('board.members.chairman.bio'),
              },
              {
                name: t('board.members.viceChairman.name'),
                role: t('board.members.viceChairman.role'),
                bio: t('board.members.viceChairman.bio'),
              },
              {
                name: t('board.members.advisor.name'),
                role: t('board.members.advisor.role'),
                bio: t('board.members.advisor.bio'),
              },
            ],
          }}
          management={{
            title: t('management.title'),
            subtitle: t('management.subtitle'),
            members: [
              {
                name: t('management.members.yafin.name'),
                role: t('management.members.yafin.role'),
                bio: t('management.members.yafin.bio'),
              },
              {
                name: t('management.members.shaima.name'),
                role: t('management.members.shaima.role'),
                bio: t('management.members.shaima.bio'),
              },
              {
                name: t('management.members.buthaina.name'),
                role: t('management.members.buthaina.role'),
                bio: t('management.members.buthaina.bio'),
              },
              {
                name: t('management.members.consultant.name'),
                role: t('management.members.consultant.role'),
                bio: t('management.members.consultant.bio'),
              },
            ],
          }}
        />
      </main>
      <Footer />
    </>
  )
}
