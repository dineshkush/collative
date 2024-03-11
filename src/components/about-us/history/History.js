import React from 'react'
import "./History.scss"
import rajDarbarLogo from "../../../images/rajdarbar-logo.png";

const History = () => {
  return (
    <section className='history_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="history_content">
                    <h3>How we started?</h3>
                    <img src={rajDarbarLogo} alt="Rajdarbar" className='img-fluid' />
                    <p>Founded by our Chairman, Dr. Rakesh Garg, Rajdarbar Realty represents a combination of Indian Heritage and Modern Luxury. Making footprints in the Metropolitan, Tier 2 & 3 Cities, with our Commercial & Residential Spaces.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default History
