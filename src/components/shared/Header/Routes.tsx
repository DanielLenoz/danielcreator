import Link from 'next/link'
import { GoHomeFill } from 'react-icons/go'
import { MdLibraryBooks } from 'react-icons/md'
import { PiShareNetworkFill } from 'react-icons/pi'
import { RiShakeHandsFill, RiVerifiedBadgeFill } from 'react-icons/ri'

export const Routes = () => {
  const navLinks = [
    {
      href: '/',
      icon: <GoHomeFill />,
      text: 'Home',
    },
    {
      href: '/Servicios',
      icon: <RiShakeHandsFill />,
      text: 'Servicios',
    },
    {
      href: '/Certificados',
      icon: <RiVerifiedBadgeFill />,
      text: 'Certificados',
    },
    {
      href: '/Blogs',
      icon: <MdLibraryBooks />,
      text: 'Blogs',
    },
    {
      href: '/Contact',
      icon: <PiShareNetworkFill />,
      text: 'Redes/Contact',
    },
  ]

  return (
    <>
      {navLinks.map(({ href, icon, text }) => (
        <li>
          <Link
            className="flex items-center gap-1 border-b-2 border-transparent transition ease-in-out hover:border-slate-400  "
            key={text}
            href={href}
          >
            {icon}
            {text}
          </Link>
        </li>
      ))}
    </>
  )
}
