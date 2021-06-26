import React from 'react'
import BottomNavLink from './BottomNavLink/BottomNavLink'
function BottomNav(props) {
    return (
        <nav className='bg-my-grey-blue text-green-400 pt-2 pb-1 px-3 z-10 w-screen fixed left-0 bottom-0 md:hidden h-auto max-h-32 flex flex-nowrap justify-between items-center'>
            <BottomNavLink linkTo={'Home'}/>
            <BottomNavLink linkTo={'Attendance'}/>
            <BottomNavLink linkTo={'Time-Table'}/>
            <BottomNavLink linkTo={'Homework'}/>
        </nav>
    )
}

export default BottomNav