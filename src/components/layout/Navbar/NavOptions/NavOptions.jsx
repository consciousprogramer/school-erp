import React from 'react'
import NavLink from "../NavLink/NavLink"

function NavOptions() {
    console.log('Rendering:[NavOptions]');
    const links = ['Ask','Homework','Material','Result','Announcement']
    return (
        <ul className="ml-auto mr-5 md:flex hidden flex-grow-0 flex-nowrap justify-evenly items-center list-none">
        {links.map((link,index) => {
            return(
                <NavLink Text={link} key={index}/>
            )
        })}
        </ul>
    )
}

export default React.memo(NavOptions)
