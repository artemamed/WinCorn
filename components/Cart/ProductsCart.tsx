/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/config/axios";
import { fetchCart } from "@/lib/Fetcher/Cart";
import { fetchLoggedUser } from "@/lib/Fetcher/User";
import { getEdgePoint } from "@/lib/getEdge";
// import { useRouter } from "next/navigation";
import { getToken } from "@/lib/getToken";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import axios from "axios";


// interface cardData {
//   sessionId: string;
//   orderId: string;
//   amount: string;
// }

interface CartItem {
  product_image: string | undefined;
  product_price: number;
  size: string | undefined;
  product_description: string | undefined;
  product_name: string | undefined;
  id: number;
  product?: {
    product_name: string;
    product_description?: string;
    price: number;
    product_image?: string;
  };
  quantity: number;
  sku: string;
  product_size?: string;
  totalPriceOfProduct?: number;
}




const Cart = () => {
  // Query to get all Cart
  const {
    data: allCart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Cart"],
    queryFn: fetchCart,
  });
  const {
    data: User,
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchLoggedUser,
  });

  const edge = getEdgePoint();
  const token = getToken();

  const client = useQueryClient();
  const deleteCart = useMutation({
    mutationFn: ({ id }: { id: number }) => {
      return axiosInstance.delete(`api/delete-from-cart/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Cart"] });
      client.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Item Deleted");
    },
    onError(error) {
      toast.error(`Error : ${error.message}`);
    },
  });
  const [totalPiceOfAllItems, settotalPiceOfAllItems] = useState("");
  // const [sessionId,] = useState<cardData>();
  // const [, setOrderId] = useState("");

  // const router = useRouter();
  const HandleDeleteItem = (cardId: number) => {
    console.log("cardId:    ", cardId);
    if (token.length > 0) {
      deleteCart.mutate({
        id: cardId,
      });
    } else {
      const localCartJSON = localStorage.getItem("cart");
      console.log(localCartJSON);
      if (localCartJSON) {
        const localCart = JSON.parse(localCartJSON);
        const updatedCart = localCart.filter(
          (item: CartItem) =>
            // console.log(item.id),
            item.id !== cardId);
        console.log(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      window.location.reload();
    }
  };
  useEffect(() => {
    if (allCart) {
      // Total price calculation
      const totalPrice = allCart.reduce((acc: number, item: CartItem) => {
        return acc + item.quantity * (item.product?.price ?? 0);
      }, 0).toFixed(2);

      // Update state with the calculated total price
      settotalPiceOfAllItems(totalPrice);
    }
  }, [allCart]); const addQRF = useMutation({
    mutationFn: () => {
      return axiosInstance.get(`api/add-client-query`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["Cart"] });
      client.refetchQueries({ queryKey: ["Cart"] });
      toast.success("Inquiry Sent Successfully");
    },
    onError(error) {
      toast.error(`Error ${error.message}`);
    },
  });

  const [isClicked, setIsClicked] = useState(false);

  const HandleSendQuery = async () => {
    setIsClicked(true); // Disable button and show loading state

    const dataToSend = {
      email: User?.email,
      cartItems: allCart.map((item: { product?: { product_name?: string; product_description?: string; price?: number; }; product_name?: string; product_description?: string; sku?: string; product_size?: string; size?: string; quantity: number; totalPriceOfProduct?: number; product_price: number; }) => ({
        product_name: item.product?.product_name || item.product_name,
        product_description: item.product?.product_description || item.product_description,
        sku: item.sku,
        size: item.product_size || item.size,
        quantity: item.quantity,
        price_per_item: item.product?.price || item.product_size,
        total_price: Number((item.totalPriceOfProduct || item.product_price * item.quantity).toFixed(2)),
      })),    };

    try {
      const response = await axios.post("/api/send_quote", dataToSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);

      if (response.data.message === "Emails sent successfully") {
        toast.success("Emails Sent Successfully");
        addQRF.mutate();
      } else {
        throw new Error(response.data.message || "Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        toast.error(error.message || "An unknown error occurred");
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setIsClicked(false); // Reset button to be clickable again
    }
  };
  // const generateOrderId = () => {
  //   const orderId =
  //     "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  //   console.log(orderId);
  //   return orderId;
  // };
  // const handleCheckout = async () => {
  //   try {
  //     setIsClicked(true);
  //     // Generate a new order ID
  //     const newOrderId = generateOrderId();
  //     setOrderId(newOrderId);
  //     // Step 1: Create Session
  //     const sessionData = await createSession();
  //     console.log(sessionData);
  //     // Check if session creation was successful



  //     // Log relevant data for debugging
  //     console.log("Order ID:", newOrderId);
  //     console.log("Total Price of All Items:", totalPiceOfAllItems);
  //     console.log("Updated Session ID:", sessionId);

  //     const queryString = new URLSearchParams({
  //       amount: totalPiceOfAllItems,
  //       orderId: newOrderId,
  //     }).toString();

  //     router.push(`/payment-form?${queryString}`);

  //     // seUpdatedSession(true);

  //     console.log(
  //       "Session created and updated successfully, session ID sent to iframe:",
  //     );
  //   } catch (error) {
  //     // Handle errors during the checkout process
  //     console.error("Error during checkout:", error);
  //   }
  // };
  if (isError) {
    return <div className="text-center py-10">Error Occurred</div>;
  }
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="md:text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className="text-[28px]  font-semibold leading-tight">Cart</div>
        </div>
      </div>
    );
  }
  if (allCart) {
    return (
      <div className="min-h-screen bg-gray-200 p-5">
        <div className="text-center max-w-[800px] mx-auto py-12">
          <h1 className="text-4xl font-extrabold text-gray-800">Your Cart</h1>
          <p className="text-gray-500 mt-2">Review and manage your selected items</p>
        </div>

        {allCart.length === 0 ? (
          <div className="text-center py-20 text-2xl font-semibold text-gray-500 animate-pulse">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 ">
            {/* Cart Items */}
            <div className="flex-[2]">
              <h2 className="text-2xl font-bold text-gray- ">Cart Items</h2>
              {allCart.map((item: CartItem, key: number) => (
                <div
                  key={key}
                  className="flex items-center mt-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform  hover:scale-[1.02] py-4 px-6"
                >
                  {/* IMAGE START */}
                  <div className="shrink-0 aspect-square w-24 md:w-32 rounded-lg overflow-hidden">
                    <img
                      src={`${edge}/product_images/${item.product?.product_image || item.product_image}`}
                      alt={item.product?.product_name || ""}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  {/* IMAGE END */}

                  <div className="flex flex-col justify-between ml-4 w-full">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                      {item.product?.product_name || item.product_name}
                    </h3>
                    <p className="text-gray-500 text-sm hidden md:block">
                      {item.product?.product_description || item.product_description}
                    </p>
                    <div className="text-gray-500 text-sm space-y-1 mt-2">
                      <p><b>SKU:</b> {item.sku}</p>
                      <p><b>Size:</b> {item.product_size || item.size}</p>
                      <p><b>Quantity:</b> {item.quantity}</p>
                      <p><b>Price per item:</b> ${item.product?.price || item.product_price}</p>
                      <p className="font-semibold text-gray-800">
                        Total: ${((item.product?.price || item.product_price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <Button
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 transition duration-300"
                        onClick={() => HandleDeleteItem(item.id)}
                      >
                        <RiDeleteBin6Line className="text-lg" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="flex-[1]">
              <div className="bg-white shadow-lg rounded-lg p-6 sticky top-10 space-y-6 mt-[3rem]">
                {token.length !== 0 ? (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Your Information</h2>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li><span className="font-semibold">Name:</span> {User?.name}</li>
                      <li><span className="font-semibold">Email:</span> {User?.email}</li>
                      <li><span className="font-semibold">Phone:</span> {User?.phone}</li>
                      <li><span className="font-semibold">Address:</span> {User?.address}</li>
                    </ul>
                    <hr className="my-4" />
                    <p className="font-bold text-xl text-gray-800">Total Price: ${totalPiceOfAllItems}</p>
                  </div>
                ) : (
                  <div className="text-center text-3xl font-semibold text-red-500 animate-pulse">
                    <Link href="/auth/login">
                      You are not Login!
                    </Link>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-800 mt-4 text-center">Actions</h2>
                {token.length === 0 ? (
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <Button className="w-full py-3 bg-green-500 text-center text-white rounded-lg hover:bg-green-600 transition duration-300">
                        Request Quote
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white rounded-lg">
                      <DialogHeader>
                        <DialogTitle>Login Required</DialogTitle>
                        <DialogDescription>
                          Please log in to continue.
                          <Link href={"/auth/login"} className="font-bold text-green-500 ml-2 underline">
                            Login
                          </Link>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                            Close
                          </Button>
                        </DialogClose>
                        <Link href={"/auth/register"}>
                          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-5 py-2 ml-2">
                            Create Account
                          </Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="space-y-3">
                    {/* <Button
                      className={`w-full py-3 rounded-lg text-white ${isclicked ? "bg-green-300" : "bg-gradient-to-tr from-green-500 to-green-400"
                        } hover:from-green-600 hover:to-green-500 transition duration-300`}
                      onClick={handleCheckout}
                      disabled={isclicked}
                    >
                      {isclicked ? "Loading..." : "Proceed to Checkout"}
                    </Button> */}
                    <Button
                      className={`w-full py-3 rounded-lg text-white ${isClicked ? "bg-green-300" : "bg-gradient-to-tr from-green-500 to-green-400"
                        } hover:from-green-600 hover:to-green-500 transition duration-300`}
                      onClick={HandleSendQuery}
                      disabled={isClicked}
                    >
                      {isClicked ? "Loading..." : "Request Quote"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );


  }
};

export default Cart;
// function createSession() {
//   throw new Error("Function not implemented.");
// }

