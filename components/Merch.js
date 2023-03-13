import { FaArrowRight } from 'react-icons/fa';

export default function Merch() {
    return (
    <div className='flex m-auto relative p-8 xl:p-16' id='Merch'>
        <div className='mx-auto flex flex-col'>
            <div className='flex relative'>
                <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'></div>
                <video src='https://cdn.shopify.com/videos/c/o/v/8269d450a2704fe699e7a59d252c0e7d.mp4' autoPlay muted loop className='bg-black h-[500px] xl:h-[750px] object-cover'/>
                <div className='absolute h-full w-full flex flex-col text-white gap-5'>
                    <div className='mx-auto mt-[30%] text-xl lg:text-4xl xl:text-6xl font-bold'>The Kings of Content</div>
                    <div className='mx-auto text-xl hidden lg:block'>Super-duper Entertainment®</div>
                    <a href='https://otknetwork.com' className='mx-auto flex bg-white text-black py-2 px-5 rounded-2xl text-md lg:text-xl hover:bg-zinc-200 transition-all'>
                        <div className='flex'>Shop new merch<FaArrowRight className='my-[5px] ml-1'/></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}  