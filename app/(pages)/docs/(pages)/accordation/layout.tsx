import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Accordion Component – Expandable & Accessible | Tailwind CSS",
  description:
    "Enhance your UI with a fully customizable React Accordion Component using Tailwind CSS. Supports smooth animations, accessibility, and dynamic content for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
