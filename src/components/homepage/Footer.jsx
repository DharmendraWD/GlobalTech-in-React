import React from 'react'
import Heading from '../utilities/Heading'
import { NavLink } from 'react-router-dom'
import SocialMediaLink from "../utilities/SocialMediaLink"
import Copyright from '../utilities/Copyright'
import RunningHeading from '../utilities/RunningHeading'

function Footer() {
const footerSec  =[
    {
        ttl:"Home"
    },
    {
        ttl:"About"
    },
    {
        ttl:"Services"
    },
    {
        ttl:"Privacy"
    },
]

  return (
    <>
    <div className="footer flex h-[50vh] flex-column justify-center">
      <div className="heading">
        <RunningHeading label="GlobalTech"></RunningHeading>
      </div>
      <div className="moreSection flex w-full justify-center gap-x-[44px] text-[18px]" style={{margin:"60px 0"}}>
    {
        footerSec.map((elem, index)=>{
            return(
                <>
                    <NavLink to="path">{elem.ttl}</NavLink>
                </>
            )
        })
    }
      </div>
      <SocialMediaLink></SocialMediaLink>
      <Copyright></Copyright>
    </div>
    </>
  )
}

export default Footer