"use client";
import { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";

const ForgotPassword = () => {
  const [isloading, setisloading] = useState<boolean>(false);
  const router = useRouter();
  // we use Yup - library for Form Validaton
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  // type of the IForgotPassword form inputs
  type IForgotPassword = {
    email: string;
  };
  // state where we store out IForgotPassword form inputs
  const [input, setinput] = useState<IForgotPassword>({
    email: "",
  });
  // its help the user to write something in the input field
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };  // send OTP to the user email
  const handleSendOTP = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setisloading(true);
      // Validate the form data
      await validationSchema.validate(input, { abortEarly: false });
      // If validation passes, proceed with email sending process
      const res = await axios.post("/api/Email/otp", { email: input.email });
      const data = res.data;
      if (data.success) {
        console.log("called");
        router.push(`forgot-password/add-otp`);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      // If validation fails, display validation errors to the user using toast
      const errString: string = "Please fill the field";
      toast.error(errString, {
        style: { backgroundColor: "#d41212", color: "white" },
      });
      console.error(error);
    } finally {
      setisloading(false);
    }
  }; return (
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
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-light-secondary focus:border-light-secondary block w-full p-2.5 "
            placeholder="name@company.com"
            onChange={handleChange}
            required={true}
            autoComplete={"true"}
          />
          <label htmlFor="emailOTP" className="text-sm">
            Write you email and for get OTP verification code.
          </label>
        </div>

        <button
          type="button"
          onClick={handleSendOTP}
          disabled={isloading}
          className="w-full text-white bg-green-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Get OTP Code
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
