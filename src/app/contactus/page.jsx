"use client"

import React,{useState, useRef, useEffect} from 'react'
import Link from 'next/link';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Contact from '../components/ContactPage';
import Map from '../components/Maps';
import Maps from '../components/Maps';
import Footer from '../components/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useRouter } from 'next/navigation';

const Contactus = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const router = useRouter();

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

      const navigateToPage = (href) => {
        router.push(href);
      };

  return (
    <div className=''>
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
                    <Link href="/aboutus" className='nav-link  hover:text-white transition '>
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
                    <Link href="/contactus" className='nav-link  hover:text-white transition'>
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
                <ContactMailIcon className='w-10 h-10 text-yellow-600'/>
                </div>
                <div className='text-black mt-2 '>
                    <h1 className="text-5xl font-sans ml-3">CONTACT US</h1>
                    
                </div>
                
            </div>
         </div>

         <Contact/>

        <Maps/>

        <div className='w-109 h-36 qual bg-cyan-950 ml-36 relative mt-16 rounded-xl'>
           <div className=' '> 
             <div className='text-white font-serif ml-16 text-4xl'>
                <h1 className='top-12 absolute'>FOLLOW US ON ....</h1>
             </div>
              <div className='flex space-x-8 ml-106 text-yellow-600 absolute top-8'>
                 <FacebookIcon className='w-16 h-16'/>
                 <InstagramIcon className='w-16 h-16'/>
                 <TwitterIcon className='w-16 h-16'/>
                 <LinkedInIcon className='w-16 h-16'/>
                 <YouTubeIcon className='w-16 h-16'/>
              </div>
           </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Contactus