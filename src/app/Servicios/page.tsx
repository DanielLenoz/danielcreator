import { Metadata } from 'next'
import { ContentPages } from 'app/components/servicios/ContentPages'
import { HomePages } from 'app/components/servicios/HomePages'
import { Experience } from 'app/components/shared/Experience'
import { Porfolio } from 'app/components/shared/Porfolio'

export const metadata: Metadata = {
  title: 'DanielCreator: Servicios',
  description: 'Servicios sobre creacion de paginas web dinamicas y estaticas',
  keywords: [
    'landing page',
    'wed dynamic',
    'paginas estaticas',
    'paginas dinamicas',
    'servicios web',
    'portafolio',
    'daniel',
    'rodriguez',
    'servicios',
  ],
}

export default function Servicios() {
  return (
    <main>
      <HomePages />
      <section className="grid gap-3 px-2 md:px-32">
        <ContentPages />
        <Experience />
        <Porfolio />
      </section>
    </main>
  )
}
