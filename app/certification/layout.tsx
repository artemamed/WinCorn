import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certification|Surgical Instruments| Artema Medical",
  description:
    "The Artema Medical Certification page highlights an unwavering commitment to surgical instruments quality, safety and regulatory compliance.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
