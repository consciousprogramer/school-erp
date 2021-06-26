import React from "react";

function BottomNavLink(props) {
  return (
    <div className='flex-grow-0 font-light' style={{'fontFamily':'monospace'}}>
      <div className='flex-grow-0 mb-1 text-green-200'>
        <i className='fas fa-book-open'></i>
      </div>
      <p className='flex-grow text-center text-green-300'>{props.linkTo}</p>
    </div>
  );
}

export default BottomNavLink;
