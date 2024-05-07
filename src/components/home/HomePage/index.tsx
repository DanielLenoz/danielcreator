import Image from 'next/image'
import Link from 'next/link'

export const HomePage = () => {
  return (
    <section className="relative grid max-h-[525px] overflow-hidden bg-gradient-to-b from-cyan-400 to-neutral-100 dark:to-primariDark ">
      <Image
        className="absolute top-0 md:-top-12"
        src="/assets/images/person/Earth.webp"
        alt="daniel rodriguez"
        width={1440}
        height={525}
      />
      <Image
        className="md absolute top-5 sm:top-0"
        src="/assets/images/person/face.webp"
        alt="daniel rodriguez"
        width={360}
        height={360}
      />
      <section className="z-10 grid min-h-[400px] max-w-[604px] justify-items-start gap-2 justify-self-end bg-mygradiente p-2 sm:w-2/3">
        <p className="rounded-lg bg-mygradiente p-1 font-titleSubtitle text-4xl font-bold">
          Frontend Developer / Designer UI/UX
        </p>
        <p className=" font-titleSubtitle text-5xl font-extrabold">
          Daniel Rodriguez
        </p>
        <p className=" font-textSegundary text-base font-medium md:text-lg">
          Creación de páginas web con implementación de UI/UX.
        </p>
        <button>
          <Link
            className="inline-block rounded-lg bg-segundaryDark px-2 py-1 font-textPrimary  text-base font-medium text-white hover:bg-tertiary md:text-lg"
            href={'/Contact'}
          >
            Contacto
          </Link>
        </button>
      </section>
    </section>
  )
}
