import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            history(`/search/${searchTerm}`)
        }
        setSearchTerm('');
    }
   

    return (
        <section className={`bg-swiper bg-no-repeat bg-cover lg:h-[100vh] h-[170vh] w-full`}>
            <div className='flex flex-col text-center items-center justify-center'>
                <div className='text-gray-200 p-20'>
                    <h2 className='lg:text-8xl text-4xl font-bold'>Discover New Flavours And Techniques</h2>
                    <p className='text-2xl mt-7 lg:mx-20'>At CulinaryCrave, we're passionate about food and cooking. We believe that cooking is an art form, and we're here to help you explore and discover new flavors and techniques from around the world. Whether you're a seasoned chef or just getting started in the kitchen, we've got everything you need to take your cooking to the next level.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center'>
                    <Link to='/recipes' className='bg-[#3c518b] p-4 text-white rounded-3xl hover:bg-others transition'>Get Started</Link>
                    <div className='m-10'>
                        <i className='fa fa-search icon absolute m-3' onClick={handleSubmit} ></i>
                        <input type='search' className=' bg-slate-100 p-2 rounded-xl text-center focus:outline-none ' placeholder='Search ...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Landing; 

