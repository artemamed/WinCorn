"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchLoggedUser } from "../../lib/Fetcher/User";
import { fetchCart } from "../../lib/Fetcher/Cart";

const CartButton = () => {
  const { data: User } = useQuery({
    queryKey: ["User"],
    queryFn: fetchLoggedUser,
  });
  const Badge = ({ content, children }: { content: number; children: React.ReactNode }) => (
    <div className="relative inline-block">
      {children}
      {content > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
          {content}
        </span>
      )}
    </div>
  );
  

  const {
    data: cartData,
  } = useQuery({
    queryKey: ["Cart"],
    queryFn: fetchCart,
  });

  const cartItemCount = cartData ? cartData.length : 0; // Get the number of items in the cart

  if (!User) {
    return (
      <>
        <div className="">
          <Link href={"/cart"} className="hover:text-gray-500">
            <Badge content={cartItemCount} >
              {" "}
              {/* Display the cart item count */}
              <FiShoppingCart className="w-7 h-7" />
            </Badge>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <Link href={"/cart"} className="hover:text-gray-500">
            <Badge content={cartItemCount} >
              {" "}
              {/* Display the cart item count */}
              <FiShoppingCart className="w-7 h-7" />
            </Badge>
          </Link>
        </div>
      </>
    );
  }
};

export default CartButton;
