import React from 'react'

export const Sidemenu = ({toggle,hideSidemenu}) => {
  return (
    <div>
         {/* Background Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 duration-500 ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={hideSidemenu}
      ></div>
      
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 w-[380px] h-full bg-white shadow-lg duration-500 ${toggle ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Add content to the side menu here */}
      </div>
    </div>
  )
}
export default Sidemenu