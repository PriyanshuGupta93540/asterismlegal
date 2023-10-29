"use client"

import React,{useState, useRef, useEffect} from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import Link from 'next/link';
import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Teamcard from '../components/Teams'
import Service from '../components/Services';
import Footer from '../components/Footer';
import TestimonialComponent from '../components/Testimonials';
import { useRouter } from 'next/navigation';

const About = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
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

  const navigateToPage = (href) => {
    router.push(href);
  };

  return (
    <div className='top-12 '>
       
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
                <ul className='flex space-x-8 mt-8 ml-102 text-overlay w-100'>
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
            
          >
            SERVICES
          </button>
          <ul
            className={`absolute w-24 p-6 mt-2 right-0 left-0 rounded-md space-y-2  bg-white text-black text-sm ${
              isDropdownVisible ? 'block' : 'hidden'
            } w-48`}
          >
           <li>
                  <Link href="/bankruptcyInsolvencylaw" onClick={() => navigateToPage('/bankruptcyInsolvencylaw')}>BANKRUPTCY & INSOLVENCY LAW</Link>
                </li>
                <li>
                  <Link href="/bankinglaw" onClick={() => navigateToPage('/bankinglaw')}>BANKING LAW</Link>
                </li>
                <li>
                  <Link href="/commercial&corporatelaw" onClick={() => navigateToPage('/commercial&corporatelaw')}>COMMERCIAL & CORPORATE LAW</Link>
                </li>
                <li>
                  <Link href="/civillaw" onClick={() => navigateToPage('/civillaw')}>CIVIL LAW</Link>
                </li>
                <li>
                  <Link href="/consumerlaw" onClick={() => navigateToPage('/consumerlaw')}>CONSUMER LAW</Link>
                </li>
                <li>
                  <Link href="/companieslaw" onClick={() => navigateToPage('/companieslaw')}>COMPANIES LAW</Link>
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
      

        </div>

         <div className='absolute top-96 left-100'>
         <div className='text-overlay mt-36 w-96 h-24 bg-white z-0 flex pt-4 relative ml-24'>
                <div className='text-slate-500 mr-4 ml-6 mt-2'>
                <CorporateFareIcon className='w-10 h-10 text-yellow-500'/>
                </div>
                <div className='text-black mt-2 '>
                    <h1 className="text-5xl font-sans ml-3">ABOUT US</h1>
                    
                </div>
                
            </div>
         </div>

        <div className='flex ml-12 mt-16'>
        <div className='flex qual mt-16 ml-32 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <GavelIcon className='w-16 h-12 mt-4 text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">Qualified
                       Legal Attorneys</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>Our criminal defense attorneys will protect your rights in court.</p>
            </div>
        </div>

        <div className='flex qual mt-16 ml-24 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <BalanceIcon className='w-16 h-12 mt-4  text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">Over 30
Years of Experience</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>We have best skilled attorneys with extensive backgrounds..</p>
            </div>
        </div>
        
        <div className='flex qual mt-16 ml-24 w-64 pt-6 rounded-lg h-60 bg-gray-950 p-2 text-white'>
            <div>
                <EmojiEventsIcon className='w-16 h-12 mt-4 text-yellow-400'/>
            </div>
            <div>
                <h1 className=" text-2xl w-36 ml-4 font-serif">Our Awards
and Certificates</h1>
                 <p className='w-36 text-sm mt-3 ml-4'>We have received more than 150 jury and court trial victories..</p>
            </div>
        </div>
        </div>
       
       <div className='flex mt-36 ml-28'>
        <div className='mr-6'>
           <AccountCircleIcon className='w-12 h-12 text-yellow-400'/>
        </div>
        <div className='flex-row mr-12'>
            <h1 className='text-yellow-500 text-sm'>ABOUT ASTEISM</h1>
            <h3 className='w-60 text-3xl font-serif mt-3'>We Are The Most Popular Law Firm with various Law Services!</h3>
            <p className='w-60 text-justify mt-3'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
        </div>
        <div className='mr-12'>
            <img src="images/D.jpg" alt="" className='w-96 h-96 rounded-md'/>
        </div>
        <div>
            <p className='w-72 text-justify'> <span className='text-5xl text-yellow-400'>T</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus voluptatibus, nobis accusamus, vitae nulla illum aperiam, consequuntur suscipit hic dicta ex earum. Voluptates dolorum illum incidunt vitae quis eius neque modi? Repudiandae et odit mollitia animi cupiditate!</p>
            <h1 className='font-bold mt-4 mb-'>Michael john</h1>
            <h2 className='mb-3'>CEO of the company</h2>
             <img src="images/signature.png" alt="" />
        </div>
        </div>

       

        <div>
            <Teamcard/>
        </div>

        <div>
            <TestimonialComponent/>
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

export default About