import Image from 'next/image'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { RiGithubFill } from 'react-icons/ri'

export const Cards = ({ projects }: { projects: any[] | null }) => {
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
              quality={100}
            />

            <article className=" absolute grid max-w-60 gap-2 rounded-2xl bg-mygradiente p-2 sm:max-w-80">
              <p className=" text-center font-titleSubtitle text-2xl font-semibold">
                {projects.title}
              </p>
              <button>
                <Link
                  className="hover:bg-tertiary rounded-lg bg-segundaryDark px-2 py-1 text-center font-textPrimary text-base font-medium text-white"
                  href={`/Projects/${projects.id}`}
                >
                  Mas Información
                </Link>
              </button>
            </article>
            <article>
              <div className="group absolute -bottom-[10px] -left-[10px] grid items-center justify-items-center">
                <Link
                  href={projects.Links?.github}
                  className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
                >
                  <RiGithubFill className="h-6 w-6 fill-segundaryDark" />
                </Link>
                <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente "></div>
              </div>
              <div className="group absolute -bottom-[10px] -right-[10px] grid items-center justify-items-center">
                <Link
                  href={projects.Links?.website}
                  className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
                >
                  <CiGlobe className="h-6 w-6 fill-segundaryDark" />
                </Link>
                <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente"></div>
              </div>
            </article>
          </section>
        )
      })}
    </section>
  )
}
