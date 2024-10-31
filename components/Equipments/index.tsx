"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const Equipments = () => {
    const items = [
        {
            href: "https://www.dynamicmedicalsolution.com/categories/neurological-spine-instruments",
            src: "/images/SO.jpg",
            alt: "Surgical Orthopedic",
            title: "Surgical Orthopedics",
            description:
                "Our orthopedic instruments are of top quality. They are available in various sizes and designs and are highly affordable for customers.",
        },
        {
            href: "https://www.dynamicmedicalsolution.com/products/gynae-set",
            src: "/images/NH.jpg",
            alt: "Needle Holders",
            title: "Needle Holder",
            description:
                "A variety of needle holders are manufactured by WinCorn Medical. They are well-known for their ergonomic design and affordable price range.",
        },
        {
            href: "https://www.dynamicmedicalsolution.com/products/needle-holders",
            src: "/images/DI.jpg",
            alt: "Dental Instruments",
            title: "Dental Instruments",
            description:
                "WinCorn Medical holds special importance for its dental instruments, including pushers, pliers, explorers, elevators, etc.",
        },
        {
            href: "https://www.dynamicmedicalsolution.com/products/scissors",
            src: "/images/SS.jpg",
            alt: "Surgical Scissors",
            title: "Surgical Scissors",
            description:
                "Scissors of a wide variety are developed by our biomedical experts using German steel, Titanium, and Tungsten Carbide.",
        },
    ];

    return (
        <div className="flex flex-col justify-evenly items-center space-y-10 py-8 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50">

            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-700">
                    <strong>
                        A Healthier World for Everyone
                    </strong>
                </h2>
            </div>
            <div className="text-center max-w-7xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700">
                    Wincorn Medical is an international, research-based, and organized medical
                    company. We are proud of our years of experience in the medical industry, which
                    has enabled us to lead in the U.S.A. market. We develop and sell a variety of
                    surgical instruments. Our aim is to improve the quality and accessibility of

                    healthcare services to people worldwide.
                </h3>
            </div>





            <div className="text-center max-w-7xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700">
                    With a commitment to quality, we sell a variety of surgical tools, which include{" "}
                    <Link href="https://www.dynamicmedicalsolution.com/categories/general-instrumentation" legacyBehavior>
                        <a className="text-green-600 underline font-bold">
                            scalpel,
                        </a>
                    </Link>
                    {" "}
                    <Link href="https://www.dynamicmedicalsolution.com/products/retractor" legacyBehavior>
                        <a className="text-green-600 underline font-bold">
                            scissors,
                        </a>
                    </Link>
                    {" "}
                    <Link href="https://www.dynamicmedicalsolution.com/products/scalpels" legacyBehavior>
                        <a className="text-green-600 underline font-bold">
                            retractors,
                        </a>
                    </Link>
                    {" "}
                    <Link
                        href="https://www.dynamicmedicalsolution.com/products/suture"
                        legacyBehavior
                    >
                        <a className="text-green-600 underline font-bold">
                            needle holders,
                        </a>
                    </Link>
                    {" "} and many more. A few are discussed below:
                    {" "}
                </h3>
            </div>



            <section className="text-light-accent body-font flex justify-center items-center text-justify py-10 bg-cover bg-center">
                <div className="grid grid-cols-1 gap-10">
                    {items.map((item, index) => (
                        <AnimatedItem key={index} item={item} index={index} />
                    ))}
                </div>
            </section>






            <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 text-center max-w-7xl mx-auto rounded-lg shadow-lg">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                        What is Our Motive?
                    </span>
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-600 leading-relaxed">
                    We use a strategy combining science and technology to develop products that best suit the patient’s needs.
                </p>

                <ul className="text-left list-none mt-8 space-y-4 text-gray-700 mx-auto max-w-lg">
                    <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                        <span>
                            Maintain a healthy life for everyone across the globe.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                        <span>
                            Extend the longevity and durability of surgical instruments.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                        <span>
                            Provide first-rate surgical products worldwide.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-3 mt-1" size={24} />
                        <span>
                            Increase the standard of healthcare in every aspect.
                        </span>
                    </li>
                </ul>

                <p className="text-lg sm:text-xl md:text-2xl mt-8 text-gray-600">
                    Do you have any queries or would like to know more about us? Feel free to contact us.{" "}
                    <Link href="/contact" legacyBehavior>
                        <a className="text-green-600 hover:underline flex items-center justify-center mt-4 font-semibold">
                            Contact us <FaPhoneAlt className="ml-2" size={20} />
                        </a>
                    </Link>
                </p>
            </div>



        </div>
    );
};

const AnimatedItem = ({ item, index }: { item: { href: string; src: string; alt: string; title: string; description: string }; index: number }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true, // Only trigger once
    });

    return (
        <div
            ref={ref}
            className={`flex flex-col md:flex-row items-center mb-8 transition-transform duration-300 ease-in-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {index % 2 === 0 ? (
                <>
                    <div className="flex-shrink-0 w-full md:w-1/2 px-4 transition-transform duration-300 ease-in-out">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <Image
                                width={400}
                                height={300}
                                src={item.src}
                                alt={item.alt}
                                className="h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] shadow-2xl w-auto object-contain rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>
                    <div className="flex-grow w-full md:w-1/2 px-4 text-center md:text-left">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <h2 className="text-4xl font-bold mt-4 text-gray-700">
                                {item.title}
                            </h2>
                            <p className="text-xl max-w- text-gray-500 mt-2">
                                {item.description}
                            </p>
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <div className="md:hidden block flex-shrink-0 w-full md:w-1/2 px-4 transition-transform duration-300 ease-in-out">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <Image
                                width={400}
                                height={300}
                                src={item.src}
                                alt={item.alt}
                                className="h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] shadow-2xl w-auto object-contain rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>
                    <div className="flex-grow w-full md:w-1/2 px-4 text-center md:text-left">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <h2 className="text-4xl font-bold mt-4 text-gray-700">
                                {item.title}
                            </h2>
                            <p className="text-xl text-gray-500 mt-2">
                                {item.description}
                            </p>
                        </a>
                    </div>
                    <div className="md:block hidden flex-shrink-0 w-full md:w-1/2 px-4 transition-transform duration-300 ease-in-out">
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <Image
                                width={400}
                                height={300}
                                src={item.src}
                                alt={item.alt}
                                className="h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] shadow-2xl w-auto object-contain rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </a>
                    </div>

                </>
            )}
        </div>
    );
};

export default Equipments;
