
import React, { useContext } from 'react'
import Heading from '../utilities/Heading';
import NavBar from '../utilities/NavBar';
import Footer from '../homepage/Footer';
import Card from '../utilities/Card'
import {data} from '../context/Context'
import TabBox from '../utilities/TabBox';
import ContactUs from '../homepage/ContactUs';
import Button1 from '../utilities/Button1'

export function Services() {
const objData = useContext(data)

  return (
      <>
      <NavBar></NavBar>s

   <div className="ServicerMainParent flex justify-center flex-col items-center pt-[60px]">
    <Heading label={"Our Services"}></Heading>
            <Card objData={objData.servicesData}></Card>
   </div>
  
  <h1 className='text-[20px] text-center mb-[20px] mt-[22px]'>Our Other Services</h1>
 <TabBox tabBoxData = {objData}></TabBox>    {/* TAB BOX  */}
<div className="lastBtn ml-3 mb-3">
    <Button1 label={"Contact Us For Services"}></Button1>
</div>
 <ContactUs></ContactUs>
   <Footer></Footer>
   </>
  )
}

export default Services;