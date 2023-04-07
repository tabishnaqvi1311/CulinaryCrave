import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdTimer } from "react-icons/io";

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
    <section className='bg-others h-[90vh]'>
      <div>
        <h1 className='p-10 text-4xl text-white'>Search Results For {query} :</h1>
        <div className='flex flex-col justify-center items-center my-20'>
          {/* {console.log(results.length)} */}
          {results.map((recipe) => (
            <div key={recipe._id} className='border-4 border-others rounded-lg w-1/3 p-5 shadow-[25px_25px_1px_-15px_rgba(0,0,0,0.3)] shadow-black hover:translate-y-2 hover:translate-x-2 hover:shadow-[18px_18px_2px_-15px_rgba(0,0,0,0.3)] hover:shadow-black bg-white'>
              <p className='text-others font-medium text-3xl '>{recipe.name}</p>
              <p className='mt-5 bg-pink-300 inline-flex rounded-3xl px-3'>{recipe.mealType}</p>
              <span className='mt-5 px-3 inline-flex items-center'><IoMdTimer /><p className='mx-2'>{recipe.time}</p></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Search