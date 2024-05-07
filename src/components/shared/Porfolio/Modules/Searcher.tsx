import { SearcherProps } from '.'

const options = [
  { value: 'Todos' },
  { value: 'Landing pages' },
  { value: 'Dynamic pages' },
]

export const Searcher: React.FC<SearcherProps> = ({
  setCategories,
  searchValue,
  setSearchValue,
}) => {
  return (
    <section className="mx-auto flex w-full place-content-between items-center overflow-hidden rounded-2xl border-2 border-segundary font-textPrimary text-base font-normal md:text-lg  ">
      <input
        className="input w-full bg-transparent focus-visible:border-none focus-visible:outline-none"
        type="text"
        value={searchValue}
        placeholder="Buscar"
        onChange={(event) =>
          setSearchValue(event.target.value.toLocaleLowerCase())
        }
      />
      <select
        className="mr-2 h-full w-28 border-l-2 border-segundary bg-transparent pl-2 dark:text-segundary text-segundaryDark focus-visible:border-none focus-visible:outline-none md:w-56"
        onChange={(event) =>
          setCategories(event.target.value.toLocaleLowerCase())
        }
      >
        {options.map(({ value }) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  )
}
