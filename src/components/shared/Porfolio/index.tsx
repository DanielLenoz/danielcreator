import { SparklesCore } from 'app/components/aceternityUI/sparkles'
import { Modules } from './Modules'

export const Porfolio = () => {
  return (
    <section className="grid gap-2 pb-3">
      <h1 className=" text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
        My Porfolio
      </h1>
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-md ">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1}
            maxSize={5}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#3C7C98"
          />
        </div>
        <p className="text-center font-textPrimary text-base font-normal md:text-lg">
          Cada proyecto deja su huella digital, ya que es moldeado por el
          cliente. Esto hace que cada trabajo tenga su propia historia e
          identidad, reflejando quiénes somos y lo que aspiramos ser.
        </p>
      </div>
      <Modules />
    </section>
  )
}
