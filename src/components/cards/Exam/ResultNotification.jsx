import React from 'react'

function ResultNotification() {
    return (
        <div className='w-full flex flex-col justify-center py-2 px-2 my-4 bg-white text-gray-800 border-gray-300 border-2 rounded-xl transition-all' style={{}}>
            <div className='flex justify-between mb-2'>
                <div className='text-red-400 font-light pl-4'>
                    <p className=''><i class="far fa-clock"></i> {props.date}</p>
                </div>
                <div className='text-green-500 font-bold pr-4 '>
                    <p className='border-b-2 border-green-500 pb-1'><i class="far fa-calendar-check"></i> {props.tag}</p>
                </div>
            </div>
            <div className='flex flex-col bg-gray-200 rounded-lg py-1'>
                <div className='mb-1'>
                    <p className='pl-4 text-lg text-black font-extrabold text-left'>{props.title}</p>
                </div>
            </div>
            <div className='mt-2'>
                <button className='bg-purple-500 text-white font-bold'>Check Result</button>
            </div>
        </div>
    )
}

export default ResultNotification
