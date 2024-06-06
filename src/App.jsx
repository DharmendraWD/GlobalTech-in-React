import { useState } from "react"
import NavBar from "./components/utilities/NavBar"
import Banner from "./components/homepage/Banner"
import Slider from "./components/homepage/Slider"
import OurProduct from './components/homepage/OurProduct'
import LocomotiveScroll from 'locomotive-scroll';


import { Router } from "react-router-dom"
function App() {
const scroll = new LocomotiveScroll();
return(
  <>
  <div className="wrapper">
 <NavBar></NavBar>
<Banner></Banner> 
<Slider></Slider>
<OurProduct></OurProduct>
  </div>

   </>
)
}

export default App
