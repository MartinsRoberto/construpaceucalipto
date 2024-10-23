import React from 'react'
import Hero from "../components/Lp/Hero"
import LpHighlight from '../components/Lp/LpHighlight'
import LpBenefits from '../components/Lp/lpBenefits'
import Projects from '../components/Lp/Projects'
import Testimonials from '../components/Lp/Testimonials'
import Utilities from '../components/Lp/Utilities'
import WhyMap from '../components/Lp/WhyMap'

import './Lp.css'
import Footer from '../components/Footer/Footer'

const Lp = () => {
  return (
    <div>
      <Hero />
      <LpHighlight />
      <LpBenefits />
      <Projects />
      <Testimonials />
      <Utilities />
      <WhyMap />
      <Footer />
    </div>
  )
}

export default Lp