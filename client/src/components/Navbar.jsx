import React from 'react'
import { navItems } from '../constants/module'
// import { Link } from 'react-router-dom'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { useState } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [toggle, settoggle] = useState(false)

    return (
        <div className={`flex bg-white sticky top-0 z-10`}>
            <nav className='w-full flex py-6 justify-between items-baseline navbar mx-5 shadow-lg'>
                {/* <CirlcleWithLetter /> */}
                <ul className='list-none sm:flex hidden items-center flex-1'>
                    {navItems.map((nav) => (
                        <li key={nav.id} className={`cursor-pointer uppercase text-black hover:text-accents tracking-widest px-4 ${nav.textSize ? 'text-lg text-gray-500' : 'text-md'}`}>
                            <a href={`${nav.routeTo}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-10 items-center'>
                    <SearchBar />
                    <Link to={"/login"} className='uppercase'>Login</Link>
                    <Link to={"/signup"} className='border-[#3b518b] border-2 p-2 rounded-xl uppercase'>Signup</Link>
                </div>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt='img' className='w-[28px] h-[28px] object-contain' onClick={() => settoggle((prev) => !prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-1 bg-others absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navItems.map((nav) => (
                                <li key={nav.id} className={`cursor-pointer text-white text-[16px] uppercase tracking-widest my-3 mx-3 p-3`}>
                                    <a href={`${nav.routeTo}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar