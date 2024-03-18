import React from 'react'
import "./Offerings.scss"
import OfferingsBanner from './offerings-banner/OfferingsBanner'
import OfferingsService from './offerings-service/OfferingsService'
import CallToAction from '../main/call-to-action/CallToAction'

const Offerings = () => {
  return (
    <>
      <OfferingsBanner />
      
      <section className='offerings_heading'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Explore Our Offerings</h2>
              <p>Tailored Solutions for Unmatched Experiences</p>
            </div>
          </div>
        </div>
      </section>

      <OfferingsService />

      <CallToAction />
    </>
  )
}

export default Offerings
