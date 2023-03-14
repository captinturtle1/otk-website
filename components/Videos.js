import { useCallback, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

import "swiper/css";

export default function Hero({ recentMemberVideos }) {
    const [swiperRef, setSwiperRef] = useState();

    const handleLeftClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }, [swiperRef]);
    
    const handleRightClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }, [swiperRef]);

    useEffect(() => {

    },[]);

    return (
    <div className='flex-col px-10 flex' id='Videos'>
        <div className='text-3xl font-bold relative mx-auto'>
            <div className='bg-black translate-x-3 translate-y-3 w-full h-full absolute -z-30'/>
            <div className='bg-yellow-400 w-full h-full px-5 py-2'>Recent vidoes</div>
        </div>
        <div className="flex mt-16 overflow-hidden relative">
            <div className='w-0 min-[1400px]:w-[1000px] min-[1800px]:w-[1400px] min-[2500px]:w-[1900px] min-[2500px]:mx-auto'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    spaceBetween={50}
                    loop={true}
                    className="w-[1600px] md:w-[1900px]"
                >
                    {recentMemberVideos.map((item) =>
                        <SwiperSlide key={item}>
                            <div className='h-[200px] md:h-[240px]'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${item}`}
                                    title="YouTube video player"
                                    allowFullScreen
                                    className='w-full h-full rounded-2xl'
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            
        </div>
        <div className='flex m-auto gap-10 pt-10'>
            <div className="flex m-auto z-10 text-5xl" >
                <FiChevronLeft onClick={handleLeftClick} className='text-black hover:tex-slate-800 cursor-pointer'/>
            </div>
            <div className="flex m-auto z-10 text-5xl" >
                <FiChevronRight onClick={handleRightClick} className='text-black hover:text-slate-800 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}  