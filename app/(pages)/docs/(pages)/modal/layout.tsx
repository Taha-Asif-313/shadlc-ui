import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Modal Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Create interactive and responsive modals with a fully customizable React Modal Component. Supports animations, overlays, accessibility, and dynamic content using Tailwind CSS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
