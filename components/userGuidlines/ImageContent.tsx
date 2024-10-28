"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

function ImageContent() {
  return (
    <div className="border bg-white mt-20 shadow-xl rounded-lg overflow-hidden max-w-7xl mx-auto border-green-500">
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-1/2">
          <Slide direction="left" duration={1100} triggerOnce>
            <Image
              height={1000}
              width={750}
              src="/images/lubrication.jpg"
              alt="Surgical instruments"
              className="object-cover h-full lg:h-[730px] w-full"
            />
          </Slide>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 px-4 lg:px-10 py-10 bg-gray-50">
          <Slide direction="right" duration={1100} triggerOnce>
            <h2 className="font-bold md:text-4xl sm:text-3xl my-4 text-green-600">
              Lubrication and Autoclaving:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lubrication is also a key factor for an effective operation, and it helps maintain an instrument’s
              performance. However, choosing the proper lubricant type for a specific instrument is always tricky.
              Inappropriate use of lubricants may lead to instrument damage and can pose a risk to the patient’s
              health. If carefully selected and properly used, they can help in:
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc ml-6">
              <li>Reducing instrument wear-out by reducing friction.</li>
              <li>Preventing rusting, corrosion, and staining.</li>
              <li>Reducing the time and cost associated with stress, corrosion, and friction damage.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed my-4">
              Autoclaving is when pressurized steam kills infectious agents and denatures proteins. It is a more
              reliable method than dry heat, ionizing radiation, or ultraviolet, but it does not remove chemical
              contamination. The following guidelines should be followed for using an autoclave:
            </p>
            <ol className="text-gray-700 leading-relaxed list-decimal ml-6">
              <li>Make sure that the autoclave machine permit is updated.</li>
              <li>Prepare and label bags for waste.</li>
              <li>Set the temperature, pressure, and time as prescribed.</li>
              <li>Do not autoclave these items:</li>
            </ol>
            <ul className="text-gray-700 leading-relaxed list-disc ml-10">
              <li>Polyethylene</li>
              <li>High-density polyethylene</li>
              <li>Polyvinyl chloride</li>
              <li>Polystyrene</li>
            </ul>
          </Slide>
        </div>

      </div>
    </div>
  );
}

export default ImageContent;
