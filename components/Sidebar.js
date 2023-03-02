import { useState } from 'react';

import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

export default function Sidebar({streamerObjects, sidebarVisible}) {
    const [expanded, setExpanded] = useState(false);

    console.log(streamerObjects);
    const streamerList = streamerObjects.map((streamer, index) =>
        <div className='select-none'>
            {!expanded ? (
                <>
                    {index < 4 ? (
                        <div key={streamer.name} >
                            <a href={`https://twitch.tv/${streamer.name}`} className="flex gap-2 w-40 bg-zinc-400 bg-opacity-0 hover:bg-opacity-20 p-1 rounded-xl transition-all">
                                <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                                <div className='my-auto flex flex-col'>
                                    <div className='font-semibold text-lg'>{streamer.name}</div>
                                    {streamer.live ? (
                                        <div className='flex gap-1'>
                                            <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                            <div className='text-black font-semi'>{streamer.viewers}</div>
                                        </div>
                                    ):(
                                        <div className='text-zinc-600'>Offline</div>
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
                    <a href={`https://twitch.tv/${streamer.name}`} className="flex gap-2 w-40 bg-zinc-400 bg-opacity-0 hover:bg-opacity-20 p-1 rounded-xl transition-all">
                        <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-semibold text-lg'>{streamer.name}</div>
                            {streamer.live ? (
                                <div className='flex gap-1'>
                                    <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                    <div className='text-black font-semi'>{streamer.viewers}</div>
                                </div>
                            ):(
                                <div className='text-zinc-600'>Offline</div>
                            )}
                        </div>
                    </a>
                </div>
            )}
        </div>
    );

    return (
    <div className={sidebarVisible ? 'bg-zinc-200 h-screen w-64 opacity-100 pt-16 select-none flex flex-shrink-0 z-40 transition-all' : 'bg-zinc-200 h-screen w-0 opacity-0 pt-16 select-none flex flex-shrink-0 z-40 transition-all'}>
        <div className='mx-auto pt-12 flex flex-col my-2'>
            <div className='overflow-x-scroll flex flex-col gap-2'>
                {streamerList}
            </div>
            {!expanded ? (
                <div className='mx-auto font-bold cursor-pointer' onClick={() => setExpanded(true)}>show more</div>
            ):(
                <div className='mx-auto font-bold cursor-pointer mt-8' onClick={() => setExpanded(false)}>show less</div>
            )}
        </div>
    </div>
    )
} 