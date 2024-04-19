import { ContentPages } from 'app/components/servicios/ContentPages'
import { HomePages } from 'app/components/servicios/HomePages'
import { Experience } from 'app/components/shared/Experience'
import { Porfolio } from 'app/components/shared/Porfolio'

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
