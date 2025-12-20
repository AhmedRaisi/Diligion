'use client'

import { useState } from 'react'
import CalendlyEmbed from './CalendlyEmbed'

interface Consultant {
  id: string
  name: string
  role: string
  calendlyUrl: string
}

interface ScheduleTabsProps {
  consultants: Consultant[]
}

export default function ScheduleTabs({ consultants }: ScheduleTabsProps) {
  const [activeTab, setActiveTab] = useState(consultants[0]?.id || '')

  const activeConsultant = consultants.find(c => c.id === activeTab)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Consultant Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-white rounded-xl p-1.5 border-2 border-primary/10 shadow-sm flex-wrap justify-center gap-1">
          {consultants.map((consultant) => (
            <button
              key={consultant.id}
              onClick={() => setActiveTab(consultant.id)}
              className={`px-4 md:px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === consultant.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-primary hover:bg-primary/5'
              }`}
            >
              <span className="block">{consultant.name}</span>
              <span className={`text-xs ${activeTab === consultant.id ? 'text-white/80' : 'text-primary/60'}`}>
                {consultant.role}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Calendly Widget */}
      {activeConsultant && (
        <div className="bg-white rounded-2xl border-2 border-primary/10 shadow-lg overflow-hidden">
          <CalendlyEmbed 
            key={activeConsultant.id}
            url={activeConsultant.calendlyUrl}
            styles={{ height: '700px', minWidth: '320px' }}
          />
        </div>
      )}
    </div>
  )
}

