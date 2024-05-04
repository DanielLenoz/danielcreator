export default function Loading() {
  return (
    <>
      {/* homepages */}
      <div className="skeleton  min-h-[400px] w-full  bg-gray-500"></div>
      {/* services */}
      <div className="grid gap-3 px-2 md:px-32">
        <section className="grid gap-2">
          <article className="mt-3 flex flex-col items-center gap-2 xl:flex-row">
            <section className="grid h-full max-h-[630px] w-full max-w-[600px] justify-items-start gap-2">
              <h2 className="skeleton h-4 w-full bg-gray-500"></h2>
              <p className="skeleton h-full min-h-[200px] w-full bg-gray-500"></p>
              <button className="skeleton h-4  w-full bg-gray-500 "></button>
              <button className="skeleton h-4  w-full bg-gray-500 "></button>
            </section>
            <div className="skeleton min-h-[490px] w-full max-w-[540px] rounded-2xl bg-gray-500" />
          </article>
          <article className="flex flex-col items-center gap-2 xl:flex-row-reverse">
            <section className="grid h-full max-h-[207px] w-full max-w-[628px] items-start gap-2">
              <h2 className="skeleton h-4 w-full bg-gray-500"></h2>
              <p className="skeleton h-full min-h-[170px] w-full bg-gray-500"></p>
            </section>
            <div className="skeleton min-h-[265px] w-full max-w-[540px] rounded-2xl bg-gray-500" />
          </article>
          <article className="flex flex-col items-center gap-2 xl:flex-row">
            <section className="grid h-full max-h-[207px] w-full max-w-[628px] items-start gap-2">
              <h2 className="skeleton h-4 w-full bg-gray-500"></h2>
              <p className="skeleton h-full min-h-[170px] w-full bg-gray-500"></p>
            </section>
            <div className="skeleton min-h-[265px] w-full max-w-[540px] rounded-2xl bg-gray-500" />
          </article>
          <article className="flex flex-col items-center gap-2 xl:flex-row-reverse">
            <section className="grid h-full max-h-[207px] w-full max-w-[628px] items-start gap-2">
              <h2 className="skeleton h-4 w-full bg-gray-500"></h2>
              <p className="skeleton h-full min-h-[170px] w-full bg-gray-500"></p>
            </section>
            <div className="skeleton min-h-[265px] w-full max-w-[540px] rounded-2xl bg-gray-500" />
          </article>
        </section>
        {/* experiences */}
        <section>
          <h1 className="skeleton h-4 w-full bg-gray-500"></h1>
          <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
            <li>
              <article className="timeline-start mb-10 grid gap-[4px] md:text-end">
                <time className=" skeleton h-4 w-10 bg-gray-500 "></time>
                <h2 className="skeleton h-4  w-10 bg-gray-500 "></h2>
                <p className="skeleton h-56 w-[270px] bg-gray-500"></p>
              </article>
              <hr className="skeleton bg-gray-500" />
            </li>
            <li>
              <hr className="skeleton bg-gray-500" />
              <article className="timeline-end mb-10 grid gap-[4px]">
                <time className=" skeleton h-4 w-10 bg-gray-500 "></time>
                <h2 className="skeleton h-4  w-10 bg-gray-500 "></h2>
                <p className="skeleton h-56 w-[270px] bg-gray-500"></p>
              </article>
            </li>
          </ul>
        </section>
        {/* porfolio */}
        <h1 className=" skeleton h-4 w-full bg-gray-500"></h1>
        <p className="skeleton h-4 w-full bg-gray-500"></p>
        <section className=" flex w-full place-content-between items-center rounded-2xl ">
          <div className="skeleton h-4 w-full bg-gray-500"></div>
          <div className="skeleton h-4 w-7 bg-gray-500"></div>
        </section>
        <section className="flex flex-wrap justify-center gap-2 pb-3">
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
        </section>
      </div>
    </>
  )
}
