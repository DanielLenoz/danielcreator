import { Content } from 'app/components/blogs/Blogs'
import { HomePage } from 'app/components/blogs/HomePage'

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
