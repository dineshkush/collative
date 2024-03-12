import React from 'react'
import "./AboutSec.scss"
import aboutSecImg from "../../../images/aboutSec-img.jpg";
import { Link } from 'react-router-dom';

const AboutSec = () => {
  return (
    <section className='aboutSec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Elevating Your Work Through <span className='underline_text'>Collative Harmony</span></h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Collative is not just a co-working space; it's a lifestyle. Designed for the modern professional who values a seamless blend of work and leisure, Collative provides an unparalleled environment where productivity meets luxury. Our spaces are meticulously curated to inspire creativity, foster collaboration, and elevate the overall work experience.</p>
            </div>
            <div className="col-md-12 text-center">
                <div className="aboutUs-Img">
                    <img src={aboutSecImg} alt="About" />
                </div>
            </div>
            <div className="col-md-12 text-center">
                <Link to="/about-us" className='site_btn'>About Collative</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSec
