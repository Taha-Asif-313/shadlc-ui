import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Image Gallery – Responsive & Customizable | Tailwind CSS",
  description:
    "Create a stunning and fully customizable React Image Gallery with responsive layouts, lightbox support, and smooth animations. Perfect for portfolios, photography websites, and modern web apps using Tailwind CSS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
