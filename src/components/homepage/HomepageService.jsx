

import '../homepage/HomepageService.css'
import { ArrowUpRight } from 'lucide-react'
import { data } from '../context/Context'


import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HomepageService() {


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

    const objdata = useContext(data)
    return (
        <div className="main">
            <div id="top">
                <h1 id="top-h1">What Else?</h1>
            </div>
            <div id="center">
                <div className="content">
                    <h4 className='sticky top-0'>We Provide Top Notch Services In Nepal.</h4>
                    {/* <h3><i>Browse</i> the work that define a <i>movement</i> and created a craft.</h3>
                    <div className="btn">
                        <h5>ENTER GALLERY</h5>
                    </div>
                    <h2>(17)</h2> */}
                  {
                    objdata.homePgServices.map((elem, index)=>{
                      return(
                        <>
                           <div className="flex w-[80%] flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={elem.img}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
         <p className="inline-flex items-center text-l font-semibold">{elem.ttl}</p>
          <p className="mt-3 text-sm text-gray-600">
           {elem.para}
          </p>

          <div className="mt-3 flex items-center space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
            <span className="flex flex-col">
              <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
              <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
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
    );
}

export default HomepageService;
