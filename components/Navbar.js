import Image from 'next/image';
import logo from '../public/whiteLogo.png';

export default function Navbar() {
    return (
    <div className='bg-black h-16 w-screen select-none absolute'>
      <div className='mx-32 flex text-lg font-semibold'>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Creators</div>
        <div className='m-auto mr-32 cursor-pointer text-white hover:text-gray-200 transition-all'>Events</div>
        <Image src={logo} className='w-16 h-16 p-2'/>
        <div className='m-auto ml-32 cursor-pointer text-white hover:text-gray-200 transition-all'>Creators</div>
        <div className='m-auto cursor-pointer text-white hover:text-gray-200 transition-all'>Shop</div>
      </div>
    </div>
  )
}  