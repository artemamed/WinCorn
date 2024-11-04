import React from "react";
import Category from "./Category";
import { Metadata } from "next";
import { fetchCategoriesNames } from "@/lib/Fetcher/Categories";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Fetch all categories
  const allCategories = await fetchCategoriesNames();

  // Find the category that matches the slug
  const category = allCategories.find((cat: { category_slug: string }) => cat.category_slug === params.slug);

  // If the category is not found, return a default metadata
  if (!category) {
    return {
      title: "Category Not Found",
      description: "The category you are looking for does not exist.",
    };
  }

  // Return the metadata for the found category
  return {
    title: `${category.title} | Wincorn Medical Group`,
    description: category.description,
  };
}

// Define the props type
interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  return (
    <div>
      <Category slug={params.slug} />
    </div>
  );
};

export default page;
