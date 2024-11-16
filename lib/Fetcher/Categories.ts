import axiosInstance from "@/config/axios";
import { getToken } from "../getToken";
interface SubcategoryMetadata {
  subCategory_title: string;
  subCategory_description: string;
}
// Define the structure of the expected response data
interface SubcategoryResponse {
  title: string;
  description: string;
}
// Fetch All Categories Names only
export const fetchCategoriesNames = async () => {
  const token = getToken();
  try {
    const response = await axiosInstance.get(
      "/api/get-categories-by-user-id/280",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch categories");
    }
    console.log(response.data);
    return response.data.categories || [];
  }catch (error) {
    console.error(error);
    throw new Error("Failed to fetch categories");
  }
};
// Fetch Particular Category 
export const ParticularCategory = async (categoryID: number) => {
  console.log(categoryID);
  try {
    const response = await axiosInstance.get(
      `/api/category/${categoryID}`,
      {}
    );
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch this category data");
    }
    console.log(response.data);
    return response.data.category || [];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch this category data");
  }
};// Fetch  Particular Sub Category
export const ParticularSubCategory = async (slug: string) => {
  console.log(slug);
  try {
    const response = await axiosInstance.get(
      `/api/get-sub-categories-by-category-slug-no-auth/${slug}`,
      {}
    );
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch sub categories");
    }
    
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); 
    } else {
      console.log('An unknown error occurred', error);
    }

  }
};
export const ParticularOneSubCategory = async (subCategoryID: number) => {
  console.log(subCategoryID)
  try {
    const response = await axiosInstance.get(
      `/api/sub-category/${subCategoryID}`,
      {}
    );
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch this sub category");
    }
    console.log(response.data);
    return response.data.subCategory || [];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch this sub category");
  }
}


//Fetching subcategory Producst with metadata
export const ParticularSubCategoryProductsWithMetaData = async (
  slug: string,
  pageParam: number | null
): Promise<SubcategoryMetadata> => {
  try {
    const response = await axiosInstance.get<SubcategoryResponse>(
      `/api/get-product-by-subcategory-slug-no-auth/${slug}?page=${pageParam}`
    );

    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch products for the subcategory");
    }
    const subcategoryMetadata: SubcategoryMetadata = {
      subCategory_title: response.data.title,
      subCategory_description: response.data.description
    };

    return subcategoryMetadata;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products for the subcategory");
  }
};

export const getProductsSlugByUserId = async () => {
  try {
    const response = await axiosInstance.get("/api/get-products-slug-by-user-id/280");
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch products for the user");
    }
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products for the user");
  }
}






// Fetch Particular Sub Category Products by Slug
export const ParticularSubCategoryProducts = async (
  slug: string, // Change the parameter to accept a slug
  pageParam: number| null
) => {
  console.log("function is called ")
console.log(slug,pageParam)

  try { 
    const response = await axiosInstance.get(
      `/api/get-product-by-subcategory-slug-no-auth/${slug}?page=${pageParam}`
    );
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch products for the sub category");
    }
    console.log(response.data);
    return response.data.products || [];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products for the sub category");
  }
};

// Fetch Particular Product
export const FetchParticularProduct = async (slug: string) => {
  console.log(slug);
  try {
    const response = await axiosInstance.get(`api/get-product-by-slug/${slug}`);
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch Product");
    }
    console.log(response.data);
    return response.data.product || {};
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Product");
  }
};
