// import CanonicalURL from "@/components/Canonical";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact| Surgical suppliers| Wincorn Medical",
  description: "Get in touch with Wincorn Medical for assistance, product inquiries, or support. Wincorn team is here to help with all your surgical instrument needs.",
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    {children}</>;
}
