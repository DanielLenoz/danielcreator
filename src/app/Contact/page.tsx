import Image from 'next/image'
import { Metadata } from 'next'
import { Contacto } from 'app/components/contacto/Contacto'
import { ImDownload2 } from 'react-icons/im'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'DanielCreator: Contacto',
  description: 'Tipos de contacto a DanielCreator',
  keywords: [
    'servicios web',
    'daniel',
    'rodriguez',
    'contacto',
    'github',
    'linkedin',
    'gmail',
  ],
}

export default function Contact() {
  return (
    <main className=" grid min-h-[324px] gap-3 bg-gradient-to-b from-cyan-400 to-neutral-100 px-2 py-3 dark:to-primariDark md:px-32">
      <section className="relative z-10 grid gap-3 md:grid-cols-2">
        <article className="relative grid gap-2 overflow-hidden rounded-lg border-b-4 border-segundaryDark bg-segundary p-1 text-white">
          <h1 className=" z-10 font-titleSubtitle text-2xl font-bold  md:text-3xl">
            Contáctame
          </h1>
          <p className=" z-10 font-textPrimary text-base  font-normal md:text-lg">
            Si te encantaron algunos de mis portafolios y procesos de trabajo en
            páginas web, contáctame si deseas trabajar conmigo o si quieres
            crear una huella digital con tu propia página web.
          </p>
          <p className="z-10 font-textPrimary text-base  font-normal md:text-lg">
            Si quieres saber más de mí, puedes visitar mis redes para conocerme
            mejor.
          </p>
          <article className="z-10 flex flex-wrap gap-2  justify-self-end">
            <a href="/" target="_blank">
              <ImDownload2 className=" h-6 w-6 fill-white" />
            </a>
            <a href="https://github.com/DanielLenoz" target="_blank">
              <RiGithubFill className=" h-6 w-6 fill-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/"
              target="_blank"
            >
              <RiLinkedinFill className=" h-6 w-6 fill-white" />
            </a>
          </article>
          <Image
            className="rotate-y-180 absolute right-0 top-0 hidden md:block"
            src={'/assets/images/services/imagebg.webp'}
            width={300}
            height={530}
            alt={'mundo'}
            quality={100}
          />
        </article>
        <article>
          <h1 className=" font-titleSubtitle text-2xl font-bold  md:text-3xl">
            Envíame un correo.
          </h1>
          <Contacto />
        </article>
      </section>
    </main>
  )
}
