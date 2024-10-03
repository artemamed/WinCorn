"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState({
        products: false,
        resources: false,
        policies: false,
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdownVisible, setMobileDropdownVisible] = useState({
        products: false,
        resources: false,
        policies: false,
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleMouseEnter = (type: string) => {
        setDropdownVisible((prev) => ({
            ...prev,
            [type]: true,
        }));
    };

    const handleMouseLeave = (type: string) => {
        setDropdownVisible((prev) => ({
            ...prev,
            [type]: false,
        }));
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleMobileDropdown = (type: string) => {
        setMobileDropdownVisible((prev) => ({
            ...prev,
            [type as keyof typeof prev]: !prev[type as keyof typeof prev],
        }));
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false); // Close mobile menu
        setMobileDropdownVisible({
            products: false,
            resources: false,
            policies: false,
        }); // Close all dropdowns
    };

    return (
        <div className="w-full top-0 start-0 py-4 border-b z-1000 bg-white shadow-lg">
            <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-3xl font-bold text-black transition-transform transform hover:scale-105">
                    Win<span className="text-green-500">Corn</span>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? (
                            <FaTimes className="text-black" size={25} />
                        ) : (
                            <FaBars className="text-black" size={25} />
                        )}
                    </button>
                </div>

                {/* Right Section - Search, Cart, Sign-in */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Products"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="bg-gray-200 w-[20rem] pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Cart Icon */}
                    <div className="relative">
                        <FaShoppingCart className="text-black cursor-pointer hover:text-green-400" size={30} />
                        <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </div>

                    <div className="space-x-4">
                        {/* Sign In Button */}
                        <Link href="/auth/login">
                            <button className="py-2 px-6 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105">
                                Sign In
                            </button>
                        </Link>
                         {/* Register Button */}
                         <Link href="/auth/register">
                            <button className="py-2 px-6 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-6 bg-white shadow-lg absolute w-full z-20">
                    <ul className="space-y-4 mt-4 text-lg">
                        <li>
                            <Link href="/" className="text-black" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleMobileDropdown("products")}
                                className="flex items-center justify-between w-full text-left text-black"
                            >
                                Products <BsChevronDown />
                            </button>
                            {mobileDropdownVisible.products && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li>
                                        <Link href="#product1" className="text-black" onClick={handleLinkClick}>
                                            Product 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#product2" className="text-black" onClick={handleLinkClick}>
                                            Product 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#product3" className="text-black" onClick={handleLinkClick}>
                                            Product 3
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => toggleMobileDropdown("resources")}
                                className="flex items-center justify-between w-full text-left text-black"
                            >
                                Resources <BsChevronDown />
                            </button>
                            {mobileDropdownVisible.resources && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li>
                                        <Link href="/ifu" className="text-black" onClick={handleLinkClick}>
                                            IFU
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/FAQs" className="text-black" onClick={handleLinkClick}>
                                            FAQs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs" className="text-black" onClick={handleLinkClick}>
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/certification" className="text-black" onClick={handleLinkClick}>
                                            Certification
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="/about" className="text-black" onClick={handleLinkClick}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleMobileDropdown("policies")}
                                className="flex items-center justify-between w-full text-left text-black"
                            >
                                Policies <BsChevronDown />
                            </button>
                            {mobileDropdownVisible.policies && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li>
                                        <Link href="/terms-and-conditions" className="text-black" onClick={handleLinkClick}>
                                            Terms & Condition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shipping-policy" className="text-black" onClick={handleLinkClick}>
                                            Shipping Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/refund-policy" className="text-black" onClick={handleLinkClick}>
                                            Refund Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cookie-policy" className="text-black" onClick={handleLinkClick}>
                                            Cookies Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" className="text-black" onClick={handleLinkClick}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="/contact" className="text-black" onClick={handleLinkClick}>
                                Contact Us
                            </Link>
                        </li>
                        {/* Sign In Button in Mobile Menu */}
                        <li>
                            <Link href="/auth/login" onClick={handleLinkClick}>
                                <button className="w-full py-2 px-6 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105">
                                    Sign In
                                </button>
                            </Link>
                        </li>
                        {/* Register Button in Mobile Menu */}
                        <li>
                            <Link href="/auth/register" onClick={handleLinkClick}>
                                <button className="w-full py-2 px-6 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105">
                                    Register
                                </button>
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
            )}

            {/* Separator Line */}
            <div className="hidden lg:block border-b border-gray-300 my-3" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center px-6 max-w-7xl mx-auto">
                <ul className="flex space-x-8 items-center text-lg">
                    <li>
                        <Link href="/" className="text-black">
                            Home
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("products")}
                        onMouseLeave={() => handleMouseLeave("products")}
                    >
                        <span className="text-black cursor-pointer flex items-center">
                            Products <BsChevronDown className="ml-1" />
                        </span>
                        {dropdownVisible.products && (
                            <div
                                className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-[12rem] z-20"
                                onMouseEnter={() => handleMouseEnter("products")}
                                onMouseLeave={() => handleMouseLeave("products")}
                            >
                                <Link href="#product1" className="block px-4 py-2 hover:bg-gray-200">
                                    Product 1
                                </Link>
                                <Link href="#product2" className="block px-4 py-2 hover:bg-gray-200">
                                    Product 2
                                </Link>
                                <Link href="#product3" className="block px-4 py-2 hover:bg-gray-200">
                                    Product 3
                                </Link>
                            </div>
                        )}
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("resources")}
                        onMouseLeave={() => handleMouseLeave("resources")}
                    >
                        <span className="text-black cursor-pointer flex items-center">
                            Resources <BsChevronDown className="ml-1" />
                        </span>
                        {dropdownVisible.resources && (
                            <div
                                className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-[12rem] z-20"
                                onMouseEnter={() => handleMouseEnter("resources")}
                                onMouseLeave={() => handleMouseLeave("resources")}
                            >
                                <Link href="/ifu" className="block px-4 py-2 hover:bg-gray-200">
                                    IFU
                                </Link>
                                <Link href="/FAQs" className="block px-4 py-2 hover:bg-gray-200">
                                    FAQs
                                </Link>
                                <Link href="/blogs" className="block px-4 py-2 hover:bg-gray-200">
                                    Blogs
                                </Link>
                                <Link href="/certification" className="block px-4 py-2 hover:bg-gray-200">
                                    Certification
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href="/about" className="text-black">
                            About Us
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("policies")}
                        onMouseLeave={() => handleMouseLeave("policies")}
                    >
                        <span className="text-black cursor-pointer flex items-center">
                            Policies <BsChevronDown className="ml-1" />
                        </span>
                        {dropdownVisible.policies && (
                            <div
                                className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-[12rem] z-20"
                                onMouseEnter={() => handleMouseEnter("policies")}
                                onMouseLeave={() => handleMouseLeave("policies")}
                            >
                                <Link href="/terms-and-conditions" className="block px-4 py-2 hover:bg-gray-200">
                                    Terms & Condition
                                </Link>
                                <Link href="/shipping-policy" className="block px-4 py-2 hover:bg-gray-200">
                                    Shipping Policy
                                </Link>
                                <Link href="/refund-policy" className="block px-4 py-2 hover:bg-gray-200">
                                    Refund Policy
                                </Link>
                                <Link href="/cookie-policy" className="block px-4 py-2 hover:bg-gray-200">
                                    Cookies Policy
                                </Link>
                                <Link href="/privacy-policy" className="block px-4 py-2 hover:bg-gray-200">
                                    Privacy Policy
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href="/contact" className="text-black">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
