import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Button2 from './Button2'
import Button1 from '../utilities/Button1'
import { NavLink } from 'react-router-dom'

function Card({objData}) {
    console.log(objData)
  return (
    <>
    {
        objData.map((elem)=>{
 return(
    <>
    <div className="flex w-[95%] justify-around flex-col items-center rounded-md border md:flex-row mt-[8px] mb-[8px]">
      <div className="h-full  max-w-[200px] min-h-[200px]">
        <img
          src={elem.img}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className='w-[70%]'>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {elem.ttl} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {elem.para}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              We Provide
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Outstanding
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Services
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
        
            <span className="flex flex-col">
          {/* <Button2 label={"Explore"}></Button2> */}
<NavLink>          <Button1 label={"Explore"}></Button1></NavLink>
            </span>
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

export default Card