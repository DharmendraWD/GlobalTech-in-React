import { data } from '../context/Context'
import React, { useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Heading from '../utilities/Heading'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// IMPORT BUTTON 
import Button1 from '../utilities/Button1'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

 function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1)}s`;
  };
 const objdata = useContext(data)


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

{
  objdata.sliderData.map((data, index)=>{
    return(
      <>
      <SwiperSlide>
  <div className="sliderImageParaText">
    {/* <h1 className='full-width-Sliderheading'>heading</h1> */}
    <Heading label={data.heading}></Heading>
          <img src={data.img} alt="" />
          <p>{data.para}</p>          
<div className="hompgsliderBtn flex justify-center">
<NavLink to="/some/path"><Button1 label="Learn More"></Button1></NavLink>
</div>
  </div>
      </SwiperSlide>
      </>
    )
  })
}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

    </>
  );
}
export default Slider;