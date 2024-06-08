import { supabase } from 'app/supabase/client'
import { Metadata } from 'next'
import { CertificateSections } from 'app/components/certificados/CertificateSections'
import { SparklesCore } from 'app/components/aceternityUI/sparkles'

export const metadata: Metadata = {
  title: 'DanielCreator: Certificados',
  description: 'Todos los Certificados de DanielCreator',
  keywords: [
    'tecnologia',
    'ingles',
    'diseño',
    'liderasgo',
    'diversas habilidades',
    'daniel',
    'rodriguez',
    'platzi',
    'cursos',
    'Certificados',
  ],
}

export default async function Home() {
  let { data: Certificates, error } = await supabase
    .from('Certificates')
    .select('*')

  return (
    <main className="grid  px-2 pb-3 md:px-32">
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-md ">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1}
            maxSize={5}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#3C7C98"
          />
        </div>
        <p className=" mb-3 text-center font-titleSubtitle text-3xl font-semibold">
          la sabiduría es importante pero mas es el entendimiento para entender
          sabiduría y conomiento, la voluntad es el principio de la creación
        </p>
      </div>

      {Certificates?.map((data) => (
        <>
          <CertificateSections title={data?.title} data={data} />
        </>
      ))}
    </main>
  )
}
