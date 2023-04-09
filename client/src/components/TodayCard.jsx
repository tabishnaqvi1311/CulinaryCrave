import React from 'react'
// import { getRecipe } from '../../../server/controller/recipeRoutes'
import { useState, useEffect } from 'react'
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom'

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
            <div className='h-[350px] w-[280px] object-contain mx-20 rounded-xl bg-white shadow-[20px_20px_1px_-15px_rgba(0,0,0,0.3)] shadow-black hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_2px_-15px_rgba(0,0,0,0.3)] hover:shadow-black'>
              <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.imageURL} height='200' width='280' className='object-contain rounded-xl brightness-75' alt='imageURL' />
                <ul key={recipe.id}>
                  {console.log(recipe.imageURL)}
                  <div className='flex flex-row items-center'>
                    <li className='py-7 text-xl text-others font-medium w-full capitalize'>
                      {recipe.name}
                    </li>
                    <IoMdTimer size={22} color='#000' />
                    <span className='text-others font-medium'>{recipe.time} min</span>
                  </div>
                  <div>
                    <Link id='floaty' className='bg-[#d5ae4d] p-3 rounded-tr-xl rounded-br-xl' to={recipe.originalURL}>See More</Link>
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