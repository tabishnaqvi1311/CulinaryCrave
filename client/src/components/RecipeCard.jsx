import React from 'react'
// import { getRecipe } from '../../../server/controller/recipeRoutes'
import { useState, useEffect } from 'react'
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom'

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
                <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.imageURL} height='170' width='250' className='object-contain rounded-xl brightness-75' alt='imageURL' />
                <ul key={recipe.id}>
                  {/* {console.log(recipe.imageURL)} */}
                  <div className='flex flex-row items-center'>
                    <li className='p-2 text-xl text-white capitalize font-medium w-full'>
                      {recipe.name}
                    </li>
                    <div className='p-3'>
                      <IoMdTimer size={22} color='#fff' />
                      <span className='font-medium text-xs w-full'>{recipe.time} min</span>
                    </div>
                  </div>
                  <div className='my-3'>
                    <Link id='floaty' className='bg-[#d5ae4d] p-3 rounded-tr-xl rounded-br-xl opacity-80' to={recipe.originalURL}>See More</Link>
                  </div>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TodayCard