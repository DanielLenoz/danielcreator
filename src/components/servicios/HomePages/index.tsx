import { GlobeDemo } from 'app/components/aceternityUI/globe'

export const HomePages = () => {
  return (
    <section className="relative grid h-screen max-h-[525px] items-center bg-gradient-to-b from-cyan-400 to-neutral-100 dark:to-primariDark">
      <article className=" absolute w-full   sm:w-9/12 sm:-left-1/3">
        <GlobeDemo />
      </article>
      <article className=" absolute -right-1/3 hidden w-9/12 sm:block">
        <GlobeDemo />
      </article>
      <article className="z-30 flex max-w-3xl flex-col gap-2 justify-self-center px-2 text-center md:px-32">
        <h1 className=" rounded-lg bg-mygradiente p-1 font-titleSubtitle text-3xl font-semibold md:text-4xl">
          Crea tu huella digital o digitaliza tu negocio
        </h1>
        <p className=" font-textPrimary text-base font-medium text-white sm:text-black dark:sm:text-white md:text-lg ">
          Cuando tienes un negocio o presencia digital, formas parte del nuevo
          mundo digital
        </p>
        <p className=" font-textPrimary text-base font-medium text-white sm:text-black dark:sm:text-white md:text-lg">
          Con nuestra ayuda, podrás tener tu portafolio digital o transformar tu
          negocio en uno digital
        </p>
      </article>
    </section>
  )
}
