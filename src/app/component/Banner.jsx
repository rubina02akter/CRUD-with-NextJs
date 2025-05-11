'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import bannerImg from '../../../public/Screenshot 2025-05-12 at 2.59.34 AM.png'
import bannerImg1 from '../../../public/Screenshot 2025-05-12 at 2.57.44 AM.png'
import bannerImg2 from '../../../public/Screenshot 2025-05-12 at 2.57.18 AM.png'
import bannerImg3 from '../../../public/0585338_m10-tws-wireless-earphone-touch-bluetooth-earplug-in-ear-stereo-sport-headsets-cvc80-noise-reduction.jpeg'
import bannerImg4 from '../../../public/360_F_519733648_tSMSHwqxw3TrbgFSXNKJVKncdkC0siTq.jpg'


function Banner() {
  return (
    <>
    <div className="grid md:grid-cols-2 grid-cols-1 w-11/12 mx-auto pt-24 ">
  <div>
    <h2 className="mt-12 font-extrabold md:text-7xl text-3xl text-[#dfb380]">
      Discover Innovation & Simplicity
    </h2>
    <p className="mt-8  font-light text-[#122823] text-sm">
      Explore cutting-edge gadgets and smart tech solutions designed to elevate your digital lifestyle. Powered by performance, built for convenience.
    </p>
    <button className="mt-10 btn bg-[#dfb380] text-[#122823] hover:bg-[#e4c195] transition">
      Explore More
    </button>
  </div>


      <div className=''>  
        <Swiper
      effect={'flip'}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={bannerImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bannerImg1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bannerImg2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bannerImg3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bannerImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bannerImg4} />
      </SwiperSlide>
      
    </Swiper></div>
    </div>
  
  </>
  )
}

export default Banner