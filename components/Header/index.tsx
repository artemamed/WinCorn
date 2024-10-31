"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import ProductDropDown from "./ProductDropDown";
import CartButton from "./CartButton";
import InfoButton from "./InfoButton";
import UserDropDown from "../UserDropDown/UserDropDown";
import TandC from "./TandC";
import SearchInput from "./SearchInput";
import Resources from "./resources";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full top-0 start-0 py-2 border-b z-50 bg-white shadow-lg transition duration-300 ease-in-out">
      <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-black transition-transform transform hover:scale-105">
          <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/wincorn/WinCorn.png"
            alt="WinCorn"
            width={250}
            height={250}
            className="-mt-[6rem] -mb-[7rem] -ml-[3rem]"
          />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <div className="mr-5 -mb-1">
            <InfoButton />
          </div>
          
          <div className="mr-5 -mb-1">
            <CartButton />
          </div>
          <div className="hidden md:block mr-5 -mb-1">
          
          <UserDropDown setMobileMenuOpen={setMobileMenuOpen} />

          </div>
          <div className="hidden md:block mr-5">
            <SearchInput />
          </div>
          

          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? (
              <FaTimes className="text-black" size={25} />
            ) : (
              <FaBars className="text-black" size={25} />
            )}
          </button>
        </div>

        {/* Right Section - Search, Cart, Sign-in */}
        <div className="hidden lg:flex items-center space-x-6">
          <SearchInput />
          <InfoButton />
          <CartButton />
          <div className="hidden md:flex md:gap-4">
          <UserDropDown setMobileMenuOpen={setMobileMenuOpen} />

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 bg-white shadow-lg absolute h-full w-full z-20 mt-4 rounded-lg transition duration-300 ease-in-out">
          <ul className="space-y-4 mt-4 text-lg">
            <li className="block md:hidden">
              <SearchInput />
            </li>
            <li>
              <Link href="/" className="text-black hover:text-green-600 transition duration-200" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <ProductDropDown />
            </li>
            <li>
              <Resources />
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-green-600 transition duration-200" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <TandC />
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-green-600 transition duration-200" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
            <li className="block md:hidden">
            <UserDropDown setMobileMenuOpen={setMobileMenuOpen} />

            </li>
            <li></li>
          </ul>
        </div>
      )}

      {/* Separator Line */}
      <div className="hidden lg:block border-b border-gray-300 my-3 lg:max-w-3xl xl:max-w-7xl items-center justify-center mx-auto" />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center px-6 max-w-7xl mx-auto">
        <ul className="flex space-x-8 items-center text-lg">
          <li>
            <Link href="/" className="text-black hover:text-green-600 transition duration-200">Home</Link>
          </li>
          <li className="relative">
            <ProductDropDown />
          </li>
          <li>
            <Resources />
          </li>
          <li className="relative">
            <TandC />
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-green-600 transition duration-200">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-green-600 transition duration-200">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
