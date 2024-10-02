"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Update the type here

  const faqs = [
    {
      question: "Does Artema provide any shipping services to its customers?",
      answer:
        "Yes, Artema provides shipping services, but only upon the customer's request with extra charges.",
    },
    {
      question: "Is Artema responsible for any damage to the instrument?",
      answer:
        "Yes, but only if the damage occurred within the company during manufacturing or final packaging. Once the instrument is dispatched, the company is not responsible. In both cases, the customer should provide proof of the claim.",
    },
    {
      question: "Does the product price mentioned on the website include tax?",
      answer: "Yes, tax is already included in the product description.",
    },
    {
      question: "Does Artema accept payments for the products only through a bank?",
      answer:
        "Yes, the company only accepts payments officially made through the bank. Cash payments are not accepted in any condition.",
    },
    {
      question: "Does the company take responsibility for the loss in case of any disaster?",
      answer:
        "Yes, the company should take responsibility for any loss, but only if it is the cause of the disaster. Otherwise, for all the social or natural circumstances that are beyond the control of the company, the customer should take responsibility.",
    },
    {
      question: "For how many days can the customer apply for a refund?",
      answer:
        "A customer can apply for a refund within three working days, provided it is not against the company policy.",
    },
    {
      question: "Does the company provide services other than surgical instruments?",
      answer:
        "Yes, the company also provides hospital furniture and physiotherapy instruments to its customers.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 m-[6rem]">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-700">{faq.question}</h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 bg-white border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
