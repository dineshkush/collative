import React from "react";
import "./ContactBanner.scss";
import ContactForm from "../../contact-form/ContactForm";
import { Link } from "react-router-dom";

const ContactBanner = (props) => {
  const contactInfo = [
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      heading: "Email",
      detail: props.contactDetail.email,
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      heading: "Phone",
      detail: props.contactDetail.phone,
      detail2: props.contactDetail.phone2,
    },
    {
      icon: <i className="fa-solid fa-location-dot"></i>,
      heading: "Office",
      detail: props.contactDetail.address,
    },
  ];

  return (
    <section className="contact_banner">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact_banner_content">
              <h3>
                Collative team is here to deliver you all yours office solutions
              </h3>
              <p>
                Fill out the form and we’ll get back to you as soon as possible.
              </p>
            </div>
            <div className="row">
              {contactInfo.map((item) => (
                <div className="col-md-6 col-6">
                  <div className="contact_item">
                    {item.icon}
                    <h4>{item.heading}</h4>
                    {item.detail ? <p>{item.detail}</p> : null}
                    {item.detail2 ? <p>{item.detail2}</p> : null}
                  </div>
                </div>
              ))}

              <div className="col-md-6  col-6">
                <div className="contact_item">
                  <i className="fa-solid fa-share-nodes"></i>
                  <h4>Social</h4>
                  <ul className="contactsm">
                    {props.smLinks.map((item) => (
                      <li>
                        <Link to={item.url}>{item.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
