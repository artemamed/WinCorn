import Image from "next/image";
import React from "react";
import ce from "@/public/images/ce-mark.webp";
import FDA from "@/public/images/FDA.jpg";
import grey from "@/public/images/ISO.png";

const Page = () => {
  return (
    <div className="min-h-screen px-5 lg:px-36 pt-10 pb-0">
      {/* Quality and Craftsmanship Section */}
      <section className="mt-10 text-lg flex flex-col items-center pb-10">
        <h2 className="text-4xl text-green-600 font-bold mb-4">
          Quality and Craftsmanship
        </h2>
        <p className="max-w-4xl text-justify leading-relaxed">
          Wincorn Medical chooses German-grade stainless steel as their premier
          choice for developing surgical instruments. This choice of material exhibits their
          commitment to quality and sustainability. German-grade steel is rich in
          chromium, nickel, and molybdenum, making their instruments highly suitable for
          surgical treatments. Its ergonomic features serve them by offering tensile
          strength, precision, durability, reliability, and longevity. It always meets the
          international quality standards. Their workers are hardworking and dedicated;
          they craft every corner of an instrument with all their heart and effort. The
          creases in their hands, the diligence in their eyes, and the unwavering dedication
          make an instrument the way it should be felt. This quality and craftsmanship
          make their instruments ideal for surgeons and doctors.
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
          © 2024 Wincorn Medical. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
