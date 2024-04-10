import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className=" grid justify-items-center gap-2 bg-footerBlack px-3 py-2 text-white md:px-32 lg:grid-flow-col">
      <aside className="">
        <Image
          src="/assets/icons/logo-footer.webp"
          width={228}
          height={255}
          alt="Logo de la empresa"
          quality={100}
        />
      </aside>
      <div className="h-[1px] w-full bg-slate-400 md:h-full md:w-[1px]"></div>
      <section className="grid gap-2 md:grid-flow-col lg:gap-5 xl:gap-7">
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">HOME</h6>
          <a className="link-hover font-textPrimary text-base font-medium">
            Servicios
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Certificados
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Blog
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Github
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Linkedin
          </a>
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
          <a className="link-hover font-textPrimary text-base font-medium">
            Terminos de huso
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Contratos
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Precios
          </a>
        </nav>
        <nav className="flex flex-col gap-1">
          <h6 className="font-titleSubtitle text-2xl font-semibold">
            CONTACTO
          </h6>
          <a className="link-hover font-textPrimary text-base font-medium">
            Github
          </a>
          <a className="link-hover font-textPrimary text-base font-medium">
            Linkedin
          </a>
        </nav>
      </section>
    </footer>
  )
}
