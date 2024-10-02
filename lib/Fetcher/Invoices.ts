import axiosInstance from "@/config/axios";
import { getToken } from "../getToken";

// Fetch Invoices
export const fetchMyInvoices = async () => {
    const token = getToken();
    console.log(token)
    try {
      const response = await axiosInstance.get(`/api/client-invoices`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response || response.status !== 200) {
        throw new Error("Failed to fetch invoices");
      }
      console.log(response.data);
       return response.data.client_invoices || [] ;
      // return [];
    } catch (error) {
    console.error(error);
      throw new Error("Failed to fetch invoices");
    }
  };

// Fetch Pending appproval Invoices
export const fetchMyPendingApprovalInvoices = async () => {
  const token = getToken();
  console.log(token)
  try {
    const response = await axiosInstance.get(`/api/get-pending-approval-invoices`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch invoices");
    }
    
    return response.data.client_invoices || [] ;
    // return [];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch invoices");
  }
};