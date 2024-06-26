import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Categorydata from './Data/Category.json';

export const Category = () => {
  const [Category, setCategory] = useState([]);
  const[slide,setSlide]=useState(0)

  const FetchData = async () => {
    setCategory(Categorydata);
    console.log(Categorydata);
  };

  useEffect(() => {
    FetchData();
  }, []);
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
  return (
    <div className='max-w-[1200px] mx-auto my-4'>
      <div className='flex items-center justify-between '>
        <div>
          <div className='text-[#282c3f] text-[25px] font-extrabold'>
            What's on your mind?
          </div>
          <p className='text-[#282c3f] text-[13px]'>
            Explore a wide variety of Food to satisfy your cravings.
          </p>
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
      <div className='flex overflow-hidden'>
        {Category.map((item, index) => (
        
          <div key={index} style={{transform:`translateX(-${slide *100}%)`}} className='w-[170px] m-4 text-center shrink-0 duration-500  cursor-pointer'>
            <img src={item.image} alt={item.path} className='w-full h-auto' />
            {/* <h1 className='text-[#282c3f] text-[18px] font-medium'>{item.path}</h1> */}
          </div>
         
        ))}
      </div>
      <hr className='my-6 border-[2px]'/>
    </div>
  );
};

export default Category;
