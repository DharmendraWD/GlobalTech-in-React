import React from 'react'
import banner from '../../assets/img/globaltech_banner.png'
import Slogan from '../utilities/Slogan'



function Banner() {
  return (
<>
<div className="bannerParent ">
    <img src={banner} alt="" />
    <Slogan></Slogan>
</div>
</>
  )
}

export default Banner