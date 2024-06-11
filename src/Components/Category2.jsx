import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

export const Category2 = () => {
  return (
<div className='max-w-[850px] mx-auto flex items-center'>
<div>
    <div>Whats on your mind?</div>
    <div>
    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowLeft onClick=''/>
          </div>
          <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
            <FaArrowRight onClick='' />
          </div>
    </div>
</div>
</div>  )
}
export default Category2
