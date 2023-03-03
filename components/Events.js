import { useState, useEffect } from 'react';
import Image from 'next/image';

import { eventDetails } from './eventDetails';

import { FaTv } from 'react-icons/fa';

export default function Events() {
    const [isAnyoneLive, setIsAnyoneLive] = useState(false);

    useEffect(() => {

    },[]);

    return (
    <div className='w-full py-12 flex'>
        <div className='w-full h-full p-20 grid grid-cols-3 gap-x-16 gap-y-24'>
            {eventDetails.map((event, index) => 
                <div className=''>
                    <div className='flex flex-col relative text-white font-bold text-3xl'>
                        <div className='bg-yellow-400 h-full w-[90%] absolute -z-10 mx-auto left-0 right-0 rounded-3xl'/>
                        <Image src={event.logo} className='w-64 absolute mx-auto left-0 right-0 -translate-y-24 drop-shadow-lg z-10'/>
                        <Image src={event.image} className='rounded-xl mt-20 mx-auto drop-shadow-xl'/>
                        <div className='ml-12 my-10 flex gap-2'>
                            <FaTv className='my-auto'/>
                            <div>{event.channel}</div>
                        </div>
                        <div className='ml-12 mb-10 flex gap-2'>
                            <FaTv className='my-auto'/>
                            <div>{event.date}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}  