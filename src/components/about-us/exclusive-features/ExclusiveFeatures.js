import React from 'react'
import "./ExclusiveFeatures.scss"
import icon1 from "../../../images/icons/icon1.png";
import icon2 from "../../../images/icons/icon2.png";
import icon3 from "../../../images/icons/icon3.png";
import icon4 from "../../../images/icons/icon4.png";
import icon5 from "../../../images/icons/icon5.png";
import icon6 from "../../../images/icons/icon6.png";
import icon7 from "../../../images/icons/icon7.png";
import icon8 from "../../../images/icons/icon8.png";
import icon9 from "../../../images/icons/icon9.png";

const ExclusiveFeatures = () => {

    const ExclusiveFeaturesList = [
        {
            icon: icon1,
            name: "Dedicated Workstations"
        },
        {
            icon: icon2,
            name: "Timely disinfection by sanitization"
        },
        {
            icon: icon3,
            name: "Phone booths for business calls"
        },
        {
            icon: icon4,
            name: "Equipped with super fast internet"
        },
        {
            icon: icon5,
            name: "Secured keyless entries & 24×7 surveillance"
        },
        {
            icon: icon6,
            name: "Complimentary tea/ coffee services"
        },
        {
            icon: icon7,
            name: "Transportation connectivity"
        },
        {
            icon: icon8,
            name: "Power Backup Available"
        },
        {
            icon: icon9,
            name: "Best in IT Infrastructure"
        }
    ]

  return (
    <section className='exclusive_features_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center white_text">
                <h3><span className='underline_text'>Amenities</span></h3>
                <p>Experience the joy of distinctive and classy features.</p>
            </div>
        </div>

        <div className="row">
            {ExclusiveFeaturesList.map((item) =>
                <div className="col-md-4 col-6">
                    <div className="feature_item white_text text-center">
                        <img src={item.icon} alt={item.name} className='img-fluid' />
                        <h4>{item.name}</h4>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default ExclusiveFeatures
