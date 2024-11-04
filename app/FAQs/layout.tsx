import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQs|Surgical Instruments| Wincorn Medical ",
  description:
    "FAQs section of Wincorn Medical, address common queries regarding our products, services, and policies to provide you with clear information.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
