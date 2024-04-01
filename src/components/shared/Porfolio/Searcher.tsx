'use client'
import React, { useState } from 'react'

const options = [
  { value: 'Todos' },
  { value: 'Landing pages' },
  { value: 'Dynamic pages' },
]

export const Searcher = () => {
  const [selectedValue, setSelectedValue] = useState('Todos')
  const [searchValue, setSearchValue] = useState('')

  console.log(selectedValue)
  console.log(searchValue)

  return (
    <section className="mx-auto flex w-full place-content-between items-center overflow-hidden rounded-2xl border-2 border-segundary font-textPrimary text-base font-normal ">
      <input
        className="font-roboto input w-full bg-transparent text-base font-normal focus-visible:border-none focus-visible:outline-none"
        type="text"
        value={searchValue}
        placeholder="Buscar"
        onChange={(event) =>
          setSearchValue(event.target.value.toLocaleLowerCase())
        }
      />
      <select
        className="mr-2 h-full w-24 border-l-2 border-segundary bg-transparent pl-2 focus-visible:border-none focus-visible:outline-none"
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        {options.map(({ value }) => (
          <option key={value} value={value} >
            {value}
          </option>
        ))}
      </select>
    </section>
  )
}
