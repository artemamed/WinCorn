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
import { Label } from "../ui/label";

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
    <>
      <div className="rounded-lg border lg:min-h-screen ">
        <div className="flex justify-center items-center py-3">
          <span className="text-2xl font-semibold">Invoices</span>
        </div>
        {allQRFs && allQRFs.length == 0 ? (
          <div className="flex justify-center items-center">
            <Label className="text-light-accent text-xl font-semibold">
              You have no Invoices
            </Label>
          </div>
        ) : (
          <div className="">
            <div className=" ">
              <React.Fragment>
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead className=" text-center">#</TableHead>

                      <TableHead className=" text-center">
                        Date
                      </TableHead>
                      <TableHead className=" text-center">Status</TableHead>

                      <TableHead className="">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allQRFs &&
                      allQRFs.map(
                        (qrf: Invoice, index: number) => {
                          const date = new Date(qrf.created_at);
                          const options: Intl.DateTimeFormatOptions = {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          };
                          let visibleStatus = qrf.status as string;
                          visibleStatus = visibleStatus.toUpperCase();
                          const visibleDate: string = date.toLocaleString(
                            "en-US",
                            options
                          );

                          return (
                            <TableRow key={index}>
                              <TableCell className="font-medium text-center">
                                {index + 1}
                              </TableCell>

                              <TableCell className=" text-center">
                                {visibleDate}
                              </TableCell>
                              <TableCell className="text-center">
                                <Badge variant={"outline"}>
                                  {visibleStatus == "PENDING-APPROVAL" &&
                                    "PENDING"}
                                </Badge>
                              </TableCell>

                              <TableCell className="">
                                <Menubar className="border-none w-fit">
                                  <MenubarMenu>
                                    <MenubarTrigger className="cursor-pointer">
                                      <BsThreeDotsVertical className="h-5 w-5" />
                                    </MenubarTrigger>
                                    <MenubarContent>
                                      <MenubarItem
                                        onClick={() =>
                                          handleViewInvoice(qrf.id)
                                        }
                                      >
                                        View Invoice
                                      </MenubarItem>
                                    </MenubarContent>
                                  </MenubarMenu>
                                </Menubar>
                              </TableCell>
                            </TableRow>
                          );
                        }                      )}
                  </TableBody>
                </Table>
              </React.Fragment>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pending_invoices_info;
