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
    <div className='w-full py-12 flex flex-col' id='Events'>
        <div className='w-full h-full p-10 grid grid-cols-1 lg:grid-cols-2 min-[1600px]:grid-cols-3 gap-y-24'>
            {eventDetails.map((event, index) => 
                <div key={event.name} className=''>
                    <div className='flex flex-col relative text-white font-bold text-xl min-[1600px]:text-2xl'>
                        <a href={event.link} target='_blank' className='bg-yellow-400 hover:bg-opacity-70 transition-all flex flex-col h-[400px] w-[300px] min-[1600px]:h-[450px] min-[1600px]:w-[350px] mx-auto rounded'>
                            <Image src={event.logo} className='w-[200px] min-[1600px]:w-[220px] absolute mx-auto left-0 right-0 -translate-y-24 z-10 drop-shadow-lg'/>
                            <Image src={event.image} className='w-[344px] min-[1600px]:w-[400px] absolute rounded left-0 right-0 mx-auto mt-8'/>
                            <div className='grow'/>
                            <div className='mb-10 ml-5 gap-3 flex flex-col'>
                                <div className='flex gap-2'>
                                    <FaTv className='my-auto'/>
                                    <h1 className='drop-shadow'>{event.channel}</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <FaRegClock className='my-auto'/>
                                    <h1 className='drop-shadow' suppressHydrationWarning>{unixToLocalDate(event.date)}</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
        <h2 className='m-auto text-sm font-bold'>Times displayed in your local time</h2>
    </div>
  )
}  