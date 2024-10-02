import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQs|Surgical Instruments| Artema Medical ",
  description:
    "FAQs section of Artema Medical, address common queries regarding our products, services, and policies to provide you with clear information.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
