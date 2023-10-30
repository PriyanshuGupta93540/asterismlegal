
import React from 'react'

const Contactform = () => {

   
  return (
    <div className='mt-36 flex ml-44'>
        <div>
            <h1 className='text-black text-3xl w-64 font-bold'>WHY DO YOU CHOOSE  <span className='text-yellow-400 text-4xl'>ASTERISM LEGAL</span> </h1>
            <h5 className='mt-5 font-bold font-serif'>A suitable legal adviser</h5>
            <p className='w-96 mt-4 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde magni accusamus quisquam laboriosam, quis doloremque deleniti totam, quidem error ipsam ab maxime. Deserunt nobis, voluptas aspernatur doloribus rerum soluta laboriosam, ab fugit aliquam, laborum facilis repellat recusandae neque corrupti pariatur sapiente impedit natus deleniti. Ab labore sint beatae nemo rerum?.</p>

        </div>
        <div className='ml-32 w-99 pl-12 h-120 contact shadow-2xl rounded-lg'>
            <h1 className='ml- mb-10 mt-8 font-bold text-3xl text-slate-600'>CONTACT US </h1>
            <div className=' w-24 '>
                <div className='flex'>
                   <input type="text" placeholder='Your Name' className='mr-4 w-48 pl-4 h-10 border'/>
              
                   <input type="text" name="" id="" placeholder='Phone Number' className='w-48 h-10 pl-4 text-slate-600 border'/>
                </div>
                <input type="text" placeholder='E-mail Address' className='mt-8 w-96 h-10 pl-4 border'/>
                <br/>
                   <br/>
                <input type="text" placeholder='Message' className=' mt-3 w-96 h-10 pl-4 border'/>
            </div>
            <div className='mt-10 w-28 h-10 pl-4 pt-2 bg-yellow-500 text-white'>
                Submit
            </div>
        </div>
    </div>
  )
}

export default Contactform