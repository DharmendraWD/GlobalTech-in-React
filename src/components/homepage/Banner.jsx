import React from 'react'
import banner from '../../assets/img/globaltech_banner.png'
import NavBar2 from '../utilities/NavBar2'

function Banner() {
  return (
<>
<div className="bannerParent">
    <img src={banner} alt="" />
    <NavBar2></NavBar2>
</div>
</>
  )
}

export default Banner