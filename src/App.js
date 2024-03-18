import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/main/header/Header';
import Footer from './components/main/footer/Footer';
import logo from "./images/collative-logo.png";
import Contact from './components/contact/Contact';
import ScrollToTop from './scrollToTop';
import AboutUs from './components/about-us/AboutUs';
// import Services from './components/services/Services';
import Offerings from './components/offerings/Offerings';

function App() {

  const contactDetail = {
    address: "Global Foyer White House, GF, FF, NBCC Tower – 3-4, Pushp Vihar, Sector 5, New Delhi-110017",
    phone: "+91 9711 999 628",
    phone2: "+91 9711 669 709",
    email: "enquiry@collative.in",
  }

  const smLinks = [
    {
      icon: <i class="fa-brands fa-facebook-f"></i>,
      url: "https://www.facebook.com/Collativeindia"
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      url: "https://www.instagram.com/collativeindia/"
    },
    {
      icon: <i class="fa-brands fa-twitter"></i>,
      url: "/"
    },
    {
      icon: <i class="fa-brands fa-linkedin-in"></i>,
      url: "https://www.linkedin.com/company/collativeindia/about/?viewAsMember=true"
    },
    {
      icon: <i class="fa-brands fa-youtube"></i>,
      url: "https://www.youtube.com/channel/UCU5wSKTAjbd2F5V93Cw_EIQ"
    }
  ]

  return (
    <>
    <ScrollToTop />
    <Header phone={contactDetail.phone} logo={logo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/offerings" element={<Offerings />} />
        <Route exact path="/contact-us" element={<Contact logo={logo} contactDetail={contactDetail} smLinks={smLinks} />} />
      </Routes>
    <Footer phone={contactDetail.phone} phone2={contactDetail.phone2} address={contactDetail.address} email={contactDetail.email} logo={logo} smLinks={smLinks} />
    </>
  );
}

export default App;
