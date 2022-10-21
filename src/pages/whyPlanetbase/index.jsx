import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import "./style.css"

const WhyPlanetbase = () => {
  return (
    <>
      <Navbar />
      <section className="whyPlanetbase">
        <h1>Why Planetbase?</h1>
        <main>
          <h4>Event Organizers</h4>
          <ol>
            <li>
              Planetbase helps you get sponsors for your online and offline
              events easily.
            </li>
            <li>
              <b>No Sponsorship Proposals</b>
              <br />
              With Planetbase, you don’t have to create multiple proposals for
              different sponsors only to get zero responses. All you have to do
              is upload your event details once.
            </li>
            <li>
              <b>Increased Revenue</b>
              <br />A sponsored event means more revenue generated, which helps
              to create a better event for event attendees. A win-win for
              everybody.
            </li>
            <li>
              <b>Zero Rejection</b>
              <br />
              Once your event has been listed on Planetbase, the right people in
              the right companies to sponsor your event are notified. By showing
              your event to interested companies only, rejection chances are
              minimized.
            </li>
          </ol>
        </main>
        <main>
          <h4>For Corporate Sponsors</h4>
          <ol>
            <li>
              Planetbase connects you to events that your target audience is at,
              allowing you to engage with them. Our tool lets you know what to
              sponsor, why to sponsor, and how much ROI to expect.
            </li>
            <li>
              <b>Infinite Repository of Online and Offline Events</b>
              <br />
              Planetbase helps you reach any audience type by giving you
              information on all the events happening everywhere in the country.
              Also, the ability to sponsor online events helps you take
              advantage of the new forms of social media marketing.
            </li>
            <li>
              <b>Advanced Event Search Engine & Filters</b>
              <br />
              Our new-gen filters and algorithms make it easy to discover and
              sponsor events that are the right fit.
            </li>
            <li>
              <b>Data-Driven Decision-Making</b>
              <br />
              Our advanced technology removes the guesswork from your event
              sponsorships. Planetbase helps you track important data points and
              facilitates comparative reporting and alignment calculations.
            </li>
            <li>
              <b>Prompt Updates on Upcoming Events</b>
              <br />
              Planetbase gives you information about the right events on time.
              Our timely update means you’ll never miss out on your acquisition
              golden goose.
            </li>
            <li>
              <b>Zero Proposals or Meetings</b>
              <br />
              Bye-bye to bulky, boring, and poor-quality paperwork and emails.
              Now you can spend your time perfecting the things that get
              sponsorship results. Simply put, Planetbase maximizes your
              acquisition opportunities, minimizes risk, and eliminates friction
            </li>
          </ol>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default WhyPlanetbase;
