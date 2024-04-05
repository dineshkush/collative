import React from 'react'
import "./WhyChoose.scss"
import chooseIcon1 from "../../../images/step1.png";
import chooseIcon2 from "../../../images/step2.png";
import chooseIcon3 from "../../../images/step3.png";
import chooseImage1 from "../../../images/choose-step1.jpg";
import chooseImage2 from "../../../images/choose-step2.jpg";
import chooseImage3 from "../../../images/choose-step3.jpg";

const WhyChoose = () => {

    const whyChooseList = [
        {
            tagImg: chooseIcon1,
            image: chooseImage1,
            heading: "Nestled Amidst Greenery & Freshness"
        },
        {
            tagImg: chooseIcon2,
            image: chooseImage2,
            heading: "24x7 Complete Surveillance"
        },
        {
            tagImg: chooseIcon3,
            image: chooseImage3,
            heading: "Network with Like-minded people"
        }
    ]

  return (
    <section className='why_choose_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Why Choose collative for Co-working Space <span className='underline_text'>in South Delhi?</span></h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Collative isn't your average workspace; it's a vibrant revolution redefining what work can be. Immerse yourself in a world of unparalleled facilities and an unmatched ambiance designed to ignite your work dreams. We're passionate about crafting a space that goes beyond productivity.  Here every moment is an opportunity for growth and connection.  Esteemed members like you aren't just colleagues, you're part of a thriving community where rewarding experiences are the norm.</p>
            </div>
        </div>
        <div className="row mt-5">
            {whyChooseList.map((item) =>
                <div className="col-md-4">
                    <div className="choose_item">
                        <img src={item.tagImg} alt={item.heading} className='img-fluid choose_icon' />
                        <img src={item.image} alt={item.heading} className='img-fluid choose_img' />
                        <h4>{item.heading}</h4>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
