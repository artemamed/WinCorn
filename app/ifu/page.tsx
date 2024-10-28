"use client";
import ContentImage from "@/components/userGuidlines/ContentImage";
import Guidelines from "@/components/userGuidlines/Guidelines";
import ImageContent from "@/components/userGuidlines/ImageContent";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSurface, setIsSurface] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const handleSurface = () => {
    setIsSurface(!isSurface);
  };

  return (
    <div className="m-4 md:m-8 lg:m-16">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-green-600 text-center">
          User Guidelines
        </h1>
        <div className="w-full flex justify-center mb-8">
          <Guidelines />
        </div>
      </div>

      <ContentImage />
      <div className="px-4 md:px-8 lg:px-36 max-w-7xl mx-auto bg-white mt-20 shadow-xl rounded-lg overflow-hidden">
        <h2 className="text-center font-bold md:text-3xl text-2xl my-6">
          Instrument Checkup
        </h2>
        <p className="text-center text-gray-700 mb-4">
          The optimal moment for evaluating the state of instruments is
          post-cleaning and lubrication, yet prior to the sterilization process.
          Look out for:
        </p>

        <div className="bg-white shadow-md rounded-lg p-4 mb-5 transition-all duration-300 hover:shadow-xl">
          <h3
            onClick={handleChange}
            className="flex justify-between items-center hover:cursor-pointer font-bold md:text-2xl text-xl my-3"
          >
            Function
            <span className="transition-transform duration-400 transform">
              {isOpen ? (
                <FaArrowUp size={15} className="mt-1 mx-1" />
              ) : (
                <FaArrowDown size={15} className="mt-1 mx-1" />
              )}
            </span>
          </h3>
          {isOpen && (
            <Fade duration={1000} triggerOnce>
              <p className="p-2 border-t border-gray-300 text-gray-600">
                &quot;Sharp tools should cut cleanly and close securely. Check
                for burrs on the edges. Ensure needle holders and clamps align
                properly.&quot;
              </p>
            </Fade>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mb-5 transition-all duration-300 hover:shadow-xl">
          <h3
            onClick={handleSurface}
            className="flex justify-between items-center hover:cursor-pointer font-bold md:text-2xl text-xl my-3"
          >
            Surface
            <span className="transition-transform duration-400 transform">
              {isSurface ? (
                <FaArrowUp size={15} className="mt-1 mx-1" />
              ) : (
                <FaArrowDown size={15} className="mt-1 mx-1" />
              )}
            </span>
          </h3>

          {isSurface && (
            <Fade duration={1000} triggerOnce>
              <div className="pb-2 border-t border-gray-300">
                <p className="text-gray-600">
                  Inspect surfaces for any sign of staining, cracking or other
                  irregularities. Common sources of staining are:
                </p>
                <ul className="space-y-1 text-gray-500 list-disc list-inside mt-2">
                  <li>Inadequate cleaning.</li>
                  <li>Mixing dissimilar metals.</li>
                  <li>Impurities in the water.</li>
                  <li>
                    Inadequate or incorrect preparation and utilization of
                    cleaning and disinfecting substances.
                  </li>
                  <li>
                    Failure to adhere to the protocols for cleaning and
                    sterilizing equipment.
                  </li>
                </ul>
              </div>
            </Fade>
          )}
        </div>
      </div>

      <ImageContent />

      <div className="mt-12 px-4 md:px-8 lg:px-36 pb-0">
        {[
          {
            title: "Cold Sterilizing:",
            content:
              "In this method, the instruments are immersed in a chemical solution to achieve sterilization. They are designed explicitly for heat-sensitive instruments but cannot compete with the level of sterilization provided by the heat sterilization technique.",
          },
          {
            title: "Avoid BAC and Bleach:",
            content:
              "BAC stands for Benzyl Ammonium Chloride present in sterilizing solutions. It can damage surgical tools made from tungsten carbide, like needle holders, wire cutters, and T.C. scissors. The high pH of bleach is also very dangerous for surgical instruments made of stainless steel. The acidic solution can corrode the instrument and can cause pitting.",
          },
          {
            title: "Storage",
            content:
              "The instruments should be completely dry after applying any sterilization technique. They should be placed in a dry place and at room temperature (high temperatures may damage them).",
          },
        ].map((section, index) => (
          <div className="pb-6" key={index}>
            <h2 className="my-2 sm:text-xl md:text-2xl font-semibold text-green-600">
              {section.title}
            </h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
