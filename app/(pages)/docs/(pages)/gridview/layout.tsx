import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React GridView Component – Responsive & Customizable | Tailwind CSS",
  description:
    "Create modern, responsive grid layouts with the React GridView Component using Tailwind CSS. Fully customizable with dynamic columns, spacing, and alignment for any web application.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
