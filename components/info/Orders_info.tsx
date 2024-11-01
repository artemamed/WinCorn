"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Label } from "../ui/label";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchMyOrders } from "@/lib/Fetcher/Orders";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

// Define an interface to type the order data
interface Order {
  id: string;
  status: string;
  courier: string;
  tracking_no: string;
}

const Orders_info = () => {
  // Query to get all Inquirys
  const {
    data: allOrders,
  } = useQuery({
    queryKey: ["MyOrders"],
    queryFn: fetchMyOrders,
  });

  console.log(allOrders);

  return (
    <div className="rounded-lg border shadow-lg lg:min-h-screen">
      <div className="flex justify-center items-center py-6 rounded-t-lg shadow-lg">
        <span className="text-3xl font-bold tracking-wide">Your Orders</span>
      </div>
  
      {allOrders && allOrders.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500 text-2xl font-semibold animate-pulse">You have no Orders</p>
        </div>
      ) : (
        <div className="overflow-auto h-3/4">
          <ScrollArea className="-inset-2  py-4">
            <Table className="min-w-full bg-opacity-20">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">#</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Order</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Status</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Courier</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Tracking No</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allOrders &&
                  allOrders.map((order: Order, index: number) => {
                    const visibleStatus = order.status.toUpperCase();
  
                    return (
                      <TableRow key={index} className="border-b border-gray-600 hover:bg-gray-100 transition-colors duration-300">
                        <TableCell className="font-medium text-center py-3">{index + 1}</TableCell>
                        <TableCell className="text-center py-3">{order.id}</TableCell>
                        <TableCell className="text-center py-3">
                          <Badge variant="outline" className={visibleStatus === "PENDING" ? "text-red-500" : ""}>
                            {visibleStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center py-3">{order.courier}</TableCell>
                        <TableCell className="text-center py-3">{order.tracking_no}</TableCell>
                      </TableRow>
                    );
                  })}              </TableBody>            </Table>
          </ScrollArea>
        </div>
      )}
    </div>
  );
  
};

export default Orders_info;
