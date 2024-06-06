import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { gsap } from "gsap";


function NavBar() {
const [hamBurger, sethamBurger] = useState(true);
const [op, setop] = useState(0);
const [moreMenuValue, setmoreMenuValue] = useState('ri-menu-add-line');
    const navIcons = [
        {
            icon:'ri-facebook-circle-fill'
        }, 
        {
            icon:'ri-linkedin-line'
        },
        {
            icon:'ri-twitter-fill'
        }, 
        {
            icon:'ri-instagram-line'
        }
    ]
    const otherNavOptions = [
        {
            name:"Home"
        }, 
        {
            name:"About"
        }, 
        {
            name:"Our Services"
        }, 
        {
            name:"Products"
        }, 
        {
            name:"Clients"
        }, 
        {
            name:"Privacy"
        }, 
        {
            name:"Conatct Us"
        }, 

    ]
const sideMenuIconChange = ()=>{
if (hamBurger == true){
    setmoreMenuValue("ri-close-large-line")
    sethamBurger(false)
    setop(100)
}
else{
    setmoreMenuValue("ri-menu-add-line")
    sethamBurger(true)
    setop(0)
}
// GSAP 
 gsap.registerPlugin(TextPlugin);

}
  return (
    <> 
    <div className="navParent bg-[#233142] flex justify-around fixed w-full">
        <div className="navParentChild">
            <img src={logo} className='w-20' alt="" />
        </div>
        <div className="navParentChild navParentChildSec">
        <div className="whatsappParent">
               <i class="ri-whatsapp-line"></i>
                <span>01-5329949</span>
        </div>
        <div className="emailParent">
             <i class="ri-mail-add-line"></i>
                <span>info@globaltech.com.np</span>
        </div>
{/* four Icon in navigationBar */}
{navIcons.map((elem, i)=>{
return(
    <i key={i} className={elem.icon} ></i>
)
})}
        </div>
        <div className="navParentChild" onClick={sideMenuIconChange}>
           <i class={moreMenuValue}></i>
        </div>

        {/* other options  */}
        <div className="otherOptions absolute top-[30px] flex flex-col w-full h-screen" style={{opacity:op}}>
{
    otherNavOptions.map((elem, index)=>{
    return(
        <>
            <a href="" id={"l"+index}>{elem.name}</a>
        </>
    )
    })
}
        </div>
    </div>
    </>
  )
}

export default NavBar