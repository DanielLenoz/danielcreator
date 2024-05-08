import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
      },
      fontFamily: {
        titleSubtitle: ['var(--font-work-sans)'],
        textPrimary: ['var(--font-montserrat-alternates)'],
        textSegundary: ['var(--font-roboto-mono)'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
      },
      colors: {
        footerBlack: '#191A1A',
        mainBackgraound: '#F5F5F5',
        segundary: '#99BAC7',
        tertiary: '#3C7C98',
        cbBackgraund: '#0A2734',
        primariDark: '#05131A',
        segundaryDark: '#0E3A4D',
        mygradiente: 'rgba(167, 206, 222, 50%)',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
