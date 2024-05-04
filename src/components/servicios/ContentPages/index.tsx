import Image from 'next/image'
import Link from 'next/link'

export const ContentPages = () => {
  return (
    <section className="grid gap-2">
      <article className="flex flex-col items-center gap-2 xl:flex-row">
        <section className="grid justify-items-start gap-2">
          <h2 className="justify-self-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
            Negociación
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            Entendemos que cada negocio es único, por eso nos dedicamos a{' '}
            <span className=" text-segundaryDark">
              crear páginas web personalizadas que reflejen la identidad de la
              persona o empresa.
            </span>{' '}
            <br /> Antes de comenzar cualquier proyecto, realizamos una{' '}
            <span className=" text-segundaryDark">
              investigación exhaustiva.
            </span>{' '}
            Nos tomamos el tiempo de conocer a nuestros clientes,{' '}
            <span className=" text-segundaryDark">
              entender sus necesidades y estudiar sus objetivos.{' '}
            </span>{' '}
            Este enfoque nos permite crear un diseño web que no solo sea
            estéticamente agradable, sino que también funcione para tu negocio.
            <br />
            Creemos en la{' '}
            <span className=" text-segundaryDark">
              negociación justa y transparente.
            </span>{' '}
            Nuestro objetivo es proporcionar un servicio optimizado en los
            procesos clave del producto, permitiéndote ver información relevante
            sobre el mismo.
          </p>
          <button className="inline-block rounded-lg bg-cyan-700 px-2 py-1 font-textSegundary text-base font-medium text-white hover:bg-tertiary md:text-lg">
            <Link href={''}>Contrato para Landing Pages</Link>
          </button>
          <button className="inline-block rounded-lg bg-cyan-900 px-2 py-1 font-textSegundary text-base font-medium text-white hover:bg-tertiary md:text-lg">
            <Link href={''}>Contrato para Pagina Web Dinamica</Link>
          </button>
        </section>
        <Image
          className=" rounded-2xl"
          src={'/assets/images/services/contract.webp'}
          width={540}
          height={500}
          alt={'contratos de personas'}
          quality={100}
        />
      </article>
      <article className="flex flex-col items-center gap-2 xl:flex-row-reverse">
        <section className="grid items-start gap-2">
          <h2 className=" text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
            Diseño
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            Cada sitio web es único e inigualable, al igual que las personas o
            empresas que confían en nosotros para crear su sitio web{' '}
            <span className=" text-segundaryDark">
              personalizado. Nuestro objetivo es reflejar sus características y
              personalidad.
            </span>{' '}
            A través de la investigación que realizamos con nuestros usuarios,
            logramos entender sus necesidades, gustos y habilidades. Esta
            información nos permite implementar un diseño único, atractivo y
            fácil de usar que estará listo para su despliegue cuando llegue el
            momento.
          </p>
        </section>
        <Image
          className=" rounded-2xl"
          src={'/assets/images/services/design.webp'}
          width={540}
          height={330}
          alt={'diseño ui ux'}
          quality={100}
        />
      </article>
      <article className="flex flex-col items-center gap-2 xl:flex-row">
        <section className="grid items-start gap-2">
          <h2 className=" text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
            Desarrollo
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            Una vez que tenemos el diseño deseado, comenzamos la fase de
            desarrollo. En esta etapa, creamos código limpio y{' '}
            <span className=" text-segundaryDark">
              confiable para el usuario,
            </span>{' '}
            siguiendo siempre las mejores prácticas. Nuestro objetivo es
            asegurar que el{' '}
            <span className=" text-segundaryDark">
              sitio web sea rápido, seguro y confiable.
            </span>
            <br /> No lanzamos nada hasta que esté probado a fondo. Esto incluye
            hacer que el producto sea responsive para todos los dispositivos,
            navegable en todos los navegadores conocidos y que{' '}
            <span className=" text-segundaryDark">
              cumpla con todas las funcionalidades
            </span>{' '}
            previamente definidas.
          </p>
        </section>
        <Image
          className=" rounded-2xl"
          src={'/assets/images/services/codigo.webp'}
          width={540}
          height={330}
          alt={'desarrollo de producto'}
          quality={100}
        />
      </article>
      <article className="flex flex-col items-center gap-2 xl:flex-row-reverse">
        <section className="grid items-start gap-2">
          <h2 className=" text-center font-titleSubtitle text-3xl font-semibold  md:text-3xl">
            Lanzamiento
          </h2>
          <p className=" font-textPrimary text-base font-normal  md:text-lg">
            Antes de lanzar el sitio web al mercado, realizamos un chequeo
            exhaustivo de las funcionalidades y objetivos acordados. Durante la{' '}
            <span className=" text-segundaryDark">
              fase de preproducción, trabajamos con usuarios y stakeholders, o
              simplemente con el cliente,
            </span>{' '}
            para asegurarnos de que todas las funcionalidades deseadas sean
            óptimas y satisfactorias. <br />
            <span className=" text-segundaryDark">
              Mantenemos un seguimiento constante del sitio web
            </span>{' '}
            durante un período determinado para garantizar su usabilidad y{' '}
            <span className=" text-segundaryDark">
              calidad a lo largo del tiempo.
            </span>{' '}
            <br />
            Dependiendo del sitio web y las condiciones acordadas en las
            negociaciones iniciales,{' '}
            <span className=" text-segundaryDark">
              también puedes adquirir el código y el diseño
            </span>{' '}
            para tu propio equipo de desarrollo.
          </p>
        </section>
        <Image
          className=" rounded-2xl"
          src={'/assets/images/services/lanzamiento.webp'}
          width={540}
          height={330}
          alt={'lanzamiento de producto'}
          quality={100}
        />
      </article>
    </section>
  )
}
