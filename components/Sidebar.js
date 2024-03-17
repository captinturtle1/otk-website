import { useState } from 'react';

import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

function numberWithCommas(numberToFormat) {
    return numberToFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Sidebar({streamerObjects, sidebarVisible}) {
    const [expanded, setExpanded] = useState(false);

    const streamerList = streamerObjects.map((streamer, index) =>
        <div key={streamer.name} className='select-none'>
            {!expanded ? (
                <>
                    {index < 4 ? (
                        <div>
                            <a href={`https://twitch.tv/${streamer.name}`} target='_blank' className="flex gap-2 w-full bg-zinc-400 bg-opacity-0 hover:bg-opacity-20 p-1 rounded transition-all">
                                <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                                <div className='my-auto flex flex-col'>
                                    <div className='font-semibold text-lg'>{streamer.name}</div>
                                    {streamer.live ? (
                                        <div className='flex gap-1'>
                                            <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                            <div className='text-black font-semi'>{numberWithCommas(streamer.viewers)}</div>
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
                    <a href={`https://twitch.tv/${streamer.name}`} target='_blank' className="flex gap-2 w-40 bg-zinc-400 bg-opacity-0 hover:bg-opacity-20 p-1 rounded-xl transition-all">
                        <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
                        <div className='my-auto flex flex-col'>
                            <div className='font-semibold text-lg'>{streamer.name}</div>
                            {streamer.live ? (
                                <div className='flex gap-1'>
                                    <FaCircle className='text-[10px] mt-[8px] text-red-500'/>
                                    <div className='text-black font-semi'>{numberWithCommas(streamer.viewers)}</div>
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
        <div className={sidebarVisible ? 'w-64 flex-shrink-0 z-40 transition-all absolute md:static' : 'w-0 flex-shrink-0 z-40 transition-all absolute md:static'}>
            <div className={sidebarVisible ? 'bg-zinc-300 h-screen flex flex-col pt-24 w-64 fixed left-0 transition-all p-4': 'bg-zinc-200 h-screen flex flex-col pt-24 w-64 fixed -left-64 transition-all p-6'}>
                <div className='flex flex-col gap-2'>
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