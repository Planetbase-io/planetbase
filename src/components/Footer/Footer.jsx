import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const token = localStorage.getItem("token");

  return (
    <div className="footer">
      <div>
        <h3>Why Planetbase</h3>
        <p>For Event Organizers</p>
        <p>For Corporate Sponsors</p>
      </div>
      <div>
        <h3>Company</h3>
        <p><Link to="/about">About us</Link></p>
        <p><Link to="/faqs">FAQS</Link></p>
      </div>
      <div>
        <h3>Help Center</h3>
        <p>
          <Link to="/contact-us">Contact Us</Link>
        </p>
        <p>Live Chat</p>
      </div>
    </div>
  );
}

export default Footer;
