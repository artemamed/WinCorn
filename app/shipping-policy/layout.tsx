import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shipping policy|Surgical equipments|Wincorn medical",
  description:
    "Wincorn Medical believes in a timely and reliable shipping policy for surgical instruments and products. Wincorn shipping policy in writing form.",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
