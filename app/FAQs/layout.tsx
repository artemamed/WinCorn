import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQs| Surgical instruments|Wincorn Medical",
  description:
    "FAQs section: Is Wincorn responsible for any damage to the instrument? What is the duration of applying for a refund? Does the product price include tax?",
};

export default function BioMedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
