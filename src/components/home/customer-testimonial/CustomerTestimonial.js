import React from 'react'
import "./CustomerTestimonial.scss"
import Slider from "react-slick";
import profile1 from "../../../images/india-smart-hire-logo.jpeg";
import profile2 from "../../../images/collative-logo-review.png";
import profile3 from "../../../images/brac-logo.jpeg";
import profile4 from "../../../images/neo-logo.jpeg";

const CustomerTestimonial = () => {

    const testiSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        centerMode: false,
        centerPadding: "0",
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              dots: true,
            },
          },
        ],
      };
    
    const customerTestimonial = [
        {
            id: 1,
            // tagline: "Easy to use, extremely helpful.",
            comment: "We have our office at Collative, Global Foyer, White House, Saket, New Delhi since more than one year. It’s a very good place for corporates to have their offices. Facilities provided are state of the art. The staff and admin are helpful and nice. Cleanliness is top notch and the celebration of various festivals arranged by Collative admin is so exciting!",
            img: profile1,
            name: "Richa Trivedi",
            location: `India Office Manager, SmartHire Screening Services India Private Limited`
        },
        {
            id: 2,
            // tagline: "Quality content, well worth it.",
            comment: "I have been a regular visitor at Collative co-working space for the past few months. Few things that really standout for me are the super-friendly staff here, the cleanliness of the place, noise-less environment to work in, with a decent WiFi speed that works without interruption. Other benefits that I like include convenient free parking, good coffee machine and small nearby eateries. Overall, I find the Saket location very nice as it is in a green and pollution free area of Saket and its always nice to go out for a walk or get some sun in and around the building area.",
            img: profile2,
            name: "Sriram",
            location: "Day Pass User"
        },
        {
            id: 3,
            // tagline: "Found my go-to learning site!",
            comment: "Our team of 10 people has been working out of Collative for the last six months and it has been a great experience. The staff - everyone from the parking attendant, security guards, pantry staff to the IT support, and operations support - are warm, welcoming and make each day both pleasant and productive and are very responsive to customer requests. The bright, vibrant space is arguably the best in South Delhi, and the technology has made our many video calls with global teams seamless. The management team has been great and is able to work across different constraints. We have had a great experience and would highly recommend Collative to anyone looking for a sophisticated co-working experience",
            img: profile3,
            name: "Janani Rajashekar",
            location: "Program Officer, BRAC International"
        },
        {
            id: 4,
            // tagline: "Exceeded my expectations, truly impressed.",
            comment: "Collative is one of the finest and most spacious business in Delhi NCR. It is at a convenient location in South Delhi Saket. Our team of 40+ people loves working at Collative. There are multiple meeting and conference rooms that are equipped with state of art technology that makes our connectivity with various other India Offices seamless and enhance productivity. The infrastructure is brand new, the staff is well mannered, the food is healthy and that makes it one of the best office spaces in Delhi NCR.",
            img: profile4,
            name: "Anshul Garg",
            location: "Director, Neo Family Office"
        }
    ]

  return (
    <section className='testimonials_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>See What <span className='underline_text'>Our clients Say</span></h3>
                <p>Hear what our customers love about us real stories</p>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="testimonials_slider">
                    <Slider {...testiSlider}>
                        {customerTestimonial.map((item) =>
                            <div className="testi_item">
                                <div className="comment">
                                    <h5>{item.tagline}</h5>
                                    <p>{item.comment}</p>
                                </div>
                                <div className="testi-foot">
                                    <img src={item.img} className='img-fluid' alt={item.name} />
                                    <div className="testi_head">
                                        <h6>{item.name}</h6>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
            {/* {customerTestimonial.map((item) =>
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
            )} */}
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonial
