import React, { useEffect, useState } from 'react'


import more from '../../assets/img/more.png'
import client from '../../assets/img/client.png'
import cont from '../../assets/img/contact.png'

const imgCollection = [
{
img:more,
name:"Team 1",
},
{
img:client,
name:"Team 2",
},
{
img:cont,
name:"Team 3",
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
                width:300px;
                bottom:0px !important;
        }
        `}
    </style>
  <div className="TeamParent relative">
{
    imgCollection.map((elem, index)=>{
        return(
            <>
            
                <hr />
    <div className="team z-0" >
     <div className="para flex justify-around z-40 relative" id={index} onMouseOver={updateCursorPosition}>
        <p>Name</p>
        <h1>Profession</h1>       
     </div>
    </div>
    <hr />
            </>
        )
    })
}
    <img src={images} alt="" className='absolute top-0'  style={{ left: cursorPosition.x,}}/>

  </div>
  </>
  )

}
export default TeamSection