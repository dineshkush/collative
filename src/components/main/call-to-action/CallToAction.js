import React from 'react'
import "./CallToAction.scss"
import { Link } from 'react-router-dom'
import ctaBackground from "../../../images/cta-backgroung.jpg";

const CallToAction = () => {
  return (
    <section className='cta_section' style={{backgroundImage:`url(${ctaBackground})`}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-9">
                    <h4>Love What <strong>You see?</strong> seize it <strong>Now</strong></h4>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <Link to="/" className='site_btn'>Book a Visit</Link>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-md-9">
                    <h4>Ready to attain <strong>Success?</strong> Connect now!</h4>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <Link to="/" className='site_btn border_btn'>Let’s Connect</Link>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default CallToAction
