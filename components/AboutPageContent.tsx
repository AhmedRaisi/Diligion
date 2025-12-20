'use client'

import { useState, ReactNode } from 'react'
import Reveal from './Reveal'

interface TeamMember {
  name: string
  role: string
  bio: string
}

interface AboutPageContentProps {
  subnavLabels: {
    overview: string
    board: string
    management: string
  }
  pillars: {
    title: string
    mission: { title: string; description: string }
    vision: { title: string; description: string }
    values: { title: string; description: string }
  }
  approach: {
    title: string
    steps: {
      diagnose: { title: string; description: string }
      design: { title: string; description: string }
      deliver: { title: string; description: string }
    }
  }
  board: {
    title: string
    subtitle: string
    members: TeamMember[]
  }
  management: {
    title: string
    subtitle: string
    members: TeamMember[]
  }
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl" />
        
        {/* Profile placeholder */}
        <div className="relative z-10 mb-6 flex justify-center">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
            <svg 
              className="w-12 h-12 md:w-14 md:h-14 text-primary/40" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        <div className="text-center relative z-10 flex-1 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">
            {member.name}
          </h3>
          <p className="text-accent font-semibold mb-3 text-sm md:text-base">
            {member.role}
          </p>
          <p className="text-sm md:text-base text-primary/80 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function AboutPageContent({
  subnavLabels,
  pillars,
  approach,
  board,
  management,
}: AboutPageContentProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'board' | 'management'>('overview')

  const tabs = [
    { id: 'overview' as const, label: subnavLabels.overview },
    { id: 'board' as const, label: subnavLabels.board },
    { id: 'management' as const, label: subnavLabels.management },
  ]

  return (
    <>
      {/* Sub Navigation */}
      <div className="sticky top-16 z-40 w-full bg-white border-b border-primary/10 shadow-sm">
        <div className="container">
          <nav className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 md:px-6 py-3 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'text-accent'
                    : 'text-primary/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {tab.label}
                {/* Active indicator */}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[60vh]">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="section bg-neutral-light transition-colors duration-300">
            <div className="container">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 md:mb-12">
                  {pillars.title}
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <Reveal delay={100}>
                  <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary relative z-10">
                      {pillars.mission.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary leading-relaxed relative z-10">
                      {pillars.mission.description}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary relative z-10">
                      {pillars.vision.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary leading-relaxed relative z-10">
                      {pillars.vision.description}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col shadow-sm hover:shadow-lg">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl"></div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary relative z-10">
                      {pillars.values.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary leading-relaxed relative z-10">
                      {pillars.values.description}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Approach Steps */}
              <div className="mt-16 md:mt-20">
                <Reveal>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8 md:mb-12">
                    {approach.title}
                  </h3>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <Reveal delay={100}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent">1</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-primary">
                        {approach.steps.diagnose.title}
                      </h4>
                      <p className="text-sm md:text-base text-primary leading-relaxed">
                        {approach.steps.diagnose.description}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={200}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent">2</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-primary">
                        {approach.steps.design.title}
                      </h4>
                      <p className="text-sm md:text-base text-primary leading-relaxed">
                        {approach.steps.design.description}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={300}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent">3</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-primary">
                        {approach.steps.deliver.title}
                      </h4>
                      <p className="text-sm md:text-base text-primary leading-relaxed">
                        {approach.steps.deliver.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Board of Directors Tab */}
        {activeTab === 'board' && (
          <section className="section bg-neutral-light transition-colors duration-300">
            <div className="container">
              <div className="mb-10 md:mb-12">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                    {board.title}
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="text-primary max-w-2xl mt-4">
                    {board.subtitle}
                  </p>
                </Reveal>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {board.members.map((member, index) => (
                  <MemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Management Team Tab */}
        {activeTab === 'management' && (
          <section className="section bg-neutral-light transition-colors duration-300">
            <div className="container">
              <div className="mb-10 md:mb-12">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                    {management.title}
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="text-primary max-w-2xl mt-4">
                    {management.subtitle}
                  </p>
                </Reveal>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {management.members.map((member, index) => (
                  <MemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
