import { useCallback, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import "swiper/css";

export default function Hero({ recentMemberVideos }) {
    const [swiperRef, setSwiperRef] = useState();

    useEffect(() => {

    },[]);

    const handleLeftClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
      }, [swiperRef]);
    
      const handleRightClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slideNext();
      }, [swiperRef]);

    return (
    <div className='h-[440px] flex flex-col px-10 overflow-hidden' id='Videos'>
        <div className='w-64 text-3xl font-bold relative ml-10'>
            <div className='bg-black translate-x-3 translate-y-3 w-full h-full absolute -z-30'/>
            <div className='bg-yellow-400 w-full h-full p-2'>Recent vidoes</div>
        </div>
        <div className='flex my-16 h-full'>
        <div className="my-auto">
            <div className="text-5xl text-black hover:text-slate-500 cursor-pointer" onClick={handleLeftClick}>
                <FiChevronLeft/>
            </div>
        </div>
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            navigation={true}
            className="w-[1480px] drop-shadow-lg"
        >
            {recentMemberVideos.map((videoId, index) => 
            <SwiperSlide className=''>
                <iframe
                    width=""
                    height=""
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className='w-full h-full rounded-2xl'
                />
            </SwiperSlide>
            )}
            
        </Swiper>
        <div className="my-auto">
            <div className="text-5xl text-black hover:text-slate-500 cursor-pointer" onClick={handleRightClick}>
                <FiChevronRight/>
            </div>
        </div>
        </div>
    </div>
  )
}  