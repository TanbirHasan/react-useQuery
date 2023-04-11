import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { request } from "../utils/axiosInterceptor";

export const PostingHeros = () => {
  const [name, setName] = useState("");
  const [alterego, setalterEgo] = useState("");

  
  const addSuperHero = (hero) => {
    return axios.post('http://localhost:4600/superheroes',hero)

  }

 const {mutate:addhero} =   useMutation(addSuperHero)
  



  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, alterego);
    const hero = {name,alterego}
    addhero(hero)

    setName(" ");
    setalterEgo(" ");
  };
  return (
    <div className="flex justify-center items-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handlesubmit}>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              AlterEgo
            </label>
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              onChange={(e) => setalterEgo(e.target.value)}
            />
          </div>
          <div class="form-group form-check mb-6">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1"
            />
          </div>
          <button
            type="submit"
            class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
