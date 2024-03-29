import React from 'react'
import "./CallToAction.scss"
import { Link } from 'react-router-dom'
import ctaBackground from "../../../images/cta-backgroung.webp";

const CallToAction = () => {
  return (
    <section className='cta_section' style={{backgroundImage:`url(${ctaBackground})`}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-9 col-8">
                    <h4>Love What <strong>You see?</strong> seize it <strong>Now</strong></h4>
                </div>
                <div className="col-md-3 col-4 d-flex justify-content-end">
                    <Link to="/contact-us" className='site_btn'>Book a Visit</Link>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-md-9 col-7">
                    <h4>Ready to attain <strong>Success?</strong> Connect now!</h4>
                </div>
                <div className="col-md-3 col-5 d-flex justify-content-end">
                    <Link to="tel:+919711999628" className='site_btn border_btn'><i className="fa-solid fa-phone"></i> Let’s Connect</Link>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default CallToAction
