import { About } from 'app/components/home/About'
import { Experience } from 'app/components/shared/Experience'
import { HomePage } from 'app/components/home/HomePage'

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className="grid px-2 md:px-32 gap-2">
        <About />
        <Experience/>
      </section>
    </main>
  )
}
