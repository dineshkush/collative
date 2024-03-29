import React from 'react'
import "./AboutBanner.scss"
// import { Link } from 'react-router-dom'
import AboutBannerImg from "../../../images/about-banner.webp";

const AboutBanner = () => {
  return (
    <section className='about_banner' style={{backgroundImage: `url(${AboutBannerImg})`}}>
        <div className="container">
            {/* <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
                    <div className="banner_content">
                        <h2>Where senses collate & uplift your work</h2>
                        <p>Introduce yourself to a Space that speaks of Modernity and has a Peaceful Groove. Let your Business flourish into the vision you imagined it to be. Come and entrust your vision to Collative, a Premium Coworking Space.</p>
                        <Link to="/" className='site_btn'>WE ARE OFFERING</Link>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default AboutBanner
