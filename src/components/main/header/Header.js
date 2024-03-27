import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  const navbarMenu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about-us",
    },
    {
      name: "Offerings",
      url: "/offerings",
    },
    {
      name: "Blogs",
      url: "/",
    },
    {
      name: "Contact us",
      url: "/contact-us",
    },
  ];

  return (
    <header className="main_header sticky-top">
      <div className="menu_area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={props.logo} alt="Collative" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navbarMenu.map((navItem, index) =>
                  <li key={index} className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={navItem.url}>
                      {navItem.name}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="header_btn">
                <Link to={`tel:${props.phone}`} className="border_btn">{props.phone}</Link>
                <Link to="/contact-us" className="white_btn">Enquire Now</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
