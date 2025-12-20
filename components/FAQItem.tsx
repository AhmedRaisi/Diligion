'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'bg-primary text-white shadow-lg' 
          : 'bg-white hover:bg-primary/[0.02] border border-primary/10 hover:border-primary/20'
      } rounded-xl`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full p-6 md:p-8 text-left flex items-center justify-between gap-6"
      >
        {/* Question number */}
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
          isOpen 
            ? 'bg-white/20 text-white' 
            : 'bg-primary/10 text-primary'
        }`}>
          {index + 1}
        </span>
        
        {/* Question text */}
        <span className={`flex-1 font-semibold text-lg md:text-xl transition-colors duration-300 ${
          isOpen ? 'text-white' : 'text-primary'
        }`}>
          {question}
        </span>
        
        {/* Expand/collapse icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-white/20 text-white' 
            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
        }`}>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24 leading-relaxed ${
          isOpen ? 'text-white/90' : 'text-primary/70'
        }`}>
          {answer}
        </div>
      </div>
    </div>
  )
}
