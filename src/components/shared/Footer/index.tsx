import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className=" grid justify-items-center gap-2 bg-footerBlack px-3 py-2 text-white md:px-32 lg:grid-flow-col">
      <aside className=" grid justify-items-center">
        <Image
          src="/assets/icons/logo-footer.webp"
          width={228}
          height={255}
          alt="Logo de la empresa"
          quality={100}
        />
        <p className=' font-textSegundary font-light text-center text-xs'>© 2024 DanielCreator.com <br /> Todos los derechos reservados.</p>
      </aside>
      <div className="h-[1px] w-full bg-slate-400 md:h-full md:w-[1px]"></div>
      <section className="grid gap-2 md:grid-flow-col lg:gap-5 xl:gap-7">
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">HOME</h6>
          <Link
            href={'/'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Home
          </Link>
          <Link
            href={'/Servicios'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Servicios
          </Link>
          <Link
            href={'/Certificados'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Certificados
          </Link>
          <Link
            href={'/Blogs'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Blogs
          </Link>
        </nav>
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">
            SERVICIOS
          </h6>
          <a className="link-hover font-textPrimary text-base font-medium">
            Marca
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Diseño
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Landing pages
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Dynamic pages web
          </a>
        </nav>
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">Legal</h6>
          <Link
            href={'/TerminosUso'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Terminos de uso
          </Link>
          <a className="link-hover font-textPrimary text-base font-medium">
            Contratos
          </a>
        </nav>
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">
            CONTACTO
          </h6>
          <Link
            href={'https://github.com/DanielLenoz'}
            className="link-hover font-textPrimary text-base font-medium"
          >
            Github
          </Link>
          <Link
            href={
              'https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/'
            }
            className="link-hover font-textPrimary text-base font-medium"
          >
            Linkedin
          </Link>
        </nav>
      </section>
    </footer>
  )
}
