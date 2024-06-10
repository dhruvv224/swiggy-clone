import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


export const Category = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className=' flex items-center justify-between my-3'>
        <div className='text-[#282c3f] text-[40px] font-bold'>
          What's in your mind?
        </div>
        <div className='flex'>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 text-center'><FaArrowLeft />

          </div>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 text-center'><FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
