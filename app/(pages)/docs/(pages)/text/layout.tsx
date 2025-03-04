import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Text Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Easily style and enhance typography with our React Text Component, built using Tailwind CSS. Fully customizable, accessible, and perfect for modern web applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
