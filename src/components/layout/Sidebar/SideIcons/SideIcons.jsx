import React from 'react'


const icons_list = [<i className="far fa-calendar-check fa-2x"></i>,<i className="fas fa-chalkboard-teacher fa-2x"></i>,<i className="fas fa-graduation-cap fa-2x"></i>,<i className="fas fa-book-reader fa-2x"></i>,<i className="fas fa-laptop-code fa-2x"></i>,<i className="fas fa-award fa-2x"></i>,<i className="fas fa-cogs fa-2x"></i>,<i className="far fa-edit fa-2x"></i>,<i className="far fa-file-pdf fa-2x"></i>]

function SideIcons(props) {
    return (
        <div className='min-h-full'>
            <hr className='h-2 text-white'/>
            {icons_list.map((icon,key) => {
                return (
                    <div key={key} className='text-center my-5 hover:text-green-500'>
                        {icon}
                    </div>
                )
            })}
        </div>
    )
}

export default SideIcons
