import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4600/superheros/${heroId}`);
};

// here query Client instance will give us the access of the cache data from where we can display the hero details with out calling the api

export default function InitialQueryClient(heroId) {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
}
