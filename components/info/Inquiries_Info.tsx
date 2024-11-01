"use client";

import { getEdgePoint } from "@/lib/getEdge";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "../ui/label";
import { SendedInquiries } from "@/lib/Fetcher/Inquiries";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import axiosInstance from "@/config/axios";
import { getToken } from "@/lib/getToken";
import toast from "react-hot-toast";


interface InquiryType {
  id: number;
  created_at: string;
  status: string;
}


const Inquiries_Info = () => {
  const {
    data: allInquirys,
  } = useQuery({
    queryKey: ["MyInquiry"],
    queryFn: SendedInquiries,
  });
  const edge = getEdgePoint();
  console.log(allInquirys)
  const token = getToken();
  const client = useQueryClient();
  // Delete the Inquiry from the Database
  const deleteCategoryName = useMutation({
    mutationFn: ({ QuotationID }: { QuotationID: number }) => {
      return axiosInstance.delete(`api/delete-client-query/${QuotationID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["MyInquiry"] });
      client.refetchQueries({ queryKey: ["MyInquiry"] });
      toast.success("Inquiry Deleted");
    },
    onError(error) {
      console.log(error);
      toast.error(`Error ${error.message}`);
    },
  });

  const HandleDeleteInquiry = (QuotationID: number) => {
    deleteCategoryName.mutate({
      QuotationID,
    });
  };
  const handleViewQuotation = (QuotationID: number) => {
    const quotationLink = `${edge}/view-client-query/${QuotationID}`;
    window.open(quotationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="rounded-lg border shadow-lg  lg:min-h-screen ">
        <div className="flex justify-center items-center py-6  rounded-t-lg shadow-lg">
          <span className="text-3xl font-bold tracking-wide">Inquiries</span>
        </div>

        {allInquirys && allInquirys.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500 text-2xl font-semibold animate-pulse">You have no inquiries</p>
          </div>
        ) : (
          <div className="overflow-auto h-auto">
            <ScrollArea className=" -inset-2  py-4">
              <Table className="min-w-full bg-opacity-20">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">#</TableHead>
                    <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Inquiry Date</TableHead>
                    <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Status</TableHead>
                    <TableHead className="py-2 text-xl text-green-500 font-semibold tracking-wide">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allInquirys &&
                    allInquirys.map((inquiry: { created_at: string | number | Date; status: string; id: number }, index: number) => {
                      const date = new Date(inquiry.created_at);
                      const options = { year: "numeric", month: "short", day: "numeric" };
                      const visibleDate = date.toLocaleDateString("en-US", options as Intl.DateTimeFormatOptions);
                      const visibleStatus = inquiry.status.toUpperCase();

                      if (inquiry.status === "pending") {
                        return (
                          <TableRow
                            key={index}
                            className="border-b border-gray-600 hover:bg-gray-100 transition-colors duration-300"
                          >
                            <TableCell className="font-medium text-center py-3">{index + 1}</TableCell>
                            <TableCell className="py-3 text-center">{visibleDate}</TableCell>
                            <TableCell className="py-3 text-center text-red-500">{visibleStatus}</TableCell>
                            <TableCell className="py-3 text-center">
                              <Menubar className="border-none w-full text-center">
                                <MenubarMenu>
                                  <MenubarTrigger className="cursor-pointer transform hover:scale-110 transition-transform">
                                    <BsThreeDotsVertical className="h-5 w-5 text-gray-500" />
                                  </MenubarTrigger>
                                  <MenubarContent className="w-fit rounded-md shadow-lg">
                                    <MenubarItem onClick={() => handleViewQuotation(inquiry.id)} className="px-4 py-2 text-sm font-medium">
                                      View Inquiry
                                    </MenubarItem>
                                    <MenubarItem onClick={() => HandleDeleteInquiry(inquiry.id)} className="px-4 py-2 text-sm font-medium">
                                      Delete Inquiry
                                    </MenubarItem>
                                  </MenubarContent>
                                </MenubarMenu>
                              </Menubar>
                            </TableCell>
                          </TableRow>
                        );
                      }
                      return null;
                    })}                </TableBody>              </Table>
            </ScrollArea>
          </div>
        )}
      </div>
    </>
  );

};

export default Inquiries_Info;