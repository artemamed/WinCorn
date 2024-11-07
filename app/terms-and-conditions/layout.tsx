import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "General Terms| Surgical Equipments| Wincorn Medical",
  description:
    "Wincorn Medical sets general terms and conditions on all contracts based on B2B and B2C. Online visitors can read our terms and conditions.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
