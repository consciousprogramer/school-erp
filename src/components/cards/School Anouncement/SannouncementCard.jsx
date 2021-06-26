import React from 'react'

function SannouncementCard(props) {
    return (
        <div className='w-full flex flex-col justify-center py-2 px-2 my-4 bg-white text-gray-800 border-gray-300 border-2 rounded-xl transition-all' style={{}}>
            <div className='flex justify-between mb-2'>
                <div className='text-red-400 font-light pl-4'>
                    <p className=''><i className="far fa-clock"></i> {props.date}</p>
                </div>
                <div className='text-green-500 font-bold pr-4 '>
                    <p className='border-b-2 border-green-500 pb-1'><i className="far fa-calendar-check"></i> {props.tag}</p>
                </div>
            </div>
            <div className='flex flex-col bg-gray-200 rounded-lg py-1'>
                <div className='mb-1'>
                    <p className='pl-4 text-lg text-black font-extrabold text-left'>{props.title}</p>
                </div>

                <div className='mb-2 mt-0'>
                    <p className='pl-4 text-sm text-gray-700 font-semibold text-left'>{props.discription}</p>
                </div>
            </div>
            <div className='mt-2'>
                <p className='font-bold pl-4 text-left'>{`By - ${props.by}`}</p>
            </div>
        </div>
    )
}

export default React.memo(SannouncementCard)
