import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'






export const RQcars = () => {

 const [pageNumber,setPageNumber] = useState(1)

 const fetchCars = (page) => {

    return axios.get(`http://localhost:4600/cars?_limit=3&_page=${page}`)
  }


  const [polling,setPolling] = useState(3000)

  const {isLoading,data,isError,error} = useQuery(['cars',pageNumber], () => fetchCars(pageNumber),
  {
    keepPreviousData : true
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
        <h2 className='text-3xl font-bold'>RQCars</h2>
        {
          data.data?.map(car => {
            return <div key={car.id}>
              <Link to={`/rqcars/${car.id}`}> {car.color}</Link>
             </div>
          })
        }
        <div>
            <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1} className="bg-blue-400 text-white rounded border-none mx-2 p-3">Previous Page</button>
            <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4} className="bg-violet-400 text-white rounded border-none mx-2 p-3">Next Page</button>
        </div>
    
    </div>

  )
}


