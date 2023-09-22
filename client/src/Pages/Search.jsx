import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IoMdTimer } from "react-icons/io";
import { GridLoader } from 'react-spinners'

const Search = () => {

  const { query } = useParams()
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8181/api/v1/recipes/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      // .then((data) => console.log())

      .catch((error) => console.log(error))
  }, [query])

  return (
    <section className={`bg-others ${results.length < 3 ? 'h-[100vh]' : 'h-auto'}`}>
      <div>
        <h1 className='p-10 text-4xl text-white'>Search Results For {query} :</h1>
        <p className={`${results.length === 0 ? 'block' : 'hidden'} p-10 text-5xl text-accents flex justify-center items-center`} >
          <GridLoader color='#d6ba73'/>
          </p>
        <div className='flex flex-col justify-center items-center mt-10'>
          {/* {console.log(results.length)} */}
          {results.map((recipe) => (
            <Link to={`/recipes/${recipe._id}`} className='w-1/2'>
              <div key={recipe._id} className='border-4 border-others rounded-lg  p-5 shadow-[22px_22px_1px_-15px_rgba(0,0,0,0.3)] shadow-accents hover:translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-black bg-white mb-10'>
                <p className='text-others font-medium text-3xl capitalize'>{recipe.name}</p>
                <p className={`mt-5 ${recipe.mealType === 'breakfast' ? 'bg-pink-300'
                  :
                  recipe.mealType === 'lunch' ? 'bg-blue-300'
                  :
                  'bg-violet-300'} inline-flex rounded-3xl px-3`}>{recipe.mealType}</p>
                <span className='mt-5 px-3 inline-flex items-center'><IoMdTimer /><p className='mx-2'>{recipe.time}</p></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Search