import React from 'react'

function SideLink(props) {
    return (
        <div className='flex flex-grow items-center justify-start py-2 px-2 hover:bg-my-grey-blue-hover max-h-9'>
            <div className='flex-grow-0 pr-4'>
            <i className="fas fa-angle-right"></i>
            </div>
            <p className='flex-grow text-left' style={{'whiteSpace':'nowrap'}}>{props.linkText}</p>
        </div>
    )
}

export default React.memo(SideLink);