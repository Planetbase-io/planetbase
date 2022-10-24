import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Modal.css";

function SponsorModal({
  eventTitle,
  eventDesc,
  eventImage,
  scheduledDate,
  eventLocation,
  sponsorshipPackage,
  price,
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  console.log(eventTitle);

  return (
    <div>
      <img className="sponsor-image" src={eventImage} alt={eventTitle} />
      <h4>{eventTitle}</h4>
      <h5>Event Description</h5>
      <p>{eventDesc}</p>
      <h5>Sponsorship Package</h5>
      <p>{sponsorshipPackage}</p>
      <h5>Date scheduled for this event</h5>
      <p>{scheduledDate}</p>
      <h5>Event Location</h5>
      <p className="address">{eventLocation}</p>
      <h5>Price</h5>
      <p>₦{price}</p>
      <div className="sponsor-btn">
        <Link to="/sponsor-bid">
          <button className="custom-btn">
            <span className="custom-span">Bid Event</span>
          </button>
        </Link>
      </div>
      {/* <p>
          <Link
            to="/signup"
            className="signup-message"
            style={{ fontSize: "16px", fontWeight: "500" }}
          >
            Sign Up
          </Link>{" "}
          to become a sponsor
        </p> */}
    </div>
  );
}

export default SponsorModal;
