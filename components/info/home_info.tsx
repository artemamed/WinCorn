import Link from "next/link";
import React from "react";
import Image from "next/image";
import ssImage from "@/public/images/ss.jpg"; // Static import
import roImage from "@/public/images/ro.jpg";
import oxImage from "@/public/images/ox.jpg";
import biImage from "@/public/images/bi.jpg";
import dentalImage from "@/public/images/dental-instruments.jpg";
import orthoImage from "@/public/images/ortho.jpg";
import logoImage from "@/public/images/distributer/logo.png"; // Static import
import headerLogoImage from "@/public/images/distributer/headerLogo.png";
import logo2Image from "@/public/images/distributer/logo-2.png";
import ceImage from "@/public/images/ce-mark.webp"; // Static import
import fdaImage from "@/public/images/FDA.jpg"; // Static import
import isoImage from "@/public/images/ISO.png"; // Static import
import astmImage from "@/public/images/astm.png"; // Static import

const certificationData = [
  {
    href: "/",
    src: ceImage,
    alt: "CE Mark",
  },
  {
    href: "/",
    src: fdaImage,
    alt: "FDA",
  },
  {
    href: "/",
    src: isoImage,
    alt: "ISO",
  },
  {
    href: "/",
    src: astmImage,
    alt: "ASTM",
  },
];
const distributorData = [
  {
    href: "https://www.allnetmedical.com/",
    src: logoImage,
    alt: "Allnet Medical",
  },
  {
    href: "/",
    src: headerLogoImage,
    alt: "Gryphon Medical",
  },
  {
    href: "https://www.dynamicmedicalsolution.com/",
    src: logo2Image,
    alt: "Dynamic Medical",
  },
];

const productData = [
  {
    href: "https://artemamed.com/products/scissors",
    src: ssImage,
    alt: "Surgical Scissors",
    title: "Surgical Scissors",
    description:
      "A wide array of surgical scissors is designed at Artema Medical using stainless steel and tungsten carbide. These may include straight, curved, angled, pointed, serrated, and many more scissors.",
  },
  {
    href: "https://artemamed.com/products/rollator",
    src: roImage,
    alt: "Rollator",
    title: "Rollator",
    description:
      "Rollators of different sizes, colors, and designs are manufactured at Artema Medical. They are known for their lightweight design, handle breaks, and four-wheel quality.",
  },
  {
    href: "https://artemamed.com/products/oxygen-cylinder",
    src: oxImage,
    alt: "Oxygen Cylinders and Concentrators",
    title: "Oxygen Cylinders and Concentrators",
    description:
      "We provide oxygen cylinders and oxygen concentrators of different sizes and colors for both clinic and home use.",
  },
  {
    href: "https://artemamed.com/biomedicalEquipments",
    src: biImage,
    alt: "Biomedical devices",
    title: "Biomedical devices",
    description:
      "We bring high-quality biomedical devices to our customers as a premium distributor of Vyaire Medical. It specifically includes ventilators such as Neo and Series ventilators.",
  },
  {
    href: "https://artemamed.com/products/dental-instruments",
    src: dentalImage,
    alt: "Dental instruments",
    title: "Dental instruments",
    description:
      "Our dental instruments are available individually, in pairs, or surgical trays. They have diverse forms such as pushers, explorers, pliers, and elevators.",
  },
  {
    href: "https://artemamed.com/products/orthopedic-instruments",
    src: orthoImage,
    alt: "Surgical orthopedics",
    title: "Surgical orthopedics",
    description:
      "The surgical orthopedics instruments of Artema Medical hold special importance for their quality and designs. It includes small to large heavy-weight instruments.",
  },
];

