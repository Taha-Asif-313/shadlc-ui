import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Input Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Enhance forms with a fully customizable React Input Component using Tailwind CSS. Supports validation, icons, dynamic styling, and accessibility for seamless user interactions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
