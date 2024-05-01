import Image from 'next/image'

export const HomePages = () => {
  return (
    <section className="relative grid h-screen max-h-[525px] items-center bg-gradient-to-b from-cyan-400 to-neutral-100">
      <Image
        className=" absolute top-0"
        src={'/assets/images/services/imagebg.webp'}
        width={300}
        height={530}
        alt={'mundo'}
        quality={100}
      />
      <Image
        className=" rotate-y-180 absolute right-0 top-0 hidden md:block"
        src={'/assets/images/services/imagebg.webp'}
        width={300}
        height={530}
        alt={'mundo'}
        quality={100}
      />
      <article className="z-10 flex max-w-3xl flex-col gap-2 justify-self-center px-2 text-center md:px-32">
        <h1 className=" rounded-lg bg-mygradiente p-1 font-titleSubtitle text-3xl font-semibold md:text-4xl">
          Crea tu huella digital o digitaliza tu negocio
        </h1>
        <p className=" font-textPrimary text-base font-medium md:text-lg">
          Cuando tienes un negocio o presencia digital, formas parte del nuevo
          mundo digital
        </p>
        <p className=" font-textPrimary text-base font-medium md:text-lg">
          Con nuestra ayuda, podrás tener tu portafolio digital o transformar tu
          negocio en uno digital
        </p>
      </article>
    </section>
  )
}
