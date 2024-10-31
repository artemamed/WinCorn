import React from "react";
import SubCategoryProducts from "./SubCategoryProducts";
import { ParticularSubCategoryProductsWithMetaData } from "@/lib/Fetcher/Categories";
import { Metadata } from "next";

interface ParamsProps {
  slug: string;
}

export async function generateMetadata({ params }: { params: ParamsProps }): Promise<Metadata> {
  // Fetch the metadata for the given slug
  const metaData = await ParticularSubCategoryProductsWithMetaData(params.slug, null);

  // Return the metadata for the found product's subcategory
  return {
    title: `${metaData.subCategory_title} | Artema Medical`,
    description: metaData.subCategory_description,
  };
}

// Define the props type for the page component
interface PageProps {
  params: ParamsProps;
}

const page = ({ params }: PageProps) => {
  console.log(params.slug);
  return (
    <div>
      <SubCategoryProducts slug={params.slug} />
    </div>
  );
};

export default page;
