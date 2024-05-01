'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { RiMenuLine, RiMoonFill, RiSunFill } from 'react-icons/ri'
import { Sidebar } from 'primereact/sidebar'
import { Routes } from './Routes'
import './style.model.css'

export const Header = () => {
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false)
  return (
    <>
      <header className="flex max-h-8 min-h-8 place-content-between items-center px-2">
        <RiMenuLine
          className=" h-6 w-6 cursor-pointer fill-slate-950 stroke-1"
          onClick={() => setVisibleLeft(true)}
        />
        <Image
          className=" pt-1"
          src="/assets/icons/logo-black.svg"
          width={150}
          height={100}
          alt="Logo de la empresa"
          quality={100}
        />
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <RiSunFill className="swap-on h-6 w-6 fill-current" />
          <RiMoonFill className="swap-off h-6 w-6 fill-current" />
        </label>
      </header>

      <Sidebar
        visible={visibleLeft}
        position="left"
        onHide={() => setVisibleLeft(false)}
        className=" grid min-h-full w-64 flex-col bg-mainBackgraound px-2"
      >
        <Image
          className=" mx-auto w-4/5 self-center pt-1"
          src="/assets/icons/logo-black.svg"
          width={200}
          height={200}
          alt="Logo de la empresa"
          quality={100}
        />
        <div className=" mb-2 h-[2px] bg-slate-400"></div>
        <ul className="grid gap-1 font-titleSubtitle text-2xl font-semibold ">
          <Routes setVisibleLeft={setVisibleLeft} />
        </ul>
      </Sidebar>
    </>
  )
}
