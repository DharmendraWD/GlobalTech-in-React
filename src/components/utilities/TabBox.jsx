import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/img/more.png'
import Button3 from './Button3'
import Button4 from './Button4'
import './Button4.css'



function TabBox({tabBoxData}) {
    const [index, setIndex] = useState(0)

const handleTabDescription =(event)=>{
    setIndex(event.target.id)
let lnk = document.getElementsByClassName("lnkN");
 Array.from(lnk).forEach(element => {
   element.style.color="black"
  });
event.target.style.color="red"
}
  return (   
   <>
   <style>
    {`

    `}
   </style>
   <div className="tabBoxParent">
    <div className="hrTab flex justify-around navbar">
{
tabBoxData.tabOptions.map((elem, index) => {
  return (
    <div className="hrBtn">
   <NavLink key={index} to={elem.to} id={index} onClick={handleTabDescription} className="lnkN">
    {elem.ttl}
    </NavLink>
    </div>
  )
})
}
    </div>
   </div>
<div className="tabDescription flex justify-evenly pb-[70px]">
<div className="img flex items-center">
    <img src={tabBoxData.tabDescription[index].img} alt="" className='w-[200px]'/>
</div>
<div className="headingAndPara">
<Button3 label={tabBoxData.tabDescription[index].ttl}></Button3>
<div className="points">
{
    tabBoxData.tabDescription[index].points.map((elem)=>{
        return(
            <>
            <li>{elem.point}</li>
            </>
        )
    })
}
</div>
</div>
</div>

   </>
  )
}

export default TabBox