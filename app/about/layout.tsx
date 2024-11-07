// import CanonicalURL from "@/components/Canonical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us| Surgical Equipments| Wincorn Medical",
  description:
    "Wincorn Medical is a trusted provider of high-quality surgical instruments, Explore the CEO and Wincorn Medical vision on healthcare services.",
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    {/* <CanonicalURL/> */}
    {children}</>;
}
