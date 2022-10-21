import React from "react";
import Accordion from "../../components/Faq";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <section className="faq-section">
        <h1>FAQS</h1>
        <h5>All your questions, are answered.</h5>
        <main>
          <Accordion />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
