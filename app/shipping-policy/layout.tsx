import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shipping Policy|Surgical Instruments| Artema Medical ",
  description:
    "The Shipping Policy page outlines the terms and conditions regarding shipping of surgical instruments from Artema Medical.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
