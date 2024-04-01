import { Searcher } from './Searcher'

export const Porfolio = () => {
  return (
    <section className="grid gap-2">
      <Searcher />
      <h1 className=" text-center font-titleSubtitle text-3xl font-semibold">
        My Porfolio
      </h1>
      <p className="text-center font-textPrimary text-base font-normal">
        cada proyecto tiene su huella digital por el cliente haciendo que cada
        trabajo tenga su historia y identidad de quien es y de que quieres ser
      </p>
    </section>
  )
}
