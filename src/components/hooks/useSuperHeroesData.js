import axios from 'axios'

import { useQuery,useMutation, useQueryClient } from 'react-query'




const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4600/superheroes')
  }
  

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess,
        onError,
        select : (data) => {
            const superHeroes = data.data.map((hero) => hero.name)
            return superHeroes
        }
    })
}
  

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>Something went wrong</h2>
  }  












// from here mutation global code start, for posting data




  const addSuperHero = (hero) => {
    return axios.post('http://localhost:4600/superheroes',hero)

  }



  // export const useAddSuperHeroes = () => {
  //   const queryClient = useQueryClient()
  //   return useMutation(addSuperHero,{
  //     onSuccess : (data) => {
  //      // queryClient.invalidateQueries('super-heroes')
  //      queryClient.setQueryData('super-heroes', (oldQueryData) => {
  //       return {
  //         ...oldQueryData,
  //         data : [...oldQueryData.data, data.data]
  //       }

  //      })
  //     }
  //   })
  // }



  // optimistic updates
  export const useAddSuperHeroes = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero,{
     onMutate : async (hero) => {
      await queryClient.cancelQueries('super-heroes')
      const previous = queryClient.getQueryData('super-heroes')
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
              return {
                ...oldQueryData,
                data : [...oldQueryData.data, {id:oldQueryData.length + 1,...hero}]
              }
      
             })
             return {
              previous
             }
      
     }, 
     onError : (_error,_hero,context) =>{
      queryClient.setQueryData('super-heroes', context.previous)
     },
     onSettled : () => {
      queryClient.invalidateQueries('super-heroes')
     }
    })
  }


