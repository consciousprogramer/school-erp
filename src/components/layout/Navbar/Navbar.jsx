import React from "react";
import NavOptions from  "./NavOptions/NavOptions"

export const Navbar = (props) => {
  console.log('Rendering:[Navbar]');

  return (
    <React.Fragment>
      <nav className='z-50 sticky top-0 w-full sm:h-auto h-14 md:pr-6 pr-4 md:pl-3 pl-6 text-white shadow-lg bg-my-grey-blue flex flex-nowrap justify-between items-center'>
        <div className="flex-grow-0 mr-auto md:ml-4 sm:ml-3 ml-0 font-bold text-2xl">
          <a href="#" className='hover:text-green-300' onClick={() => props.setOpen(!props.open)}>{props.open ? <div className='pl-2 pr-3'><i className="fas fa-angle-left"></i></div>: <i className="fas fa-bars"></i>}</a>
        </div>
        <NavOptions/>
      </nav>
    </React.Fragment>
  );
};


export default React.memo(Navbar);
