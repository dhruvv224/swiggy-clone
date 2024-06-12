import React, { useEffect, useState } from 'react';
import restaurents from './Data/RestroChain.json'
export const Restaurants = () => {
  const[restroData,setRestroData]=useState([])
  const buttons = [
    'Sort By',
    'Fast Delivery',
    'New on Swiggy',
    'Ratings 4.0+',
    'Pure Veg',
    'Offers',
    'Rs. 300-Rs. 600',
    'Less than Rs. 300'
  ];

  const cardContent = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
    'Card 6',
    'Card 7',
    'Card 8'
  ];
const fetchData=()=>{
  let repeatedRestraurents=[]
  for(let i=0;i<4;i++)
    {
      repeatedRestraurents=repeatedRestraurents.concat(restaurents)
    }
    setRestroData(repeatedRestraurents)
    console.log(restroData)
}
useEffect(()=>{
  fetchData()

},[])
  return (
    <>
      <div className='max-w-[1200px] mx-auto my-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-[#282c3f] text-[25px] font-extrabold'>
              Restaurants with online food delivery in Ahmedabad
            </div>
            <div className="flex flex-wrap gap-4 my-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="bg-[#f2f2f2] font-bold text-[#333] px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:bg-[#e2e2e7] focus:outline-none"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {restroData.map((content, index) => (
            <div key={index} className='w-[278px] cursor-pointer hover:scale-[.95] duration-100 py-4 '>
              <div className='h-[185.33px] overflow-hidden rounded-[15px] relative'>
              <img src={content.image} className='h-full w-full  object-cover'/>
              <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter uppercase'>
                    {content.offer}
                  </div>
                  <div className='my-2 font-bold text-[18px] text-gray-700'>
                  {content.title}
                </div>
                <div className='flex items-center text-[16px] font-bold text-gray-700'>
                  <Star className='inline' /> <span className='ml-1 mr-1'>{item.rating}</span> <span>&#8226;</span>
                  <span className='ml-1'>{item.minTime}-{item.maxTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
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
export default Restaurants;
