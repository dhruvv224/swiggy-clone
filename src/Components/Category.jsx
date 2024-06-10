import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const Category = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex items-center justify-between '>
        <div className='text-[#282c3f] text-[40px] font-bold'>
          What's in your mind?
        </div>
        <div className='flex'>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'>
            <FaArrowLeft />
          </div>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
