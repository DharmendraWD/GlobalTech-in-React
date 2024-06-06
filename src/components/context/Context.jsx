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
    const objData = {sliderData, ourProductData}  // STORING ALL DATA IN AN OBJECT CALLED "objData"

   
   
   
   
   
   return <data.Provider value={objData}>
 {props.children}
 </data.Provider>
}

export default Context