import React, { useEffect } from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import more from '../../assets/img/more.png'

import Heading from '../utilities/Heading'
import Button2 from '../utilities/Button2'
import abtImg from '../../assets/img/aboutUs.jpg'
import TeamSection from './TeamSection'

export default function About() {
     gsap.registerPlugin(TextPlugin)
 useEffect(() => {
        gsap.to(".abtHeading", {
            duration: 4, 
            color: 'green', 
            delay: 1,
            text: "Us", 
            repeat: -1, // Infinite repeat
            // yoyo: true,
            ease: "expo.out",
        });
    }, []); // Run only once on component mount

    // OUR TEAM 
         return (
<>
   
<div className="largeHeadingParent w-screen h-screen flex justify-center items-center flex-column pr-[7px] pl-[7px]">
<div className="heading w-full">
        <h1 className='text-[14vw] mt-[40px] ' style={{fontFamily:"Tilt Prism"}}>About <span className='abtHeading' style={{fontFamily:"Tilt Prism"}}></span> </h1>
</div>
<div className="paraParent flex justify-between mb-[20px]">
    <Heading label="What Are We Known For?"></Heading>
        <p className='w-[50%]' style={{fontFamily:"Pp_Neue_Machina"}}>We are proud to announce Globaltech as Nepal's first cloud based accounting software company. Being Nepal's 100% cloud service provider, we provide almost all cloud services from the secured Data Center along with Protected Disaster Recovery. We provide Professional Accounting trainings and Business Consultant services on demand which will help you in prospering your business in today's competitive world.</p>
</div>
<Button2 label="More"></Button2>
</div>
{/* OUR TEAM  */}

<TeamSection></TeamSection>
 
   </>
  )
}
