import { Metadata } from 'next'
import { Content } from 'app/components/blogs/Blogs'
import { HomePage } from 'app/components/blogs/HomePage'

export const metadata: Metadata = {
  title: 'DanielCreator: Blogs',
  description: 'Todos los Blogs creados por DanielCreator',
  keywords: [
    'tecnologia',
    'ingles',
    'diseño',
    'liderasgo',
    'historias',
    'eventos',
    'proyectos',
    'experiencias',
    'daniel',
    'rodriguez',
    'platzi',
  ],
}

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className="grid gap-3 px-2 pb-3 md:px-32">
        <Content />
      </section>
    </main>
  )
}
