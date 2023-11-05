import Image from 'next/image'
import Footer from './components/Footer'

import Homepage from './home/page.jsx'
import Header from './components/Header'



export default function Home() {

  // const homemaain = {
  //   position: 'relative'
  //  }
  
  // const header = {
  //   position: 'absolute'
  //  }

  return (
    <main>
        <Header />
        <Homepage/>
        
       <Footer/>/
      
    </main>
  )
}
