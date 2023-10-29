import React from 'react'
import Welcome from '../components/Welcome'
import Experience from '../components/Experience'

import Ourblog from '../components/Ourblog'
import Teamcard from '../components/Teams'
import Contactform from '../components/contactform'
import Services from '../components/Services'

const Homepage = () => {
  return (
    <div className=''>
        <div className='hero'>
          <img src="images/15.jpg" alt="" className='w-full h-103 law'/>
        </div>
        <Welcome/>
        <Experience/>
        <Services/>
        <Teamcard/>
        <Ourblog/>
        <Contactform/>
    </div>
  )
}

export default Homepage