"use client";
import { guidelinesArray } from "@/constant/UserGuidelines";
import React from "react";
import { FaEye } from "react-icons/fa";

function Guidelines() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guidelinesArray.map((data, index) => (
          <a
            key={index}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <section className="relative border my-2 border-green-500 h-48 flex flex-col justify-center items-center rounded-lg transition-transform duration-300 transform hover:scale-105 overflow-hidden shadow-lg hover:shadow-green-300">
              <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
              <h2 className="font-semibold text-center md:text-lg z-10 text-green-800">
                {data.heading}
              </h2>
              <div className="py-2 flex justify-center z-10">
                <span className="inline-flex items-center text-green-600 text-center">
                  View Guidelines
                  <FaEye size={20} className="ml-2" />
                </span>
              </div>
            </section>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Guidelines;
