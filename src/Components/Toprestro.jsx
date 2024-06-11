import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Restrodata from './Data/RestroChain.json'

export const Toprestro = () => {
    const[slide,setSlide]=useState(0)
    const[restroData,setRestroData]=useState([])
    const leftSlide=()=>{
        if(slide==0)
          return false
        setSlide(slide - 3)
      }
    const rightSlide=()=>{
      if(slide==18)
        return false
     
     
    
      setSlide(slide + 3)
    }
    const fetchData=()=>{
        setRestroData(Restrodata)
        
    }
    useEffect(()=>{
fetchData()
    },[])
  return (
    <div>
         <div className='max-w-[1200px] mx-auto my-4'>
      <div className='flex items-center justify-between '>
        <div>
          <div className='text-[#282c3f] text-[25px] font-extrabold'>
          Top restaurant chains in Ahmedabad

          </div>
         
        </div>
        <br />
        <div className='flex'>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowLeft onClick={leftSlide}/>
          </div>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowRight onClick={rightSlide} />
          </div>
        </div>
      </div>
      <div className='flex border-red-500'>
        {
            Restrodata.map((item,index)=>(
                <div key={index} className='w-[2730px]'>
                    <div className='h-[182px] overflow-hidden cursor-pointer rounded-[20px] relative shrink-0'>
                    <img src={item.image} className='h-full w-full object-cover' />
                    <div className=''></div>
                    </div>

                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}
export default Toprestro