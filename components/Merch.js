import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
    return (
    <div className='h-[900px] w-full flex relative'>
        <div className='mx-auto flex flex-col mt-24'>
            <div className='flex relative'>
                <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'></div>
                <video src='/merchVid.mp4' autoPlay muted loop className='w-[1200px] bg-black'/>
                <div className='absolute h-full w-full flex flex-col text-white gap-5'>
                    <div className='mx-auto mt-[35%] text-7xl font-bold'>The Kings of Content</div>
                    <div className='mx-auto text-xl'>Super-duper Entertainment®</div>
                    <a href='https://otknetwork.com' className='mx-auto flex bg-white text-black py-2 px-5 rounded-2xl text-xl hover:bg-zinc-200 transition-all'>
                        <div className='flex'>Shop new merch<FaArrowRight className='my-[5px] ml-1'/></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}  