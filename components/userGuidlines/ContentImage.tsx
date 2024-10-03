"use client";
import { contentPG } from "@/constant/UserGuidelines";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

function ContentImage() {
  return (
    <div className="bg-white mt-20 shadow-lg rounded-xl overflow-hidden max-w-7xl mx-auto border border-green-500">
      <div className="lg:flex lg:justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 px-4 lg:px-10 py-10">
          {contentPG.map((data, index) => (
            <section key={index} className="mb-8">
              <Slide direction="left" duration={1200} triggerOnce>
                <h2 className="font-bold sm:text-2xl md:text-3xl text-green-600 my-4 border-b-2 pb-2 border-green-200">
                  {data.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>{data.Description}</p>
                  <p className="my-4">{data.listDesc}</p>
                </div>
                <ul className="space-y-1 ml-5 list-disc list-inside">
                  {data.contentList.map((li, index) => (
                    <li key={index} className="lg:text-sm">
                      {li.list}
                    </li>
                  ))}
                </ul>
              </Slide>
            </section>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <Slide duration={1200} direction="right" triggerOnce>
            <Image
              src="/images/parallax/2.jpg"
              alt="Surgical instruments"
              height={1500}
              width={2000}
              className="object-cover h-full lg:h-[600px] w-full rounded-l-lg shadow-md"
            />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ContentImage;
