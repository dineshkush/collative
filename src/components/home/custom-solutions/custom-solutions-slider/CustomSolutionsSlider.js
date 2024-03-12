import React from "react";
import Slider from "react-slick";
import "./CustomSolutionsSlider.scss";
import AtriumEvents from "../../../../images/atrium-for-events-img.jpg";
import InterviewRooms from "../../../../images/interview-rooms-img.jpg";
import SharedWorkspace from "../../../../images/shared-workspace-img.jpg";
import MeetingRooms from "../../../../images/meeting-rooms-img.jpg";
import ConferenceHall from "../../../../images/conference-hall-img.jpg";

const CustomSolutionsSlider = () => {
  const customSolutionSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
    ],
  };

  const CustomSolutionsData = [
    {
        id: 1,
        img: AtriumEvents,
        name: "Atrium for Events",
        content: "Elevate Occasions with Atrium's Unmatched Event Hosting and Management Expertise.",
    },
    {
        id: 1,
        img: InterviewRooms,
        name: "Interview Rooms",
        content: "Where Professional Stories Unfold and Careers Take Flight.",
    },
    {
        id: 1,
        img: SharedWorkspace,
        name: "Shared Workspace",
        content: "Elevate Productivity in Our Dynamic and Shared Workspace Environment",
    },
    {
        id: 1,
        img: MeetingRooms,
        name: "Meeting Rooms",
        content: "Transformative Meeting Rooms Tailored to Boost Productivity.",
    },
    {
        id: 1,
        img: ConferenceHall,
        name: "Conference Hall",
        content: "Elevate Your Events in Our State-of-the-Art Conference Hall.",
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
                <p>{slideItem.content}</p>
            </div>
        )}
      </Slider>
    </div>
  );
};

export default CustomSolutionsSlider;
