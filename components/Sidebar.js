import { useState } from 'react';

import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

export default function Sidebar({streamerObjects}) {
    const [expanded, setExpanded] = useState(false);

    console.log(streamerObjects);
    const streamerList = streamerObjects.map((streamer, index) =>
        <>
            {!expanded ? (
                <>
                    {index < 4 ? (
                        <div key={streamer.name} >
                            <a href={`https://twitch.tv/${streamer.name}`} className="flex gap-2 w-40 bg-zinc-300 hover:bg-zinc-200 p-1 rounded-xl transition-all">
                                <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                                <div className='my-auto flex flex-col'>
                                    <div className='font-semibold text-lg'>{streamer.name}</div>
                                    {streamer.live ? (
                                        <div className='flex gap-1'>
                                            <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                            <div className='text-black font-semi'>{streamer.viewers}</div>
                                        </div>
                                    ):(
                                        <div>Offline</div>
                                    )}
                                </div>
                            </a>
                        </div>
                    ):(
                        <></>
                    )}
                </>
            ):(
                <div key={streamer.name} >
                    <a href={`https://twitch.tv/${streamer.name}`} className="flex gap-2 w-40 bg-zinc-300 hover:bg-zinc-200 p-1 rounded-xl transition-all">
                        <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-semibold text-lg'>{streamer.name}</div>
                            {streamer.live ? (
                                <div className='flex gap-1'>
                                    <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                    <div className='text-black font-semi'>{streamer.viewers}</div>
                                </div>
                            ):(
                                <div>Offline</div>
                            )}
                        </div>
                    </a>
                </div>
            )}
        </>
    );

    return (
    <div className='bg-zinc-300 h-screen w-64 pt-16 select-none flex'>
        <div className='mx-auto pt-12 flex flex-col gap-5'>
            {streamerList}
            {!expanded ? (
                <div className='mx-auto font-bold cursor-pointer' onClick={() => setExpanded(true)}>show more</div>
            ):(
                <div className='mx-auto font-bold cursor-pointer' onClick={() => setExpanded(false)}>show less</div>
            )}
        </div>
    </div>
    )
} 