import React from 'react'
import TodayCard from '../components/TodayCard'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  return (
    <section className='bg-others h-[200vh]'>
        <div className='text-white flex flex-col justify-center items-center pt-10'>
            <h1 className='text-5xl uppercase'>Today's Top Picks</h1>
            <div className='flex flex-row p-10'>
                <TodayCard />
            </div>
            <hr className='w-7/12'/>
            <div>
              <RecipeCard />
            </div>
        </div>
    </section>
  )
}

export default Recipes