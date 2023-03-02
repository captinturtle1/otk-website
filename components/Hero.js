import { useState, useEffect } from 'react';
import Image from 'next/image';

import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Hero({streamerObjects}) {
    const [isAnyoneLive, setIsAnyoneLive] = useState(false);

    useEffect(() => {
        if (streamerObjects[0]) {
            if (streamerObjects[0].live == true) {
                setIsAnyoneLive(true);
            }
        }
    },[streamerObjects]);

    return (
    <div className='h-full w-full flex relative'>
        <div className='bg-yellow-400 w-[1402px] h-[648px] absolute top-[19%] left-[9%] z-10'/>
        {isAnyoneLive ? (
            <div className='z-20 mx-auto flex flex-col gap-1 mt-20'>
                    <div className="flex gap-2 w-40 bg-zinc-400 bg-opacity-0 p-1 rounded-xl transition-all">
                        <Image height={50} width={50} src={streamerObjects[0].pfp} className='rounded-full'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-semibold text-lg'>{streamerObjects[0].name}</div>
                        </div>
                    </div>
                <div className='flex'>
                    <iframe
                        src={`https://player.twitch.tv/?channel=${streamerObjects[0].name}&parent=localhost&muted=true`}
                        parent="localhost"
                        height="648"
                        width="1152"
                        className=''
                    />
                    <iframe src={`https://www.twitch.tv/embed/${streamerObjects[0].name}/chat?parent=localhost&darkpopout`}
                        parent="localhost"
                        height="648"
                        width="250"
                        className=''
                        >
                    </iframe>
                </div>
                <a href={`https://twitch.tv/${streamerObjects[0].name}`} className='m-auto text-xl font-bold mt-8 flex'>View on Twitch<FaLongArrowAltRight className='mt-[6px] ml-2'/></a>
            </div>
        ):(<></>)}
    </div>
  )
}  