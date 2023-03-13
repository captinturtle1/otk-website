import Image from 'next/image';

import whiteLogo from '../public/whiteLogo.png';

import { FaTwitter, FaTwitch, FaYoutube, FaInstagram, FaTiktok, FaDiscord, FaRedditAlien, FaRegEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
    <div className='flex bg-black w-full p-12' id='Footer'>
        <div className='m-auto flex flex-col gap-10'>
            <div className='m-auto'>
                <Image src={whiteLogo} className=''/>
            </div>
            <div className='flex text-white gap-3 text-xl'>
                <a href='https://twitter.com/OTKNetwork'><FaTwitter/></a>
                <a href='https://www.twitch.tv/otknetwork'><FaTwitch/></a>
                <a href='https://www.youtube.com/channel/UCgpRORu9JQFC_jtQeQ99hBA'><FaYoutube/></a>
                <a href='https://www.instagram.com/otknetwork'><FaInstagram/></a>
                <a href='https://www.tiktok.com/@theotknetwork'><FaTiktok/></a>
                <a href='https://discord.com/invite/m8bgxM8'><FaDiscord/></a>
                <a href='https://www.reddit.com/r/OTKNetwork'><FaRedditAlien/></a>
                <a href='mailto:partners@otknetwork.com'><FaRegEnvelope/></a>
            </div>
            <div className='m-auto text-sm text-center'>
                <div className='text-white mx-auto'>Not an official site</div>
                <a href='https://twitter.com/captinturt1e/' className='text-white mx-auto hover:text-blue-400 transition-all'>Made by captinturtle</a>
            </div>
        </div>
    </div>
  )
}  