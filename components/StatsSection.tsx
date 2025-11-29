'use client'

import CountUp from './CountUp'
import Reveal from './Reveal'

interface StatsProps {
  stats: {
    projects: { value: string; label: string }
    satisfaction: { value: string; label: string }
    experience: { value: string; label: string }
  }
}

export default function StatsSection({ stats }: StatsProps) {
  return (
    <section className="py-16 md:py-20 bg-neutral-light transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
          <Reveal>
            <li className="text-center space-y-3">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <CountUp end={140} suffix="+" className="inline-block" />
              </div>
              <div className="text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-xs mx-auto">
                {stats.projects.label}
              </div>
            </li>
          </Reveal>
          <Reveal delay={100}>
            <li className="text-center space-y-3">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <CountUp end={96} suffix="%" className="inline-block" />
              </div>
              <div className="text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-xs mx-auto">
                {stats.satisfaction.label}
              </div>
            </li>
          </Reveal>
          <Reveal delay={200}>
            <li className="text-center space-y-3">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                <CountUp end={18} suffix=" yrs" className="inline-block" />
              </div>
              <div className="text-sm md:text-base text-primary/80 font-medium leading-relaxed max-w-xs mx-auto">
                {stats.experience.label}
              </div>
            </li>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}

