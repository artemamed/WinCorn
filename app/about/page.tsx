import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* Header Style */}
      <div className="bg-gradient-to-tr from-green-700 to-green-600 flex justify-center items-center h-48 shadow-lg">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md">
          About Us
        </span>
      </div>

      <div className="px-5 sm:px-10 lg:px-36 pt-10 pb-10 bg-gray-50 rounded-lg shadow-md">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <FaQuoteLeft className="w-8 h-8 sm:w-12 sm:h-12 text-green-500 transform rotate-45" />
        </div>

        {/* CEO Information Section */}
        <section className="text-gray-700 body-font">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:flex-grow lg:w-1/2 px-5 lg:px-10 mb-6 lg:mb-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-green-600">
                Kenneth G. Wincorn
              </h3>
              <p className="mb-8 leading-7 text-base sm:text-lg text-gray-800">
                Kenneth G. Wincorn is the founder and C.E.O. of Wincorn Medical. He possesses a unique blend of qualities and has a strong track record in his field. After graduating from the School of Law of Southern Methodist University, he established his law firm, K.G.W., P.C., in 1972. Currently, he leads a talented bilingual team of legal advisors, medical professionals, and businessmen. With four decades of experience, he has a remarkable ability to lead, inspire, and support.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-sm sm:text-base font-semibold text-black">
                  Kenneth G. Wincorn, CEO of Wincorn Pharmaceutical
                </span>
              </div>
            </div>
            <div className="lg:w-1/3 px-5 lg:px-10 ">
              <Image
                width={250}
                height={100}
                className="object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 borderborder-green-300"
                alt="Kenneth G. Wincorn"
                src="/wincorn/ceo.jpg"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="text-gray-700 body-font py-5">
          <div className="flex flex-col lg:flex-row-reverse items-center mb-10">
            <div className="lg:flex-grow lg:w-3/5 px-5 lg:px-10 mb-6 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-green-600">
                Wincorn’s Vision
              </h2>
              <p className="mb-8 leading-relaxed text-base sm:text-lg text-gray-800">
                We aim to maintain a healthy life for everyone across the globe by providing first- rate surgical products. We believe everyone should have access to the healthcare services they need, and we expect to increase this standard in every aspect to impact the lives of as many people as possible.


              </p>
            </div>
            <div className="lg:w-2/5 px-5 lg:px-10">
              <Image
                width={600}
                height={500}
                className="object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 border border-green-300"
                alt="Vision"
                src="/images/vision.png"
              />
            </div>
          </div>
        </section>

        {/* Company Principles */}
        <section className="text-gray-700 body-font">
          <div className="flex flex-col lg:flex-row items-center mb-10">
            <div className="lg:flex-grow lg:w-1/2 px-5 lg:px-10 mb-6 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-green-600">
                Our Guiding Principles
              </h1>
              <p className="mb-8 leading-relaxed text-base sm:text-lg text-gray-800">
                We respect our people; their hard work and dedication are the most important elements for us to build long-term and healthy relationships with our clients and business associates. We always prefer environment-friendly technologies to provide safe and valuable products to every patient and healthcare industry globally. We always strive to maintain the quality of our products to be safe, innovative, and affordable.
              </p>
            </div>
            <div className="lg:w-1/2 px-5 lg:px-10">
              <Image
                width={700}
                height={700}
                className="object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 border border-green-300"
                alt="Guiding Principles"
                src="/images/about1.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
