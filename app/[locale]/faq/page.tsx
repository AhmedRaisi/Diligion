import { getTranslations } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FAQItem from '@/components/FAQItem'
import Reveal from '@/components/Reveal'

export default async function FAQPage() {
  const t = await getTranslations('faq')

  const faqItems = [
    {
      key: 'engagement',
      question: t('items.engagement.question'),
      answer: t('items.engagement.answer'),
    },
    {
      key: 'delivery',
      question: t('items.delivery.question'),
      answer: t('items.delivery.answer'),
    },
    {
      key: 'financial',
      question: t('items.financial.question'),
      answer: t('items.financial.answer'),
    },
    {
      key: 'contracts',
      question: t('items.contracts.question'),
      answer: t('items.contracts.answer'),
    },
    {
      key: 'timeline',
      question: t('items.timeline.question'),
      answer: t('items.timeline.answer'),
    },
  ]

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
                  {t('title')}
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="max-w-3xl text-white/90 text-lg md:text-xl">
                  {t('subtitle')}
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        {/* FAQ Items */}
        <section className="section transition-colors duration-300">
          <div className="container max-w-4xl">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="space-y-[var(--s-0)]">
                {faqItems.map((item, index) => (
                  <Reveal key={item.key} delay={index * 50}>
                    <FAQItem question={item.question} answer={item.answer} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
