import React from 'react'
import heroImg from '../assets/cook.png'

const Landing = () => {
    return (
        <section className='bg-others h-[90vh]'>
            <div className='flex flex-row'>
                <div className='text-accents p-20'>
                    <h2 className='text-6xl'>Discover New Flavours And Techniques</h2>
                    <p className='text-lg mt-7 w-2/3'>At Culinary Craze, we're passionate about food and cooking. We believe that cooking is an art form, and we're here to help you explore and discover new flavors and techniques from around the world. Whether you're a seasoned chef or just getting started in the kitchen, we've got everything you need to take your cooking to the next level.</p>
                </div>
                <div className='m-20'>
                    <img src={heroImg} id='blob' className='rounded-xl '></img>
                </div>
            </div>
        </section>

    )
}

export default Landing