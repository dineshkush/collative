import React from 'react'
import "./LocationDistance.scss"

const LocationDistance = (props) => {

    const locationDistance = [
        {
            name: "Max Super Speciality <br/>Hospital",
            dist: "(3 km)",
            cls: "dist_item"
        },
        {
            name: "Saket & Malviya Nagar <br/>Metro",
            dist: "(2 km)",
            cls: "dist_item"
        },
        {
            name: "Select CITYWALK <br/>Mail",
            dist: "(1 km)",
            cls: "dist_item"
        },
        {
            logo: props.logo,
            cls: "dist_item dist_img"
        },
        {
            name: "Supreme <br/>Court",
            dist: "(2 km)",
            cls: "dist_item"
        },
        {
            name: "Connaught <br/>place",
            dist: "(16 km)",
            cls: "dist_item"
        },
        {
            name: "Indira Gandhi <br/>International Airport",
            dist: "(20 km)",
            cls: "dist_item"
        },
    ]

  return (
    <section className='distance_sec'>
        <div className="container-fluid">
            <div className="row">
                <div className="row">
                    <div className="col-md-12">
                        <div className="distance_list">
                            {locationDistance.map((distItem) =>
                                <div className={distItem.cls}>
                                    {distItem.name ? <h4 dangerouslySetInnerHTML={{ __html: distItem.name }}></h4> : null}
                                    {distItem.logo ? <img src={distItem.logo} alt={distItem.name} className='img-fluid' /> : null}
                                    {distItem.dist ? <p>{distItem.dist}</p> : null}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default LocationDistance
