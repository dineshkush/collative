import React from 'react'
import "./CustomSolutions.scss"
// import { Link } from 'react-router-dom'
import CustomSolutionsSlider from './custom-solutions-slider/CustomSolutionsSlider'

const CustomSolutions = () => {
  return (
    <section className='CustomSolutions_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Your Business, Your <span className='underline_text'>Custom Solutions</span></h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Creating Spaces to Match Your Goals, Delivering the Best Outcomes.</p>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <CustomSolutionsSlider />
            </div>
        </div>
      </div>
    </section>
  )
}

export default CustomSolutions
