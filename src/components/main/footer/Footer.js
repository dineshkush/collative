import React from 'react'
import "./Footer.scss"
// import footerLogo from "../../../images/collative-logo.png";
import { Link } from 'react-router-dom';

const Footer = (props) => {

  const offeringsLinks = [
    {
      url: "/offerings",
      name: "Private Cabin",
    },
    {
      url: "/offerings",
      name: "Shared Workspace",
    },
    {
      url: "/offerings",
      name: "Meeting Rooms",
    },
    {
      url: "/offerings",
      name: "Conference Hall",
    },
    {
      url: "/offerings",
      name: "Atrium for Events",
    },
    {
      url: "/offerings",
      name: "Hot Desks",
    }
  ]

  const quickLinks = [
    {
      url: "/offerings",
      name: "Offerings",
    },
    {
      url: "/about-us",
      name: "About Us",
    },
    {
      url: "/",
      name: "Blogs",
    },
    {
      url: "/contact-us",
      name: "Contact Us",
    },
  ]

  const bottomLinks = [
    // {
    //   url: "/",
    //   name: "Terms & Conditions"
    // },
    {
      url: "/privacy-policy",
      name: "Privacy Policy"
    }
  ]

  return (
    <footer className='main_footer'>
        <div className="container-fluid">
          <div className="top_footer">
            <div className="row">
              <div className="col-md-4">
                <div className="footer_about">
                  <Link to="/"><img src={props.logo} alt="Logo" className='img-fluid' /></Link>
                  <p>Collative is a premium workspace provider to business leaders & young entrepreneurs. Operating from the heart of Delhi, the workspace boasts top-notch infrastructural facilities. Come to revel in ultra-modern technologies and upgrade your business to the next level.</p>
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
              <div className="col-md-3">
                <ul className='footer_sm'>
                  {props.smLinks.map((item) => 
                    <li><Link to={item.url}>{item.icon}</Link></li>
                  )}
                </ul>
              </div>
              <div className="col-md-6">
                <p className='copyright_text'>Copyright © 2024 Collative | All rights reserved by Rajeshwari Realty Private Limited</p>
              </div>
              <div className="col-md-3 d-flex justify-content-end">
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
