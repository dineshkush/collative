import React from "react";
import Slider from "react-slick";
import "./CustomSolutionsSlider.scss";
import AtriumEvents from "../../../../images/atrium-for-events-img.webp";
import InterviewRooms from "../../../../images/interview-rooms-img.webp";
import SharedWorkspace from "../../../../images/shared-workspace-img.webp";
import MeetingRooms from "../../../../images/meeting-rooms-img.webp";
import ConferenceHall from "../../../../images/conference-hall-img.webp";
import PrivateCabin from "../../../../images/private-cabin-img.webp";

const CustomSolutionsSlider = () => {
  const customSolutionSlider = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const CustomSolutionsData = [
    {
        img: AtriumEvents,
        name: "Atrium for Events",
        // content: "Elevate Occasions with Atrium's Unmatched Event Hosting and Management Expertise.",
    },
    {
        img: InterviewRooms,
        name: "Interview Rooms",
        // content: "Where Professional Stories Unfold and Careers Take Flight.",
    },
    {
        img: SharedWorkspace,
        name: "Shared Workspace",
        // content: "Elevate Productivity in Our Dynamic and Shared Workspace Environment",
    },
    {
        img: MeetingRooms,
        name: "Meeting Rooms",
        // content: "Transformative Meeting Rooms Tailored to Boost Productivity.",
    },
    {
        img: ConferenceHall,
        name: "Conference Hall",
        // content: "Elevate Your Events in Our State-of-the-Art Conference Hall.",
    },
    {
        img: PrivateCabin,
        name: "Private Cabins",
        // content: "Elevate Your Events in Our State-of-the-Art Conference Hall.",
    }
  ]

  return (
    <div className="testimonials_slider">
      <Slider {...customSolutionSlider}>
        {CustomSolutionsData.map(
            (slideItem) =>
            <div className="customSolution-item">
                <div className="img_box">
                    <img src={slideItem.img} className="img-fluid" alt={slideItem.name} />
                    <h4>{slideItem.name}</h4>
                </div>
                {/* <p>{slideItem.content}</p> */}
            </div>
        )}
      </Slider>
    </div>
  );
};

export default CustomSolutionsSlider;
