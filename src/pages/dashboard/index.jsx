import React, { useState, useEffect } from "react";
import EventLayout from "../../layouts/events-layout";
import { FcEditImage, FcFullTrash, FiSearch } from "react-icons/all";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Loader from "../../components/Loader/Loader";

export function NoEvents() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="event-rows">
      <img
        src={
          "https://res.cloudinary.com/dputu7z0u/image/upload/v1660863670/Rectangle_31_ad96pw.svg"
        }
        alt="a picture of an event image"
      />
      <div>
        <h3>Events</h3>
        <div>
          <p>{"No Update"}</p>
        </div>
      </div>
      <div>
        <h3>Date</h3>
        <div>
          <p>{"No Date"}</p>
        </div>
      </div>
      <div>
        <h3>Status</h3>
        <div>
          <p>{"No Status"}</p>
        </div>
      </div>
    </div>
  );
}
//
function EventProfile() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://planetbase-api.onrender.com/api/events/organizer-events";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    Axios.get(url, config)
      .then((res) => {
        console.log(res.data.events);
        setEvents(res.data.events);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        if (err.message.includes("Network Error")) {
          setError("Network Error");
        }
        setError(err.message);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (error === "Network Error") {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>{error}</h1>
        <p>
          Something is temporarily wrong with your network connection.
          <br /> Please make sure you are connected to the internet and then
          reload your browser.
        </p>
      </div>
    );
  } else if (error) {
    localStorage.clear();
    return (
      <div style={{ padding: "2rem" }}>
        <h1>{error}</h1>
      </div>
    );
  } else {
    return (
      <EventLayout>
        <h2 className="event-organizer">
          {localStorage.getItem("firstname")}'s Organization Events
        </h2>
        <div className="event-all">
          <div className="event-input">
            <div className="search-events">
              <FiSearch />
              <input type="text" placeholder="Search for listed events" />
            </div>
            <div className="event-btn">
              <Link to="/create-event" className="custom-btn">
                <span className="custom-span">List Events</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="event-all">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id}>
                <EventCard
                  eventImage={event.eventImage}
                  eventDate={event.scheduledDate}
                  eventTitle={event.eventTitle}
                  eventDesc={event.eventDesc}
                  eventKey={event._id}
                  sponsorshipPackage={event.sponsorshipPackage}
                />
              </div>
            ))
          ) : (
            <NoEvents />
          )}
        </div>
      </EventLayout>
    );
  }
}

export default EventProfile;

export function EventCard({
  eventImage,
  eventKey,
  eventDate,
  eventTitle,
  sponsorshipPackage,
  eventDesc,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="event-rows" key={eventKey}>
      <img src={eventImage} alt="a picture of an event image" />
      <div>
        <h3>Events</h3>
        <div>
          <p>{eventTitle}</p>
          {/* <p>{eventDesc}</p> */}
        </div>
      </div>
      <div>
        <h3>Date</h3>
        <div>
          <p>{eventDate}</p>
        </div>
      </div>
      <div>
        <h3>Status</h3>
        <div>
          <p>Pending</p>
        </div>
      </div>
      <div>
        <h3>Sponsorship Package</h3>
        <div>
          <p>{sponsorshipPackage}</p>
        </div>
      </div>
      <div>
        <h3>Event Description</h3>
        <div>
          <p>{eventDesc}</p>
        </div>
      </div>
      {/* <div>
        <span>
          <Link to="/confirm-event">
            <FcEditImage size={30} />
          </Link>
        </span>
        <br />
        <span>
          <FcFullTrash size={30} />
        </span>
      </div> */}
    </div>
  );
}
