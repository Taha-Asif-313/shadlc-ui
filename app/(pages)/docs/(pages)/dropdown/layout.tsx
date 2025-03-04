import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Dropdown Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Create sleek and accessible dropdown menus with the React Dropdown Component using Tailwind CSS. Supports animations, keyboard navigation, and dynamic options for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
