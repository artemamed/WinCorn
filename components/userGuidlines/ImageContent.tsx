"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

function ImageContent() {
  return (
    <div className="border bg-white mt-20 shadow-xl rounded-lg overflow-hidden max-w-7xl mx-auto border-green-500">
      <div className="lg:flex lg:justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Slide direction="left" duration={1100} triggerOnce>
            <Image
              height={2000}
              width={1500}
              src="/images/parallax/1.jpg" // Make sure there is no space in the filename
              alt="Surgical instruments"
              className="object-cover h-full lg:h-[700px] w-full"
            />
          </Slide>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 px-4 lg:px-10 py-10 bg-gray-50">
          <Slide direction="right" duration={1100} triggerOnce>
            <h2 className="font-bold md:text-4xl sm:text-3xl my-4 text-green-600">
              Lubrication and Autoclaving
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Before autoclaving, ensure all instruments undergo thorough cleaning. 
              Lubricate moving components like box locks and hinges adequately, 
              utilizing surgical lubricants rather than industrial oils.
            </p>
            <p className="text-gray-700 leading-relaxed my-4">
              Always sterilize instruments in the open, unlocked position.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We suggest wrapping instruments in fabric before placing them in the container, 
              or placing a cloth at the bottom of the container to soak up any moisture. 
              Ensure the fabric is pH-neutral (with a pH of 7) and doesn&apos;t contain any detergent residues.
            </p>
            <p className="text-gray-700 leading-relaxed my-4">
              Please note that chrome-plated instruments may rust if they are not dried and lubricated 
              immediately after sterilization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Finally, avoid sudden cooling. Instruments should be allowed to air-dry.
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
