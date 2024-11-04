"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for navigation

export default function Carousel() {
    const slides = [
        { image: '/images/parallax/1.jpg' },
        { image: '/images/parallax/2.jpg' },
        { image: '/images/parallax/3.jpg' },
        { image: '/images/parallax/4.jpg' },
        { image: '/images/parallax/5.jpg' },
        { image: '/images/parallax/6.jpg' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }
    }, [isAnimating, slides.length]);

    const prevSlide = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
        }
    }, [isAnimating, slides.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [currentSlide]);

    const getCardStyle = (index: number) => {
        const isActive = index === currentSlide;
        const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
        const isNext = index === (currentSlide + 1) % slides.length;
        const isFarPrev = index === (currentSlide - 2 + slides.length) % slides.length;
        const isFarNext = index === (currentSlide + 2) % slides.length;

        let zIndex = 0;
        let transform = 'translateX(0)';
        let scale = 1;
        let opacity = 0.75;
        let margin = '-40px';

        if (isActive) {
            zIndex = 10;
            scale = 1.2;
            opacity = 1;
            margin = '0'; // Center card, no negative margin
            transform = 'translateX(0)';
        } else if (isPrev || isNext) {
            zIndex = 5;
            scale = 1;
            transform = isPrev ? 'translateX(-60%)' : 'translateX(60%)';
        } else if (isFarPrev || isFarNext) {
            zIndex = 1;
            scale = 0.8;
            transform = isFarPrev ? 'translateX(-120%)' : 'translateX(120%)';
        }

        return {
            zIndex,
            transform,
            scale,
            opacity,
            margin,
        };
    };

    return (
        <div className="relative flex flex-col items-center justify-center p-[1rem]" style={{ zIndex: 10 }}>
            <div className="text-2xl font-medium text-gray-800 xl:text-6xl lg:text-5xl md:text-3xl">
                Welcome to <span className="text-green-500">WinCorn Medical</span>
            </div>
            <br />
            <p className="text-center text-gray-700 text-lg mb-6 xl:text-xl 2xl:text-2xl max-w-3xl">
                We deliver premium surgical instruments that meet the highest standards of quality, offer exceptional value, and provide the reliability our customers expect.
            </p>
            {/* <Link href="/blogs">
                <button className="bg-green-500 xl:px-6 xl:py-2 px-3 py-1 rounded-full text-white xl:text-lg text-sm mb-2">Explore</button>
            </Link> */}

            {/* Carousel Container */}
            <div className="overflow-hidden w-full max-w-6xl relative rounded-2xl" style={{ zIndex: 9 }}>
                {/* Show full images on small screens */}
                <div className="md:hidden relative w-full h-64">
                    {slides.map((slide, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={slide.image} alt={`Slide ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                        </div>
                    ))}
                    {/* Navigation buttons */}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2">
                        <FaChevronRight />
                    </button>
                </div>

                {/* Desktop version */}
                <div className="hidden md:flex justify-center items-center relative" style={{ width: '100%', height: '50vh', position: 'relative' }}> // height: '400px'
                    {slides.map((slide, index) => {
                        const { zIndex, transform, scale, opacity, margin } = getCardStyle(index);

                        return (
                            <div
                                key={index}
                                className={`absolute flex-none shadow-lg transition-transform duration-1000 ease-in-out overflow-hidden`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '300px',    // height: '300px',
                                    width: '600px',
                                    // borderRadius: '20px',
                                    zIndex,
                                    transform: `${transform} scale(${scale})`,
                                    opacity,
                                    marginLeft: margin,
                                    transition: 'all 1s ease-in-out',
                                }}
                            >
                            </div>
                        );
                    })}                </div>
            </div>
        </div>
    );
}
