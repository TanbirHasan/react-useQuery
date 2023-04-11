import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { request } from '../utils/axiosInterceptor'




const fetchSuperHeroes = () => {

 

return request({url:'superheroes',method:'get'})
 // return axios.get('http://localhost:4600/superheroes')
}


export const RQSuperHeroes = () => {


  const [polling,setPolling] = useState(3000)

  const {isLoading,data,isError,error} = useQuery('super-heroes', fetchSuperHeroes,

  
  // {
    
  //   onSuccess : (data) => {
  //     if(data.data.length == 4){
  //       console.log(data.length)
  //       setPolling(0)
  //     }
  //   },
  //   refetchInterval:polling
  // }
  
  )

  

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>Something went wrong</h2>
  }
  

  return (
    <div className='p-10'>
        <h2 className='text-3xl font-bold'>RQSuperHeroes</h2>
        {
          data.data?.map(hero => {
            return <div key={hero.id}>
              <Link to={`/rqsuperheroes/${hero.id}`}> {hero.name}</Link>
             </div>
          })
        }
    
    </div>

  )
}


