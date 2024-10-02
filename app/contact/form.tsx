"use client";
import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  fname: z.string().min(1, "First Name is required"),
  lname: z.string().min(1, "Last Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fname: "",
      lname: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isAcceptTerms, setIsAcceptTerms] = useState<boolean>(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!isAcceptTerms) {
      toast.error("You must accept the terms and conditions.", {
        style: { backgroundColor: "#d41212", color: "white" },
      });
      return;
    }

    try {
      await axios.post("/api/contact", data);
      toast.success("Your message has been sent. We'll get back to you soon.", {
        duration: 3000,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending your message. Please try again later.", {
        duration: 3000,
      });
    }
  }

  return (
    <div className="mx-auto mt-8 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-4xl text-center font-bold text-green-600 py-6">
        Contact Form
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First Name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Last Name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="City"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Country"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Phone"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 py-2 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 py-2 px-3 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center mb-4">
            <input
              id="terms-checkbox"
              type="checkbox"
              checked={isAcceptTerms}
              onChange={() => setIsAcceptTerms(!isAcceptTerms)}
              className="w-4 h-4 text-green-600 rounded focus:ring-green-500 focus:ring-2"
            />
            <label
              htmlFor="terms-checkbox"
              className="ml-2 text-sm font-medium text-gray-600"
            >
              I agree that my personal information is used in accordance with the{" "}
              <Link href="/privacy-policy" className="font-semibold text-green-600">Privacy</Link> and{" "}
              <Link href="/cookie-policy" className="font-semibold text-green-600">
                Cookie Policy
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            disabled={!isAcceptTerms}
            className="w-full bg-green-800 text-white py-2 px-4 rounded-md transition duration-200 ease-in-out hover:bg-green-700 disabled:bg-green-500"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
