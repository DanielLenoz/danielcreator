import { supabase } from 'app/supabase/client'
import { CertificateSections } from 'app/components/certificados/CertificateSections'

export default async function Home() {
  let { data: Certificates, error } = await supabase
    .from('Certificates')
    .select('*')

  return (
    <main className="grid  px-2 pb-3 md:px-32">
      <p className="mb-3 text-center font-titleSubtitle text-3xl font-semibold">
        la sabiduría es importante pero mas es el entendimiento para entender
        sabiduría y conomiento, la voluntad es el principio de la creación
      </p>
      {Certificates?.map((data) => (
        <>
          <CertificateSections title={data?.title} data={data} />
        </>
      ))}
    </main>
  )
}
