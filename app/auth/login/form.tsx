"use client";
import { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { getLocalCartItems } from "@/lib/Fetcher/Cart";
import React from "react";
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const client = useQueryClient();
  const router = useRouter();
  // we use Yup - library for Form Validaton
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("password is required"),
  });
  // type of the login form inputs
  type ILoginForm = {
    email: string;
    password: string;
  };
  // state where we store out Login form inputs
  const [input, setinput] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  // its help the user to write something in the Login input field
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };  // Handle the submit Form
  const handleSubmitLogin = async () => {
    try {
      // Validate the form data
      await validationSchema.validate(input, { abortEarly: false });
    } catch (error: unknown) {
      console.error(error);
      // If validation fails, display validation errors to the user using toast
      const errString: string = "Please fill all the fields";
      toast.error(errString, {
        style: { backgroundColor: "#d41212", color: "white" },
      });
      return; // Exit the function if validation fails
    }
    // toast.success(`Your data is : {
    //     email : ${input.email}
    //     password : ${input.password}
    // } `);
    // If validation passes, proceed with Login
    try {
      setIsLoading(true);
      const res = await axios.post("/api/auth/login", input);
      const data = res.data;

      // Check if the response indicates success or failure
      if (data.success) {
        // Authentication successful
        setIsLoading(false);
        toast.success(data.message || "Login successful");
        client.invalidateQueries({ queryKey: ["User"] });
        client.refetchQueries({ queryKey: ["User"] });
        
        router.push("/");
        
        const localCartJSON = localStorage.getItem("cart");
        
        if (localCartJSON) {
          getLocalCartItems(localCartJSON);
          
        }
      } else {
        // Authentication failed, display error message
        toast.error(data.message || "Login failed");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data) {
        // If there's a specific error message from the backend, display it
        toast.error(error.response.data.message || "An error occurred");
      } else {
        // If no specific error message is available, display a generic error message
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };  return (
    <>
      <div className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            value={input.email}
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-light-secondary focus:border-light-secondary block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-light-secondary dark:focus:border-light-secondary"
            placeholder="name@company.com"
            onChange={handleChange}
            required={true}
            autoComplete={"true"}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            value={input.password}
            autoComplete={"true"}
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-light-secondary focus:border-light-secondary block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-light-secondary dark:focus:border-light-secondary"
            required={true}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmitLogin}
          className="w-full text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-light-secondary font-bold rounded-lg text-lg px-5 py-2.5 text-center "
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <div>
          <p className="text-base font-normal text-gray-800 text-center">
            Create a new account?{" "}
            <Link
              href={"/auth/register"}
              className="font-medium text-light-secondary hover:underline "
            >
              Register here
            </Link>
          </p>
          <p className="text-base font-normal text-gray-800 text-center">or</p>
          <p className="text-base font-normal text-gray-800 text-center">
            <Link
              href={"/auth/forgot-password"}
              className="font-medium text-light-secondary hover:underline "
            >
              forgot password?
            </Link>
          </p>{" "}
        </div>
      </div>
    </>
  );
};export default LoginForm;
