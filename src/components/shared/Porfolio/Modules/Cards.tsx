import Image from 'next/image'
import Link from 'next/link'

export const Cards = ({ projects }: { projects: any[] }) => {
  return (
    <>
      {projects?.map((projects) => {
        return (
          <section>
            <Image
              key={projects.id}
              src={projects.img?.small}
              width={140}
              height={525}
              alt={projects?.title}
            />

            <article>
              <p>{projects.title}</p>
              <Link href={projects.Links?.github}>aaaaaa</Link>
            </article>
            <article>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </article>
          </section>
        )
      })}
    </>
  )
}
