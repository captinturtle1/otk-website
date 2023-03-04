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
    <div className='h-[900px] w-full flex relative'>
        {isAnyoneLive ? (
            <div className='mx-auto flex flex-col mt-24'>
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
                    <div className='flex relative'>
                        <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'/>
                        <iframe
                            src={`https://player.twitch.tv/?channel=${streamerObjects[0].name}&parent=localhost&muted=true`}
                            parent="localhost"
                            height="594"
                            width="1056"
                            className=''
                        />
                        <iframe src={`https://www.twitch.tv/embed/${streamerObjects[0].name}/chat?parent=localhost&darkpopout`}
                            parent="localhost"
                            height="594"
                            width="300"
                            className=''
                        />
                    </div>
                <a href={`https://twitch.tv/${streamerObjects[0].name}`} className='m-auto text-xl font-bold mt-8 flex'>Watch on Twitch<FaLongArrowAltRight className='mt-[6px] ml-2'/></a>
            </div>
        ):(
            <div className='mx-auto flex flex-col mt-24'>
                    <div className="flex gap-2 w-64 bg-zinc-400 bg-opacity-0 pb-5 rounded-xl transition-all">
                        <Image height={50} width={50} src={ytLogo} className='rounded-full'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-semibold text-lg'>Latest Video</div>
                        </div>
                    </div>
                    <div className='flex relative'>
                        <div className='bg-yellow-400 w-full h-full absolute translate-x-3 translate-y-3 -z-10 drop-shadow-xl'/>
                        <iframe
                            width="1056"
                            height="594"
                            src={`https://www.youtube.com/embed/${otkVideoId}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        />
                    </div>
                <a href={`https://www.youtube.com/watch?v=${otkVideoId}`} className='m-auto text-xl font-bold mt-8 flex'>Watch on Youtube<FaLongArrowAltRight className='mt-[6px] ml-2'/></a>
            </div>
        )}
    </div>
  )
}  