const Home_info = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center space-y-10 py-8 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-500 font-bold">
            Welcome to Artema Medical
          </h1>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700">
            We represent first-rate surgical instruments that provide the
            customers with the quality they demand, the price they can afford,
            and the fidelity they expect.
          </h2>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700">
            We are proud of our 40 years of success in helping thousands of
            patients and healthcare industries around the world. Our artistic
            approach and generations of experience have enabled us to extend our
            services to the whole world and introduce new innovative
            applications in the field of the healthcare industry. With no doubt,
            our hard work and dedication have proven that we are a trusted
            source of surgical instruments.
          </h3>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700">
            With a devotion to quality, we provide a broad range of{" "}
            <Link href="https://artemamed.com/categories/general-instrumentation" legacyBehavior>
              <a className="text-green-500 underline font-bold">
                surgical instruments
              </a>
            </Link>
            , which include{" "}
            <Link href="https://artemamed.com/products/forceps" legacyBehavior>
              <a className="text-green-500 underline font-bold">
                surgical forceps
              </a>
            </Link>
            ,{" "}
            <Link href="https://artemamed.com/products/scalpels" legacyBehavior>
              <a className="text-green-500 underline font-bold">scalpels</a>
            </Link>
            ,{" "}
            <Link
              href="https://artemamed.com/products/needle-holders"
              legacyBehavior
            >
              <a className="text-green-500 underline font-bold">
                needle holders
              </a>
            </Link>
            ,{" "}
            <Link
              href="https://artemamed.com/products/retractors"
              legacyBehavior
            >
              <a className="text-green-500 underline font-bold">retractors</a>
            </Link>
            , and many more. Some of them are described below:
          </h3>
        </div>




        <section className="text-light-accent body-font flex justify-center items-center text-justify py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {productData.map((item, index) => (
              <article
                key={index}
                className="flex flex-col shadow-lg justify-center items-center w-full mb-8 px-4 transform transition-transform hover:scale-105"
                style={{ willChange: "transform" }} // Optimize for hover effects
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center"
                >
                  <Image
                    width={300}
                    height={200}
                    src={item.src}
                    alt={item.alt}
                    className="h-40 w-auto md:h-48 lg:h-56 object-contain"
                    loading="lazy" // Lazy load images for performance
                  />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center text-gray-700">
                    {item.title}
                  </h2>
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base md:text-lg text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>





        <div className="text-center max-w-4xl mx-auto py-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold">
            Our Major Distributors
          </h3>
          <section className="text-light-accent body-font py-10">
            <div className="flex flex-wrap justify-center items-center gap-10">
              {distributorData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4 transform transition-transform hover:scale-105"
                  style={{ willChange: "transform" }} // Optimize for hover effects
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      width={300}
                      height={200}
                      src={item.src}
                      alt={item.alt}
                      className="h-32 w-auto md:h-40 lg:h-42"
                      loading="lazy" // Lazy load images for performance
                    />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>





        <div className="text-center max-w-4xl mx-auto py-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold">
            All of our products are certified by four of the major international organizations
          </h3>
          <section className="text-light-accent body-font py-10">
            <div className="flex flex-wrap justify-center items-center gap-10">
              {certificationData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-4 transform transition-transform hover:scale-105"
                  style={{ willChange: "transform" }} // Optimize for hover effects
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center"
                  >
                    <Image
                      width={300}
                      height={200}
                      src={item.src}
                      alt={item.alt}
                      className="h-24 w-auto sm:h-32 md:h-40 lg:h-42"
                      loading="lazy" // Lazy load images for performance
                    />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>



        <div className="text-center max-w-4xl mx-auto py-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold">
            Why choose us?
          </h3>

          <h3 className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-700">
            Thousands of medical industries around the world rely on our
            instruments and want to be our partners. Some points are given below
            that can help you choose our services:
          </h3>
          <ul className="text-left list-disc list-inside mt-4 text-gray-600">
            <li>
              We have four decades of experience that prove our reliability and
              commitment.
            </li>
            <li>
              We save a considerable amount of money for our customers by
              providing suitable budget offers.
            </li>
            <li>
              We provide our customers with exact and updated descriptions of
              products so they can easily compare prices.
            </li>
            <li>
              We have a team of biomedical scientists and experienced instrument
              specialists who know exactly what the customers demand and provide
              them with innovative solutions.
            </li>
          </ul>
          <h3 className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-700">
            Want to know more about us or have any queries? Feel free to{" "}
            <Link href="https://artemamed.com/contact" legacyBehavior>
              <a className="text-green-500 underline font-bold">contact us.</a>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home_info;
