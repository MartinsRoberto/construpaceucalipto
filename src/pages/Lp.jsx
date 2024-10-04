import React from 'react'
import Hero from "../components/Lp/Hero"
import LpHighlight from '../components/Lp/LpHighlight'
import LpBenefits from '../components/Lp/lpBenefits'
import Projects from '../components/Lp/Projects'


const Lp = () => {
  return (
      <div>
        <Hero/>
        <LpHighlight/>
        <LpBenefits/>
        <Projects/>
    </div>
  )
}

export default Lp