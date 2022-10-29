import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

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
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="faqAnswer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
