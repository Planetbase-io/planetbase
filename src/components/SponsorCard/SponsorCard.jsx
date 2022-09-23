// import React from "react";
import "./SponsorCard.css";
import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { cards } from "../../utils/sponsorslist";
import Modal from "../Modal/Modal";
import SponsorModal from "../Modal/SponsorModal";
import Axios from "axios";
import Loader from "../Loader/Loader";

function SponsorCard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");
  const [error, setError] = useState(null);
  const url = "https://planetbase-api.onrender.com/api/events/all-events";
  useEffect(() => {
    setIsLoading(true);
    Axios.get(url)
      .then((res) => {
        setEvents(res.data.events);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <p>
          Something is temporarily wrong with your network connection.
          <br /> Please make sure you are connected to the internet and then
          reload your browser.
        </p>
      </div>
    );
  }
  return (
    <div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <SponsorModal
            events={events}
            onClose={toggleModal}
            eventTitle={eventTitle}
            eventDesc={eventDesc}
            eventImage={eventImage}
            sponsorshipPackage={sponsorshipPackage}
            scheduledDate={scheduledDate}
            eventLocation={eventLocation}
          />
        </Modal>
      )}
      {isLoading ? (
        <Loader/>
      ) : (
        <div className="sponsorships-layout">
          {events.map((listEvent, index) => (
            <div
              key={listEvent?._id}
              className="sp-card"
              onClick={() => {
                toggleModal();
                setEventTitle(listEvent.eventTitle);
                setEventDesc(listEvent.eventDesc);
                setEventImage(listEvent.eventImage);
                setSponsorshipPackage(listEvent.sponsorshipPackage);
                setScheduledDate(listEvent.scheduledDate);
                setEventLocation(listEvent.eventLocation);
                localStorage.setItem("organizerId", listEvent.organizerId);
                console.log(listEvent.organizerId);
              }}
            >
              <img
                src={listEvent.eventImage}
                alt="image"
                className="card-image"
              />
              <p className="card-title">{listEvent.eventTitle}</p>
              <div className="card-content">
              <p className="card-desc">
                {listEvent.eventDesc.length > 50
                  ? `${listEvent.eventDesc.substring(0, 100)}...`
                  : listEvent.eventDesc}
              </p>
                <p className="card-desc">
                  {listEvent.sponsorshipPackage.length > 80
                    ? `${listEvent.sponsorshipPackage.substring(0, 80)}...`
                    : listEvent.sponsorshipPackage}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SponsorCard;
