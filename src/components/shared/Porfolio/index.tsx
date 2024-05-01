import { Modules } from './Modules'

export const Porfolio = () => {
  return (
    <section className="grid gap-2 pb-3">
      <h1 className=" text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
        My Porfolio
      </h1>
      <p className="text-center font-textPrimary text-base font-normal md:text-lg">
        Cada proyecto deja su huella digital, ya que es moldeado por el cliente.
        Esto hace que cada trabajo tenga su propia historia e identidad,
        reflejando quiénes somos y lo que aspiramos ser.
      </p>
      <Modules />
    </section>
  )
}
