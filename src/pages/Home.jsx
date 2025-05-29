import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Herosection'
import Card from '../components/Card'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Feedback from '../components/Feedback'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='font-sans '>
      <Navbar/>
      <Hero/>
      <Card/>
      <Services/>
      <HowItWorks/>
      <Feedback/>
      <CtaBanner/>
      <Footer/>
    </div>
  )
}

export default Home