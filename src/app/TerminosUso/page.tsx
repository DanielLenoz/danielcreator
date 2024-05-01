import Link from 'next/link'

export default function TerminosUso() {
  return (
    <main className="grid gap-2 px-2 py-3 md:px-32">
      <h1 className=" font-titleSubtitle text-2xl font-bold md:text-3xl">
        Términos y Condiciones
      </h1>

      <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
        1. Introducción
      </h2>
      <h1 className="font-titleSubtitle text-xl font-semibold md:text-2xl">
        Bienvenidos a DanielCreator.com
      </h1>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Explora mi portafolio de proyectos y trabajos realizados para otras
        personas. Además, aquí encontrarás promociones y ventas de landing pages
        y páginas web dinámicas.
      </p>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Puedes consultar los contratos y términos de uso en la sección de{' '}
        <Link className=" link-hover text-segundaryDark" href="/Servicios">
          Servicios
        </Link>{' '}
        para obtener más información sobre estas áreas.
      </p>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Recuerda que, de acuerdo a los términos y condiciones, tanto el cliente
        como el usuario deben estar de acuerdo con estas disposiciones.
      </p>

      <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
        2. Fases del Proceso
      </h2>
      <h3 className="font-titleSubtitle text-lg font-semibold md:text-xl">
        2.1. Negociación
      </h3>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Durante la fase de negociación, se discutirán los detalles del proyecto,
        incluyendo alcance, plazos y tarifas. Ambas partes deben comunicarse de
        manera clara y honesta para garantizar una comprensión mutua.
      </p>
      <h3 className="font-titleSubtitle text-lg font-semibold md:text-xl">
        2.2. Diseño
      </h3>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        En la fase de diseño, se creará un prototipo visual del proyecto. El
        cliente debe proporcionar retroalimentación o aprobación en esta etapa
      </p>
      <h3 className="font-titleSubtitle text-lg font-semibold md:text-xl">
        2.3. Programación
      </h3>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Durante la fase de programación, se desarrollará el sitio web o la
        landing page. Se seguirán las mejores prácticas de codificación y se
        garantizará el rendimiento.
      </p>
      <h3 className="font-titleSubtitle text-lg font-semibold md:text-xl">
        2.4. Lanzamiento del Producto
      </h3>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Una vez completado el desarrollo, lanzaremos el producto y mantendremos
        un seguimiento durante un período de tiempo estipulado. Durante esta
        fase, tanto nosotros como el cliente supervisaremos el funcionamiento
        del sitio web en producción para garantizar su correcto desempeño.
      </p>
      <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
        3. Propiedad Intelectual
      </h2>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Todos los derechos de propiedad intelectual relacionados con el proyecto
        pertenecen al cliente una vez finalizado y pagado. El desarrollador
        puede incluir el proyecto en su portafolio con fines promocionales,
        excluyendo el código fuente.
      </p>

      <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
        4. Responsabilidad
      </h2>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        El desarrollador no se hace responsable de cualquier daño directo o
        indirecto causado por el uso del sitio web o los servicios. El cliente
        es responsable de verificar la precisión y legalidad de los contenidos
        proporcionados antes de finalizar la fase de lanzamiento.
      </p>

      <h2 className="font-titleSubtitle text-2xl font-semibold md:text-3xl">
        5. Cambios en los Términos
      </h2>
      <p className="font-textSegundary text-base font-normal md:text-lg">
        Estos términos pueden actualizarse ocasionalmente. Mantente atento a
        esta sección por si hay alguna actualización en los términos de uso.
      </p>
    </main>
  )
}
