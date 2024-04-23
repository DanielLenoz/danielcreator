import { useState } from 'react'
import { SearcherProps } from '.'

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
  searchValue,
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

  return (
    <section className=" mx-auto flex w-full flex-col place-content-between items-center gap-1 font-textPrimary text-base font-normal lg:flex-row ">
      <input
        className="font-roboto input w-full rounded-full border-2 border-segundary bg-transparent text-base font-normal focus-visible:border-segundary focus-visible:outline-none"
        type="text"
        value={searchValue}
        placeholder="Que idea te llama la atención"
        onChange={(event) =>
          setSearchValue(event.target.value.toLocaleLowerCase())
        }
      />

      <div
        role="tablist"
        className="tabs tabs-lifted w-72 overflow-hidden  sm:w-full"
      >
        {activeTabs.map((tab, index) => (
          <a
            key={index}
            role="tab"
            className={`tab [--tab-bg:#99BAC7] [--tab-border-color:#0E3A4D]  ${tab.active ? 'tab-active text-white' : ''}`}
            onClick={() => handleClick(index, tab.title)}
          >
            {tab.title}
          </a>
        ))}
      </div>
    </section>
  )
}
