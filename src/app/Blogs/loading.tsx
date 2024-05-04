export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton bg-gray-500.
  return (
    <>
      {/* homepages */}
      <div className="skeleton  min-h-[400px] w-full  bg-gray-500"></div>
      <div className="grid gap-3 px-2 md:px-32">
        {/* Blogs */}
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
