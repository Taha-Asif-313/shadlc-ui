import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Button Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Enhance your UI with a fully customizable React Button Component using Tailwind CSS. Supports variants, icons, sizes, and accessibility for modern web applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
