import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Welcome = () => {
  return (
     <div className='mt-96 ml-72 relative wel-container'>

    <div className='w-80 h-36 wel-container-img'>
      <img src="images/9.jpg" alt="" className='h-97 w-80 shadow-2xl rounded-md'/>
    </div>
    <div className='ml-96 absolute top-12 wel-container-div'>
      <div className='w-72'>
        <h1 className='text-3xl mb-4 font-bold text-dark w-96 wel-head'>WELCOME TO THE ASTERAL LAW FIRM</h1>
      </div>
      <div className='w-60 '>
        <hr className='border-yellow-500 border mt-3 mb-3'/>
      </div>
      <div className='w-97'>
        <p className='text-sm wel-ast text-justify'>Asterisms Legal (AL) is full-service law firm. AL was founded with the sole motive of helping, assisting and guiding the clients in achieving prompt legal solutions by way of holistic and pragmatic approach & to .</p>
      </div>
      <div className='mt-4 text-xs wel-lorem'>
        <div className='flex'>
           <CheckIcon className='text-yellow-500 mr-2'/>
           <h1>Lorem ipsum dolor sit amet Lorem ipsum dolor</h1>
        </div>
        <div className='flex mt-1'>
        <CheckIcon className='text-yellow-500 mr-2'/>
           <h1>Lorem ipsum dolor sit amet Lorem ipsum dolor</h1>
        </div>
        <div className='flex'>
        <CheckIcon className='text-yellow-500 mr-2'/>
           <h1>Lorem ipsum dolor sit amet Lorem ipsum dolor</h1>
        </div>
        <div className='flex'>
        <CheckIcon className='text-yellow-500 mr-2'/>
           <h1>Lorem ipsum dolor sit amet Lorem ipsum dolor</h1>
        </div>
        
      </div>
      <div className='flex mt-6 wel-quote'>
         <div className='bg-yellow-400 w-36 h-8'>
          <button className='text-xs text-white pl-4 pt-2'>GET A QUOTE</button>
          <ArrowForwardIcon className='ml-2 text-white text-sm'/>
         </div>
         <div className='w-36 h-8 border-black border ml-4 '>
          <button className='text-xs pl-6'>READ MORE</button>
         </div>
      </div>
    </div>
  </div>
  



  )
}

export default Welcome