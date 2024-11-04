"use client";
import React, { useState } from "react";
import { ParticularSubCategory, fetchCategoriesNames } from "@/lib/Fetcher/Categories";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ChevronDownIcon, XIcon } from "lucide-react";

const Category = ({ slug }: { slug: string }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { data: allSubCategories } = useQuery({
    queryKey: ["subCategories", slug],
    queryFn: () => ParticularSubCategory(slug),
  });

  const { data: allCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: fetchCategoriesNames,
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  if (!allSubCategories && !allCategories) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl shadow-lg bg-gray-300 transition-all duration-300 h-screen">
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Desktop Categories */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/5 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 pb-4 border-b-2 border-gray-300 hover:text-green-500">
            Categories
          </h2>
          {allCategories &&
            allCategories.map((category: { category_slug: string; category_name: string }, index: number) => (
              <Link
                key={index}
                href={`/categories/${category.category_slug}`}
                className="block p-3 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg mb-4 border-l-4 border-green-500"
              >
                <span className="text-gray-600 font-semibold hover:text-green-500">
                  {category.category_name}
                </span>
              </Link>
            ))}
        </div>

        {/* Mobile Dropdown Button */}
        <button
          className="lg:hidden flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg mb-4 transition-transform transform hover:scale-105 shadow-lg"
          onClick={toggleDropdown}
        >
          {showDropdown ? (
            <>
              <XIcon className="w-4 h-4 mr-2" /> Close Categories
            </>
          ) : (
            <>
              <ChevronDownIcon className="w-4 h-4 mr-2" /> Categories
            </>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ${showDropdown ? "block" : "hidden"}`}
        >
          <h2 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-gray-300">Categories</h2>
          {allCategories &&
            allCategories.map((category: { category_slug: string; category_name: string }, index: number) => (
              <Link
                key={index}
                href={`/categories/${category.category_slug}`}
                className="block p-4 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg mb-4 border-l-4 border-green-500"
              >
                <span className="text-gray-600 font-semibold hover:text-green-500">{category.category_name}</span>
              </Link>
            ))}
        </div>

        {/* Subcategories Section */}
        <div className="flex flex-col md:items-start lg:w-2/3 xl:w-5/6 pl-4 overflow-y-auto max-h-full">
          <h1 className="text-3xl font-bold py-3 text-gray-800 transition duration-300 transform hover:scale-105 hover:text-green-500">
            {allSubCategories && allSubCategories.category.category_name}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full ">
            {allSubCategories &&
              allSubCategories.subcategories.map((sub: { sub_category: { sub_category_slug: string; sub_category_name: string } }, index: number) => (
                <Link
                  href={`/products/${sub.sub_category.sub_category_slug}`}
                  key={index}
                  className="flex flex-col justify-between h-36 border border-gray-200 rounded-lg shadow-md transition-transform duration-200 hover:bg-gray-100 transform hover:scale-105 bg-white hover:shadow-lg cursor-pointer"
                >
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-gray-800 font-semibold text-center hover:text-green-500">
                      {sub.sub_category.sub_category_name}
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <span className="text-gray-500 hover:text-green-500">View Products</span>
                  </div>
                </Link>
              ))}          </div>        </div>
      </div>
    </div>
  );
};

export default Category;
