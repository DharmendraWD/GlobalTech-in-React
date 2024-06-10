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
import Services from './components/otherPages/Services'
import { Router } from "react-router-dom"
import {Link, Routes, Route} from "react-router-dom";
import Footer from "./components/homepage/Footer"
import NavBar2 from "./components/utilities/NavBar2"

function Index(){


  return(
    <div>
<NavBar></NavBar>
<Banner></Banner> 
<Slider></Slider>
<OurProduct></OurProduct>
<HomepageService></HomepageService>
<WhyHomePage></WhyHomePage>
<ContactUs></ContactUs>
<Footer></Footer>
    </div>
  )
}

function App() {
const scroll = new LocomotiveScroll();
return(
  <>


<Routes>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/Services' element={<Services></Services>}></Route>
  <Route path='/' element={<Index></Index>}></Route>
</Routes>
   </>
)
}

export default App
