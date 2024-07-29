import { Vortex } from 'app/components/aceternityUI/vortex'
import BoxReveal from 'app/components/magicUI/box-reveal'
import Image from 'next/image'
import { ImDownload2 } from 'react-icons/im'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'

export const HomePage = async () => {
  return (
    <section className="relative grid max-h-[525px] overflow-hidden bg-gradient-to-b from-cyan-400 to-neutral-100 shadow dark:to-primariDark">
      <Vortex
        backgroundColor="#00000000"
        rangeY={800}
        particleCount={900}
        baseHue={150}
        baseRadius={4}
        className=" relative grid max-h-[525px] overflow-hidden"
      >
        <Image
          className="absolute top-0 md:-top-12"
          src="/assets/images/person/Earth.webp"
          alt="daniel rodriguez"
          width={1440}
          height={525}
          quality={100}
        />
        <Image
          className=" absolute top-5 sm:top-0 md:left-28"
          src="/assets/images/person/face.webp"
          alt="daniel rodriguez"
          width={360}
          height={360}
          quality={100}
        />
        <section className=" z-10 grid min-h-[400px] max-w-[604px] justify-items-start gap-2 justify-self-end bg-mygradiente p-2 sm:w-1/2 md:w-2/3 lg:pr-36 ">
          <BoxReveal boxColor={'#0E3A4D'} duration={0.5}>
            <p className="rounded-lg bg-mygradiente p-1 font-titleSubtitle text-4xl font-bold">
              Frontend Developer / Designer UI/UX
            </p>
          </BoxReveal>
          <BoxReveal boxColor={'#0E3A4D'} duration={0.5}>
            <p className=" font-titleSubtitle text-5xl font-extrabold">
              Daniel Rodriguez
            </p>
          </BoxReveal>
          <BoxReveal boxColor={'#0E3A4D'} duration={0.5}>
            <p className=" font-textSegundary text-base font-medium md:text-lg">
              Creación de páginas web con implementación de UI/UX.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={'#0E3A4D'} duration={0.5}>
            <article className="z-10 flex flex-wrap gap-2 px-2">
              <a
                href="https://drive.google.com/file/d/1afpRDN5QE40RhCR1QP371MPEzobYQoEX/view?usp=sharing"
                target="_blank"
                className=" transition ease-in-out hover:scale-125 "
              >
                <ImDownload2 className=" h-6 w-6 fill-black dark:fill-white" />
              </a>
              <a
                href="https://github.com/DanielLenoz"
                target="_blank"
                className=" transition ease-in-out hover:scale-125 "
              >
                <RiGithubFill className=" h-6 w-6 fill-black dark:fill-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/"
                target="_blank"
                className=" transition ease-in-out hover:scale-125 "
              >
                <RiLinkedinFill className=" h-6 w-6 fill-black dark:fill-white" />
              </a>
            </article>
          </BoxReveal>
        </section>
      </Vortex>
    </section>
  )
}
