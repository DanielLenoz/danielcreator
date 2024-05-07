import type { Metadata } from 'next'
import { Roboto_Mono, Work_Sans, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'

export const metadata: Metadata = {
  title: 'DanielCreator',
  description: 'creador de paginas web dinamicas y estaticas',
  keywords: [
    'landing page',
    'wed dynamic',
    'paginas estaticas',
    'paginas dinamicas',
    'servicios web',
    'portafolio',
    'daniel',
    'rodriguez',
  ],
}

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})
const montserrat_alternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-montserrat-alternates',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${work_sans.variable} ${montserrat_alternates.variable} ${roboto_mono.variable}`}
    >
      <body className=" bg-mainBackgraound text-black dark:bg-primariDark dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
