import React from 'react'
// import { getRecipe } from '../../../server/controller/recipeRoutes'
import { useState } from 'react'

const TodayCard = () => {

  const [first, setfirst] = useState('TodayCard')

  const getRecipe = async() => {
    console.log('ran')
    let url = "http://localhost:8181/api/v1/recipes"
    let data = await fetch(url)
    console.log(data)
  }

  return (
    <div className='p-10'>
        <div>
            <h2 onClick={getRecipe}>{first}</h2>
        </div>
    </div>
  )
}

export default TodayCard