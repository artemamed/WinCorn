"use client";
import React from "react";

import {
  useMutation,
  useQuery,
  useQueryClient,
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
import { Dropzone, FileMosaic } from "@files-ui/react";
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

import { BsThreeDotsVertical } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

import axiosInstance from "@/config/axios";
import { getToken } from "@/lib/getToken";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { fetchMyInvoices } from "@/lib/Fetcher/Invoices";
import { getEdgePoint } from "@/lib/getEdge";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { FiExternalLink } from "react-icons/fi";

interface QRF {
  id: number;
  created_at: string;
  status: string;
  total: number;
  payment_link?: string;
}

// type ExtFile = {
//   id?: number | string; // Make id optional
//   file: File;
//   valid: boolean;
//   errors?: string[];
//   uploadMessage?: string;
//   uploadStatus?: "uploading" | "success" | "error" | undefined; // Adjusted to be consistent
// };



const Invoices_info = () => {
  const [proofOfPayment, setProofOfPayment] = React.useState<string | null>(null);
  const [files,] = React.useState<File[]>([]);

  // Query to get User
  const { data: allQRFs } = useQuery<QRF[]>({
    queryKey: ["UnpaidInvoices"],
    queryFn: fetchMyInvoices,
  });

  const edge = getEdgePoint();
  const token = getToken();
  const client = useQueryClient();
  // its open the invoice in the separate file
  const handleViewInvoice = (InvoiceID: number) => {
    const quotationLink = `${edge}/view-client-invoice/${InvoiceID}`;
    window.open(quotationLink, "_blank", "noopener,noreferrer");
  };

  // Handle the payment proof file and convert into base 64
  // const Conversion = (file: File) => {
  //   console.log(file);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProofOfPayment(reader.result as string); // Store base64 string in state
  //     };
  //     reader.readAsDataURL(file); // Convert the file to base64
  //   }
  // };

  // const updateFiles = async (incomingFiles: ExtFile[]) => {
  //   const files = incomingFiles.map(f => f.file); // Extract the File objects from ExtFile
  //   if (files.length > 0) {
  //     const file = files[0]; // Get the first file
  //     try {
  //       Conversion(file);
  //     } catch (error) {
  //       console.error("Error converting file to base64:", error);
  //     }
  //   }
  //   setFiles(files); // Set the state to an array of File
  // };



  // Mutate upload image
  const UploadImage = useMutation({
    mutationFn: ({
      newfile,
      invoiceId,
    }: {
      newfile: string;
      invoiceId: string;
    }) => {
      return axiosInstance.post(
        `api/attach-payment-proof-client-invoice`,
        { payment_proof: newfile, id: invoiceId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      setProofOfPayment(null);
      client.invalidateQueries({ queryKey: ["UnpaidInvoices"] });
      client.refetchQueries({ queryKey: ["UnpaidInvoices"] });
      client.invalidateQueries({ queryKey: ["PendingApprovalInvoices"] });
      client.refetchQueries({ queryKey: ["PendingApprovalInvoices"] });
      toast.success("Uploaded");
    },
    onError(error) {
      console.log(error);
      toast.error(`Error ${error.message}`);
    },
  });
  const handleUploadProofOfPayment = (invoiceId: string) => {
    if (proofOfPayment == null) {
      toast.error("Please select the file first");
      return;
    }

    UploadImage.mutate({ invoiceId, newfile: proofOfPayment });
  };
  const OpenPaymentLinkInSaperateTab = (paymentLink: string) => {
    window.open(paymentLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-lg border shadow-lg lg:min-h-screen">
      <div className="flex justify-center items-center py-6 rounded-t-lg shadow-lg">
        <span className="text-3xl font-bold tracking-wide">Quotations</span>
      </div>
  
      {allQRFs && allQRFs.length === 0 ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500 text-2xl font-semibold animate-pulse">You have no Quotation</p>
        </div>
      ) : (
        <React.Fragment>
          <Table className="min-w-full bg-opacity-20">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">#</TableHead>
                <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Date</TableHead>
                <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Status</TableHead>
                <TableHead className="text-center py-2 text-xl text-green-500 font-semibold tracking-wide">Total Price</TableHead>
                <TableHead className="py-2 text-xl text-green-500 font-semibold tracking-wide">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allQRFs &&
                allQRFs.map((qrf, index) => {
                  const date = new Date(qrf.created_at);
                  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
                  const visibleDate = date.toLocaleDateString("en-US", options);
                  const visibleStatus = qrf.status.toUpperCase();
  
                  if (qrf.status === "unpaid") {
                    return (
                      <TableRow key={index} className="border-b border-gray-600 hover:bg-gray-100 transition-colors duration-300">
                        <TableCell className="font-medium text-center py-3">{index + 1}</TableCell>
                        <TableCell className="py-3 text-center">{visibleDate}</TableCell>
                        <TableCell className="py-3 text-center text-red-500">{visibleStatus}</TableCell>
                        <TableCell className="py-3 text-center">{qrf.total}</TableCell>
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
                                <Dialog>
                                  <DialogTrigger className="cursor-pointer transform hover:scale-105 transition-transform px-2 py-1.5 text-sm font-medium">
                                    Pay Now
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Attach Payment Proof</DialogTitle>
                                      <DialogDescription>
                                        Attach the payment proof to confirm payment of the invoice.
                                      </DialogDescription>
  
                                      <div className="flex items-center justify-center w-full py-4">
                                        <Dropzone value={files} className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                          {files.map((file, key) => (
                                            <FileMosaic key={key} {...file} preview />
                                          ))}
                                        </Dropzone>
                                      </div>
  
                                      {qrf.payment_link && (
                                        <div className="my-4">
                                          <Separator />
                                          <DialogTitle>Pay Via Link</DialogTitle>
                                          <div className="flex justify-start items-center">
                                            <Label>Click to pay via link</Label>
                                            <Button onClick={() => OpenPaymentLinkInSaperateTab(qrf.payment_link!)} size="sm" variant="ghost" className="px-5">
                                              <FiExternalLink className="w-4 h-4" />
                                            </Button>
                                          </div>
                                        </div>
                                      )}
                                    </DialogHeader>
                                    <DialogFooter>
                                      <DialogClose>
                                        <Button onClick={() => handleUploadProofOfPayment(qrf.id.toString())} className="w-full">
                                          Upload
                                        </Button>
                                      </DialogClose>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </MenubarContent>
                            </MenubarMenu>
                          </Menubar>
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return null;
                })}            </TableBody>
          </Table>
        </React.Fragment>
      )}
    </div>
  );
  
};

export default Invoices_info;
