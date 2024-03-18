import React from 'react'
import "./ContactForm.scss"

const ContactForm = () => {
  return (
    <div className="contact_form">
        <div className="form_heading">
            <h3>Schedule a Visit</h3>
        </div>
        <form>
            <div className="row">
                <div className="col-md-12">
                    <div class="input_item">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>What are you interested in?</option>
                            <option value="Private office (cabin)">Private office (cabin)</option>
                            <option value="Managed office">Managed office</option>
                            <option value="Shared workspace">Shared workspace</option>
                            <option value="Hot desk">Hot desk</option>
                            <option value="Meeting room">Meeting room</option>
                            <option value="Conference room">Conference room</option>
                            <option value="Interview room">Interview room</option>
                            <option value="3">Event space</option>
                        </select>
                    </div>
                    <div class="input_item">
                        {/* <label for="formGroupExampleInput" class="form-label">Last Name</label> */}
                        <input type="text" class="form-control" placeholder='Full Name' id="formGroupExampleInput" />
                    </div>
                    <div class="input_item">
                        {/* <label for="formGroupExampleInput" class="form-label">Email Address</label> */}
                        <input type="email" class="form-control" placeholder='Email' id="formGroupExampleInput" />
                        {/* <i class="fa-regular fa-envelope"></i> */}
                    </div>
                    <div class="input_item">
                        {/* <label for="formGroupExampleInput" class="form-label">Orgnisation</label> */}
                        <input type="tel" class="form-control" placeholder='Phone' id="formGroupExampleInput" />
                        {/* <i class="fa-solid fa-briefcase"></i> */}
                    </div>
                    <div class="input_item">
                        {/* <label for="formGroupExampleInput" class="form-label">Orgnisation</label> */}
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Remarks (optional)' rows="3"></textarea>
                        {/* <i class="fa-solid fa-briefcase"></i> */}
                    </div>

                    <button type="submit" className="btn site_btn">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm
