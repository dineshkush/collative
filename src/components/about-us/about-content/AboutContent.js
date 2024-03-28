import React from 'react'
import "./AboutContent.scss"
import AboutFrontImg from "../../../images/collative-front-img.jpg";

const AboutContent = () => {
  return (
    <section className='about_content'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Elevating Your Work Through <span className='underline_text'>Collative Harmony</span></h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Welcome to COLLATIVE, your premium co-working haven nestled in the vibrant heart of South Delhi. Designed to elevate businesses to a harmonious rhythm, our space is offering a serene working environment. At COLLATIVE, we cultivate a tranquil work culture with a mindful touch preserving the integrity of your five senses and amplifying productivity. Enjoy the convenience of ample parking and bask in the beauty of our 4-way open property, embracing a peaceful stillness that defines the essence of our unique workspace.</p>
            </div>
            <div className="col-md-12 text-center">
                <div className="aboutUs-Img">
                    <img src={AboutFrontImg} alt="About" className='img-fluid' />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
