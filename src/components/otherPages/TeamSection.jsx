import React, { useEffect, useState } from 'react'
import NavSocialLink from '../utilities/NavSocialLink'

gsap.registerPlugin();
import ranjit from '../../assets/img/ranjit.jpg'
import sanjay from '../../assets/img/sanjay.jpg'
import kiran from '../../assets/img/kiran.jpg'
import Heading from '../utilities/Heading'
import aboutUsBg from '../../assets/img/aboutUs.jpg'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FlipCard from '../utilities/FlipCard';


const imgCollection = [
{
img:ranjit,
name:"Mr Ranjit ",
prof:"R&D Head",
},
{
img:sanjay,
name:"Mr Sanjay",
prof:"Director",

},
{
img:kiran,
name:"Mr Kiran",
prof:"Full Stack",

},
]

const OurStrengthCardData = [
    {
        ttl:"Opportunity Is Our Happiness",
        para:"Our priority is your happiness. We always provide service according to customer needs and do our best to meet their needs.",
    },
    {
        ttl:"Global IT Partnerships",
        para:"Partnership with world's leader IT companies and Cloud service providers.",
    },
    {
        ttl:"Secure Cloud Services",
        para:"Quality cloud computing services along with protected Disaster Recovery.",
    },
]
function TeamSection(){
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [images, setImages] = useState('');
    const [dets, setdets] = useState()
    
    const imgRef = useRef()
    
 const updateCursorPosition = (event) => {

    setCursorPosition({ x: event.clientX, y: event.clientY });
    setImages(imgCollection[event.target.id].img)
  };
useEffect(() => {
      gsap.to(imgRef.current, {
            // x:cursorPosition.x,
            x: cursorPosition.x ,
            scrub:true,
            duration:1,
            y:cursorPosition.y-250, 

        });
        return () => {
        };
    }, [cursorPosition.x]);
// useGSAP(() => {

  return (
    <>
    <style>
        {`
        img{
             top: -70px !important;
                    transition: .5s ease-in-out;
                }
                .team{
                    transition: .5s ease-in-out;
                    
        }
.team:hover{
    background-color: #dbd3d3;
}
        `}
    </style>
  <div className="TeamParent relative mb-[40px] mt-[20px]" >
    <Heading label="Our Team"></Heading>
{
    imgCollection.map((elem, index)=>{
        return(
            <>
            
                <hr />
    <div className="team z-0 cursor-default listelem" >
     <div className="para flex justify-around z-40 relative pb-[17px] pt-[17px]" id={index} onMouseOver={updateCursorPosition}>
        <p className='elemName text-[#023162]'>{elem.name}</p>
        <h1 className='text-[#405468] text-[14px]'>{elem.prof}</h1> <span> <NavSocialLink></NavSocialLink> </span>       
     </div>
    </div>
    <hr />
            </>
        )
    })
}
<div style={{borderRadius:"50%", objectFit:'cover', width:'20px'}}>
    <img src={images} alt="" ref={imgRef} className=' absolute picture z-[99999999999]'  style={{ height:"148px", width:"148px", borderRadius:"100%"}}/>
</div>
  </div>
  
  {/* OUR STRENGTH  */}
  <div className="ourStrengthParent pt-[50px] mb-[40px] pb-[80px]" style={{backgroundColor:"#fff1e0"}}>
    <Heading label="Our Strength"></Heading>
<FlipCard OurStrengthCardData={OurStrengthCardData}></FlipCard>
  </div>
  </>
  )

}
export default TeamSection