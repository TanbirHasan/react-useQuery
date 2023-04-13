import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4600/users/${email}`)
}



const fetchCourses = (channelId) => {
    return axios.get(`http://localhost:4600/channels/${channelId}`)
}

// real world scenario te props ta kno state managment theke ashbe
export default function DependentQueries({email}) {
    const {data:user} = useQuery(['user',email],() => fetchUserByEmail(email))
    const channelId = user?.data.channelId

    useQuery(['courses',channelId],() => fetchCourses(channelId),{
        enabled : !!channelId
    })
  return (
    <div>Dependent Queries</div>
  )
}
