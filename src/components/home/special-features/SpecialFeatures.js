import React from 'react'
import "./SpecialFeatures.scss"
import gamingRoom from "../../../images/gaming-room.jpg";
import communalArea from "../../../images/communal-area.jpg";
import cafeteria from "../../../images/cafeteria-img.jpg";
import phoneBooth from "../../../images/phone-booth.jpg";
import podcastStudio from "../../../images/podcast-studio.jpg";
import selfServiceCounter from "../../../images/self-service-counter.jpg";

const SpecialFeatures = () => {

    const SpecialFeaturesDate = [
        {
            id: 1,
            img: gamingRoom,
            name: "Gaming Room",
        },
        {
            id: 1,
            img: communalArea,
            name: "Collaboration areas",
        },
        {
            id: 1,
            img: cafeteria,
            name: "Cafeteria",
        },
        {
            id: 1,
            img: phoneBooth,
            name: "Phone Booth",
        },
        {
            id: 1,
            img: podcastStudio,
            name: "Podcast Studio",
        },
        {
            id: 1,
            img: selfServiceCounter,
            name: "Self Service Counter",
        }
    ]

  return (
    <section className='special_features_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>Our <span className='underline_text'>Amenities</span></h3>
                    <p>Experience Unparalleled Co-working Amenities for Enhanced Productivity with a Touch of Luxury.</p>
                </div>
            </div>

            <div className="row mt-3">
                {SpecialFeaturesDate.map((item) => 
                    <div className="col-md-4">
                        <div className="feature_item">
                            <img src={item.img} alt={item.name} className='img-fluid' />
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default SpecialFeatures
