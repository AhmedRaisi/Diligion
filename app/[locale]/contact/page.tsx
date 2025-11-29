'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/Reveal'

export default function ContactPage() {
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')

  const schema = z.object({
    name: z.string().min(2, t('form.validation.name')),
    email: z.string().email(t('form.validation.email')),
    message: z.string().min(10, t('form.validation.message')),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Integrate with email service
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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

        {/* Contact Form Section */}
        <section className="section transition-colors duration-300">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-gap max-w-6xl mx-auto">
              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    {t('channels.title')}
                  </h2>
                  <div className="space-y-4 text-primary">
                    <div>
                      <p className="font-semibold mb-1">{t('channels.collaboration')}</p>
                      <p>{tCommon('contactEmail')}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{t('channels.support')}</p>
                      <p>{tCommon('contactPhone')}</p>
                    </div>
                  </div>

                  <div className="mt-[var(--s-8)]">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      {t('location.title')}
                    </h3>
                    <p className="text-primary mb-2">{t('location.address')}</p>
                    <p className="text-primary">{t('location.hours')}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-7">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-primary">
                        {t('form.name')}
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder={t('form.namePlaceholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-primary">
                        {t('form.email')}
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder={t('form.emailPlaceholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 text-primary">
                        {t('form.message')}
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        placeholder={t('form.messagePlaceholder')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        {t('alerts.success')}
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        {t('alerts.error')}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--brand-accent)] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('form.state.sending') : t('form.submit')}
                    </button>
                  </form>
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
