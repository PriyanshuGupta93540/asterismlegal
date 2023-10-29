import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Experience = () => {
  return (
    <div className='mt-96 relative mb-60'>
        <div className='relative z-0'>
            <div className='experience '>
                <img src="images/3.jpg" alt="" className='h-100 w-full'/>
            </div>
            <div className='left-106 absolute top-48 flex'>
            <div className='text-overlay text-white w-96'>
               <h1 className='text-3xl w-101'>20 YEARS OF EXPERIENCE IN LEGAL CASES FIELD</h1>
               <hr className='border-yellow-500 ml-60 mt-4 mb-4 w-72'/>
               <p className='w-107 ml-36 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ut recusandae porro deleniti iure eveniet itaque deserunt? Asperiores similique</p> 
            </div>
           

            </div>
            <div className='flex'>
                <div className='flex text-overlay w-40 h-16 exp mt-28 absolute top-56 left-80'>
                    <div className='text-yellow-500 mt-2 ml-2'>
                        <BusinessCenterIcon/>
                    </div>
                    <div className='text-white ml-2 mt-2'>
                        <h1>250+</h1>
                        <h4 className='w-96 text-xs'>Business Partners</h4>
                    </div>
                </div>
                <div className='flex text-overlay w-40 h-16 exp mt-28 absolute top-56 left-100'>
                    <div className='text-yellow-500 mt-2 ml-2'>
                        <BusinessCenterIcon/>
                    </div>
                    <div className='text-white ml-2 mt-2'>
                        <h1>250+</h1>
                        <h4 className='w-96 text-xs'>Business Partners</h4>
                    </div>
                </div>
                <div className='flex text-overlay w-40 h-16 exp mt-28 absolute top-56 left-108'>
                    <div className='text-yellow-500 mt-2 ml-2'>
                        <BusinessCenterIcon/>
                    </div>
                    <div className='text-white ml-2 mt-2'>
                        <h1>250+</h1>
                        <h4 className='w-96 text-xs'>Business Partners</h4>
                    </div>
                </div>
                <div className='flex text-overlay w-40 h-16 exp mt-28 absolute top-56 left-109'>
                    <div className='text-yellow-500 mt-2 ml-2'>
                        <BusinessCenterIcon/>
                    </div>
                    <div className='text-white ml-2 mt-2'>
                        <h1>250+</h1>
                        <h4 className='w-96 text-xs'>Business Partners</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-103 h-36 absolute top-96 left-96 mt-12'>
            <div className='relative'>
            <img src="images/10.jpg" alt="" className='w-103 h-80 shadow-2xl rounded-md'/>
            <PlayCircleFilledIcon className='absolute top-36 w-16 h-16 text-yellow-400 left-72'/>
            </div>
        </div>
    </div>
  )
}

export default Experience