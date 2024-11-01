"use client";
import { dummytestominal } from "@/constant/Testominals";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from 'react-icons/fa'; // Import icons

const Testimonials = () => {
  return (
    <div className="bg-gray-200 px-6 md:px-12 text-center max-w-8xl mx-auto rounded-lg shadow-md p-[5rem]">
      <div className="flex flex-col justify-center items-center p-4 mb-6">
        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">Testimonials</span>
      </div>
      <div className="px-4 md:px-0"> {/* Add padding for mobile and center on larger screens */}
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={true}
          useKeyboardArrows={true}
          swipeable={true}
          stopOnHover={true}
          transitionTime={500} // Added transition time for smoother experience
        >
          {dummytestominal.map((testominal, index) => (
            <section key={index} className="p-4 flex justify-center">
              <div className="max-w-screen-md w-full p-6 bg-white rounded-3xl shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col justify-between h-full">
                <figure className="flex-grow">
                  <blockquote className="flex items-center">
                    <FaQuoteLeft className="text-gray-500 mr-2" size={24} />
                    <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-900">
                      &quot;{testominal.message}&quot;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    {/* <FaUserCircle className="text-gray-500" size={40} /> */}
                    <div className="text-lg sm:text-xl font-bold text-gray-900">
                      {testominal.user.name}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
