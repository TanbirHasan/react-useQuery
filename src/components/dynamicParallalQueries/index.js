import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'



const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4600/superheroes/${heroId}`)
}

export default function DynamicParallal({heroId}) {

   const queryResults =  useQueries(
        heroId.map(id => {
            return {queryKey : ['super-hero',id],
            queryFn:() => fetchSuperHero(id)
        
        }
        })
    )
    console.log({queryResults})
  return (
    <div>index</div>
  )
}
