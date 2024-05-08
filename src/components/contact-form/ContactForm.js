import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";
import { useNavigate } from "react-router-dom/dist";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    remarks: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_z2112fw",
        "template_6e258xw",
        e.target,
        "WAepkaen3B4uDYScY"
      );
      setSubmitted(true);
      setError(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interest: "",
        remarks: "",
      });
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      setSubmitted(false);
      setError(true);
    }
  };

  return (
    <div className="contact_form">
      <div className="form_heading">
        <h3>Schedule a Visit</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="input_item">
              <select
                className="form-select"
                aria-label="Select Interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">What are you interested in?</option>
                <option value="Private office (cabin)">
                  Private office (cabin)
                </option>
                <option value="Managed office">Managed office</option>
                <option value="Shared workspace">Shared workspace</option>
                <option value="Hot desk">Hot desk</option>
                <option value="Meeting room">Meeting room</option>
                <option value="Conference room">Conference room</option>
                <option value="Interview room">Interview room</option>
                <option value="Event space">Event space</option>
              </select>
            </div>
            <div className="input_item">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_item">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_item">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_item">
              <textarea
                className="form-control"
                placeholder="Remarks (optional)"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn site_btn">
              Submit
            </button>
          </div>
        </div>
      </form>

      {submitted && (
        <p style={{ color: "green" }}>Thank you for your submission!</p>
      )}
      {error && (
        <p style={{ color: "red" }}>
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
