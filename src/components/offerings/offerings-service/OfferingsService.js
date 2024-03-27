import React from "react";
import "./OfferingsService.scss";
// import { Link } from "react-router-dom";
import ServiceTab from "../../../images/service-tab.jpg";
import PrivateCabinImg from "../../../images/private-cabin-service.jpg";
import SharedWorkspaceImg from "../../../images/Shared-Workspace-banner.jpg";
import ConferenceRoomsImg from "../../../images/Conference-room-img.jpg";
import InterviewRoomsImg from "../../../images/interview-rooms-banner.jpg";
import MeetingRoomsImg from "../../../images/meeting-rooms-banner.jpg";
import HotDesksImg from "../../../images/hot-desks-banner.jpg";
import EventSpacesImg from "../../../images/banner-img.jpg";


const OfferingsService = () => {
  const serviceTabs = [
    {
      name: "Private Cabin",
      location: "PrivateCabin",
    },
    {
      name: "Shared Workspace",
      location: "SharedWorkspace",
    },
    {
      name: "Conference Rooms",
      location: "ConferenceRooms",
    },
    {
      name: "Interview Rooms",
      location: "InterviewRooms",
    },
    {
      name: "Meeting Rooms",
      location: "MeetingRooms",
    },
    {
      name: "Hot Desks",
      location: "HotDesks",
    },
    {
      name: "Event Spaces",
      location: "EventSpaces",
    },
  ];

  return (
    <>
      <section
        className="service_tabs_sec"
        style={{ backgroundImage: `url(${ServiceTab})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="tabs_list">
                {serviceTabs.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.location}`} className="site_btn">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="PrivateCabin" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Private <span className="underline_text">Cabins</span></h3>
                        <p>Step into a sanctuary of productivity with our Managed Offices and Private Cabins meticulously designed to elevate your professional endeavours with seamless efficiency and unparalleled comfort.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={PrivateCabinImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="SharedWorkspace" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Shared <span className="underline_text">Workspace</span></h3>
                        <p>Collaborate in shared seats, where extraordinary minds converge. Fuel your work with the vibrant exchange of ideas and creative synergy among fellow Collative members.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={SharedWorkspaceImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="ConferenceRooms" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Conference <span className="underline_text">Rooms</span></h3>
                        <p>Transform business gatherings into unforgettable events with Collative's state of the art conferencing facilities. Here, uncompromising sophistication meets effortless execution, ensuring your meetings leave a lasting impression on clients and colleagues alike.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={ConferenceRoomsImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="InterviewRooms" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Interview <span className="underline_text">Rooms</span></h3>
                        <p>Land your dream candidate or impress that potential client with a powerful interview experience at Collative. Ditch the conventional conference room vibe  our sophisticated yet comfortable interview spaces set the stage for meaningful conversation and confident decision making.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={InterviewRoomsImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="MeetingRooms" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Meeting <span className="underline_text">Rooms</span></h3>
                        <p>Forget the old conference rooms. At Collative, your small business meetings become symphony sessions, orchestrated for success. Our cutting edge meeting rooms are designed to ignite creativity, amplify collaboration and leave a lasting impression.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={MeetingRoomsImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="HotDesks" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Hot <span className="underline_text">Desks</span></h3>
                        <p>Embrace the dynamic energy of Collative's Hot Desks. These seamless  workspaces are designed for the modern maverick, the professional who thrives for perfection.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={HotDesksImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>

      <section id="EventSpaces" className="service_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="service_text">
                        <h3>Event <span className="underline_text">Spaces</span></h3>
                        <p>From corporate seminars, networking events or a product launch  the vast event space at Collative is designed to accommodate a wide range of gatherings. From the sleek, contemporary decor to seamless audio-visual capabilities, every detail is curated to provide an engaging experience for both the presenter and the attendees alike.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <img src={EventSpacesImg} className="img-fluid" alt="Private Cabin" />
        </div>
      </section>
    </>
  );
};

export default OfferingsService;
