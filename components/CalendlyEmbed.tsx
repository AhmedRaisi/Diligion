'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url: string
  styles?: {
    height?: string
    minWidth?: string
  }
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: object
        utm?: object
      }) => void
    }
  }
}

export default function CalendlyEmbed({ 
  url, 
  styles = { height: '700px', minWidth: '320px' } 
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={url}
      style={{ 
        minWidth: styles.minWidth, 
        height: styles.height 
      }}
    />
  )
}

