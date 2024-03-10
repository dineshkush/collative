import React from 'react'
import "./CustomerTestimonial.scss"
import profile1 from "../../../images/testi1.jpg";
import profile2 from "../../../images/testi2.jpg";
import profile3 from "../../../images/testi3.jpg";
import profile4 from "../../../images/testi4.jpg";

const CustomerTestimonial = () => {
    
    const customerTestimonial = [
        {
            id: 1,
            tagline: "Easy to use, extremely helpful.",
            comment: "Navigating this website transformed my learning experience! The resources are comprehensive and the interface is so user-friendly. Highly recommend!",
            img: profile1,
            name: "Anurag Sharma",
            location: "Delhi"
        },
        {
            id: 2,
            tagline: "Quality content, well worth it.",
            comment: "Every student and lifelong learner should bookmark this site! It’s a treasure trove of knowledge, seamlessly blending tech with education.",
            img: profile2,
            name: "Kishan Kumar",
            location: "Delhi"
        },
        {
            id: 3,
            tagline: "Found my go-to learning site!",
            comment: "A game-changer in online education! This website has been instrumental in my academic journey. Kudos to the team behind it!",
            img: profile3,
            name: "Himanshi",
            location: "Delhi"
        },
        {
            id: 4,
            tagline: "Exceeded my expectations, truly impressed.",
            comment: "The depth and breadth of courses offered here cater to every learning style. I've gained skills that have propelled my career forward.",
            img: profile4,
            name: "Preet",
            location: "Delhi"
        }
    ]

  return (
    <section className='testimonials_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Customer <span className='underline_text'>Testimonial</span></h3>
                <p>Hear what our customers love about us real stories,</p>
            </div>
        </div>

        <div className="row">
            {customerTestimonial.map((item) =>
                <div className="col-md-6">
                    <div className="testi_item">
                        <div className="comment">
                            <h5>{item.tagline}</h5>
                            <p>{item.comment}</p>
                        </div>
                        <div className="testi-foot">
                            <img src={item.img} className='img-fluid' alt={item.name} />
                            <h6>{item.name}</h6>
                            <p>{item.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonial
