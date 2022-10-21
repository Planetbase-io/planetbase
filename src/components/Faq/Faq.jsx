import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faqQuestion">
        <p>{faq.question}</p>

        <div className="faqQuestionImg">
          <IoMdArrowDropup />
        </div>
      </div>
      <div className="faqAnswer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
