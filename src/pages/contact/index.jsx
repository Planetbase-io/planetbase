import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import "./style.css"

const ContactUs = () => {
  return (
    <>
        <Navbar />
      <section className="contact-section">
        <main>
          <h1>How can we help?</h1>
          <div className='contact-helper'>
            <div>
                <h3>Contact Us</h3>
                <p>ceo@planetbase.io</p>
            </div>
            <div>
                <h3>Whatsapp Us</h3>
                <p>https://wa.link/b56y20</p>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  )
}

export default ContactUs