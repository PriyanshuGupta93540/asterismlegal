import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Ourblog = () => {
  return (
    <div>
        <div className='ml-100'>
        <h1 className='text-4xl font-bold text-black'>Our Blog</h1>
            <h2 className='mb-8 mt-1 text-base ml-128 text-slate-900'>Latest Blog & News --- </h2>
        </div>
        <div className='flex space-x-8 ml-16 '>
            <div className='w-96 h-100  relative shadow-2xl rounded-xl'>
               <img src="images/11.jpg" alt="" className='rounded-xl'/>
               <div className='w-48 h-10 bg-yellow-400  absolute top-60 ml-24 pl-4 rounded-lg'>
                
                 <CalendarMonthIcon className='mt-2'/>
                 <h4 className='absolute top-2 left-7 pl-4'>1st October 2023</h4>
               </div>
               <div className='flex mt-10 space-x-4 ml-6 text-green-900'>
                <div className='flex'>
                    <PersonOutlineIcon/>
                    <h5>By Admin</h5>
                </div>
                <div className='flex'>
                    <CommentIcon/>
                    <h5>3 Comments</h5>
                </div>
               </div>
               <div>
                <h1 className='w-80 ml-6 font-bold text-xl mt-2'>Cras accumsan nulla nec lacus ultricies placerat.</h1>
               <p className='text-justify ml-7 mr-6 mt-1 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quo, incidunt dicta hic dolor eaque voluptates deserunt voluptas dolore laborum tempora, cupiditate mollitia assumenda ipsam.</p>
               <span className='ml-7 text-green-900 '>Read More
               <ArrowForwardIcon className='text-yellow-500 ml-1'/>
                </span>
               </div>
            </div>
            <div className='w-96 h-63 relative shadow-2xl rounded-xl'>
               <img src="images/12.jpg" alt="" className='rounded-xl'/>
               <div className='w-48 h-10 bg-yellow-400  absolute top-60 ml-24 pl-4 rounded-lg'>
                
                 <CalendarMonthIcon className='mt-2'/>
                 <h4 className='absolute top-2 left-7 pl-4'>1st October 2023</h4>
               </div>
               <div className='flex mt-10 space-x-4 ml-6 text-green-900'>
                <div className='flex'>
                    <PersonOutlineIcon/>
                    <h5>By Admin</h5>
                </div>
                <div className='flex'>
                    <CommentIcon/>
                    <h5>3 Comments</h5>
                </div>
               </div>
               <div>
                <h1 className='w-80 ml-6 font-bold text-xl mt-2'>Cras accumsan nulla nec lacus ultricies placerat.</h1>
               <p className='text-justify ml-7 mr-6 mt-1 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quo, incidunt dicta hic dolor eaque voluptates deserunt voluptas dolore laborum tempora, cupiditate mollitia assumenda ipsam.</p>
               <span className='ml-7 text-green-900 '>Read More
               <ArrowForwardIcon className='text-yellow-500 ml-1'/>
                </span>
               </div>
            </div>
            <div className='w-96 h-63 relative shadow-2xl rounded-xl'>
               <img src="images/13.jpg" alt="" className='rounded-xl'/>
               <div className='w-48 h-10 bg-yellow-400  absolute top-60 ml-24 pl-4 rounded-lg'>
                
                 <CalendarMonthIcon className='mt-2'/>
                 <h4 className='absolute top-2 left-7 pl-4'>1st October 2023</h4>
               </div>
               <div className='flex mt-10 space-x-4 ml-6 text-green-900'>
                <div className='flex'>
                    <PersonOutlineIcon/>
                    <h5>By Admin</h5>
                </div>
                <div className='flex'>
                    <CommentIcon/>
                    <h5>3 Comments</h5>
                </div>
               </div>
               <div>
                <h1 className='w-80 ml-6 font-bold text-xl mt-2'>Cras accumsan nulla nec lacus ultricies placerat.</h1>
               <p className='text-justify ml-7 mr-6 mt-1 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quo, incidunt dicta hic dolor eaque voluptates deserunt voluptas dolore laborum tempora, cupiditate mollitia assumenda ipsam.</p>
               <span className='ml-7 text-green-900 '>Read More
               <ArrowForwardIcon className='text-yellow-500 ml-1'/>
                </span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Ourblog