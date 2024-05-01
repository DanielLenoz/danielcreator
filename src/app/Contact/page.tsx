import { Contacto } from 'app/components/contacto/Contacto'
import Image from 'next/image'
import { ImDownload2 } from 'react-icons/im'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
export default function Contact() {
  return (
    <main className=" grid min-h-[324px] gap-3 px-2 py-3 md:px-32">
      <section className="relative z-10 grid gap-3 md:grid-cols-2">
        <article className="relative grid gap-2 overflow-hidden rounded-lg border-b-4 border-segundaryDark bg-segundary p-1 text-white">
          <h1 className=" z-10 font-titleSubtitle text-2xl font-bold  md:text-3xl">
            Contáctame
          </h1>
          <p className=" z-10 font-textPrimary text-base  font-normal md:text-lg">
            si te encanto algunos de mis portafolios y procesos de trabajo en
            paginas web, contáctame si quieres trabajar con migo o si quieres
            crear una huella digital con tu propia pagina web.
          </p>
          <p className="z-10 font-textPrimary text-base  font-normal md:text-lg">
            si quieres saver mas de mi puedes ver mi redes para conocerme mejor
          </p>
          <article className="z-10 flex flex-wrap gap-2  justify-self-end">
            <ImDownload2 className=" h-6 w-6 fill-white" />
            <RiGithubFill className=" h-6 w-6 fill-white" />
            <RiLinkedinFill className=" h-6 w-6 fill-white" />
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
            Enviame un Correo
          </h1>
          <Contacto />
        </article>
      </section>
    </main>
  )
}
