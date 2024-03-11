import React from 'react'
import "./Contact.scss"
import ContactBanner from './contact-banner/ContactBanner'

const Contact = (props) => {
  return (
    <>
      <ContactBanner contactDetail={props.contactDetail} smLinks={props.smLinks} />
      <section className='google_map_sec'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6040936987342!2d77.22133597495267!3d28.52155688911251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d520d135649%3A0x7c19f8b66306bf90!2sCollative%20-%20Coworking%20Space%20in%20South%20Delhi!5e0!3m2!1sen!2sin!4v1710165632821!5m2!1sen!2sin" width="100%" height="350" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
