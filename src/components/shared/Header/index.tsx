'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { RiMenuLine, RiMoonFill, RiSunFill } from 'react-icons/ri'
import { Sidebar } from 'primereact/sidebar'
import { Routes } from './Routes'
import './style.model.css'

export const Header = () => {
  const storedThemes = localStorage.getItem('theme')
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false)
  const [darkTheme, setDarkTheme] = useState<boolean>(storedThemes === 'dark')

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
    localStorage.setItem('theme', !darkTheme ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkTheme)
    document.documentElement.classList.toggle('light', !darkTheme)
  }, [darkTheme])

  return (
    <>
      <header className="flex max-h-8 min-h-8 place-content-between items-center bg-mainBackgraound px-2 dark:bg-primariDark">
        <RiMenuLine
          className=" da h-6 w-6 cursor-pointer fill-current stroke-1 dark:fill-slate-100"
          onClick={() => setVisibleLeft(true)}
        />
        <Image
          className=" pt-1"
          src={
            darkTheme
              ? '/assets/icons/logo-white.svg'
              : '/assets/icons/logo-black.svg'
          }
          width={150}
          height={100}
          alt="Logo de la empresa"
          quality={100}
        />
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <RiMoonFill
            className="swap-on  h-6 w-6 fill-current dark:fill-slate-100"
            onClick={toggleTheme}
          />
          <RiSunFill
            className="swap-off h-6 w-6 fill-current dark:fill-slate-100  "
            onClick={toggleTheme}
          />
        </label>
      </header>

      <Sidebar
        visible={visibleLeft}
        position="left"
        onHide={() => setVisibleLeft(false)}
        className=" grid min-h-full w-64 flex-col bg-mainBackgraound px-2 dark:bg-primariDark"
      >
        <Image
          className=" mx-auto w-4/5 self-center pt-1"
          src={
            darkTheme
              ? '/assets/icons/logo-white.svg'
              : '/assets/icons/logo-black.svg'
          }
          width={200}
          height={200}
          alt="Logo de la empresa"
          quality={100}
        />
        <div className=" mb-2 h-[2px] bg-slate-400"></div>
        <ul className="grid gap-1 font-titleSubtitle text-2xl font-semibold">
          <Routes setVisibleLeft={setVisibleLeft} />
        </ul>
      </Sidebar>
    </>
  )
}
