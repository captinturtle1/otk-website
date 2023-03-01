import Image from 'next/image';
import logo from '../public/whiteLogo.png';

export default function Sidebar({streamerObjects}) {
    console.log(streamerObjects);
    const streamerList = streamerObjects.map((streamer, index) =>
        <div key={streamer.name} className="bg-neutral-100 flex">
            <Image height={50} width={50} src={streamer.pfp} className='rounded-full'/>
            <div className='my-auto'>
                {streamer.name}
            </div>
        </div>
    );

    return (
    <div className='bg-zinc-300 h-screen w-64 select-none flex'>
        <div className='mx-auto my-24 flex flex-col gap-5'>
            {streamerList}
        </div>
    </div>
    )
} 