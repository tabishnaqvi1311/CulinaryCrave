import React from 'react'
// import { getRecipe } from '../../../server/controller/recipeRoutes'
import { useState, useEffect } from 'react'
import { IoMdTimer } from "react-icons/io";
import { Link}  from 'react-router-dom'

const TodayCard = () => {

  const [data, setData] = useState({})

  const getRecipe = async () => {
    try {
      const response = await fetch("http://localhost:8181/api/v1/recipes/random")
      const data = await response.json()
      console.log(data)
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
            <div className='h-[350px] w-[280px] object-contain mx-20 rounded-xl bg-slate-900 shadow-xl shadow-slate-800'>
              <img src={recipe.imageURL} height='200' width='280' className='object-contain rounded-xl brightness-75' alt='imageURL'/>
              <ul key={recipe.id}>
                {console.log(recipe.imageURL)}
                <div className='flex flex-row items-center'>
                  <li className='p-5 text-xl text-white'>
                    {recipe.name}
                  </li>
                  <IoMdTimer size={22} color='#fff' />
                  <span>{recipe.time} min</span>
                </div>
                <div>
                  <Link id='floaty' className='bg-[#FF6347] p-3' to={recipe.originalURL}>See More</Link>
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