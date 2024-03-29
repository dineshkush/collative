import React from 'react'
import "./BusinessAcumen.scss";
import BusinessAcumenImg1 from "../../../images/BusinessAcumen-img1.webp";
import BusinessAcumenImg2 from "../../../images/BusinessAcumen-img2.webp";
import BusinessAcumenImg3 from "../../../images/BusinessAcumen-img3.webp";

const BusinessAcumen = () => {
  return (
    <section className='business_acumen_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Business Acumen of More than <span className='underline_text'>Two Decades</span></h3>
                <p>A Legacy of Business Excellence and Comittment.</p>
            </div>
        </div>

        <div className="business_acumen_list">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="content">
                        <p>Rajdarbar Group, a pioneer with decades of success, introduces the Collative Co-working, an initiative fostering new business opportunities.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img src={BusinessAcumenImg1} alt="Rajdarbar Group" className='img-fluid' />
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="img">
                        <img src={BusinessAcumenImg2} alt="Rajdarbar Group" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content bg_color">
                        <p>With over 19 projects in 7 states, Rajdarbar's quality products and recent real estate ventures showcase continuous growth and innovation.</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="content">
                        <p>With Collative, Rajdarbar aims to carry forward the Tradition of providing Regal Experience to its Clientele. The Architecture, Ambiance, and Aesthetics, are inspired by the Traditionalism that we are proud of.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img src={BusinessAcumenImg3} alt="Rajdarbar Group" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessAcumen
