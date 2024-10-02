import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IFU|Surgical Instruments| Artema Medical ",
  description:
    "The IFU documents provide comprehensive guidance on the proper handling, operation, and maintenance of Artema Medical's surgical instruments.",
};

export default function BioMedicalLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
