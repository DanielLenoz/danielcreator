import Image from 'next/image'
import { supabase } from 'app/supabase/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { RiGithubFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'
import { Cards } from 'app/components/shared/Porfolio/Modules/Cards'
import { Modules } from 'app/components/shared/Porfolio/Modules'

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
            <h1 className=" font-titleSubtitle text-2xl font-semibold md:text-4xl">
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
            <section className="grid gap-1 font-textPrimary text-base font-normal md:text-lg">
              <MDXRemote source={project.content} />
            </section>
            <article className="flex justify-between font-textSegundary text-base font-medium text-segundaryDark md:text-lg">
              <p>{project.hastag}</p>
              <p>{project.created_at}</p>
            </article>

            <article className="flex flex-wrap gap-1 font-textPrimary text-base font-medium md:text-lg ">
              <a href="http://"></a>
              <button className=" rounded-2xl bg-segundaryDark px-2 py-1 hover:bg-tertiary">
                <a
                  className="flex items-center text-white"
                  href={project.Links.github}
                  target="_blank"
                >
                  <RiGithubFill className="mr-1 h-6 w-6 fill-white" />
                  Repositorio
                </a>
              </button>
              <button className="rounded-2xl bg-segundaryDark px-2 py-1">
                <a
                  className="flex items-center text-white"
                  href={project.Links.website}
                  target="_blank"
                >
                  <CiGlobe className="mr-1 h-6 w-6 fill-white" />
                  Pagina web
                </a>
              </button>
            </article>
          </>
        )
      })}
      <section className="grid gap-3">
        <h1 className="pt-2 text-center font-titleSubtitle text-2xl font-semibold md:text-3xl">
          Continúa explorando más de mis trabajos
        </h1>
        <Modules />
        {/* <Cards projects={Projects} /> */}
      </section>
    </main>
  )
}
