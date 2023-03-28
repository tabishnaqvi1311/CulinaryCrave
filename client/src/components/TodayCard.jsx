import React from 'react'
// import { getRecipe } from '../../../server/controller/recipeRoutes'
import { useState, useEffect } from 'react'
import { IoMdTimer } from "react-icons/io";

const TodayCard = () => {

  const [data, setData] = useState({})

  const getRecipe = async () => {
    try {
      const response = await fetch("http://localhost:8181/api/v1/recipes")
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])

  return (
    <>
      <div className='p-10'>
        <div className='flex flex-row flex-1 items-center'>
          {data.recipes && data.recipes.map((recipe) => (
            <div className='h-[300px] w-[250px] object-contain mx-20 rounded-xl bg-white'>
              <img src={recipe.imageURL} height='200' width='250' className='object-contain rounded-xl brightness-75 ' />
              <ul key={recipe.id}>
                {console.log(recipe.imageURL)}
                <div className='flex flex-row items-center'>
                  <li className='p-5 text-xl text-others'>
                    {recipe.name}
                  </li>
                  <IoMdTimer size={22} color='#222E50' />
                </div>
                <div>
                  <button id='floaty' className='bg-[#FF6347] p-3'>See More</button>
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TodayCard