import Image from 'next/image';
import logo from '../public/whiteLogo.png';

import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaStepForward, FaBars, FaTv } from 'react-icons/fa';

export default function Navbar({sidebarVisible, toggleSidebar, mobileNavVisible, toggleMobileNav}) {
    return (
        <div className='bg-black h-16 w-screen select-none z-50 fixed'>
            <FaStepForward onClick={toggleSidebar} className={sidebarVisible ? 'text-white fixed top-6 left-5 rotate-180 cursor-pointer transition-all' : 'text-white fixed top-6 left-5 cursor-pointer transition-all'}/>
            <FaBars onClick={toggleMobileNav} className={mobileNavVisible ? 'text-red-400 fixed top-6 right-5 cursor-pointer transition-all' : 'text-white fixed top-6 right-5 cursor-pointer transition-all md:hidden'}/>
            <div className='mx-32 flex text-lg font-semibold'>
                <Link to='Events' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all hidden md:block'>Events</Link>
                <Link to='Videos' spy={true} smooth={true} offset={-200} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all hidden md:block'>Videos</Link>
                <Link to='Hero' spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer m-auto'><Image src={logo} className='w-16 h-16 p-2'/></Link>
                <Link to='Streamers' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all hidden md:block'>Creators</Link>
                <Link to='Merch' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all hidden md:block'>Shop</Link>
            </div>
            <div onClick={toggleMobileNav} className={mobileNavVisible ? 'flex text-3xl font-semibold bg-black h-screen w-screen visible opacity-100 bg-opacity-80 backdrop-blur-sm transition-all' : 'flex text-3xl font-semibold bg-black h-screen w-screen invisible opacity-0 bg-opacity-0 backdrop-blur-sm transition-all'}>
                <div className='m-auto pb-32 flex flex-col gap-16'>
                    <Link onClick={toggleMobileNav} to='Events' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Events</Link>
                    <Link onClick={toggleMobileNav} to='Videos' spy={true} smooth={true} offset={-200} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Videos</Link>
                    <Link onClick={toggleMobileNav} to='Streamers' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Creators</Link>
                    <Link onClick={toggleMobileNav} to='Merch' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Shop</Link>
                </div>
            </div>
        </div>
  )
}  