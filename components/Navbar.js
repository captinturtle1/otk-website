import Image from 'next/image';
import logo from '../public/whiteLogo.png';

import { FaStepForward } from 'react-icons/fa';

export default function Navbar({sidebarVisible, setSidebarVisible}) {
    return (
    <div className='bg-black h-16 w-screen select-none absolute z-50'>
    <FaStepForward onClick={sidebarVisible ? () => setSidebarVisible(false) : () => setSidebarVisible(true)} className={sidebarVisible ? 'text-white fixed top-6 left-5 rotate-180 cursor-pointer transition-all' : 'text-white fixed top-6 left-5 cursor-pointer transition-all'}/>
      <div className='mx-32 flex text-lg font-semibold'>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Live</div>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Events</div>
        <Image src={logo} className='w-16 h-16 p-2'/>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Videos</div>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Shop</div>
      </div>
    </div>
  )
}  