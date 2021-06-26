import React from 'react'

function ClassAnnouncementFeed(props) {
    return (
        <div className='flex flex-col items-center content-start justify-center shadow-md rounded-lg pb-4 px-3'>
            <div className='pb-6'>
                <h1 className='text-green-800 font-bold text-2xl'><i className="fas fa-user-graduate"></i> Class Notice Board</h1>
            </div>
            <div className='max-h-80 overflow-y-scroll'>
                {props.children}
            </div>
        </div>
    )
}

export default React.memo(ClassAnnouncementFeed);
