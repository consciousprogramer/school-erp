import React,{useState} from 'react'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import BottomNav from '../BottomNav/BottomNav'
function Layout(props) {
    console.log('Rendering:[Layout]');

    const [open,setOpen] = useState(true)
    return (
        <React.Fragment>
        <div className='flex'>
            {/* <div className={open ? 'min-h-screen md:w-3/12 sm:w-6/12 flex w-11/12 transition-all overflow-hidden':'min-h-screen md:w-20 sm:w-2/12 sm:flex w-px transition-all overflow-hidden'}> */}
                <Sidebar open={open}/>
            {/* </div> */}
            <div className='min-h-screen w-full flex-grow-0 overflow-x-hidden overflow-y-scroll'>
                <Navbar open={open} setOpen={setOpen}/>
                <div className='relative w-full h-full'>
                    <div className='w-screen md:w-full absolute transition-transform overflow-y-scroll' style={{'top':'0','left':'0','bottom':'0'}}>
                            {props.children}
                    </div>
                <BottomNav/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
// style={open ? {'transform':'translateX(0px)'}:{'transform':'translateX(0)'}}
export default React.memo(Layout)
