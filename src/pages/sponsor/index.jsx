import React, { useState, useEffect } from "react";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
// import { Link } from "react-router-dom";
import Axios from "axios";

function Sponsor({ cards, index }) {
  const url = "https://planetbase-api.onrender.com/api/events/all-events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="sponsors">
        <h2>Discover Events Where Your Target Audience Is</h2>
        {events.length > 0 ? (
          <div>
            {events.map((events, index) => (
              <SponsorCard key={events?._id} {...events} />
            ))}
          </div>
        ) : (
          <SponsorCard />
        )}
      </div>
    </>
  );
}

export default Sponsor;
