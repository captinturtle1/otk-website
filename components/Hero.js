import { useState, useEffect } from 'react';
import Image from 'next/image';

import ytLogo from '../public/ytLogo.jpg';

import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

function numberWithCommas(numberToFormat) {
    return numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Hero({streamerObjects, otkVideoId}) {
    const [isAnyoneLive, setIsAnyoneLive] = useState(false);

    useEffect(() => {
        if (streamerObjects[0]) {
            if (streamerObjects[0].live == true) {
                setIsAnyoneLive(true);
            }
        }
    },[streamerObjects]);

    return (
    <div className='h-[500px] md:h-[900px] max-w-[1152px] m-auto flex relative' id='Hero'>
        {isAnyoneLive ? (
            <div className='m-auto flex h-full w-[299px] md:w-[95%] flex-col pt-32'>
                    <div className="flex gap-2 bg-zinc-400 bg-opacity-0 pb-5 rounded-xl transition-all">
                        <Image src={streamerObjects[0].pfp} className='rounded-full w-16 h-16 my-auto drop-shadow'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-bold text-xl'>{streamerObjects[0].name}</div>
                            <div className='font-semibold'>{numberWithCommas(streamerObjects[0].title)}</div>
                            <div className='flex gap-1'>
                                <IoPersonSharp className='text-red-400 my-auto'/>
                                <div>{numberWithCommas(streamerObjects[0].viewers)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-full'>
                        <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'/>
                        <iframe
                            src={`https://player.twitch.tv/?channel=${streamerObjects[0].name}&parent=localhost&muted=true`}
                            parent="https://main.d30s79gslbhyrg.amplifyapp.com/"
                            height=""
                            width=""
                            className='w-full h-full'
                        />
                    </div>
                <a href={`https://twitch.tv/${streamerObjects[0].name}`} className='m-auto text-xl font-bold mt-8 flex'>Watch on Twitch<FaLongArrowAltRight className='mt-[6px] ml-2'/></a>
            </div>
        ):(

            <div className='m-auto flex h-full w-[95%] flex-col pt-32 mx-10'>
                <div className="flex gap-2 w-64 bg-zinc-400 bg-opacity-0 pb-5 rounded-xl transition-all">
                    <Image height={50} width={50} src={ytLogo} className='rounded-full'/>
                    <div className='my-auto flex flex-col'>
                        <div className='font-semibold text-lg'>Latest Video</div>
                    </div>
                </div>
                <div className='relative h-full'>
                    <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'/>
                    <iframe
                        src={`https://www.youtube.com/embed/${otkVideoId}`}
                        parent="https://main.d30s79gslbhyrg.amplifyapp.com/"
                        height=""
                        width=""
                        className='w-full h-full'
                    />
                </div>
                <a href={`https://www.youtube.com/watch?v=${otkVideoId}`} className='m-auto text-xl font-bold mt-8 flex'>Watch on Youtube<FaLongArrowAltRight className='mt-[6px] ml-2'/></a>
            </div>
        )}
    </div>
  )
}  