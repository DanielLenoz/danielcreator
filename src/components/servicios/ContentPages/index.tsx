import Image from 'next/image'
import Link from 'next/link'

export const ContentPages = () => {
  return (
    <section className="grid gap-2">
      <article className="flex flex-col items-center gap-2 xl:flex-row">
        <section className="grid justify-items-start gap-2">
          <h2 className="justify-self-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
            Negociacion
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            entendemos que cada negocio es unico, por eso dedicamos a{' '}
            <span className=" text-segundaryDark">
              crear paginas web personalizadas que reflejen a la persona o
              empresa dedicada
            </span>{' '}
            <br /> antes de comenzar cualquier proyecto, realizamos una{' '}
            <span className=" text-segundaryDark">
              investigación exhaustiva.
            </span>{' '}
            nos tomamos el tiempo de conocer a nuestros clientes,{' '}
            <span className=" text-segundaryDark">
              entender sus necesidades y estudiar su objetivo.{' '}
            </span>{' '}
            este enfoque nos permite crear un diseño web que no solo sea
            estéticamente agradable, sino que tambien funcione para tu negocio.
            <br />
            creemos en la{' '}
            <span className=" text-segundaryDark">
              negociación justa y transparente,
            </span>{' '}
            nuestro objetivo es proporcionar un servicio optimizamos en los
            procesos claves del producto, haciendo que puedas ver informacion
            clave del producto
          </p>
          <button className="inline-block rounded-lg bg-cyan-700 px-2 py-1 font-textSegundary text-base font-medium text-white hover:bg-tertiary md:text-lg">
            <Link href={''}>Contrato de Landing Pages</Link>
          </button>
          <button className="inline-block rounded-lg bg-cyan-900 px-2 py-1 font-textSegundary text-base font-medium text-white hover:bg-tertiary md:text-lg">
            <Link href={''}>Contrato de Pagina Web Dinamica</Link>
          </button>
        </section>
        <Image
          className=" rounded-2xl"
          src={'/assets/images/services/contract.webp'}
          width={540}
          height={550}
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
            cada sitio web es unico e inigualable como las personas o empresa
            que confían en nosotros para crear su sitio web{' '}
            <span className=" text-segundaryDark">
              personalizado que refleje sus caracteristicas y personalidad
            </span>{' '}
            con la investigación que hacemos de nuestros usuarios logramos
            entender sus necesidades, gustos y habilidades, dándonos la
            informacion necesaria para implementarla en un diseño unico,
            atractivo y facil de usar cuando llegue su momento de despliegue
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
            cuando tenemos el diseño deseado comenzamos la parte de desarrollo,
            donde nosotros crearemos codigo limpio y{' '}
            <span className=" text-segundaryDark">
              confiable para el usuario
            </span>{' '}
            dando siempre las mejores practicas para asegurar que el{' '}
            <span className=" text-segundaryDark">
              sitio web sea lo mas rapida, segura y confiable
            </span>
            <br /> no lanzamos nada hasta que este probado a fondo, desde hacer
            el producto responsive para todos dispositivos, navegable por todo
            los navegadores conocidos y{' '}
            <span className=" text-segundaryDark">
              cumpliendo todas las funcionalidades
            </span>{' '}
            anteriormente definidas
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
            antes de lanzar el sitio web al mercado hacemos principal un chequeo
            de funcionalidades y objetivos concordados, hacemos la{' '}
            <span className=" text-segundaryDark">
              fase de preproducción con usuarios y con los stakeholders o
              simplemente con la cliente,
            </span>{' '}
            con el fin de que todas las funcionalidades deseados por el cliente
            sea las mas optimas y satisfactorias posible <br />
            <span className=" text-segundaryDark">
              se mantiene el seguimiento de la pagina web
            </span>{' '}
            por determinado tiempo para asegurar la usabilidad y la{' '}
            <span className=" text-segundaryDark">
              calidad de la misma a lo largo del tiempo
            </span>{' '}
            <br />
            dependiendo del sitio web y con las condiciones a cordadas en la
            negociaciones iniciales puedes{' '}
            <span className=" text-segundaryDark">
              adquirir el codigo y el diseño
            </span>{' '}
            para tu propio equipo de desarrollo
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
