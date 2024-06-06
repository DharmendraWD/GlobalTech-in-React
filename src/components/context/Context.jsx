import React, {createContext, useState} from "react";
// IMPORTING SLIDER IMAGE BEGINS HERE 
import sliderImage1 from '../../assets/img/hospital1.png'
import sliderImage2 from '../../assets/img/OMS-Accounting2.png'
import sliderImage3 from '../../assets/img/omscrmnew3.png'
import sliderImage4 from '../../assets/img/oms-fixedassetsnew4.png'
import sliderImage5 from '../../assets/img/omsorganization5.png'
import sliderImage6 from '../../assets/img/oms-fixedassetsnew4.png'
import OMSFBb from '../../assets/img/OMS-FB.png'
// SLIDER IMAGE ENDS HERE
// IMPORTING OUR PRODUCT IMAGE BEGINS HERE  
import omserp from '../../assets/img/omserp.png'
import omsAcc from '../../assets/img/OMS-Accounting2.png'
import omsClAcc from '../../assets/img/omsorganization5.png'
import omspayroll from '../../assets/img/smspayroll.png'
import omsFB from '../../assets/img/OMS-FB.png'
import smartsales from '../../assets/img/smartsales.png'
import unfldCm from '../../assets/img/unifiled.png'
// IMPORTING OUR PRODUCT IMAGE ENDS HERE

// IMPORTING HOMEPAGE SERVICES IMAGE BEGINS HERE 
import webdev from '../../assets/vdoGif/responsive.gif'
import cldCom from '../../assets/vdoGif/cloudCom.gif'
import respD from '../../assets/vdoGif/responsive.gif'
import softD from '../../assets/vdoGif/softwareDev.gif'
import wbH from '../../assets/vdoGif/webHosting.gif'
import tmgMgnt from '../../assets/vdoGif/timemanagement.gif'
// IMPORTING HOMEPAGE SERVICES IMAGE ENDS HERE 
export const data = createContext("")

function Context(props){
    // SLIDER IMAGE, TEXT, HEADING, LINK BEGINS HERE
    const sliderData = [
        {
            img:sliderImage1,
            heading:"Hospital",
            para:"The hospital manager's integrated stores system optimizes inventory control, facilitating streamlined procurement, storage, and distribution processes for effective management of medical supplies and resources",   
   
            lnk:"",   
        },
        {
            img:sliderImage2,
            heading:"OMS Accounting",
            para:"The comprehensive accounting software package provides business managers with a complete suite of tools for financial management, reporting, and analysis.",   
            lnk:"",   
        },
        {
            img:sliderImage3,
            heading:"OMS CRM",
            para:"HR module facilitate all the personal related activites of and organization.", 
            lnk:"",     
        },
        {
            img:OMSFBb,
            heading:"OMS F & B",
            para:"Efficient order processing and swift turnaround times optimize operational speed, ensuring timely delivery and enhanced customer satisfaction.",  
            lnk:"",    
        },
        {
            img:sliderImage4,
            heading:"OMS Fixed Assets",
            para:"Efficiently oversee your fixed assets, ensuring proper maintenance, tracking, and utilization to maximize asset value and optimize financial performance.", 
            lnk:"",     
        },

    ]
    // SLIDER IMAGE, TEXT, HEADING, LINK ENDS HERE
// OUR PRODUCTS DATA BEGINS HERE 
let ourProductData = [
    {
        img:omserp,
        ttl:"OMS | ERP",
        lnk:"",
    },
    {
        img:omsAcc,
        ttl:"OMS ACCOUNTING",
        lnk:"",
    },
    {
        img:omsClAcc,
        ttl:"OMS CLOUD COMPUTING",
        lnk:"",
    },
    {
        img:omspayroll,
        ttl:"OMS PAYROLL",
        lnk:"",
    },
    {
        img:omsFB,
        ttl:"OMS F&B ",
        lnk:"",
    },
    {
        img:sliderImage1,
        ttl:"HOSPITAL MANAGER",
        lnk:"",
    },
    {
        img:smartsales,
        ttl:"SMART SALESMEN",
        lnk:"",
    },
    {
        img:sliderImage3,
        ttl:"OMS CRM",
        lnk:"",
    },
    {
        img:unfldCm,
        ttl:"UNIFIELD COMMUNICATION",
        lnk:"",
    },
]
// OUR PRODUCTS DATA ENDS HERE 
// HOMEPAGE SERVICES CONTENT BEGINS HERE 
const homePgServices =[
    {
        img:webdev,
        ttl: "Web Development",
        para:"GlobalTech excels in web development, delivering top-tier services tailored to your needs. With expertise, innovation, and dedication, we ensure exceptional results for every project."
    },
    {
        img:cldCom,
        ttl: "Cloud Computing",
        para:"Our company delivers top-notch cloud computing services, offering scalable solutions tailored to your needs. With cutting-edge technology and expertise, we optimize efficiency and drive innovation for your business."
    },
    {
        img:respD,
        ttl: "Responsive and Eye Apealing Design",
        para:"We specialize in delivering responsive and innovative web design services, crafting visually stunning and user-friendly websites tailored to your brand. Our expertise ensures exceptional design that captivates and engages audiences."
    },
    {
        img:softD,
        ttl: "Software Development",
        para:"Our company offers top-tier software development services, leveraging cutting-edge technology and expertise to create tailored solutions that drive innovation and empower your business for success in the digital age."
    },
    {
        img:wbH,
        ttl: "Web Hosting",
        para:"Our company offers top-tier web hosting services, providing reliable and secure hosting solutions tailored to your needs. Trust us for fast, scalable, and uninterrupted website performance.."
    },
    {
        img:tmgMgnt,
        ttl: "We Care About Your Time",
        para:"We prioritize your time, ensuring efficiency and convenience in every interaction. With streamlined processes and prompt responses, we're committed to respecting and valuing your time."
    },
]
// HOMEPAGE SERVICES CONTENT ENDS HERE 
    const objData = {sliderData, ourProductData, homePgServices}  // STORING ALL DATA IN AN OBJECT CALLED "objData"

   
   
   
   
   
   return <data.Provider value={objData}>
 {props.children}
 </data.Provider>
}

export default Context