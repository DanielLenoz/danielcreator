import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tsDM: ['var(--font-work-sans)'],
        tprimary: ['var(--font-montserrat-alternates)'],
        tblog: ['var(--font-roboto-mono)'],
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
        cbBackgraund: '#0A2734',
        primariDark: '#05131A',
        segundaryDark: '#0E3A4D',
      },
    },
  },
  plugins: [],
}
export default config
