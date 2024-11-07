import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refund Policy|Surgical instruments|Wincorn Medical",
  description:
    "Refunds are issued once the returned order is received and verified by Wincorn Medical’s team. You can check Wincorn Medical's refund policy.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
