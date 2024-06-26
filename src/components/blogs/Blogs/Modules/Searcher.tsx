import { useState } from 'react'
import { SearcherProps } from '.'
import { PlaceholdersAndVanishInput } from 'app/components/aceternityUI/placeholders-and-vanish-input-blogs'

interface Tab {
  title: string
  active: boolean
}
const tabs: Tab[] = [
  { title: 'Todos', active: true },
  { title: '#Blogs', active: false },
  { title: '#Eventos', active: false },
  { title: '#Proyectos', active: false },
]

export const Searcher: React.FC<SearcherProps> = ({
  setCategories,
  setSearchValue,
}) => {
  const [activeTabs, setActiveTabs] = useState<Tab[]>(tabs)

  const handleClick = (index: number, title: string) => {
    const updatedTabs = activeTabs.map((tab, i) => ({
      ...tab,
      active: i === index ? true : false,
    }))
    setCategories(title.toLocaleLowerCase())
    setActiveTabs(updatedTabs)
  }

  const placeholders = [
    'Que Blogs te gustaria ver?',
    'hay algun lugar que quieras conocer?',
    'Que lenguaje de programacion utilizas?',
    'Cada cuanto escribes?',
    'Mantienes tus pensamientos en orden?',
    'Que es lo que esperas leer?',
  ]

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className=" mx-auto flex w-full flex-col place-content-between items-center gap-1 font-textSegundary text-base font-normal md:text-lg lg:flex-row ">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(event) =>
          setSearchValue(event.target.value.toLocaleLowerCase())
        }
        onSubmit={onSubmit}
      />

      <div
        role="tablist"
        className="tabs tabs-lifted w-72 overflow-x-auto sm:w-10/12 sm:overflow-hidden"
      >
        {activeTabs.map((tab, index) => (
          <a
            key={index}
            role="tab"
            className={`tab [--tab-bg:#99BAC7] [--tab-border-color:#0E3A4D] dark:[--tab-bg:#3C7C98] dark:[--tab-border-color:#99BAC7]  ${tab.active ? 'tab-active text-white' : ''}`}
            onClick={() => handleClick(index, tab.title)}
          >
            {tab.title}
          </a>
        ))}
      </div>
    </section>
  )
}
