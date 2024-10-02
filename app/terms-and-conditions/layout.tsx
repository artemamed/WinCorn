import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms|Surgical Instruments| Artema Medical ",
  description:
    "Welcome to Artema Medical's Terms and Conditions page. These terms govern your use of our website and services provided by Artema Medical.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
