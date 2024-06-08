import Image from 'next/image'
import { supabase } from 'app/supabase/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Content } from 'app/components/blogs/Blogs'
import { Metadata } from 'next'
import { TracingBeam } from 'app/components/aceternityUI/tracing-beam'

export const metadata: Metadata = {
  title: 'DanielCreator: Blog',
  description: 'Blog creador por DanielCreator',
  keywords: [
    'tecnologia',
    'ingles',
    'diseño',
    'liderasgo',
    'historias',
    'eventos',
    'proyectos',
    'experiencias',
    'daniel',
    'rodriguez',
  ],
}

interface Blogs {
  params: {
    blogs: string[]
  }
}

export default async function Projects(props: Blogs) {
  const { blogs } = props.params

  let { data: Blogs, error } = await supabase.from('Blogs').select('*')

  const filterBlogs = Blogs?.filter((data) => data.id == blogs)

  return (
    <main className="grid gap-3 px-2 pb-2 md:px-32">
      {filterBlogs?.map((blog) => (
        <>
          <Image
            className=" rounded-2xl md:hidden"
            key={blog.id}
            src={blog.img?.small}
            width={1200}
            height={320}
            alt={blog?.title}
            quality={100}
          />
          <Image
            className="hidden rounded-2xl md:block"
            key={blog.id}
            src={blog.img?.full}
            width={1200}
            height={320}
            alt={blog?.title}
            quality={100}
          />
          <section className="mb-1 grid gap-2 md:hidden">
            <h1 className=" font-titleSubtitle text-2xl font-semibold md:text-3xl">
              {blog.title}
            </h1>
            <article className="flex justify-between font-textSegundary text-base font-medium md:text-lg">
              <p className=" text-segundaryDark dark:text-segundary">
                {blog.hastag}
              </p>
              <time itemProp="datePublished" dateTime={blog.created_at}>
                {blog.created_at}
              </time>
            </article>
            <section className="grid gap-1 font-textSegundary text-base font-normal md:text-lg">
              <MDXRemote source={blog.content} />
            </section>
          </section>
          <TracingBeam className=" hidden md:block">
            <section className="mb-1 grid gap-2">
              <h1 className=" font-titleSubtitle text-2xl font-semibold md:text-3xl">
                {blog.title}
              </h1>
              <article className="flex justify-between font-textSegundary text-base font-medium md:text-lg">
                <p className=" text-segundaryDark dark:text-segundary">
                  {blog.hastag}
                </p>
                <time itemProp="datePublished" dateTime={blog.created_at}>
                  {blog.created_at}
                </time>
              </article>
              <section className="grid gap-1 font-textSegundary text-base font-normal md:text-lg">
                <MDXRemote source={blog.content} />
              </section>
            </section>
          </TracingBeam>
        </>
      ))}
      <Content />
    </main>
  )
}
