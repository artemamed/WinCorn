import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refund Policy|Surgical Instruments| Wincorn Medical",
  description:
    "The Refund Policy page helps guide you on how to get a refund if you experience any problems after purchasing surgical instruments.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
