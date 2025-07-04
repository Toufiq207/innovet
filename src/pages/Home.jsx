import React from 'react'
import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import Galary from '../layout/Galary'
import Contact from '../layout/Contact'
import Service from '../layout/Service'
import Plan from '../layout/Plan'
import AboutLayout from '../layout/AboutLayout'
import Footer from '../layout/Footer'
import ParpelLayout from '../layout/ParpelLayout'
import ImpactLayout from '../layout/ImpactLayout'




const Home = () => {
  return (
    <div>
      
          <Navber/>
      <Banner/>
      <Galary/>
      <Contact/>
      <Service/>
      <ImpactLayout/>
      <Plan/>
      <AboutLayout/>
  <ParpelLayout/>
      <Footer/>
    </div>
  )
}

export default Home