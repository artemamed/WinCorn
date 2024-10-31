import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | Artema Medical Solution",
  description: "Generated by create next app",
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}