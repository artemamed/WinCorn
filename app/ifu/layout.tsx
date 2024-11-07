import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IFU| Surgical instruments| Wincorn medical ",
  description:
    "Wincorn Medical provides IFU service on instruments for safe and effective use. Includes user guidelines and product useability steps during surgery.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
