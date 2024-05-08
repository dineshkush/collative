import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/main/header/Header";
import Footer from "./components/main/footer/Footer";
import logo from "./images/collative-logo.png";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./scrollToTop";
import AboutUs from "./components/about-us/AboutUs";
// import Services from './components/services/Services';
import Offerings from "./components/offerings/Offerings";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import ThankYou from "./components/ThankYou";

function App() {
  const contactDetail = {
    address:
      "Global Foyer White House, GF, FF, NBCC Tower – 3-4, Pushp Vihar, Sector 5, New Delhi-110017",
    phone: "+91 9711 999 628",
    phone2: "+91 9711 669 709",
    email: "enquiry@collative.in",
  };

  const smLinks = [
    {
      icon: <i className="fa-brands fa-facebook-f"></i>,
      url: "https://www.facebook.com/collative.in/",
      ariaLabel: "Facebook",
    },
    {
      icon: <i className="fa-brands fa-instagram"></i>,
      url: "https://www.instagram.com/collativeindia/",
      ariaLabel: "Instagram",
    },
    {
      icon: <i className="fa-brands fa-x-twitter"></i>,
      url: "https://twitter.com/Collativeindia",
      ariaLabel: "Twitter",
    },
    {
      icon: <i className="fa-brands fa-linkedin-in"></i>,
      url: "https://www.linkedin.com/company/collativeindia/about/?viewAsMember=true",
      ariaLabel: "Linkedin",
    },
    {
      icon: <i className="fa-brands fa-youtube"></i>,
      url: "https://www.youtube.com/channel/UCU5wSKTAjbd2F5V93Cw_EIQ",
      ariaLabel: "Youtube",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header phone={contactDetail.phone} logo={logo} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/offerings" exact element={<Offerings />} />
          <Route
            path="/contact-us"
            exact
            element={
              <Contact
                logo={logo}
                contactDetail={contactDetail}
                smLinks={smLinks}
              />
            }
          />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/thank-you" exact element={<ThankYou />} />
        </Routes>
        <Footer
          phone={contactDetail.phone}
          phone2={contactDetail.phone2}
          address={contactDetail.address}
          email={contactDetail.email}
          logo={logo}
          smLinks={smLinks}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
