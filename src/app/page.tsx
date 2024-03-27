import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <section className="relative grid max-h-[525px] overflow-hidden">
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
        <section className="mygradiente z-10 grid min-h-[400px] max-w-[604px] justify-items-start gap-2 justify-self-end p-2">
          <p className="font-titleSubtitle mygradiente rounded-lg p-1 text-4xl font-bold">
            Frontend Developer / Designer UI/UX
          </p>
          <p className=" font-titleSubtitle text-5xl font-extrabold">
            Daniel Rodriguez
          </p>
          <p className=" font-textPrimary text-base font-medium">
            Creacion de paginas web com plememntaicon UI/UX
          </p>
          <button>
            <Link
              className=" font-textPrimary inline-block rounded-lg bg-segundaryDark px-2  py-1 text-base font-medium text-white"
              href={'/contacto'}
            >
              Contacto
            </Link>
          </button>
        </section>
      </section>
    </main>
  )
}
