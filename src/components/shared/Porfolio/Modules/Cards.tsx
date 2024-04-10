import Image from 'next/image'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { RiGithubFill } from 'react-icons/ri'

export const Cards = ({ projects }: { projects: any[] }) => {
  return (
    <section className="flex flex-wrap justify-center gap-2">
      {projects?.map((projects) => {
        return (
          <section className=" relative grid max-h-[246] max-w-[390] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl">
            <Image
              key={projects.id}
              src={projects.img?.small}
              width={400}
              height={300}
              alt={projects?.title}
            />

            <article className=" bg-mygradiente absolute grid max-w-80 gap-2 rounded-2xl p-2">
              <p className=" text-center font-titleSubtitle text-2xl font-semibold">
                {projects.title}
              </p>
              <button>
                <Link
                  className="rounded-2xl bg-segundaryDark px-2 py-[4px] text-center font-textPrimary text-base font-medium text-white"
                  href={`/${projects.title}`}
                >
                  Mas Información
                </Link>
              </button>
            </article>
            <article>
              <div className="group absolute -bottom-[10px] -left-[10px] grid items-center justify-items-center">
                <Link
                  href={projects.Links?.github}
                  className=" bg-mygradiente z-10 grid h-9 w-9 items-center justify-center  rounded-full"
                >
                  <RiGithubFill className="h-6 w-6 fill-segundaryDark" />
                </Link>
                <div className=" group-hover:bg-mygradiente absolute h-24 w-24 rounded-full group-hover:animate-pulse "></div>
              </div>
              <div className="group absolute -bottom-[10px] -right-[10px] grid items-center justify-items-center">
                <Link
                  href={projects.Links?.website}
                  className=" bg-mygradiente z-10 grid h-9 w-9 items-center justify-center  rounded-full"
                >
                  <CiGlobe className="h-6 w-6 fill-segundaryDark" />
                </Link>
                <div className=" group-hover:bg-mygradiente absolute h-24 w-24 rounded-full group-hover:animate-pulse"></div>
              </div>
            </article>
          </section>
        )
      })}
    </section>
  )
}
