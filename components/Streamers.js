import Image from 'next/image';

import { streamerInfo } from './channelDetails';

import { FaYoutube, FaTwitch, FaTwitter } from 'react-icons/fa';

export default function Events() {
    return (
    <div className='w-full py-12 flex' id='Streamers'>
        <div className='w-full h-full p-5 xl:p-20 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-x-8 lg:gap-y-12'>
            {streamerInfo.map((streamer) => 
            <div key={streamer.name} className='flex flex-col relative'>
                <div className='bg-black w-full h-full -z-10 absolute rounded-lg'/>
                <div className='flex flex-col bg-yellow-400 text-white font-bold text-3xl rounded p-5 drop-shadow-xl hover:-translate-x-3 hover:-translate-y-3 transition-all'>
                    <Image src={streamer.image2} className='rounded drop-shadow-xl'/>
                    <div className='m-auto mt-5 text-xl lg:text-2xl xl:text-xl'>{streamer.name}</div>
                    <div className='flex m-auto mt-5 gap-5 text-2xl lg:text-2xl'>
                        <a href={streamer.youtube} className=''><FaYoutube/></a>
                        <a href={streamer.twitch} className=''><FaTwitch/></a>
                        <a href={streamer.twitter} className=''><FaTwitter/> </a>
                    </div>
                </div>
                
            </div>
            )}
        </div>
    </div>
  )
}  