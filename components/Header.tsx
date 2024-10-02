"use client";
import React from 'react';
import Carousel from './Carousel';
import Equipments from './Equipments';
import Testimonials from './Testimonials';

export default function Header() {
    return (
        <>
            <header className="bg-gradient-to-b from-[#cfd1d0] via-[#cfd1d0] to-[#cfd1d0] text-black">
                <Carousel />
            </header>
            <Equipments />
            <Testimonials />
        </>
    );
}
