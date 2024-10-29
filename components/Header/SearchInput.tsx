"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInput.trim() !== "") {
      const formattedInput = searchInput.trim().replace(/[\s/]+/g, " ");
      router.push(`/search/${formattedInput}`);
    }
  };

  const handleButtonClick = () => {
    if (searchInput.trim() !== "") {
      const formattedInput = searchInput.trim().replace(/[\s/]+/g, " ");
      router.push(`/search/${formattedInput}`);
    }
  };

  if (pathname == "/auth/login" || pathname == "/auth/register") {
    return <></>;
  } else {
    return (
      <>
        <form
          onSubmit={handleFormSubmit}
          className=""
        >
          <label htmlFor="Search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="Search"
            placeholder="🔍 Search Products..."
            className="w-full lg:w-[20rem] rounded-full border border-gray-300 px-4 py-3 pe-12 text-sm bg-gray-200 focus:border-accent focus:ring-2  focus:outline-none transition duration-200 ease-in-out"
            value={searchInput}
            onChange={handleInputChange}
          />

          <span className="absolute -ml-10 mt-3">
            <button
              type="button"
              className="transition-colors duration-200 ease-in-out focus:outline-none"
              onClick={handleButtonClick}
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 hover:scale-110 transform transition duration-150 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </form>

      </>
    );
  }
};

export default SearchInput;
