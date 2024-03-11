import React from 'react'
import AboutBanner from './about-banner/AboutBanner'
import AboutContent from './about-content/AboutContent'
import WhyChoose from './why-choose/WhyChoose'
import ExclusiveFeatures from './exclusive-features/ExclusiveFeatures'
import History from './history/History'
import CallToAction from '../main/call-to-action/CallToAction'
import BusinessAcumen from './business-acumen/BusinessAcumen'

const AboutUs = () => {
  return (
    <>
        <AboutBanner />
        <AboutContent />
        <WhyChoose />
        <ExclusiveFeatures />
        <History />
        <BusinessAcumen />
        <CallToAction />
    </>
  )
}

export default AboutUs
