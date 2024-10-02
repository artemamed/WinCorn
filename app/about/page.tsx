import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* Header Style */}
      <div className="bg-gradient-to-tr from-green-700 to-green-600 flex justify-center items-center h-48 shadow-lg">
        <span className="text-5xl font-extrabold text-white drop-shadow-md">About Us</span>
      </div>

      <div className="px-5 lg:px-36 pt-10 pb-10 bg-gray-50 rounded-lg shadow-md">
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <FaQuoteLeft className="w-12 h-12 text-green-500 transform rotate-45" />
        </div>

        {/* CEO Information Section */}
        <section className="text-gray-700 body-font">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:flex-grow lg:w-1/2 px-5 lg:px-10">
              <h3 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-600">
                Message From The CEO
              </h3>
              <span className="text-xl text-black font-semibold mb-4">
                Dear Valued Customers and Partners,
              </span>
              <p className="mb-8 leading-7 text-lg text-gray-800">
                I am delighted to extend my warmest greetings as the CEO of Dynamic Med Medical Solutions...
              </p>
              <div className="flex items-center mt-4">
                <Image
                  width={64}
                  height={64}
                  alt="signature"
                  className="h-16 object-cover object-center inline-block"
                  src="/"
                />
                <span className="text-base text-black font-semibold ml-2">
                  Jason Boroff, CEO of Medical Solutions
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 mb-10 lg:mb-0 px-5 lg:px-10">
              <Image
                width={400}
                height={400}
                className="object-cover object-center rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 border border-green-300"
                alt="Jason Boroff"
                src="/"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="text-gray-700 body-font py-5">
          <div className="flex flex-col lg:flex-row-reverse items-center mb-10">
            <div className="lg:flex-grow lg:w-1/2 px-5 lg:px-10">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-600">
                WinCorn Medical Vision
              </h2>
              <p className="mb-8 leading-relaxed text-lg text-gray-800">
                We dedicate ourselves daily to enhancing lives through exceptional technology...
              </p>
            </div>
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                width={700}
                height={700}
                className="object-cover object-center rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 border border-green-300"
                alt="Dynamic Med Vision"
                src="/"
              />
            </div>
          </div>
        </section>

        {/* Company Principles */}
        <section className="text-gray-700 body-font">
          <div className="flex flex-col lg:flex-row items-center mb-10">
            <div className="lg:flex-grow lg:w-1/2 px-5 lg:px-10">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-600">
                Our Guiding Principles
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-800">
                At Dynamic Med, we are committed to making the world a better place...
              </p>
            </div>
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                width={700}
                height={700}
                className="object-cover object-center rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 border border-green-300"
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
