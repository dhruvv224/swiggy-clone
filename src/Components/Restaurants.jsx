import React from 'react';
import restaurents from './Data/RestroChain.json'
export const Restaurants = () => {
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
          {restaurents.map((content, index) => (
            <div key={index} className='w-[273px] cursor-pointer hover:scale-[.95] duration-100 py-4 '>
              <div className='h-[182px] overflow-hidden rounded-[15px] relative'>
              <img src={content.image} className='h-full w-full  object-cover'/>
              <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter uppercase'>
                    {content.offer}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;
