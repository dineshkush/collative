import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/main/header/Header';
import Footer from './components/main/footer/Footer';
import logo from "./images/collative-logo.png";

function App() {

  const contactDetail = {
    address: "Global Foyer White House, GF, FF, NBCC Tower – 3-4, Pushp Vihar, Sector 5, New Delhi-110017",
    phone: "+91 9711 999 628",
    phone2: "+91 9711 669 709",
    email: "enquiry@collative.in"
  }

  return (
    <>
    <Header phone={contactDetail.phone} logo={logo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    <Footer phone={contactDetail.phone} phone2={contactDetail.phone2} address={contactDetail.address} email={contactDetail.email} logo={logo} />
    </>
  );
}

export default App;
