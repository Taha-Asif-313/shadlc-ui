import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Tabs Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Enhance your UI with a fully customizable React Tabs Component. Supports dynamic content, keyboard navigation, and responsive design using Tailwind CSS for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
