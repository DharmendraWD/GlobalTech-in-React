import React, { useEffect, useState } from 'react'
import NavSocialLink from '../utilities/NavSocialLink'

import ranjit from '../../assets/img/ranjit.jpg'
import sanjay from '../../assets/img/sanjay.jpg'
import kiran from '../../assets/img/kiran.jpg'
import Heading from '../utilities/Heading'

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

function TeamSection(){
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState('');


    
 const updateCursorPosition = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
    console.log(cursorPosition.y)
    setImages(imgCollection[event.target.id].img)
    console.log(imgCollection[event.target.id].img)

  };


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
  <div className="TeamParent relative">
    <Heading label="Our Team"></Heading>
{
    imgCollection.map((elem, index)=>{
        return(
            <>
            
                <hr />
    <div className="team z-0 cursor-default" >
     <div className="para flex justify-around z-40 relative pb-[17px] pt-[17px]" id={index} onMouseOver={updateCursorPosition}>
        <p className='elemName'>{elem.name}</p>
        <h1>{elem.prof}</h1> <span> <NavSocialLink></NavSocialLink> </span>       
     </div>
    </div>
    <hr />
            </>
        )
    })
}
<div style={{borderRadius:"50%", objectFit:'cover', width:'20px'}}>
    <img src={images} alt="" className='absolute z-[99999999999]'  style={{ left: cursorPosition.x, height:"148px", width:"148px", borderRadius:"100%"}}/>
</div>
  </div>
  </>
  )

}
export default TeamSection