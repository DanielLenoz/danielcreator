import { Carrusel } from './Carrusel'

export const About = () => {
  return (
    <section className=" grid gap-2 pt-5 md:grid-cols-2 ">
      <article className=" grid gap-1">
        <h1 className=" font-titleSubtitle text-3xl font-semibold md:text-4xl">
          Hola, soy Daniel Rodríguez, desarrollador
        </h1>
        <p className=" font-textSegundary text-base font-medium md:text-lg">
          Cada producto tiene su propia historia y su propio sueño.
        </p>
        <p className=" font-textPrimary text-base font-normal md:text-lg">
          Soy un <span className=" text-segundaryDark">apasionado</span> de la
          creación de páginas web. Cada producto creado representa un usuario
          con una meta clara.{' '}
          <span className=" text-segundaryDark">
            Mi trabajo es brindarles la oportunidad
          </span>{' '}
          de digitalizar sus negocios o perfiles profesionales para que tengan
          una{' '}
          <span className=" text-segundaryDark">
            huella digital profesional
          </span>
        </p>
      </article>
      <section className=" overflow-hidden rounded-2xl bg-segundaryDark">
        <p className=" bg-segundary p-1 text-start text-base font-medium md:text-lg ">
          Herramientas de Desarrollo
        </p>
        <article className="max-h-64">
          <Carrusel />
        </article>
      </section>
    </section>
  )
}
