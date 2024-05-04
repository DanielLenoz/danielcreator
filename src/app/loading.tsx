export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton bg-gray-500.
  return (
    <>
      {/* homepages */}
      <div className="skeleton  min-h-[400px] w-full  bg-gray-500"></div>
      {/* about and frameworks */}
      <div className="grid gap-3 px-2 md:px-32">
        <section className=" grid gap-2 pt-5 md:grid-cols-2 ">
          <article className=" grid gap-1">
            <h1 className="skeleton h-4 w-full bg-gray-500"></h1>
            <p className="skeleton h-10 w-full bg-gray-500"></p>
            <p className="skeleton h-10 w-full bg-gray-500"></p>
          </article>
          <section className="">
            <p className="skeleton h-4 w-full bg-gray-500"></p>
            <article className="skeleton h-96 w-full bg-gray-500"></article>
          </section>
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
        <section className="flex flex-wrap justify-center gap-2">
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
          <div className=" skeleton h-60 w-64 bg-gray-500 "></div>
        </section>
      </div>
    </>
  )
}
