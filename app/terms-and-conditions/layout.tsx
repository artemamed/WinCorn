import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms|Surgical Instruments| Wincorn Medical ",
  description:
    "Welcome to Wincorn Medical's Terms and Conditions page. These terms govern your use of our website and services provided by Wincorn Medical.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
