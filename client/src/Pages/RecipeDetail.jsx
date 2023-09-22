import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { contents } from '../constants/module'
import { GridLoader } from 'react-spinners'

const RecipeDetail = () => {

    const { id } = useParams();
    const [result, setResult] = useState('');


    useEffect(() => {
        fetch(`http://localhost:8181/api/v1/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => setResult(data))
            .catch((err) => console.log(err))
    }, [id])


    return (
        <section>
            <div className='p-10 lg:ml-10 text-others'>
                <h1 className='capitalize lg:text-6xl text-5xl mb-5 font-semibold'>{Object.entries(result).length === 0 ? <GridLoader color='#222e50'/>
                    :
                    result.recipe.name}
                </h1>
                <span className={`bg-blue-300 px-5 rounded-xl`}>{Object.entries(result).length === 0?''
                :
                result.recipe.mealType}
                </span>
                <hr />
                <h2 className='mt-5 text-4xl font-medium'>Contents:</h2>
                <ul className='p-5 flex flex-col'>
                    {contents.map((item) => (
                        <li className='p-1 text-lg my-2'><Link to={item.linkTo}>{item.title}</Link></li>
                    ))}
                </ul>
                <section id='ing' className='flex flex-col'>
                    <div className='my-10'>
                        <h1 className='text-5xl font-medium hover:text-accents mb-5'>Ingredients</h1>
                        <hr className='w-1/3' />
                        <table className='text-[16.5px]'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody className='p-10'>{Object.entries(result).length === 0 ? <GridLoader color='#222e50'/>
                                :
                                result.recipe.ingredients.map((ingred) => (

                                    <tr>
                                        <td className='capitalize'>{ingred.name}</td>
                                        <td>{ingred.quantity}</td>
                                        <td>{ingred.type}</td>
                                    </tr>
                                ))}</tbody>
                        </table>
                    </div>
                    <div className='border-4 border-others border-double p-5 my-10'>
                        <h1 className='text-5xl font-medium'>Steps</h1>
                        <div className='w-2/3 inline'>
                                {Object.entries(result).length === 0? <GridLoader color='#222e50'/>
                                :
                                result.recipe.steps.map((step) => (
                                    <li className='list-decimal m-5 text-[16.5px] '>{step}</li>
                                ))}
                        </div>
                    </div>
                </section>
                <section className='h-20' id='comments'>
                    <h1 className='text-5xl font-medium my-10'>Comments</h1>
                </section>
            </div>
        </section>
    )
}

export default RecipeDetail