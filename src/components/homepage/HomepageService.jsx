

import '../homepage/HomepageService.css'
import { ArrowUpRight } from 'lucide-react'
import { data } from '../context/Context'


import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button2 from '../utilities/Button2';

function HomepageService() {

// WHAT ELSE OPENING BOX GSAP
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Define the GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                // markers: true,
                start: "50% 50%",
                end: "150% 50%",
                scrub: 2,
                pin: true
            }
        });

        // Define the GSAP animations
        tl.to("#center", { height: "100vh" }, 'a')
            .to("#top", { top: "-50%" }, 'a')
            .to("#bottom", { bottom: "-50%" }, 'a')
            .to("#top-h1", { top: "60%" }, 'a')
            .to("#bottom-h1", { bottom: "-30%" }, 'a')
            .to("#center-h1", { top: "-30%" }, 'a')
            .to(".content", { delay: -0.2, marginTop: "0%" });

        // Clean up function
        return () => {
            // Kill the ScrollTrigger when the component unmounts
            tl.scrollTrigger.kill();
        };

   
    }, []); // Empty dependency array to run the effect only once on mount

// STICKY SLOGAN | we provide 
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);


gsap.to(".stickySlogan", {
    scrollTrigger: {
        trigger: ".stickySlogan",
        scrub: 2,
    },
    scale: 2,
        duration:4, 
    color:'#00524b', 
    delay:1, 
    text:"haha", 
    repeat:true,
    yoyo:true,
    ease: "bounce.out",
    repeat:2,
});
    }, []);



    const objdata = useContext(data)
    return (
      <>
        <div className="main">
            <div id="top">
                <h1 id="top-h1" className='OpeningHeading'>What Else?</h1>
            </div>
            <div id="center">
                <div className="content">
                {/* sticky nav  */}
            <p className='stickySlogan text-pink-600'> <span className='text-grey-400 font-extrabold'>GlobalTech</span> Provides Top-Notch Technical Services all Over Nepal</p>
                  {
                    objdata.homePgServices.map((elem, index)=>{
                      return(
                        <>
                           <div className="flex w-[80%] flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px] flex items-center">
        <img
          src={elem.img}
          className="h-fit w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
         <p className="inline-flex items-center text-l font-semibold">{elem.ttl}</p>
          <p className="mt-3 text-sm text-gray-600">
           {elem.para}
          </p>

          <div className="mt-3 flex items-center space-x-2">
            <span className="flex flex-col">
              <Button2 label="View More" className='text-[10px] font-medium text-gray-900'></Button2>
            </span>
          </div>
        </div>
      </div>
    </div>

                        </>
                      )
                    })
                  }
        {/* ----------- */}
                </div>
            </div>
            <div id="bottom">
                <h1 id="bottom-h1">What Else?</h1>
            </div>
          
        </div>
        </>
        
    );
}

export default HomepageService;
