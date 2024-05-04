export default function Loading() {
  return (
    <>
      <div className="grid gap-3 px-2 md:px-32">
        <div className="skeleton  min-h-[400px] w-full  bg-gray-500"></div>
        <h1 className=" skeleton mt-3 h-4 w-full bg-gray-500"></h1>
        <article className="flex justify-between">
          <p className=" skeleton h-4 w-full bg-gray-500"></p>
          <p className=" skeleton h-4 w-full bg-gray-500"></p>
        </article>
        <section className="skeleton grid h-[500px] w-full gap-1 bg-gray-500 "></section>
        {/* porfolio */}
        <p className="skeleton h-8 w-full bg-gray-500 pt-3"></p>
        <section className=" flex w-full place-content-between items-center rounded-2xl ">
          <div className="skeleton h-4 w-full bg-gray-500"></div>
          <div className="skeleton h-4 w-full bg-gray-500"></div>
        </section>
        <section className="flex flex-wrap justify-center gap-2">
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
          <div className=" skeleton h-[365px] w-[280px] bg-gray-500 "></div>
        </section>
      </div>
    </>
  )
}
