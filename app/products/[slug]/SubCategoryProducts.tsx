"use client";
import {
  ParticularSubCategoryProducts,
  fetchCategoriesNames,
} from "@/lib/Fetcher/Categories";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { getEdgePoint } from "@/lib/getEdge";
import { getToken } from "@/lib/getToken";
import axiosInstance from "@/config/axios";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDownIcon, XIcon } from "lucide-react";

const SubCategoryProducts = ({ slug }: { slug: string }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const edge = getEdgePoint();
  // Query to get all Categories names
  const { ref, inView } = useInView();
  const {
    data: allProducts,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ["subCategoriesProducts", slug],
    queryFn: ({ pageParam }) => ParticularSubCategoryProducts(String(slug), pageParam),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage: { current_page: number }) =>
      firstPage.current_page > 1 ? firstPage.current_page - 1 : undefined,
    getNextPageParam: (lastPage: {
      data: unknown; current_page: number
    }) => lastPage.current_page + 1,
  });
  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  // Query to get all Categories names
  const { data: allCategories } = useQuery({
    queryKey: ["Categories"],
    queryFn: fetchCategoriesNames,
  });

  const [productQuantities, setProductQuantities] = React.useState<{
    [key: number]: number;
  }>({});
  const [productSKUs, setProductSKUs] = React.useState<{
    [key: number]: string;
  }>({});
  const [productTotalPrices, setProductTotalPrices] = useState<{
    [key: number]: number;
  }>({});

  const handleIncrementQuantity = (productId: number, price: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
    setProductTotalPrices((prevTotalPrices) => ({
      ...prevTotalPrices,
      [productId]: (prevTotalPrices[productId] || price) + price,
    }));
  };

  const handleDecrementQuantity = (productId: number, price: number) => {
    if (productQuantities[productId] && productQuantities[productId] > 1) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
    setProductTotalPrices((prevTotalPrices) => {
      const currentTotalPrice = prevTotalPrices[productId] || 0;
      return {
        ...prevTotalPrices,
        [productId]: currentTotalPrice > price ? currentTotalPrice - price : 0,
      };
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const token = getToken();
  const client = useQueryClient();
  const AddCart = useMutation({
    mutationFn: ({
      product_id,
      quantity,
      sku,
    }: {
      product_id: number;
      quantity: number;
      sku: string;
    }) => {
      return axiosInstance.post(
        `api/add-to-cart`,
        {
          product_id,
          quantity,
          sku,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Cart"] });
      client.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Cart Updated");
    },
    onError(error) {
      toast.error(`Error : ${error.message} `);
    },
  });
  const handleAddToCart = (product: {
    id: number;
    product_sizes?: Array<{ product_size: string; product_sku: string }>;
    product_name: string;
    product_image: string;
    price: number;
  }) => {
    let productSize = "";
    if (
      Array.isArray(product.product_sizes) &&
      product.product_sizes.length > 0
    ) {
      productSize = product.product_sizes[0].product_size; // Default to first size if not selected
    }
    console.log(product.id);
    const quantity = productQuantities[product.id] || 1;
    let selectedSKU: string = productSKUs[product.id];
    const totalPriceOfProduct = productTotalPrices[product.id];

    if (!selectedSKU && product.product_sizes && product.product_sizes.length > 0) {
      selectedSKU = product.product_sizes[0].product_sku;
    }

    const addedProduct = {
      id: product.id,
      quantity,
      sku: selectedSKU,
      product_name: product.product_name,
      product_image: product.product_image,
      product_price: product.price,
      product_size: productSize,
    };

    console.log(addedProduct);

    const addedLocalProduct = {
      id: product.id,
      quantity,
      sku: selectedSKU,
      product_name: product.product_name,
      product_image: product.product_image,
      product_price: product.price,
      product_size: productSize,
      totalPriceOfProduct,
    };

    console.log(addedLocalProduct);

    if (token.length == 0) {
      // No token, store in local storage
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(addedLocalProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart");
    } else {
      // User is logged in, add directly to server-side cart
      AddCart.mutate({
        product_id: product.id,
        quantity,
        sku: addedProduct.sku,
      });
    }
  };

  if (isFetching && isLoading) {
    return (
      <div className="h-screen bg-gray-100 rounded-xl animate-pulse p-20">
        {" "}
      </div>
    );
  }

  if (!isError && allProducts) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-300 h-[calc(100vh-80px)]">
        {/* Categories Section */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4 h-full overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800 pb-4 border-b-2 border-gray-300 hover:text-green-500">
            Categories
          </h1>
          {allCategories &&
            allCategories.map(
              (category: { category_slug: string; category_name: string }, index: number) => (
                <Link
                  key={index}
                  href={`/categories/${category.category_slug}`}
                  className="block p-3 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg mb-4 border-l-4 border-green-500"
                >
                  <span className="text-gray-600 font-semibold hover:text-green-500">
                    {category.category_name}
                  </span>
                </Link>
              )
            )}
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

        <div className="px-4 h-full overflow-y-auto w-full" id="productsSection">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-5">
            {allProducts &&
              allProducts.pages.map((page) => (
                <React.Fragment key={page.current_page}>
                  {(page.data as Array<{
                    id: number;
                    slug: string;
                    product_name: string;
                    product_image: string;
                    price: number;
                    product_sizes: Array<{ product_size: string; product_sku: string }>;
                  }>).map((product, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col justify-between"
                    >
                      <Dialog>
                        <DialogTrigger>
                          <img
                            width={450}
                            height={700}
                            alt="Product image"
                            className="object-contain h-[300px] min-h-[300px] rounded-md mb-2 "
                            src={`${edge}/product_images/${product.product_image}`}
                          />
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{product.product_name}</DialogTitle>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      <div className="pt-2 ">
                        <div className="flex justify-between items-start mb-2">
                          <Link
                            href={`/product/${product.slug}`}
                            className="text-xl font-bold hover:underline tracking-tight text-gray-900"
                          >
                            {product.product_name}
                          </Link>
                        </div>
                        <div className="flex my-1 text-lg">
                          <strong>Price:</strong>
                          <div className="ml-3 text-green-600 font-semibold">${product.price}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <select
                            id="quantities"
                            onChange={(e) => {
                              const selectedOption = e.target.value;
                              const extractedSKU = selectedOption.split("SKU : ")[1];
                              setProductSKUs({
                                ...productSKUs,
                                [product.id]: extractedSKU,
                              });
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-light-secondary focus:border-light-secondary"
                          >
                            {product.product_sizes.map((sk: { product_size: string; product_sku: string }, i: number) => (
                              <option key={i} className="flex justify-around items-center">
                                <span>Size : {sk.product_size}</span>{" "}
                                <span>SKU : {sk.product_sku}</span>
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex items-center justify-center pt-4 space-x-3">
                          <Button
                            className="rounded-full bg-gradient-to-tr from-green-600 to-green-300 py-2 px-4"
                            onClick={() => handleDecrementQuantity(product.id, product.price)}
                          >
                            -
                          </Button>
                          <div
                            id="number-input"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-center"
                          >
                            {productQuantities[product.id] || 1}
                          </div>
                          <Button
                            className="rounded-full bg-gradient-to-tr from-green-600 to-green-300 py-2 px-4"
                            onClick={() => handleIncrementQuantity(product.id, product.price)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-gradient-to-tr
                                  from-green-600 to-green-300 mt-5"
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
          </div>

          <div className="flex justify-center items-center mt-5">
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="flex justify-center items-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              {isFetchingNextPage ? (
                <div role="status" className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin fill-light-secondary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : hasNextPage ? (
                "... End ..."
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>
    );

  }
};

export default SubCategoryProducts;
