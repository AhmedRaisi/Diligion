import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diligent Visionary Consultancy',
  description:
    'Professional Management, Financial, and Contract Consultancy services in Oman',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
