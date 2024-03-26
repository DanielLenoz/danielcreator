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
      href: '/servicios',
      icon: <RiShakeHandsFill />,
      text: 'Servicios',
    },
    {
      href: '/certificados',
      icon: <RiVerifiedBadgeFill />,
      text: 'Certificados',
    },
    {
      href: '/blog',
      icon: <MdLibraryBooks />,
      text: 'Blog',
    },
    {
      href: '/contact',
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
