import { About } from 'app/components/home/About'
import { HomePage } from 'app/components/home/HomePage'

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className=" px-2 md:px-32">
        <About />
      </section>
    </main>
  )
}
