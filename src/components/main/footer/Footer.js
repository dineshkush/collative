import React from "react";
import "./Footer.scss";
// import footerLogo from "../../../images/collative-logo.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const offeringsLinks = [
    {
      url: "/offerings",
      name: "Private Cabin",
      ariaLabel: "Private Cabin",
    },
    {
      url: "/offerings",
      name: "Shared Workspace",
      ariaLabel: "Shared Workspace",
    },
    {
      url: "/offerings",
      name: "Meeting Rooms",
      ariaLabel: "Meeting Rooms",
    },
    {
      url: "/offerings",
      name: "Conference Hall",
      ariaLabel: "Conference Hall",
    },
    {
      url: "/offerings",
      name: "Atrium for Events",
      ariaLabel: "Atrium for Events",
    },
    {
      url: "/offerings",
      name: "Hot Desks",
      ariaLabel: "Hot Desks",
    },
  ];

  const quickLinks = [
    {
      url: "/offerings",
      name: "Offerings",
      ariaLabel: "Offerings",
    },
    {
      url: "/about-us",
      name: "About Us",
      ariaLabel: "About Us",
    },
    {
      url: "/blog",
      name: "Blogs",
      ariaLabel: "Blogs",
    },
    {
      url: "/contact-us",
      name: "Contact Us",
      ariaLabel: "Contact Us",
    },
  ];

  const bottomLinks = [
    // {
    //   url: "/",
    //   name: "Terms & Conditions"
    // },
    {
      url: "/privacy-policy",
      name: "Privacy Policy",
      ariaLabel: "Privacy Policy",
    },
  ];

  return (
    <footer className="main_footer">
      <div className="container-fluid">
        <div className="top_footer">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_about">
                <Link to="/">
                  <img src={props.logo} alt="Logo" className="img-fluid" />
                </Link>
                <p>
                  Collative is a premium workspace provider to business leaders
                  & young entrepreneurs. Operating from the heart of Delhi, the
                  workspace boasts top-notch infrastructural facilities. Come to
                  revel in ultra-modern technologies and upgrade your business
                  to the next level.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="footer_title">Offerings</h4>
              <ul className="footer_nav">
                {offeringsLinks.map((item) => (
                  <li>
                    <a href={item.url} aria-label={item.ariaLabel}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2">
              <h4 className="footer_title">Quick Links</h4>
              <ul className="footer_nav">
                {quickLinks.slice(0, 2).map((item) => (
                  <li>
                    <Link to={item.url} aria-label={item.ariaLabel}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://collative.in/blog/" aria-label="Blog">
                    Blog
                  </a>
                </li>
                {quickLinks.slice(3, 4).map((item) => (
                  <li>
                    <Link to={item.url} aria-label={item.ariaLabel}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="footer_title">Office address</h4>
              <ul className="footer_contact">
                <li>
                  <i className="fa-solid fa-location-dot"></i> {props.address}
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>{" "}
                  <Link to={`tel:${props.phone}`} aria-label="Phone">
                    {props.phone}
                  </Link>
                  ,{" "}
                  <Link to={`tel:${props.phone2}`} aria-label="Phone">
                    {props.phone2}
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>{" "}
                  <Link to={`mailto:${props.email}`} aria-label="Email">
                    {props.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom_footer">
          <div className="row align-items-center">
            <div className="col-md-3">
              <ul className="footer_sm">
                {props.smLinks.map((item) => (
                  <li>
                    <Link
                      to={item.url}
                      aria-label={item.ariaLabel}
                      target="_blank"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <p className="copyright_text">
                Copyright © 2024 Collative | All rights reserved by Rajeshwari
                Realty Private Limited
              </p>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-end policy_links">
              <ul className="bottom_links">
                {bottomLinks.map((item) => (
                  <li>
                    <Link to={item.url} aria-label={item.ariaLabel}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
