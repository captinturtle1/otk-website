import Image from 'next/image';

import { streamerInfo } from './channelDetails';

import { FaYoutube, FaTwitch, FaTwitter } from 'react-icons/fa';

export default function Events() {
    return (
    <div className='w-full py-12 flex' id='Streamers'>
        <div className='w-full h-full p-20 grid grid-cols-5 gap-x-8 gap-y-12'>
            {streamerInfo.map((streamer, index) => 
                <div className='flex flex-col bg-yellow-400 text-white font-bold text-3xl rounded-xl p-5 drop-shadow-xl'>
                    <Image src={streamer.image2} className='rounded-xl drop-shadow-xl'/>
                    <div className='m-auto mt-5'>{streamer.name}</div>
                    <div className='flex m-auto mt-5 gap-10'>
                        <a href={streamer.youtube} className=''><FaYoutube/></a>
                        <a href={streamer.twitch} className=''><FaTwitch/></a>
                        <a href={streamer.twitter} className=''><FaTwitter/> </a>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}  