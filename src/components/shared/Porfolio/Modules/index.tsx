'use client'
import { useEffect, useState } from 'react'
import { supabase } from 'app/supabase/client'
import { DataType } from 'app/supabase/database.types'
import { Cards } from './Cards'
import { Searcher } from './Searcher'

export interface SearcherProps {
  setCategories: (value: string) => void
  searchValue: string
  setSearchValue: (value: string) => void
}

export const Modules = () => {
  const [categories, setCategories] = useState<string>('todos')
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredWorks, setFilteredWorks] = useState<DataType[]>([])

  useEffect(() => {
    const filterWorks = async () => {
      // Obtén los datos de la API
      let { data: Works, error } = await supabase
        .from('Works')
        .select('*')
      console.log(Works)

      if (Works) {
        // Filtra los datos según categories y searchValue
        const filtered = Works.filter((project) => {
          const titleLower = project.title?.toLowerCase() || ''
          const category = project.category?.toLowerCase() || ''

          if (categories === 'todos') {
            return (
              titleLower.includes(searchValue) || category.includes(categories)
            )
          } else {
            return (
              titleLower.includes(searchValue) && category.includes(categories)
            )
          }
        })
        setFilteredWorks(filtered)
      } else if (error) {
        console.error(error)
      }
    }

    filterWorks()
  }, [categories, searchValue])

  return (
    <>
      <Searcher
        setCategories={setCategories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Cards Works={filteredWorks} />
    </>
  )
}
