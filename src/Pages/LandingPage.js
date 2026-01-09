import React from 'react'
import HeroSection from '../Components/LandingPage/HeroSection'
import ClaritySection from '../Components/LandingPage/CalritySection'
import ServicesOverview from '../Components/LandingPage/ServicesOverview'
import HealthPackages from '../Components/LandingPage/PackageCard'
import ContactSection from '../Components/LandingPage/ContactUsSection'
import FinalCTA from '../Components/LandingPage/FinalCTA'
import Footer from '../Components/Footer'
import MissionStatement from '../Components/LandingPage/MissionStatement'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <ClaritySection />
        <ServicesOverview />
        <HealthPackages />
        <MissionStatement />
        <ContactSection />
        <FinalCTA />
    </div>
  )
}

export default LandingPage