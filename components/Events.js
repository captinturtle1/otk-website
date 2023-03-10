import Image from 'next/image';

import { eventDetails } from './eventDetails';

import { FaTv, FaRegClock } from 'react-icons/fa';

function getOrdinal(n) {
    let ord = 'th';
  
    if (n % 10 == 1 && n % 100 != 11)
    {
      ord = 'st';
    }
    else if (n % 10 == 2 && n % 100 != 12)
    {
      ord = 'nd';
    }
    else if (n % 10 == 3 && n % 100 != 13)
    {
      ord = 'rd';
    }
  
    return n + ord;
  }
  

function unixToLocalDate(unix) {
    let date = new Date(unix * 1000);

    return date.toLocaleString('en-gb',{month: 'long',}) + ' ' + getOrdinal(date.toLocaleString('en-gb',{day: 'numeric',})) + ', ' + date.toLocaleString('en-gb', {hour: 'numeric', hour12: true}).replace(/\s+/g, '');;
}

export default function Events() {
    return (
    <div className='w-full py-12 flex' id='Events'>
        <div className='w-full h-full p-10 xl:p-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-24'>
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
                            <FaRegClock className='my-auto'/>
                            <div suppressHydrationWarning>{unixToLocalDate(event.date)}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}  