import React from 'react'
import student from '../../../images/images.jpg'
import SideLink from './SideLink/SideLink'
import logo from '../../../images/dav.jpg'
import SideIcons from './SideIcons/SideIcons'


function Sidebar(props) {
    console.log('Rendering:[Sidebar]');
    return (
        // below div is just the container which change s width daynamically so that the side bar can fill it 
        <div className={props.open ? 'min-h-screen md:w-3/12 sm:w-6/12 flex w-full transition-all flex-grow':'min-h-screen md:w-20 sm:w-2/12 sm:flex w-px transition-all flex-grow overflow-hidden'}>
            <div id='main-sidebar' className='h-screen w-full overflow-x-hidden bg-my-grey-blue p-2'>
                <div className='w-full h-auto text-white border-my-dark-blue border-2 flex flex-col content-start'>
                    <div>
                        {props.open ? <h1 className='mt-4'>D.A.V Public School</h1> : <img src={logo} className='mt-1 mx-auto rounded-full' width='50px' alt=""/>}
                    </div>
                     <div className='mt-4'>
                        <img id='student-pic' src={student} alt="student" className={`mx-auto mb-3 max-h-40 rounded-full ${props.open ? 'w-3/4' : 'w-full'}`}/>
                        {props.open &&<div>
                            <p className=''>{`Student Name`}</p>
                            <p className="">{`RollNo : 47`}</p>
                        </div>}
                    </div>
                    <div className="sideLinks-wrapper mt-4 pb-16">
                        {props.open ? (<React.Fragment>
                        <SideLink linkText={'Syllabus'}/>
                        <SideLink linkText={'Holidays'}/>
                        <SideLink linkText={'DateSheet'}/>
                        <SideLink linkText={'Syllabus'}/>
                        <SideLink linkText={'Ask A Question'}/>
                        <SideLink linkText={'Assignments'}/>
                        <SideLink linkText={'Take Quiz'}/>
                        <SideLink linkText={'Time-Table'}/>
                        <SideLink linkText={'Syllabus'}/>
                        <SideLink linkText={'Holidays'}/>
                        <SideLink linkText={'DateSheet'}/>
                        <SideLink linkText={'Syllabus'}/>
                        <SideLink linkText={'Ask A Question'}/>
                        <SideLink linkText={'Assignments'}/>
                        <SideLink linkText={'Take Quiz'}/>
                        <SideLink linkText={'Time-Table'}/>
                        </React.Fragment>)
                        :<SideIcons/>}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default React.memo(Sidebar)
