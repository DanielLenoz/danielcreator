export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton bg-gray-500.
  return (
    <>
      {/* homepages */}
      <div className="skeleton  min-h-[400px] w-full  bg-gray-500"></div>
      {/* conter */}
      <div className="grid gap-3 px-2 md:px-32">
        <h1 className=" skeleton mt-3 h-4 w-full bg-gray-500"></h1>
        <div className="skeleton h-10 w-48 bg-gray-500"></div>
        <section className="skeleton grid h-[500px] w-full gap-1 bg-gray-500 "></section>
        <article className="flex justify-between">
          <p className=" skeleton h-4 w-full bg-gray-500"></p>
          <p className=" skeleton h-4 w-full bg-gray-500"></p>
        </article>
        <article className="flex flex-wrap gap-1 ">
          <button className="skeleton h-8 w-28 bg-gray-500"></button>
          <button className=" skeleton h-8 w-28 bg-gray-500"></button>
        </article>
        {/* porfolio */}
        <h1 className=" skeleton h-4 w-full bg-gray-500"></h1>
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
