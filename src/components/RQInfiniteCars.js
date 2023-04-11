import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Link } from 'react-router-dom'



const fetchCars = ({pageParam = 1}) => {
  return axios.get(`http://localhost:4600/cars?_limit=2&_page=${pageParam}`)
}


export const RQInfiniteCars = () => {


  const [polling,setPolling] = useState(3000)

  const {isLoading,data,isError,error,hasNextPage,fetchNextPage , isFetching,isFetchingNextPage} = useInfiniteQuery('infinte-cars', fetchCars,

  {
    getNextPageParam : (_lastPage,pages) => {
      if(pages.length < 4){
        return pages.length + 1
      }
      else{
        return undefined;
      }

    }
  }



  
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
          data?.pages.map((group,i) => {
            return <Fragment key={i}>
              {
                group.data.map(car => (
                  <h2 key={car.id}>{car.color}</h2>
                ))
              }

            </Fragment>
          })
        }
        <button className="bg-blue-400 text-white rounded border-none mx-2 p-3" disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
        <div>{isFetching && !isFetchingNextPage ? 'Loading' : null }</div>
    
    </div>

  )
}


