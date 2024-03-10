import React from 'react'
import "./Footer.scss"
// import footerLogo from "../../../images/collative-logo.png";
import { Link } from 'react-router-dom';

const Footer = (props) => {

  const offeringsLinks = [
    {
      url: "/",
      name: "Exclusive Management",
    },
    {
      url: "/",
      name: "Shared Workspace",
    },
    {
      url: "/",
      name: "Meeting Rooms",
    },
    {
      url: "/",
      name: "Conference Hall",
    },
    {
      url: "/",
      name: "Atrium for Events",
    },
    {
      url: "/",
      name: "Hot Desks/ Shared Spaces",
    }
  ]

  const quickLinks = [
    {
      url: "/",
      name: "Contact Us",
    },
    {
      url: "/",
      name: "Blogs",
    },
    {
      url: "/",
      name: "Why Us",
    },
    {
      url: "/",
      name: "Offerings",
    },
    {
      url: "/",
      name: "About Us",
    }
  ]

  const bottomLinks = [
    {
      url: "/",
      name: "Terms & Conditions"
    },
    {
      url: "/",
      name: "Privacy Policy"
    }
  ]

  const footerSM = [
    {
      icon: <i class="fa-brands fa-facebook-f"></i>,
      url: "/"
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      url: "/"
    },
    {
      icon: <i class="fa-brands fa-twitter"></i>,
      url: "/"
    },
    {
      icon: <i class="fa-brands fa-linkedin-in"></i>,
      url: "/"
    },
    {
      icon: <i class="fa-brands fa-youtube"></i>,
      url: "/"
    }
  ]

  return (
    <footer className='main_footer'>
        <div className="container-fluid">
          <div className="top_footer">
            <div className="row">
              <div className="col-md-4">
                <div className="footer_about">
                  <img src={props.logo} alt="Logo" className='img-fluid' />
                  <p>Welcome to Collative -where your workday is elevated, and success is a shared journey we redefines workspace luxury. Melding sophistication with functionality,  provides a curated environment where productivity meets tranquility. Tailored for the modern professional.</p>
                </div>
              </div>
              <div className="col-md-2">
                <h4 className="footer_title">Offerings</h4>
                <ul className='footer_nav'>
                  {offeringsLinks.map((item) =>
                    <li><Link to={item.url}>{item.name}</Link></li>
                  )}
                </ul>
              </div>
              <div className="col-md-2">
                <h4 className="footer_title">Quick Links</h4>
                <ul className='footer_nav'>
                  {quickLinks.map((item) =>
                    <li><Link to={item.url}>{item.name}</Link></li>
                  )}
                </ul>
              </div>
              <div className="col-md-4">              
                <h4 className="footer_title">Office address</h4>
                <ul className="footer_contact">
                    <li><i class="fa-solid fa-location-dot"></i> {props.address}</li>
                    <li><i class="fa-solid fa-phone"></i> <Link to={`tel:${props.phone}`}>{props.phone}</Link>, <Link to={`tel:${props.phone2}`}>{props.phone2}</Link></li>
                    <li><i class="fa-solid fa-envelope"></i> <Link to={`mailto:${props.email}`}>{props.email}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bottom_footer">
            <div className="row align-items-center">
              <div className="col-md-4">
                <ul className='footer_sm'>
                  {footerSM.map((item) => 
                    <li><Link to={item.url}>{item.icon}</Link></li>
                  )}
                </ul>
              </div>
              <div className="col-md-4">
                <p className='copyright_text'>Copyright © 2024 Collative. All rights reserved.</p>
              </div>
              <div className="col-md-4 d-flex justify-content-end">
                    <ul className='bottom_links'>
                      {bottomLinks.map((item) =>
                        <li><Link to={item.url}>{item.name}</Link></li>
                      )}
                    </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
