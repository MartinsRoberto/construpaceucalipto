/* import React from 'react'
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

export default Lp */
import React from 'react'
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        {/* GTM HEAD */}
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2QZXJZ7');
          `}
        </script>

        {/* GTM NOSCRIPT (DEVE SER STRING) */}
        <noscript>{`
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2QZXJZ7"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}</noscript>
      </Helmet>

      {/* CONTEÚDO DA LP */}
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
    </>
  )
}

export default Lp
