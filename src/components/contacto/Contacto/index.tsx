'use client'
// Import statements
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Interface for form data
interface FormData {
  user_name: string
  user_email: string
  message: string
}

// Contacto component
export const Contacto: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  })

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm('service_b9y8nxf', 'template_q7lnbmy', form.current ?? '', {
        publicKey: 'J0rpwA8wQ8a8gd1XM',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setFormData({ user_name: '', user_email: '', message: '' })
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <form
      className="grid h-[88%] w-full min-w-64 gap-1 rounded-lg border-b-4 border-segundaryDark bg-segundary pt-1 font-textPrimary text-base font-normal text-white md:min-w-[500px] md:text-lg"
      ref={form}
      onSubmit={sendEmail}
    >
      <input
        className="rounded-lg border-b-2 border-segundaryDark bg-transparent px-1 placeholder-slate-100 placeholder:italic focus:border-tertiary focus-visible:outline-none"
        placeholder="Tu nombre"
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={(e) =>
          setFormData({ ...formData, user_name: e.target.value })
        }
      />
      <input
        className="rounded-lg border-b-2 border-segundaryDark bg-transparent px-1 placeholder-slate-100 placeholder:italic focus:border-tertiary focus-visible:outline-none"
        placeholder="Tu Correo"
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={(e) =>
          setFormData({ ...formData, user_email: e.target.value })
        }
      />
      <textarea
        className="min-h-28 rounded-lg border-b-2 border-segundaryDark bg-transparent px-1 placeholder-slate-100 placeholder:italic focus:border-tertiary focus-visible:outline-none"
        placeholder="Que me quieres decir "
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <input
        className=" w-full cursor-pointer justify-self-center rounded-lg bg-segundaryDark py-1 font-medium text-white shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-tertiary"
        type="submit"
        value="Enviar Correo"
      />
    </form>
  )
}
