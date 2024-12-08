import { Contacto } from 'app/components/contacto/Contacto'
import Image from 'next/image'
import { ImDownload2 } from 'react-icons/im'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'

export const Footer = () => {
  return (
    <footer className=" grid justify-center justify-items-center gap-2 bg-footerBlack px-3 py-2 text-white md:px-32 lg:grid-flow-col">
      <aside className=" grid justify-items-center">
        <Image
          src="/assets/icons/logo-footer.webp"
          width={220}
          height={220}
          alt="Logo de la empresa"
          quality={100}
        />
        <p className=" text-center font-textSegundary text-xs font-light">
          © 2024 DanielLenozweb.com <br /> Todos los derechos reservados.
        </p>
      </aside>
      <div className="h-[1px] w-full bg-slate-400 md:h-full md:w-[1px]"></div>
      <section className="grid items-center justify-items-center gap-2 lg:flex">
        <article className="z-10 flex flex-row gap-2 lg:flex-col">
          <a
            href="https://drive.google.com/file/d/1afpRDN5QE40RhCR1QP371MPEzobYQoEX/view?usp=sharing"
            target="_blank"
            className=" transition ease-in-out hover:scale-125 "
          >
            <ImDownload2 className=" h-6 w-6 fill-white" />
          </a>
          <a
            href="https://github.com/DanielLenoz"
            target="_blank"
            className=" transition ease-in-out hover:scale-125 "
          >
            <RiGithubFill className=" h-6 w-6 fill-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/"
            target="_blank"
            className=" transition ease-in-out hover:scale-125 "
          >
            <RiLinkedinFill className=" h-6 w-6 fill-white" />
          </a>
        </article>
        <section className="grid items-start">
          <h1 className=" font-titleSubtitle text-2xl font-bold  md:text-3xl">
            Envíame un correo.
          </h1>
          <Contacto />
        </section>
      </section>
    </footer>
  )
}
