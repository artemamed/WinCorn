import { Metadata } from "next"
export const metadata:Metadata={
    title: "Blog | Artema Medical | Surgical Instruments",
    description: "Artema Medical Blog Page , Where you can easily read our blogs, Surgical Instruments."
}
export default function blogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }