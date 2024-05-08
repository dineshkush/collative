import React from "react";
import ThankYouImg from "../images/thank-you-img.png";

const ThankYou = () => {
  return (
    <>
      <section className="thank_you_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <img src={ThankYouImg} alt="Thank YOu" />
                <h2>Thank You for Your Query!</h2>
                <p>
                  Your request has been initiated and a Collative
                  <br /> expert will contact you.
                </p>
                <a href="/" className="site_btn">
                  Go To Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
