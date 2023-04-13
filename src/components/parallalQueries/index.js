import React from 'react'
import {useQuery} from 'react-query'

import axios from 'axios'



const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4600/superheroes')
}


const fetchSuperCars = () => {
  return axios.get('http://localhost:4600/cars')
}

export default function ParallaQueries() {

 const {data:superHeroes} = useQuery('super-heroes', fetchSuperHeroes)

const {data:superCars} = useQuery('super-cars', fetchSuperCars)


  return (
    <div>ParallaQueries</div>
  )
}
