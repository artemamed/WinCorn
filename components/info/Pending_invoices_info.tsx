"use client";
import React from "react";

import {
  useQuery,
} from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

import {
  fetchMyPendingApprovalInvoices,
} from "@/lib/Fetcher/Invoices";
import { getEdgePoint } from "@/lib/getEdge";
// import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";

interface Invoice {
  id: number;
  created_at: string;  // or `Date` if it's already a date object
  status: string;
  // Add any additional properties that `Invoice` may have
}


const Pending_invoices_info = () => {
  // Query to get Pending Invoices
  const {
    data: allQRFs,
  } = useQuery({
    queryKey: ["PendingApprovalInvoices"],
    queryFn: fetchMyPendingApprovalInvoices,
  });

  const edge = getEdgePoint();
  // its open the invoice in the separate file
  const handleViewInvoice = (InvoiceID: number) => {
    const quotationLink = `${edge}/view-client-invoice/${InvoiceID}`;
    window.open(quotationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-lg border shadow-lg lg:min-h-screen">
      <div className="flex justify-center items-center py-6 rounded-t-lg shadow-lg">
        <span className="text-3xl font-bold tracking-wide">Invoices</span>
      </div>
  
      {allQRFs && allQRFs.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500 text-2xl font-semibold animate-pulse">You have no Invoices</p>
        </div>
      ) : (
        <div className="overflow-auto h-3/4">
          <ScrollArea className="-inset-2  py-4">
            <Table className="min-w-full bg-opacity-20">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">#</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Date</TableHead>
                  <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Status</TableHead>
                  <TableHead className="py-2 text-xl text-green-500 font-semibold tracking-wide">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allQRFs &&
                  allQRFs.map((qrf: Invoice, index: number) => {
                    const date = new Date(qrf.created_at);
                    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
                    const visibleDate = date.toLocaleDateString("en-US", options);
                    const visibleStatus = qrf.status === "PENDING-APPROVAL" ? "PENDING" : qrf.status.toUpperCase();
  
                    return (
                      <TableRow key={index} className="border-b border-gray-600 hover:bg-gray-100 transition-colors duration-300">
                        <TableCell className="font-medium text-center py-3">{index + 1}</TableCell>
                        <TableCell className="py-3 text-center">{visibleDate}</TableCell>
                        <TableCell className="py-3 text-center">
                          <Badge variant="outline" className={visibleStatus === "PENDING" ? "text-red-500" : ""}>
                            {visibleStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-3 text-center">
                          <Menubar className="border-none w-full text-center">
                            <MenubarMenu>
                              <MenubarTrigger className="cursor-pointer transform hover:scale-110 transition-transform">
                                <BsThreeDotsVertical className="h-5 w-5 text-gray-500" />
                              </MenubarTrigger>
                              <MenubarContent className="w-fit rounded-md shadow-lg">
                                <MenubarItem onClick={() => handleViewInvoice(qrf.id)} className="px-4 py-2 text-sm font-medium">
                                  View Invoice
                                </MenubarItem>
                              </MenubarContent>
                            </MenubarMenu>
                          </Menubar>
                        </TableCell>
                      </TableRow>
                    );
                  })}              </TableBody>            </Table>          </ScrollArea>
        </div>
      )}
    </div>
  );
  
};

export default Pending_invoices_info;
