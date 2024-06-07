import { useState } from "react"
import NavBar from "./components/utilities/NavBar"
import Banner from "./components/homepage/Banner"
import Slider from "./components/homepage/Slider"
import OurProduct from './components/homepage/OurProduct'
import LocomotiveScroll from 'locomotive-scroll';
import HomepageService from "./components/homepage/HomepageService"
import WhyHomePage from './components/homepage/WhyHomepage'
import ContactUs from './components/homepage/ContactUs'
import About from './components/otherPages/About'

import { Router } from "react-router-dom"
import {Link, Routes, Route} from "react-router-dom";
import Footer from "./components/homepage/Footer"

function Index(){
  return(
    <div>
<Banner></Banner> 
<Slider></Slider>
<OurProduct></OurProduct>
<HomepageService></HomepageService>
<WhyHomePage></WhyHomePage>
<ContactUs></ContactUs>
    </div>
  )
}

function App() {
const scroll = new LocomotiveScroll();
return(
  <>

 <NavBar></NavBar>


<Routes>
  {/* <Route path='/' element={<Home></Home>}></Route>
  <Route path='/service' element={<Service></Service>}></Route> */}
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/' element={<Index></Index>}></Route>
</Routes>

<Footer></Footer>
   </>
)
}

export default App
