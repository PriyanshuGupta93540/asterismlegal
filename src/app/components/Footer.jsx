import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
  return (
    <div className='mt-28'>
        {/* Footer */}
        <div className=' h-97 relative qual'>
         <div className='mt-16'>
           <div className='absolute top-14 left-24' >
            <div>
            <img src="images/logo.png" alt="" className='border-2 w-52'/>
            </div>
            <div className='w-52 mt-6 '>
                <p className='text-slate-300  font-light text-xs text-justify'>The firm’s clients include large and medium Indian and foreign businesses and multinational corporations. The firm advises ministries, government authorities, and public sector.</p>
                <p className='read mt-2 font-mono'>Read More...</p>
            </div>
            
            <div className='mt-4 flex space-x-4 text-yellow-600'>
                      <InstagramIcon/>
                      <FacebookIcon/>
                      <LinkedInIcon/>
                      <YouTubeIcon/>
            </div>
           </div>
         </div>
         <div className='text-slate-400 flex-row left-97 absolute top-16 space-y-1 '>
            <h1 className='font-bold text-2xl text-white font-sans mb-6'>Explore</h1>
            <h2>Support</h2>
            <h2>privacy Policy</h2>
            <h2>Terms and Conditions</h2>
            <h2>Blogs</h2>
            <h2>Help</h2>
         </div>
         <div className='text-slate-400 flex-row left-128 absolute top-16 explore space-y-1'>
            <h1 className=' text-2xl text-white mb-6 font-sans font-bold'>Services</h1>
            <h2>Bankruptcy & Insolvency Law</h2>
            <h2>Banking Law</h2>
            <h2>Commercial & Corporate Law</h2>
            <h2>Civil Law</h2>
            <h2>Consumer Law</h2>
            <h2>Companies Law</h2>
         </div>
         <div className='text-slate-400 flex-row left-128 absolute top-16 get space-y-4'>
            <h1 className='font-bold text-2xl text-white font-sans mb-6 '>Get in Touch</h1>
            <div className='flex'>
                 <LocationOnIcon className=' mr-2 text-yellow-600'/>
            <h2 className='w-60'>K – 14, South Extension, Part I, New Delhi – 110049</h2>
            </div>
            <div className='flex'>
                <PhoneIcon className='text-yellow-600 mr-2'/>
            <h2 className='w-36'>+91-9811898418 , +91-9910356257</h2>
            </div>
            <div className='flex'>
                <MailIcon className='text-yellow-600 mr-2'/>
            <h2>asterismslegal@gmail.com</h2>
            </div>
         </div>
         <div className='text-slate-400 absolute top-98 left-99 text-sm'>
            <p className='ml-6'>© Copyright Asterism Legal Firm. All Rights Reserved</p>
            <p className='ml-12'>Designed by DEVELOPERS INFOTECH Pvt. Ltd.</p>
           
         </div>
        </div>
    </div>
  )
}

export default Footer