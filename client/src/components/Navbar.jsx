import React from 'react'
import { navItems } from '../constants/module'
import { Link } from 'react-router-dom'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { useState } from 'react'

const Navbar = () => {

    const [toggle, settoggle] = useState(false)

    return (
        <div className={`flex bg-white`}>
            <nav className='w-full flex py-6 justify-between items-baseline navbar mx-5 shadow-md'>
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
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt='img' className='w-[28px] h-[28px] object-contain' onClick={() => settoggle((prev) => !prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-gradient-to-tr from-accents to-gray-700 absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navItems.map((nav) => (
                                <li key={nav.id} className={`cursor-pointer text-black text-[16px] uppercase tracking-widest my-5 mx-5 p-3`}>
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