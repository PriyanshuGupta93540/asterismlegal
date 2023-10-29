"use client"

import React,{useState, useRef, useEffect} from 'react'
import Link from 'next/link';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

const page = () => {

  
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
      // closeDropdown(); 
    };

  return (
    <div className='top-12'>

        <div>
            <div className='aboutus' >
                <img src="images/1.jpg" alt="" className='w-full h-102'/>
            </div>
            <div className={`top-12 absolute text-white ${isHeaderFixed ? 'fixed-header background-change' : 'fixed-header'}`}>
        <div className='flex ml-4 absolute top-6'>
            <div className='filter brightness-200 ml-16 text-overlay mt-6'>
                <img src="images/logo.png" alt="" className='w-28 h-20 text-yellow-700'/>
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

                    <Link href="/ourblog" className='nav-link  hover:text-white transition '>
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
         <div className='text-overlay mt-36 w-96 h-24 bg-white z-0 flex pt-4 relative ml-24'>
                <div className='text-slate-500 mr-4 ml-12 mt-2'>
                <MenuBookIcon className='w-16 h-12 text-yellow-600'/>
                </div>
                <div className='text-black mt-2 '>
                    <h1 className="text-6xl font-sans ml-6">BLOG</h1>
                    
                </div>
                
            </div>
         </div>

        </div>

        <div className="max-w-screen-lg mx-auto mt-28">
  

    <main className="mt-12">

      <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">

       <div className='flex'>
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64"/>
          <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
          <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p className="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
            decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
            itself.
            Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
          </p>
          <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
        </div>

   
        <div className="w-full md:w-4/7 ml-12">

          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Gadgets </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                At every tiled on ye defer do. No attention suspected oh difficult.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
              </p>
            </div>
          </div>

    
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Bitcoin </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Fond his say old meet cold find come whom. The sir park sake bred.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
       
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Insights </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>
    
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Cryptocurrency </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>

        </div>

        </div>

      </div>
     
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Latest Blog</h2>
        {/* <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
          View all
        </a> */}
      </div>
      <div className="block space-x-0 lg:flex lg:space-x-6">

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
            <p className="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked </h2>
            <p className="text-gray-700 mt-2">
            Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p className="text-gray-700 mt-2">
            Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

      </div>
     
      
   
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Recommended</h2>
        {/* <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
          View all
        </a> */}
      </div>
      <div className="block space-x-0 lg:flex lg:space-x-6">

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
            <p className="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked </h2>
            <p className="text-gray-700 mt-2">
            Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

        <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
          <div className="p-4 pl-0">
            <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p className="text-gray-700 mt-2">
            Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" className="inline-block px-6 py-3 mt-2 rounded-md bg-yellow-500 text-white">
            Read more
          </a>
          </div>
        </div>

      </div>


    </main>
   

 
  </div>
  <Footer/>

    </div>
  )
}

export default page