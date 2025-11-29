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
        // Brand colors from palette
        primary: {
          DEFAULT: '#002a54', // Sea Blues
          dark: '#001d3d',
          light: '#003d7a',
        },
        accent: {
          DEFAULT: '#be6238', // Desert Neutrals
          dark: '#a04822',
          light: '#e66e3f',
        },
        neutral: {
          DEFAULT: '#dbdbdb', // Inner Stillness
          light: '#ecd4bd', // Silent Balance
        },
        gray: {
          DEFAULT: '#dbdbdb', // Inner Stillness
          light: '#ecd4bd', // Silent Balance
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

