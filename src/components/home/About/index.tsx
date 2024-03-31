import { Carrusel } from './Carrusel'

export const About = () => {
  return (
    <section className=" grid gap-2 pt-2 md:grid-cols-2">
      <article className=" grid gap-1">
        <h3 className=" font-titleSubtitle text-2xl font-semibold text-segundaryDark">
          Quien soy
        </h3>
        <h1 className=" font-titleSubtitle text-3xl font-semibold">
          Hola Soy Daniel Rodríguez Desarrollador
        </h1>
        <p className=" font-textBlog text-base font-medium">
          Cada producto tiene su historia y su sueño
        </p>
        <p className=" font-textPrimary text-base font-normal">
          Soy un <span className=" text-segundaryDark">apasionado</span> de la
          creacion de paginas web, cada producto creado es un usuario con una
          meta clara,{' '}
          <span className=" text-segundaryDark">
            mi trabajo es darles la oportunidad
          </span>{' '}
          de digitalizar sus negocios o perfil profesional para que tenga una{' '}
          <span className=" text-segundaryDark">
            huella digital profesional
          </span>
        </p>
      </article>
      <section className=" overflow-hidden rounded-2xl bg-segundaryDark">
        <p className=" bg-segundary p-1 text-start text-base font-medium ">
          Herramientas de Desarrollo
        </p>
        <article className="max-h-80">
          <Carrusel />
        </article>
      </section>
    </section>
  )
}
