import Image from "next/image";
import React from "react";
import ce from "@/public/images/ce-mark.webp";
import FDA from "@/public/images/FDA.jpg";
import grey from "@/public/images/ISO.png";

const Page = () => {
  return (
    <div className="min-h-screen px-5 lg:px-36 pt-10 pb-0 bg-gray-50">
      {/* Quality and Craftsmanship Section */}
      <section className="mt-10 text-lg flex flex-col items-center pb-10">
        <h2 className="text-4xl text-green-600 font-bold mb-4">
          Quality and Craftsmanship
        </h2>
        <p className="max-w-4xl text-justify leading-relaxed">
          Artema Medical Solutions, a pioneer in crafting surgical instruments,
          epitomizes excellence in utilizing German Grade Stainless Steel for
          their premium medical tools. Their commitment to quality resonates
          through their choice of material—German Grade Stainless Steel—a
          testament to its exceptional quality level and suitability for forging
          precise and reliable medical instruments. Renowned for its composition
          rich in chromium, nickel, and molybdenum, this stainless steel variant
          ensures unparalleled corrosion resistance, vital for medical tools
          subjected to rigorous sterilization and harsh environments. Artema 
          Medical Solutions leverages this steel&apos;s inherent strength and
          durability, shaping it through forging processes to create surgical
          instruments boasting superior mechanical properties: high tensile
          strength, resilience to fatigue, and precision in intricate designs.
          These instruments, born from the fusion of quality steel and expert
          craftsmanship, meet the stringent demands of the medical field,
          guaranteeing hygiene, reliability, and longevity. The utilization of
          German Grade Stainless Steel in Artema &apos;s surgical instruments
          underscores a commitment to excellence, offering medical professionals
          tools of unparalleled quality and performance, ultimately contributing
          to enhanced patient care and surgical precision.
        </p>
      </section>

      {/* Certification Section */}
      <section className="mt-16 text-center">
        <h1 className="text-3xl text-green-600 font-bold mb-8">Certified From</h1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            width={120}
            height={150}
            src={ce}
            alt="CE Mark Certification"
            className="hover:scale-110 transition-transform duration-300"
          />
          <Image
            width={120}
            height={150}
            src={FDA}
            alt="FDA Certification"
            className="hover:scale-110 transition-transform duration-300"
          />
          <Image
            width={120}
            height={150}
            src={grey}
            alt="ISO Certification"
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ISO Certification List Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold pb-4 text-green-600">ISO Certified</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-lg">
          {[
            "ISO/CD 6335-1",
            "ISO/CD 6335-2",
            "ISO 7151:1988",
            "ISO/DIS 7151",
            "ISO 7153-1:2016",
            "ISO/CD 7554-1",
            "ISO/CD 7554-2",
            "ISO/CD 7554-3",
            "ISO 7740:1985",
            "ISO 7741:1986",
            "ISO 13402:1995",
            "ISO/DIS 13402",
          ].map((cert, idx) => (
            <div
              key={idx}
              className="py-2 px-4 bg-green-100 text-green-800 rounded-lg shadow-md hover:shadow-lg hover:bg-green-200 transition-all duration-300"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-20 py-6 bg-green-600 text-white text-center">
        <p className="text-sm">
          © 2024 Artema Medical Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
