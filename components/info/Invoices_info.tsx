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
    <div className=""> 
      <div className="rounded-lg border lg:min-h-screen">
        <div className="flex justify-center items-center py-3">
          <span className="text-2xl font-semibold">Quotations</span>
        </div>
        {allQRFs && allQRFs.length == 0 ? (
          <div className="flex justify-center items-center">
            <Label className="text-light-accent text-xl font-semibold">
              You have no Quotation
            </Label>
          </div>
        ) : (
          <React.Fragment>
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className=" text-center">#</TableHead>
                  <TableHead className=" text-center">Date</TableHead>
                  <TableHead className=" text-center">Status</TableHead>
                  <TableHead className="text-center">Total Price</TableHead>
                  <TableHead className="">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allQRFs &&
                  allQRFs?.map((qrf: QRF, index: number) => {
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
                    if (qrf.status == "unpaid") {
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-center">
                            {index + 1}
                          </TableCell>

                          <TableCell className=" text-center">
                            {visibleDate}
                          </TableCell>

                          <TableCell className="text-center">
                            <Badge variant={"outline"}>{visibleStatus}</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            {qrf.total}
                          </TableCell>
                          <TableCell className="">
                            <Menubar className="border-none w-fit">
                              <MenubarMenu>
                                <MenubarTrigger className="cursor-pointer">
                                  <BsThreeDotsVertical className="h-5 w-5" />
                                </MenubarTrigger>
                                <MenubarContent>
                                  <MenubarItem
                                    onClick={() => handleViewInvoice(qrf.id)}
                                  >
                                    View Invoice
                                  </MenubarItem>
                                  <Dialog>
                                    <DialogTrigger className="relative flex cursor-pointe+r select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none ">
                                      Pay Now
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>
                                          Attach Payment Proof
                                        </DialogTitle>
                                        <DialogDescription>
                                          Attach the payment proof to confirm
                                          the payment of the invoice and to get
                                          the invoice paid.
                                        </DialogDescription>

                                        <div>
                                          <div className="flex items-center justify-center w-full">
                                            <Dropzone
                                              // onChange={(incomingFiles: ExtFile[]) => {
                                              //   updateFiles(incomingFiles);
                                              // }}
                                              value={files}
                                              htmlFor="dropzone"
                                              className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                              maxFiles={1}
                                            >
                                              {files.map((file, key) => (
                                                <FileMosaic
                                                  info
                                                  key={key}
                                                  {...file}
                                                  preview
                                                />
                                              ))}
                                            </Dropzone>

                                          </div>
                                          {qrf.payment_link && (
                                            <div>
                                              <Separator className="my-4" />
                                              <div>
                                                <DialogTitle>Pay Via Link</DialogTitle>
                                                <div className="flex justify-start items-center">
                                                  <Label>Click this button to pay via link</Label>
                                                  <Button
                                                    type="submit"
                                                    size="sm"
                                                    variant={"ghost"}
                                                    className="px-5"
                                                    onClick={() => OpenPaymentLinkInSaperateTab(qrf.payment_link!)}
                                                  >
                                                    <span className="sr-only">Go to link</span>
                                                    <FiExternalLink className="w-4 h-4" />
                                                  </Button>
                                                </div>
                                              </div>
                                            </div>
                                          )}

                                        </div>

                                        <DialogFooter>
                                          <DialogClose>
                                            <Button
                                              className="w-full"
                                              onClick={() =>
                                                handleUploadProofOfPayment(qrf.id.toString())

                                              }
                                            >
                                              Upload
                                            </Button>
                                          </DialogClose>
                                        </DialogFooter>
                                      </DialogHeader>
                                    </DialogContent>
                                  </Dialog>
                                </MenubarContent>
                              </MenubarMenu>
                            </Menubar>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  })}              </TableBody>            </Table>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Invoices_info;
