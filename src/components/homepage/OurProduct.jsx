import React, { useContext } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Heading from '../utilities/Heading'
import {data} from '../context/Context'
import Button1 from '../utilities/Button1'
import { NavLink } from 'react-router-dom'


function OurProduct() {
const objData = useContext(data);

  return (
    <>
    <Heading label="Our Products"></Heading> 
{
    objData.ourProductData.map((data, idex)=>{
        return(
            <>
            <div className='OurProductParent flex justify-center items-center mt-[22px] flex-col'>
    <div className="flex w-[95%] flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img src={data.img} className=" w-[50%] rounded-md " style={{margin:"0 auto"}}/>
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {data.ttl} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <div className="mt-3 flex items-center space-x-2 ourPrdctBtnParent">
            {/* <img src={data.img} alt="" /> */}
            <span className="flex flex-col">
                   <NavLink to="/some/path">   <Button1 label="Explore"></Button1></NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>

</div>
            </>
        )
    })
}
    </>
  )
}

export default OurProduct