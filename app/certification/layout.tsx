import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certification| Surgical instruments| Wincorn Medical",
  description:
    "Wincorn Medical is a trusted and authorized instruments manufacturer company certified by ISO and FDE,  ISO 7740:1985, ISO/DIS 7151, and ISO 7151:1988.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
