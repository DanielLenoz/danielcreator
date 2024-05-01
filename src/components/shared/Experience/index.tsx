import { BsFire } from 'react-icons/bs'
import { PiBooksFill } from 'react-icons/pi'

export const Experience = () => {
  return (
    <section>
      <h1 className=" pb-2 text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
        Experiencia
      </h1>
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        <li>
          <PiBooksFill className="timeline-middle h-5 w-5 fill-segundaryDark" />
          <article className="timeline-start mb-10 grid gap-[4px] md:text-end">
            <time className="font-textSegundary text-base italic md:text-lg">
              Noviembre 2021
            </time>
            <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
              Estudio en Platzi
            </h2>
            <p className=" font-textPrimary text-base font-normal md:text-lg">
              Completé cursos en{' '}
              <span className=" text-segundaryDark">
                diferentes áreas de desarrollo web,
              </span>{' '}
              incluyendo frameworks como{' '}
              <span className=" text-segundaryDark">
                React y Next.js, Diseño UX/UI y Metodologías ágiles.
              </span>{' '}
              Agradezco a Platzi por la oportunidad de adquirir nuevas
              habilidades y por la comunidad de aprendizaje que ofrece.
            </p>
          </article>
          <hr className=" bg-segundary" />
        </li>
        <li>
          <hr className=" bg-segundary" />
          <BsFire className="timeline-middle h-5 w-5 fill-segundaryDark" />
          <article className="timeline-end mb-10 grid gap-[4px]">
            <time className="font-textSegundary text-base italic md:text-lg">
              Marzo 2023
            </time>
            <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
              FreeLancer
            </h2>
            <p className="font-textPrimary text-base font-normal md:text-lg">
              Brindé soluciones web{' '}
              <span className=" text-segundaryDark">
                personalizadas a clientes,
              </span>{' '}
              desde sitios web informativos hasta sitios web completas. Me
              especialicé en la{' '}
              <span className=" text-segundaryDark">
                creación de interfaces intuitivas y fáciles de usar,
              </span>{' '}
              utilizando tecnologías modernas y siguiendo las mejores prácticas
              de desarrollo.
            </p>
          </article>
        </li>
      </ul>
    </section>
  )
}
