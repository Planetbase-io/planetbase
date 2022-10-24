import React from "react";
import PBlogo from "../../assets/planetbase.png";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe-details">
        <img src={PBlogo} alt="planetbase logo" className="subscribe-img" />
        <p>Become a subscriber and become the first to receive Information.</p>
      </div>
      <div>
        <div class="parent-wrapper">
          <span></span>
          <div class="subscribe-wrapper">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <input
              type="email"
              name="email"
              className="subscribe-input"
              placeholder="Enter Your Email Address"
            />
            <button className="subscribe-btn">SUBMIT</button>
          </div>
        </div>

        <summary className="policy">
          By subscribing to our news letter, you have agreed to our Terms of
          Service and Privacy Policy.
        </summary>
      </div>
    </section>
  );
}

export default Subscribe;
