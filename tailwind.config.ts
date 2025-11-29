import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Brand Identity Colors
        brandNavy: '#002b57', // Primary navy - dominant background + headings
        brandTerracotta: '#cb5b2b', // Accent terracotta - CTA buttons, highlights
        brandBeige: '#f4e0cf', // Soft beige for alternating sections
        brandGray: '#7b7b7b', // Neutral text gray
        
        // Aliased for convenience
        primary: {
          DEFAULT: '#002b57',
          dark: '#001d3d',
          light: '#00366c',
        },
        accent: {
          DEFAULT: '#cb5b2b',
          dark: '#a04822',
          light: '#e66e3f',
        },
        neutral: {
          DEFAULT: '#dbdbdb',
          light: '#f4e0cf', // Using brand beige
          beige: '#f4e0cf',
        },
        gray: {
          DEFAULT: '#dbdbdb',
          light: '#ecd4bd',
          dark: '#7b7b7b',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-ibm-plex-arabic)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

