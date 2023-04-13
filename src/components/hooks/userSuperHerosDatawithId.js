import axios from 'axios'

import { useQuery } from 'react-query'



// when ever finding the hero details by useQuery we don't have to pass the id 


const fetchSuperHeroes = ({queryKey}) => {
  const heroId = queryKey[1]
    return axios.get(`http://localhost:4600/superheroes/${heroId}`)
  }
  

export const useSuperHeroesDatawithId = (heroId) => {
    return useQuery(['super-heroes',heroId], fetchSuperHeroes )
}
  
