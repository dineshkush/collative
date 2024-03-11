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
                <div className="col-md-6">
                    <div class="input_item">
                        <label for="formGroupExampleInput" class="form-label">Fist Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" />
                        <i class="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="input_item">
                        <label for="formGroupExampleInput" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" />
                        <i class="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className="col-md-12">
                    <div class="input_item">
                        <label for="formGroupExampleInput" class="form-label">Email Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" />
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className="col-md-12">
                    <div class="input_item">
                        <label for="formGroupExampleInput" class="form-label">Orgnisation</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" />
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn site_btn">Submit</button> 
                </div>                        
            </div>          
        </form>
    </div>
  )
}

export default ContactForm
