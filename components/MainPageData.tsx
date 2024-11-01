"use client";
import React from 'react';
import Carousel from './Carousel';
import Equipments from './Equipments';
import Testimonials from './Testimonials';

export default function MainPageData() {
    return (
        <>
            <header className="bg-gray-200 text-black">
                <Carousel />
            </header>
            <Equipments />
            <Testimonials />
        </>
    );
}
