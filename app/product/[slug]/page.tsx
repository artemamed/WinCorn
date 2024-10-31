import React from "react";
import { FetchParticularProduct } from "@/lib/Fetcher/Categories";
import SeparatePage from "./SaperatePage";

interface ParamProps {
  slug: number;
}

// Update the function type here with ParamProps
export async function generateMetadata({ params }: { params: ParamProps }) {
  console.log(params.slug);
  try {
    const product = await FetchParticularProduct(params.slug.toString());
    console.log(product);

    // If the product is null or does not have the necessary properties, return default metadata
    if (!product || !product.product_name || !product.product_description) {
      return {
        title: "Product Not Found | Artema Medical Group",
        description: "The product you are looking for does not exist or is no longer available.",
      };
    }
    // Return the metadata for the found product
    return {
      title: `${product.product_name} | Artema Medical Group`,
      description: product.product_description,
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      title: "Error | Artema Medical Group",
      description: "There was an error retrieving the product information.",
    };
  }
}

// Define the props type for the page component
interface PageProps {
  params: ParamProps;
}

const page = ({ params }: PageProps) => {
  return (
    <div>
      <SeparatePage slug={params.slug.toString()} />
    </div>
  );
};

export default page;
