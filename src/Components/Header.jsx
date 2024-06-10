import React, { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { TbBriefcase2 } from "react-icons/tb";
import swiggylogo from '../Assets/png-transparent-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-orange-thumbnail-removebg-preview.png';
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSidemenu = () => {
    setToggle(true);
  };
  const hideSidemenu=()=>{
    setToggle(false)
  }

  return (
    <>
      <div 
        className='fixed w-full h-full duration-500' onClick={hideSidemenu}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: toggle ? 1 : 0, visibility: toggle ? 'visible' : 'hidden' }}
      ></div>
      <div className='w-[380px] bg-white h-full absolute duration-500' style={{left:toggle ?'0%':'-100%'}}></div>
      
      <header className="p-4 shadow-xl  text-[#3d4152]">
        <div className="max-w-[1200px] mx-auto flex items-center p-2 text-[#3d4152] ml-6">
          <div className='w-[35px]'>
            <img src={swiggylogo} alt="Swiggy Logo" className='w-full cursor-pointer hover:scale-125 duration-300' />
          </div>
          <div className='ml-4 flex items-center cursor-pointer text-[14px]'>
            <span className='font-bold border-b-4 border-black hover:text-[#fc8019] hover:border-[#fc8019] mr-2 '>
              Other
            </span>
            Ahmedabad, Gujarat, India
            <RxCaretDown fontSize={25} onClick={showSidemenu} className='inline text-[#fc8019] ml-1' />
          </div>
          <nav className='flex list-none gap-5 ml-auto text-[16px] font-semibold mr-6 '>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
              <TbBriefcase2 className='mr-1' />
              Swiggy Corporate
            </li>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
            <IoIosSearch className='mr-1' />

              Search
            </li>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
            <CiDiscount1  className='mr-1'/>

              Offers
              <sup className='text-[#fc8019] text-[10px] font-normal'>NEW</sup>
            </li>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
            <IoMdHelpCircleOutline className='mr-1' />

              Help
            </li>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
            <BsPersonFill className='mr-1'/>

              Sign In
            </li>
            <li className='flex items-center cursor-pointer hover:text-[#fc8019] duration-0'>
            <PiShoppingCartSimpleThin className='mr-1' />

              Cart
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
