"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getEdgePoint } from "@/lib/getEdge";
import { getToken } from "@/lib/getToken";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchParticularProduct } from "@/lib/Fetcher/Categories";
import axiosInstance from "@/config/axios";
import Image from "next/image";

const SeparatePage = ({ slug }: { slug: string }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["SeparateProduct", slug],
    queryFn: () => FetchParticularProduct(slug),
  });

  const [productQuantities, setProductQuantities] = useState<{
    [key: number]: number;
  }>({});
  const [productSKUs, setProductSKUs] = useState<{
    [key: number]: string;
  }>({});
  const [productTotalPrices, setProductTotalPrices] = useState<{ [key: number]: number }>({});
  const handleIncrementQuantity = (productId: number, price: number) => {
    const priceNumber = parseFloat(price.toString());
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,

    }));
    setProductTotalPrices((prevTotalPrices) => ({
      ...prevTotalPrices,
      [productId]: (prevTotalPrices[productId] || priceNumber) + priceNumber,

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

  


  const edge = getEdgePoint();
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

  const handleAddToCart = (product: {
    id: number;
    product_sizes: { product_size: string; product_sku: string }[];
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
    }
    console.log(addedLocalProduct);

    if (token.length == 0) {
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
  }; if (isLoading) {
    return <div className="min-h-screen"></div>;
  }

  if (isError || !product) {
    return <div>Error loading product details.</div>;
  }
  if (!isError && product) {
    return (
      <>
        <section className="overflow-hidden  font-poppinsx min-h-screen">
          <div className="max-w-7xl px-4 py-8 mx-auto md:px-6">
            <div className="flex flex-col md:flex-row mt-10">
              {/* Product Image */}
              <div className="w-full h-64 pb-6 px-4 md:w-1/2 lg:h-[30rem]">
                <Image
                  src={`${edge}/product_images/${product.product_image}`}
                  alt={product.product_name}
                  height={200}
                  width={500}
                  className="object-contain mix-blend-multiply lg:object-center w-full h-full transition-transform duration-200 hover:scale-105 bg-white rounded-3xl"
                />
              </div>

              {/* Product Details */}
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 md:text-3xl">{product.product_name}</h2>
                    <p className="text-gray-700 mb-6">{product.product_description}</p>
                  </div>

                  {/* Size Selection */}
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
                    className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 mb-4"
                  >
                    {product.product_sizes.map((sk: { product_sku: string; product_size: string }, i: number) => (
                      <option key={i} value={sk.product_sku}>
                        Size: {sk.product_size} | SKU: {sk.product_sku}
                      </option>
                    ))}
                  </select>

                  {/* Price Display */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">
                      Price: <span className="text-green-600">${product.price}</span>
                    </h2>
                  </div>

                  {/* Quantity Selection */}
                  <div className="mb-6">
                    <label className="text-xl font-semibold">Quantity:</label>
                    <div className="flex items-center justify-center space-x-3 mt-2">
                      <Button
                        className="rounded-full bg-gradient-to-tr from-green-700 to-green-400 py-2 px-4 hover:shadow-lg transition"
                        onClick={() => handleDecrementQuantity(product.id, product.price)}
                      >
                        -
                      </Button>
                      <div
                        id="number-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-center"
                      >
                        {productQuantities[product.id] || 1}
                      </div>
                      <Button
                        className="rounded-full bg-gradient-to-tr from-green-700 to-green-400 py-2 px-4 hover:shadow-lg transition"
                        onClick={() => handleIncrementQuantity(product.id, product.price)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="w-full mb-4">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-tr from-green-700 to-green-400 py-3 text-white font-semibold hover:shadow-lg transition"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );


  }
};

export default SeparatePage;
