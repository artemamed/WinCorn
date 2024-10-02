import axiosInstance from "@/config/axios";
import { getToken } from "../getToken";

export const fetchMyOrders = async () => {
    const token = getToken();
    
    try {
      const response = await axiosInstance.get(`/api/client-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response || response.status !== 200) {
        throw new Error("Failed to fetch Orders");
      }
      console.log(response.data);
      return response.data.client_orders || [] ;
      // return [];
    } catch (error) {
    console.error(error);
      throw new Error("Failed to fetch Orders");
    }
  };