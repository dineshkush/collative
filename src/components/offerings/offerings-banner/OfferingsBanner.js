import React from 'react';
import "./OfferingsBanner.scss";
import ServiceBanner from "../../../images/services-banner.webp";

const OfferingsBanner = () => {
  return (
    <section className='Offerings_banner' style={{backgroundImage: `url(${ServiceBanner})`}}>
        <div className="container">
        </div>
    </section>
  )
}

export default OfferingsBanner
