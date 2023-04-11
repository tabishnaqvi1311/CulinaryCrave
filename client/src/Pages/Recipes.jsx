import React from 'react'
import TodayCard from '../components/TodayCard'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  return (
    <section className='bg-others'>
        <div className='text-white flex flex-col justify-center pt-10'>
            <h1 className='text-5xl uppercase font-semibold ml-20'>Today's Top Picks</h1>
            <div className='flex flex-row p-10 justify-center items-center'>
                <TodayCard />
            </div>
            <hr className='w-7/12'/>
            <div className='p-5 text-5xl font-semibold ml-20'>
              See More
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div><RecipeCard /></div>
              <div><RecipeCard /></div>
              <div><RecipeCard /></div>
            </div>
        </div>
    </section>
  )
}

export default Recipes