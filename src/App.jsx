import React from 'react'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import Services from './components/Services'
import OurApproach from './components/OurApproach'
import TalentCulture from './components/TalentCulture'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <WhatWeBuild /> */}
      <Services />
      <OurApproach />
      <TalentCulture />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

