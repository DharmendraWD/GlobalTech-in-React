import React, { useRef, useState, useContext } from 'react';
import { data } from '../context/Context'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import RunningHeading from '../utilities/RunningHeading';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Heading from '../utilities/Heading';

export default function App() {
     const objdata = useContext(data)
  return (
    <>
    <style>
        {`
        #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

        `}
    </style>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
             <RunningHeading label="Why GlobalTech?"></RunningHeading>
     {
        objdata.whyGlobalTech.map((elem, index)=>{
     return(
        <>
           <SwiperSlide>
             <div className="swiperContent">
            <p>{elem.ttl}</p>
         <p className='text-[17px]'>{elem.para}</p>
             </div>
        </SwiperSlide>
        </>
     )

        })
     }        
      </Swiper>
    </>
  );
}
