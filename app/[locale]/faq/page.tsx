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
        <section className="section bg-gradient-to-b from-neutral-light to-white transition-colors duration-300">
          <div className="container max-w-4xl">
            {/* FAQ Grid */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Reveal key={item.key} delay={index * 75}>
                  <FAQItem 
                    question={item.question} 
                    answer={item.answer} 
                    index={index}
                  />
                </Reveal>
              ))}
            </div>

            {/* Bottom CTA */}
            <Reveal delay={400}>
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-primary/10">
                  <p className="text-primary/70">
                    Still have questions?
                  </p>
                  <a 
                    href="/en/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Contact our team
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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
