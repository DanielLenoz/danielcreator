import { supabase } from 'app/supabase/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { RiGithubFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'
import { Cards } from 'app/components/shared/Porfolio/Modules/Cards'

interface Projects {
  params: {
    projects: string[]
  }
}

export default async function Projects(props: Projects) {
  const { projects } = props.params
  let { data: Projects, error } = await supabase.from('Projects').select('*')

  const filterProjects = Projects?.filter((data) => data.id == projects)

  return (
    <main className="grid gap-3 px-2 pb-2 md:px-32">
      {filterProjects?.map((project) => {
        return (
          <>
            <Image
              className=" md:hidden"
              key={project.id}
              src={project.img?.small}
              width={1200}
              height={320}
              alt={project?.title}
              quality={100}
            />
            <Image
              className="hidden md:block"
              key={project.id}
              src={project.img?.full}
              width={1200}
              height={320}
              alt={project?.title}
              quality={100}
            />
            <h1 className=" font-titleSubtitle text-2xl font-semibold">
              {project.title}
            </h1>

            <section className="flex">
              {project.imgFrameworks.map((img: { img: string }) => {
                return (
                  <Image
                    className="mr-[-24px] "
                    key={null}
                    src={img?.img}
                    width={60}
                    height={80}
                    alt={project?.title}
                    quality={100}
                  />
                )
              })}
            </section>
            <section className="grid gap-1 font-textPrimary text-base font-normal">
              <MDXRemote source={project.content} />
            </section>
            <article className="flex justify-between font-textSegundary text-base font-medium text-segundaryDark">
              <p>{project.hastag}</p>
              <p>{project.created_at}</p>
            </article>

            <article className="flex flex-wrap gap-1">
              <button className=" rounded-2xl bg-segundaryDark px-2 py-1 hover:bg-tertiary">
                <Link
                  href={project.Links.github}
                  className="flex items-center text-white"
                >
                  <RiGithubFill className="mr-1 h-6 w-6 fill-white" />
                  Repositorio
                </Link>
              </button>
              <button className="rounded-2xl bg-segundaryDark px-2 py-1">
                <Link
                  href={project.Links.website}
                  className="flex items-center text-white"
                >
                  <CiGlobe className="mr-1 h-6 w-6 fill-white" />
                  Pagina web
                </Link>
              </button>
            </article>
          </>
        )
      })}
      <section>
        <h1 className=" pb-2 text-center font-titleSubtitle text-2xl font-semibold">
          Ultimos Trabajos
        </h1>
        <Cards projects={Projects} />
      </section>
    </main>
  )
}
