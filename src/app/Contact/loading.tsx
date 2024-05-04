export default function Loading() {
  return (
    <main className=" grid min-h-[324px] gap-3 px-2 py-3 md:px-32">
      <section className="relative z-10 grid gap-3 md:grid-cols-2">
        <article className=" grid h-full w-full max-w-[550px] gap-2  ">
          <h1 className="skeleton h-4 w-28 bg-gray-500 "></h1>
          <p className=" skeleton h-10 w-full bg-gray-500 "></p>
          <p className="skeleton h-8 w-full bg-gray-500 "></p>
          <article className="z-10 flex flex-wrap gap-2  justify-self-end">
            <div className="skeleton h-5 w-5 rounded-full bg-gray-500 "></div>
            <div className="skeleton h-5 w-5 rounded-full bg-gray-500 "></div>
            <div className="skeleton h-5 w-5 rounded-full bg-gray-500 "></div>
          </article>
        </article>
        <article className="h-full w-full max-w-[550px]">
          <h1 className=" skeleton mb-1 h-4 w-28 bg-gray-500"></h1>
          <section className="grid h-full w-full justify-items-center gap-2">
            <div className=" skeleton h-40 w-full bg-gray-500  "></div>
            <div className=" skeleton h-5 w-36 bg-gray-500 "></div>
          </section>
        </article>
      </section>
    </main>
  )
}
