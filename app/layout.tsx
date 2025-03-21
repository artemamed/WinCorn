import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

// Define a custom type extending Metadata to include Bing verification and Open Graph
interface ExtendedMetadata extends Metadata {
  verification: {
    google: string;
    bing?: string;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}


const inter = Inter({ subsets: ["latin"] });

export const metadata: ExtendedMetadata = {
  metadataBase: new URL("https://wincornmedical.com/"),
  title: "Surgical Instruments | Wincorn Medical | Medical Equipements",
  description:
    "Wincorn Medical aims to provide quality instruments. Our instruments include scalpels, scissors, retractors, needle holders, and more.",
  verification: {
    google: "_Lqn7kh6lWaoH47eD0BgKLq-XihIvljbrnmT3tdu5gk",
    bing: "BAEE953253739AE12DC726DBB54CCFA0", // Add Bing verification code here
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Surgical Instruments | Wincorn Medical | Medical Equipements",
    description:
      "With a global reach in surgical instruments, Wincorn Medical aims to provide quality instruments. Our instruments include scalpels, scissors, retractors, needle holders, and more.",
    url: "https://artemamed.com/",
    type: "website",
    images: [
      {
        url: "https://artemamed.com/images/SS.jpg", // Ensure this is a valid image URL
        width: 1200,
        height: 630,
        alt: "Wincorn Medical Surgical Instruments",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
