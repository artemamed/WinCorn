import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy policy| Surgical equipments|Wincorn medical",
  description:
    "The Wincorn Medical policy is designed to guide users in processing orders and inquiries while protecting sensitive data. It also outlines the return and refund policy.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
