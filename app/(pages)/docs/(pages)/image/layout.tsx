import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Image Component – Responsive & Optimized | Tailwind CSS",
  description:
    "Enhance your UI with a responsive React Image Component built with Tailwind CSS. Supports lazy loading, aspect ratios, and accessibility for modern web applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
