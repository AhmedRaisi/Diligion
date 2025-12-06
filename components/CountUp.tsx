'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({ end, duration = 2000, suffix = '', className = '' }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress === 1) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  )
}


