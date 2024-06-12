import React from 'react';
import Appstore from '../Assets/pngwing.apple com.png'
import Playstore from '../Assets/pngwing.com.png'
export const Footer = () => {
  return (
    <div>

    
    <div className='bg-[#F0F0F5] p-[1px]'>
      <div className='max-w-[1000px] mx-auto  flex items-center justify-between'>
        <div>
          <h1 className='text-[28px] font-extrabold text-[#02060CBF]'>
            For better experience, download <br /> the Swiggy app now
          </h1>
        </div>
        <div className='flex items-center space-x-4 cursor-pointer'>
          <img src={Appstore} alt="App Store" className='w-[125px]' />
          <img src={Playstore} alt='playstore' className='w-40'/>
        </div>
      </div>
    </div>
    <div className='footer'>
        <div className='bg-[#02060C] p-4'>
            <div className='max-w-[900px] mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div>
                    hello
                </div>
                <div>
                    hello
                </div>
                <div>
                    hello
                </div>
                <div>
                    hello
                </div>

            </div>
            
        </div>
    </div>
    </div>
  );
};

export default Footer;
