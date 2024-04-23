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
  const [categories, setCategories] = useState<string>('Todos')
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredProjects, setFilteredProjects] = useState<DataType[]>([])

  useEffect(() => {
    const filterProjects = async () => {
      // Obtén los datos de la API
      let { data: Projects, error } = await supabase
        .from('Projects')
        .select('*')

      if (Projects) {
        // Filtra los datos según categories y searchValue
        const filtered = Projects.filter((project) => {
          const titleLower = project.title?.toLowerCase() || ''
          const category = project.category?.toLowerCase() || ''

          if (categories === 'Todos') {
            return (
              titleLower.includes(searchValue) || category.includes(categories)
            )
          } else {
            return (
              titleLower.includes(searchValue) && category.includes(categories)
            )
          }
        })
        setFilteredProjects(filtered)
      } else if (error) {
        console.error(error)
      }
    }

    filterProjects()
  }, [categories, searchValue])

  return (
    <>
      <Searcher
        setCategories={setCategories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Cards projects={filteredProjects} />
    </>
  )
}
