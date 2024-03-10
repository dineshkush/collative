import React from 'react'
import MainBanner from './main-banner/MainBanner'
import Counter from './counter/Counter'
import AboutSec from './about-sec/AboutSec'
import CustomSolutions from './custom-solutions/CustomSolutions'
import SpecialFeatures from './special-features/SpecialFeatures'
import CustomerTestimonial from './customer-testimonial/CustomerTestimonial'
import CallToAction from '../main/call-to-action/CallToAction'

const Home = () => {
  return (
    <>
      <MainBanner />
      <Counter />
      <AboutSec />
      <CustomSolutions />
      <SpecialFeatures />
      <CustomerTestimonial />
      <CallToAction />
    </>
  )
}

export default Home
