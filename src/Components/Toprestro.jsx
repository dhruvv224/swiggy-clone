import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Restrodata from './Data/RestroChain.json';

export const Toprestro = () => {
  const [slide, setSlide] = useState(0);
  const [restroData, setRestroData] = useState([]);

  const leftSlide = () => {
    if (slide === 0) return
    
    setSlide(slide - 0.5);
  };

  const rightSlide = () => {
    // Ensure the check considers the number of visible items and total items
    if (slide==1.5) return; // Adjust the number 3 based on visible items
    setSlide(slide + 0.5);
  };
  const fetchData = () => {
    setRestroData(Restrodata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='max-w-[1200px] mx-auto my-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-[#282c3f] text-[25px] font-extrabold'>
              Top restaurant chains in Ahmedabad
            </div>
          </div>
          <div className='flex'>
            <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
              <FaArrowLeft onClick={leftSlide} />
            </div>
            <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer'>
              <FaArrowRight onClick={rightSlide} />
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <div
            className='flex gap-5 transition-transform duration-500'
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {restroData.map((item, index) => (
              <div
                key={index}
                className='w-[273px] py-4 shrink-0 grow-0 cursor-pointer hover:scale-[.95] duration-100'
              >
                <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
                  <img src={item.image} className='h-full w-full object-cover' />
                  <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter uppercase'>
                    {item.offer}
                  </div>
                </div>
                <div className='my-2 font-bold text-[18px] text-gray-700'>
                  {item.title}
                </div>
                <div className='flex items-center text-[16px] font-bold text-gray-700'>
                  <Star className='inline' /> <span className='ml-1 mr-1'>{item.rating}</span> <span>&#8226;</span>
                  <span className='ml-1'>{item.minTime}-{item.maxTime}</span>
                </div>
                <div>
                  <p className='text-[16px] text-gray-600 font-normal'>{item.name}</p>
                  <p className='text-[16px] text-gray-600 font-normal'>{item.place}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className='my-6 border-[2px]'/>

        </div>
      </div>

    </div>
  );
};

const Star = () => {
  return (
    <>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        role="img"
        aria-hidden="true"
        strokecolor="rgba(2, 6, 12, 0.92)"
        fillcolor="rgba(2, 6, 12, 0.92)"
      >
        <circle
          cx={10}
          cy={10}
          r={9}
          fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
        />
        <path
          d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="StoreRating20_svg__paint0_linear_32982_71567"
            x1={10}
            y1={1}
            x2={10}
            y2={19}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#21973B" />
            <stop offset={1} stopColor="#128540" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Toprestro;
