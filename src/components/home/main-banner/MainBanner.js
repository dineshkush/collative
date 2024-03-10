import React from "react";
import "./MainBanner.scss";
import bannerImage from "../../../images/banner-img.jpg";

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
          </div>
          <div className="carousel-item">
            <img src={bannerImage} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={bannerImage} className="d-block w-100" alt="" />
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
            <div className="form_heading">
                <h3>Schedule a Visit</h3>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div class="input_item">
                            <label for="formGroupExampleInput" class="form-label">Fist Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="input_item">
                            <label for="formGroupExampleInput" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="input_item">
                            <label for="formGroupExampleInput" class="form-label">Email Address</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="input_item">
                            <label for="formGroupExampleInput" class="form-label">Orgnisation</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn site_btn">Submit</button> 
                    </div>                        
                </div>          
            </form>
        </div>
    </section>
  );
};

export default MainBanner;
