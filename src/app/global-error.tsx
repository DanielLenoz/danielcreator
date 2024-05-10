'use client'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="grid justify-center justify-items-center gap-2 bg-primariDark px-2 py-3 md:px-32">
          <RiErrorWarningFill className=" h-52 w-52 fill-tertiary dark:fill-segundary" />
          <h1 className=" text-center font-titleSubtitle text-2xl font-semibold md:text-4xl">
            Al Parecer hubo un ERROR!
          </h1>
          <button
            className=" rounded-lg bg-segundary px-2 py-1 font-textPrimary text-base font-medium shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-cyan-700 md:text-lg"
            onClick={() => reset()}
          >
            Intentar otra vez
          </button>
        </main>
      </body>
    </html>
  )
}
