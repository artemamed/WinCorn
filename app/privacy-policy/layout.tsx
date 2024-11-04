import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy | Surgical Instruments | Wincorn Medical",
  description:
    "Privacy Policy for Wincorn Medical: Ensuring the confidentiality and security of your information while providing top-quality surgical instruments.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
