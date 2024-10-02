import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy | Surgical Instruments | Artema Medical",
  description:
    "Privacy Policy for Artema Medical: Ensuring the confidentiality and security of your information while providing top-quality surgical instruments.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
