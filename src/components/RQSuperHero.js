import axios from 'axios';
import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom'

export const RQSuperHero = () => {

  const {id} = useParams();

  const queryClient = useQueryClient();

  const fetchSuperHero = () => {

    return axios.get(`http://localhost:4600/superheroes/${id}`)
  }

  const {isLoading,data,isError,error} = useQuery(['super-hero',id],fetchSuperHero,{
    initialData : () => {
      const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(id))

      if(hero){
        return {data : hero}
      }
      else{
        return undefined
      }      
    }
  })

  
  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>Something went wrong</h2>
  }




  return (
    <div>Super hero details : {data?.data.name}</div>
  )
}
