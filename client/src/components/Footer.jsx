import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-accents h-20 flex flex-row justify-between items-center'>
        <span className='text-lg font-medium ml-10'>All Rights Reserved CulinaryCrave&copy; 2023</span>
        <div>
        {/* <span className=''></span> */}
        <a href='https://github.com/tabishnaqvi1311' target='_blank' rel="noreferrer"><FaGithub  className='mr-10 cursor-pointer' color='black' size={25}/></a>
        </div>
    </div>
  )
}

export default Footer