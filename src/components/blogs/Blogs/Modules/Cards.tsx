import Image from 'next/image'
import Link from 'next/link'

export const Cards = ({ Blogs }: { Blogs: any[] | null }) => {
  return (
    <section className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {Blogs?.map((blog) => {
        return (
          <section className=" relative grid max-h-[572px] max-w-[387px] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl shadow-slate-500">
            <Image
              className="rounded-2xl"
              key={blog.title}
              src={blog.img.small}
              alt={blog.title}
              width={390}
              height={230}
              quality={100}
            />
            <article className="grid gap-1 p-1">
              <h2 className=" text-center font-titleSubtitle text-2xl font-semibold ">
                {blog.title}
              </h2>
              <p className=" font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                {blog.hastag}
              </p>
              <p className=" font-textSegundary text-base font-normal md:text-lg">
                {blog.description}
              </p>
              <article className=" flex justify-between font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                <Link href={`/Blogs/${blog.id}`}>Leer mas</Link>
                <p>{blog.created_at}</p>
              </article>
            </article>
          </section>
        )
      })}
    </section>
  )
}
