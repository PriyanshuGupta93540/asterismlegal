"use client"

import React,{useState, useRef, useEffect} from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Link from 'next/link';
import Footer from '../components/Footer';
import DoneIcon from '@mui/icons-material/Done';
import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Bankruptcyinsolvencylaw = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

const toggleDropdown = () => {
  setIsDropdownVisible(!isDropdownVisible);
};

const closeDropdown = () => {
  setIsDropdownVisible(false);
};

useEffect(() => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, []);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) { // Adjust this threshold as needed
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <div>
    <div>
    <div className='aboutus' >
        <img src="images/1.jpg" alt="" className='w-full h-102'/>
    </div>
    <div className={`top-12 absolute text-white ${isHeaderFixed ? 'fixed-header background-change' : 'fixed-header'}`}>
<div className='flex ml-4 absolute top-6'>
    <div className='filter brightness-200 ml-16 text-overlay mt-6'>
    <Link href="/">
          <img src="images/logo.png" alt="" className="w-28 h-20 text-yellow-700" />
          </Link>
    </div>
    <div className='w-100 relative'>
        <ul className='flex space-x-8 mt-6 ml-102 text-overlay w-100'>
            <Link href="/">
                <li>HOME</li>
            </Link>
            <Link href="/aboutus" className='nav-link  hover:text-white transition'>
                 <li>ABOUT US</li>
            </Link>

            <li className="relative">
  <button
    className="cursor-pointer focus:outline-none"
    onClick={toggleDropdown}
    onBlur={closeDropdown}
  >
    SERVICES
  </button>
  <ul
    className={`absolute w-24 p-6 mt-2 right-0 left-0 rounded-md space-y-2  bg-white text-black text-sm ${
      isDropdownVisible ? 'block' : 'hidden'
    } w-48`}
  >
    <li>
        <Link href=
        '/bankruptcyInsolvencylaw'>BANKRUPTCY & INSOLVENCY LAW</Link>
    </li>
    <li>
      <Link href="/bankinglaw">BANKING LAW</Link>
    </li>
    <li>
      <Link href="/commercial&corporatelaw">COMMERCIAL & CORPORATE LAW</Link>
    </li>
    <li>
        <Link href=
        '/civillaw'>CIVIL LAW</Link>
    </li>
    <li>
      <Link href="/consumerlaw">CONSUMER LAW</Link>
    </li>
    <li>
      <Link href="/companieslaw">COMPANIES LAW</Link>
    </li>
    
  </ul>
</li>

            <Link href="/ourblog">
                 <li>BLOG</li>
            </Link>
            <Link href="/contactus">
                 <li>CONTACT US</li>
            </Link>
            
            
            
            
        </ul>
    </div>
    <div className='flex mt-6 text-overlay ml-101 w-48'>
        <div className='mt-2 mr-2'>
        <PhoneIphoneIcon />
        </div>
        <div>
            <h3>CALL US TODAY</h3>
            <h1>+91-9811898418</h1>
        </div>
    </div>
</div>
</div>

<div className='absolute top-96 left-100'>
         <div className='text-overlay mt-36 w-99 h-24 bg-white z-0 flex pt-4 relative ml-24'>
                <div className='text-slate-500 mr-4 ml-6 mt-2'>
                <CorporateFareIcon className='w-10 h-10 text-yellow-500'/>
                </div>
                <div className='text-black mt-2 '>
                    <h1 className="text-4xl font-sans ml-6 ">BANKRUPTCY & INSOLVENCY LAW</h1>
                    
                </div>
                
            </div>
         </div>
         
</div>
       
      <div className='flex'>
       <div className='flex w-96 h-72 p-8 text-black ml-16 mt-16 font-semibold'>
           <ul className='space-y-1 w-72 '>
           <li className='border h-12 border-slate-500 pl-2 pt-2'>
                <Link href=
                '/bankruptcyInsolvencylaw'>BANKRUPTCY & INSOLVENCY LAW</Link>
            </li>
            <li className='border h-12 border-slate-500 pl-2 pt-2'>
              <Link href="/commercial&corporatelaw">COMMERCIAL & CORPORATE LAW</Link>
            </li>
            <li className='border h-12 border-slate-500 pl-2 pt-2'>
              <Link href="/bankinglaw">BANKING LAW</Link>
            </li>
            <li className='border h-12 border-slate-500 pl-2 pt-2'>
                <Link href=
                '/civillaw'>CIVIL LAW</Link>
            </li>
            <li className='border h-12 border-slate-500 pl-2 pt-2'>
              <Link href="/consumerlaw">CONSUMER LAW</Link>
            </li>
            <li className='border h-12 border-slate-500 pl-2 pt-2'>
              <Link href="/companieslaw">COMPANIES LAW</Link>
            </li>
           </ul>
       </div>

       <div className='mt-24'>
           <h1 className='font-bold font-serif text-2xl mb-4'>OVERVIEW</h1>
           <p className='w-105 text-justify text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera
tion in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.
All the Lorem Ipsum generators on the Internet tend to repeat pre</p>
<p className='w-105 text-justify text-sm mt-6'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
         <p className='text-sm mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.</p>
         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim.</p>
         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim.</p>
         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim.</p>

       </div>

       </div>

      <div className='flex'>
        <div className='mt-16 ml-24'>
          <img src="images/19.jpg" alt="" className='w-72 h-96'/>
        </div>
        <div className='w-105 ml-24 mt-12'>
           <h1 className='text-2xl font-serif font-bold mb-4'>OUR PROCESS</h1>
           <p className='text-justify'>Grursus mal suada faci lisis Lorem ipsum dolarorits more a ametion consectetur elit. Vesti at bulum is nec is odio aea a the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorits to the consectetur elit. All the Lorem Ipsum is necessary making true generator on the Internet.</p>
           <div className='flex space-x-2 mt-4'>
            <div>
              <DoneIcon className='text-yellow-500'/>
            </div>
            <div>
              <h1 className='font-semibold'>Planning The Case</h1>
              <p className='text-sm mt-1'>Grursus mal suada faci lisisi Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at dumm.</p>
            </div>
           </div>
           <div className='flex space-x-2 mt-4'>
            <div>
              <DoneIcon className='text-yellow-500'/>
            </div>
            <div>
              <h1 className='font-semibold'>Planning The Case</h1>
              <p className='text-sm mt-1'>Grursus mal suada faci lisisi Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at dumm.</p>
            </div>
           </div>
           <div className='flex space-x-2 mt-4'>
            <div>
              <DoneIcon className='text-yellow-500'/>
            </div>
            <div>
              <h1 className='font-semibold'>Planning The Case</h1>
              <p className='text-sm mt-1'>Grursus mal suada faci lisisi Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at dumm.</p>
            </div>
           </div>
           <div className='flex space-x-2 mt-4'>
            <div>
              <DoneIcon className='text-yellow-500'/>
            </div>
            <div>
              <h1 className='font-semibold'>Planning The Case</h1>
              <p className='text-sm mt-1'>Grursus mal suada faci lisisi Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at dumm.</p>
            </div>
           </div>
       </div>
       </div> 

       <div className='flex ml-12 mt-16'>
        <div className='flex qual mt-16 ml-32 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <GavelIcon className='w-16 h-12 mt-4 text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">
                Qualified Laywers</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>Our criminal defense attorneys will protect your rights in court.</p>
            </div>
        </div>

        <div className='flex qual mt-16 ml-24 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <BalanceIcon className='w-16 h-12 mt-4  text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">Qualified Laywers</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>We have best skilled attorneys with extensive backgrounds..</p>
            </div>
        </div>
        
        <div className='flex qual mt-16 ml-24 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <EmojiEventsIcon className='w-16 h-12 mt-4 text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">Qualified Laywers</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>We have received more than 150 jury and court trial victories..</p>
            </div>
        </div>
        </div>

        <div className='w-109 h-36 qual bg-cyan-950 ml-36 relative mt-16 rounded-xl'>
           <div className=' '> 
             <div className='text-white font-serif ml-16 text-4xl mr-16'>
                <h1 className='top-12 absolute'>BOOK A FREE CONSULTATION ...</h1>
             </div>
              <div className='flex space-x-8 text-4xl  text-yellow-400 absolute top-12 left-111 font-serif'>
              +91-9811898418
                
              </div>
           </div>
        </div>

   <Footer/>

</div>
  )
}

export default Bankruptcyinsolvencylaw