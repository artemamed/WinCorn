"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Update the type here

  const faqs = [
    {
        question: "Does Wincorn provide any shipping services to its customers?",
        answer: "Yes, Wincorn provides shipping services, but the shipping costs are different depending on the customer’s location.",
    },
    {
        question: "Is Wincorn responsible for any damage to the instrument?",
        answer: "Yes, but only if the company is the cause of the damage. Once the instrument is released, the company is not responsible. The customer should provide proof of the claim for both cases.",
    },
    {
        question: "Does the product price include tax?",
        answer: "Yes, tax is already included in the product price and is mentioned in the description.",
    },
    {
        question: "Does Wincorn accept payments only through a bank?",
        answer: "Yes, Wincorn only accepts payments officially made through the bank. Cash payments are never accepted.",
    },
    {
        question: "Does Wincorn take responsibility for the loss in case of any disaster?",
        answer: "Yes, the company should take responsibility for any loss, but only if the company is the cause of the disaster. Otherwise, for all other conditions, the customer should take responsibility.",
    },
    {
        question: "What is the duration of applying for a refund?",
        answer: "A customer can apply for a refund within 7 working days, but it should not be against the company policy.",
    },
    {
        question: "Does the company provide services other than pharmaceutical products?",
        answer: "Yes, the company also provides surgical instruments to its customers.",
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
