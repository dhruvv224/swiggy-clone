import React from 'react';

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
          {cardContent.map((content, index) => (
            <div key={index} className='bg-white p-4 shadow-md rounded-lg'>
              {content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;
