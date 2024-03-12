import React from "react";
import "./MainBanner.scss";
import bannerImage from "../../../images/banner-img.jpg";
import ContactForm from "../../contact-form/ContactForm";

const MainBanner = () => {
  return (
    <section className="main_banner">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerImage} className="d-block w-100" alt="" />
            <div class="carousel-caption">
              <h5>The Largest co-working space in the heart of south delhi.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerImage} className="d-block w-100" alt="" />
            <div class="carousel-caption">
              <h5>The Largest co-working space in the heart of south delhi.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bannerImage} className="d-block w-100" alt="" />
            <div class="carousel-caption">
              <h5>The Largest co-working space in the heart of south delhi.</h5>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>

      <div className="banner_form">
        <ContactForm />
      </div>
      
    </section>
  );
};

export default MainBanner;
