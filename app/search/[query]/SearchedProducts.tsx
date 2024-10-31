"use client";

import axiosInstance from "@/config/axios";
import { fetchSearchProducts } from "@/lib/Fetcher/Search";
import { getToken } from "@/lib/getToken";
import { NextPage } from "next";
import toast from "react-hot-toast";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getEdgePoint } from "@/lib/getEdge";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Image from "next/image";

// Types
interface Props {
  query: string;
}

// Types
interface ProductSize {
  product_size: string;
  product_sku: string;
}

interface Product {
  id: number;
  product_name: string;
  product_image: string;
  product_description: string;
  price: number;
  product_sizes: ProductSize[];
}

const SearchedProducts: NextPage<Props> = ({ query }) => {
  const {
    data: Products,
    isFetching,
    isLoading: isProductsLoading,
    isError,
  } = useQuery({
    queryKey: ["query", query],
    queryFn: () => fetchSearchProducts(query),
  });

  const [productQuantities, setProductQuantities] = React.useState<{
    [key: number]: number;
  }>({});
  const [productSKUs, setProductSKUs] = React.useState<{
    [key: number]: string;
  }>({});
  const [productTotalPrices, setProductTotalPrices] = useState<{ [key: number]: number }>({});

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
    onError(error: Error) {
      toast.error(`Error : ${error.message} `);
    },
  });
  const edge = getEdgePoint();
  const handleAddToCart = (product: {
    id: number;
    product_sizes: { product_sku: string }[];
    product_name: string;
    product_image: string;
    product_description: string;
    price: number;
  }) => {
    const quantity = productQuantities[product.id] || 1;
    let selectedSKU: string = productSKUs[product.id];
    const totalPriceOfProduct = productTotalPrices[product.id];
    if (!selectedSKU && product.product_sizes.length > 0) {
      selectedSKU = product.product_sizes[0].product_sku;
    }
    const addedProduct = {
      id: product.id,
      quantity,
      sku: selectedSKU,
      product_name: product.product_name,
      product_image: product.product_image,
      product_description: product.product_description,
      product_price: product.price
    };

    const addedLocalProduct = {
      id: product.id,
      quantity,
      sku: selectedSKU,
      product_name: product.product_name,
      product_image: product.product_image,
      product_description: product.product_description,
      product_price: product.price,
      totalPriceOfProduct
    };

    if (token.length === 0) {
      // No token, store in local storage
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(addedLocalProduct);
      localStorage.setItem('cart', JSON.stringify(cart));
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
  if (isFetching && isProductsLoading) {
    return (
      <div className="h-screen bg-gray-100 rounded-xl animate-pulse p-20">
        {" "}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen bg-gray-100 rounded-xl  p-20 flex justify-center items-center">
        <h1 className="font-semibold text-2xl">No Result found</h1>
      </div>
    );
  }
  if (Products.length == 0) {
    return (
      <div className="h-screen bg-gray-100 rounded-xl  p-20 flex justify-center items-center">
        <h1 className="font-semibold text-2xl">No Result found</h1>
      </div>
    );
  }
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-2 pt-5 ">
        {Products &&
          Products.map((product: Product, index: number) => (
            <React.Fragment key={index}>
               <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col justify-between"
                    >
                      <Dialog>
                        <DialogTrigger>
                          <Image
                            width={450}
                            height={700}
                            alt="Product image"
                            className="object-contain h-[300px] min-h-[300px] rounded-md mb-2"
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
                            href={`/product/${product.id}`}
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

                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                          </AccordionItem>
                        </Accordion>
                        <div className="py-2">
                        {token.length == 0 ? (
                          <Dialog>
                            <DialogTrigger className="w-full">
                              <Button
                                className="w-full bg-gradient-to-tr
                                      from-green-600 to-green-300"
                              >
                                Add to cart
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Login Required</DialogTitle>
                                <DialogDescription>
                                  Login with your account to add products
                                  into your cart. <Link href="/auth/login"><strong className="text-green-500">LogIn</strong></Link>
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild className="mr-[2.5rem]">
                                  <Button
                                    type="button"
                                    className=""
                                  >
                                    Close
                                  </Button>
                                </DialogClose>
                                <DialogClose asChild>
                                  <Link href={"/auth/register"}>
                                    <Button
                                      type="submit"
                                      className="hidden lg:block rounded-md px-5 py-2.5 text-sm font-medium text-white transition  bg-light-secondary hover:bg-light-secondary/80"
                                    >
                                      Create Account
                                    </Button>
                                  </Link>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        ) :
                          (
                            <Button
                              onClick={() => handleAddToCart(product)}
                              className="w-full bg-gradient-to-tr
                                  from-green-600 to-green-300"
                            >
                              Add to cart
                            </Button>
                          )}
                      </div>
                      </div>
                    </div>
            </React.Fragment>
          ))}      </div>    </div>
  );
};
export default SearchedProducts;
