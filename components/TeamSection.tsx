'use client'

import Reveal from './Reveal'

interface TeamMember {
  name: string
  role: string
  bio: string
}

interface TeamSectionProps {
  id?: string
  title: string
  subtitle?: string
  members: TeamMember[]
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

export default function TeamSection({
  id,
  title,
  subtitle,
  members,
}: TeamSectionProps) {
  return (
    <section id={id} className="section bg-neutral-light transition-colors duration-300 scroll-mt-32">
      <div className="container">
        <div className="h-group">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={100}>
              <p className="text-primary max-w-2xl">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>

        {/* Cards Grid */}
        <div className="mt-10 md:mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {members.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
