import React from 'react'
import "./AboutSec.scss"
import aboutSecImg from "../../../images/aboutSec-img.jpg";
// import { Link } from 'react-router-dom';

const AboutSec = () => {
  return (
    <section className='aboutSec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>A Calm in the <span className='underline_text'>Chaos</span></h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Forget the sterile office Step into Collative, your vibrant coworking sanctuary in the heart of South Delhi.  Here, biophilic design isn't just a buzzword - it's the very essence of our space. Breathe in the fresh air, natural light, and calming greenery as you unleash your most inspired work. Experience a work environment that elevates your performance at every turn.</p>
            </div>
            <div className="col-md-12 text-center">
                <div className="aboutUs-Img">
                    <img src={aboutSecImg} alt="About" />
                </div>
            </div>
            {/* <div className="col-md-12 text-center">
                <Link to="/about-us" className='site_btn'>About Collative</Link>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutSec
