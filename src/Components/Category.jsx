import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const Category = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex items-center justify-between my-7'>
        <div>
        <div className='text-[#282c3f] text-[40px] font-bold mx-11'>
          What's in your mind?
         
        </div>

        <p>Explore a wide variety of Food to satisfy your cravings.
        </p>
        </div>
       
        <br />
        
        <div className='flex'>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowLeft />
          </div>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
