import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { gsap } from "gsap";
import NavBar2 from './NavBar2';
import more from '../../assets/img/more.png'
import cut from '../../assets/img/cut.png'
import { NavLink } from 'react-router-dom';
import NavSocialLink from '../utilities/NavSocialLink'


function NavBar() {
const [wd, setWd] = useState("0")

const [hamBurger, sethamBurger] = useState(true);
const [op, setop] = useState(0);

const hamIcons = document.getElementsByClassName("hamIcons")


const [moreMenuValue, setmoreMenuValue] = useState(more);
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
    setmoreMenuValue(cut)
    sethamBurger(false)
    setop(100)
         console.log("first")
    setWd("200px")
    hamIcons[0].style.rotate="135deg"
    hamIcons[0].style.position="absolute"
    hamIcons[0].style.backgroundColor="red"
    hamIcons[0].style.top="29%"

    hamIcons[2].style.rotate="-135deg"
    hamIcons[2].style.position="absolute"
    hamIcons[2].style.backgroundColor="red"
    hamIcons[2].style.top="29%"

    hamIcons[1].style.opacity="0"
}
else{
    setmoreMenuValue(more)
    sethamBurger(true)
    setop(0)
     setWd("0")
// hamburger icon 
         hamIcons[0].style.rotate=""
    hamIcons[0].style.position="relative"
    hamIcons[0].style.backgroundColor="white"
    hamIcons[0].style.top=""

    hamIcons[2].style.rotate=""
    hamIcons[2].style.position="relative"
    hamIcons[2].style.backgroundColor="white"
    hamIcons[2].style.top="0"
         hamIcons[1].style.opacity="1"
}
// GSAP 
 gsap.registerPlugin(TextPlugin);

}



  return (
    <> 
    <style>
        {`
.hamIcons{
    width: 28px;
    height: 2px;
    display: block;
    background: white;
    margin: 8px 0;
transition: .1s ease-in-out;
}
        `}
    </style>
    <div className="navParent flex justify-around fixed w-full items-center" style={{zIndex:"99999999999999999",   background: "linear-gradient(rgb(0 45 91), rgb(46 46 47))"}}>
        <div className="navParentChild">
         <NavLink to="/">   <img src={logo} className='w-[7rem]' alt="" /></NavLink>
        </div>
        <div className="navParentChild navParentChildSec items-center text-[18px]">
        <div className="whatsappParent">
              <NavLink> <i class="ri-whatsapp-line"></i></NavLink>
                <span>01-5329949</span>
        </div>
        <div className="emailParent">
             <NavLink><i class="ri-mail-add-line"></i></NavLink>
                <span>info@globaltech.com.np</span>
        </div>
{/* four Social media Icon in navigationBar */}
<NavSocialLink></NavSocialLink>
        </div>
        <div className="navParentChild text-[23px] cursor-pointer" onClick={sideMenuIconChange}>
{/* <img src={moreMenuValue} alt="" className='w-[27px]' /> */}
<span className='hamIcons hamIcon1'></span>
<span className='hamIcons hamIcon2'></span>
<span className='hamIcons hamIcon3'></span>

        </div>

        {/* other options  */}
           <div className={`SideBarParent`} >
<NavBar2 wd={wd}></NavBar2>
      </div>
    </div>
    </>
  )
}

export default NavBar