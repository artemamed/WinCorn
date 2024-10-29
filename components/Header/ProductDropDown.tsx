"use client";
import React from "react";
import { NextPage } from "next";
import { fetchCategoriesNames } from "@/lib/Fetcher/Categories";
import { useQuery } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";

const ProductDropDown: NextPage = () => {
  const { data: allCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: fetchCategoriesNames,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="inline-flex items-center overflow-hidden rounded-md bg-white"
      >
        <button className="flex justify-between items-center h-full ">
        <span className="transition hover:text-green-600">
            Products
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <ScrollArea className="h-96 bg-white">
          <div className="p-2 rounded-lg">
            {allCategories &&
              allCategories.map((category: { category_slug: string; category_name: string }, index: number) => (
                <a
                  key={index}
                  href={`/categories/${category.category_slug}`}
                  className="block rounded-lg py-0.5 text-sm text-gray-500 hover:text-green-500"
                >
                  <DropdownMenuItem>{category.category_name}</DropdownMenuItem>
                </a>
              ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductDropDown;
