import React, { useEffect, useState } from 'react'
import axios from "axios"

export const SuperHeroes = () => {

  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const [error,setError] = useState('');
  



  useEffect(() => {
    axios.get('http://localhost:4600/superheroes').then(res => {setData(res.data)
    setIsLoading(false)
  }).catch(error => {setError(error.message)
  setIsLoading(false)
  })
  }, [])


  if(isLoading){
  return <h3>Loading...</h3>

}


if(error){
  return <h3>{error}</h3>
}
  return (
    <div className='p-10'>
    <div className='text-3xl font-bold'>SuperHeroes</div>
    {
      data?.map(item => {
        return <div key={item.key}>{item.name}</div>
      })
    }
    
    </div>
    
  )
}
