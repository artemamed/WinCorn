import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies| Surgical Instruments| Artema Medical",
  description:
    "Discover high-quality surgical instruments at Artema Medical. Explore our range and learn about our cookie policy for a better browsing experience",
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
