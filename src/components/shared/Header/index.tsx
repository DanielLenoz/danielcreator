import Image from 'next/image'
import { RiMenuLine, RiMoonFill, RiSunFill } from 'react-icons/ri'
import { Routes } from './Routes'

export const Header = () => {
  return (
    <header className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      {/* Navbar */}
      <nav className="drawer-content flex  max-h-8 min-h-8 place-content-between items-center px-2 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <RiMenuLine className="h-6 w-6 fill-slate-950 stroke-1" />
        </label>
        <Image
          className="h-full w-full pt-1"
          src="/assets/icons/logo-black.svg"
          width={100}
          height={100}
          alt="Logo de la empresa"
          quality={100}
        />
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <RiSunFill className="swap-on h-6 w-6 fill-current" />
          <RiMoonFill className="swap-off h-6 w-6 fill-current" />
        </label>
      </nav>
      {/* Drawer */}
      <aside className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <article className="flex min-h-full w-64 flex-col bg-mainBackgraound px-2 ">
          <Image
            className="w-2/3 self-center pt-1"
            src="/assets/icons/logo-black.svg"
            width={100}
            height={100}
            alt="Logo de la empresa"
            quality={100}
          />
          <div className=" h-[2px] bg-slate-400 "></div>
          <ul className="grid gap-1 font-titleSubtitle text-2xl font-semibold ">
            <Routes />
          </ul>
        </article>
      </aside>
    </header>
  )
}
