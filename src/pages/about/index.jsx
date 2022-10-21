import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import './style.css';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <main>
          <h2>
            Planetbase facilitates event sponsorship by connecting companies and
            organizers of events (physical and virtual).
          </h2>
          <h4>
            The connections we create make event organizers more money, which
            helps create an unforgettable event experience for event attendees
            and allows businesses to engage with their target audience.
          </h4>
        </main>
          <article>
           <div>
           <h2>Our Mission</h2>
           </div>
            <p>
              At Planetbase we use technology to give different businesses
              access to the right information and the right people without
              limitations or gatekeepers.
            </p>
          </article>
      </section>
      <Footer />
    </>
  );
};

export default About;
