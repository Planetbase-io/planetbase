import React from "react";
import { data } from "./data";
import FAQ from "./Faq";
import "./Faq.css";

const Accordion = () => {
  const [faqs, setFaqs] = React.useState(data);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
          console.log(i);
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="accordion">
      <h4>Event Organizers</h4>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
