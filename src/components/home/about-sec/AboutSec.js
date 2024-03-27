import React from 'react'
import "./AboutSec.scss"
import aboutSecImg from "../../../images/aboutSec-img.jpg";
import aboutSecImg2 from "../../../images/aboutSec2-img.jpg";
import aboutSecImg3 from "../../../images/aboutSec3-img.jpg";
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
                <p>Forget the sterile office and Step into Collative, your vibrant coworking sanctuary in the heart of South Delhi.  Here, biophilic design isn't just a buzzword - it's the very essence of our space. Breathe in the fresh air, natural light, and calming greenery as you unleash your most inspired work. Experience a work environment that elevates your performance at every turn.</p>
            </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
                <div className="aboutUs-Img">
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={aboutSecImg} className="d-block w-100" alt="About Pic" />
                      </div>
                      <div className="carousel-item">
                        <img src={aboutSecImg2} className="d-block w-100" alt="About Pic" />
                      </div>
                      <div className="carousel-item">
                        <img src={aboutSecImg3} className="d-block w-100" alt="About Pic" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                    {/* <img src={aboutSecImg} alt="About" /> */}
                </div>
            </div>
            
          <div className="col-md-2"></div>
            {/* <div className="col-md-12 text-center">
                <Link to="/about-us" className='site_btn'>About Collative</Link>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutSec
