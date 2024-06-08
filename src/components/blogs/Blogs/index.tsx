import { SparklesCore } from 'app/components/aceternityUI/sparkles'
import { Modules } from './Modules'

export const Content = () => {
  return (
    <>
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
        <p className=" text-center font-titleSubtitle text-2xl font-semibold md:text-3xl">
          Solo la lectura hace crecer el alma, permitiéndonos comprender la
          sabiduría y emocionarnos con cada historia
        </p>
      </div>
      <Modules />
    </>
  )
}
