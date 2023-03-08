import Image from 'next/image';
import logo from '../public/whiteLogo.png';

import { Link, animateScroll } from 'react-scroll';

import { FaStepForward } from 'react-icons/fa';

export default function Navbar({sidebarVisible, setSidebarVisible}) {
    return (
    <div className='bg-black h-16 w-screen select-none z-50 fixed'>
        <FaStepForward onClick={sidebarVisible ? () => setSidebarVisible(false) : () => setSidebarVisible(true)} className={sidebarVisible ? 'text-white fixed top-6 left-5 rotate-180 cursor-pointer transition-all' : 'text-white fixed top-6 left-5 cursor-pointer transition-all'}/>
        <div className='mx-32 flex text-lg font-semibold'>
            <Link to='Events' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Events</Link>
            <Link to='Videos' spy={true} smooth={true} offset={-200} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Videos</Link>
            <Link to='Hero' spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'><Image src={logo} className='w-16 h-16 p-2'/></Link>
            <Link to='Streamers' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Creators</Link>
            <Link to='Merch' spy={true} smooth={true} offset={0} duration={500} className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Shop</Link>
        </div>
    </div>
  )
}  