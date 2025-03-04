import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Card Component – Customizable & Responsive | Tailwind CSS",
  description:
    "Create stunning UI with a fully customizable React Card Component using Tailwind CSS. Supports dynamic content, hover effects, shadows, and responsive design for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
