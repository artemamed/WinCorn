import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certification|Surgical Instruments| Wincorn Medical",
  description:
    "The Wincorn Medical Certification page highlights an unwavering commitment to surgical instruments quality, safety and regulatory compliance.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
