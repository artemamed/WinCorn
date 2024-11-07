import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies| Surgical equipments| Wincorn Medical",
  description:
    "At Wincorn Medical, we are committed to protecting your privacy. This Cookie Policy explains how we use cookies and similar technologies on our website",
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
