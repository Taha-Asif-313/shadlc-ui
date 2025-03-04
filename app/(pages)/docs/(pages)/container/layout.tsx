import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Container Component – Responsive & Fluid Layouts | Tailwind CSS",
  description:
    "Build flexible and responsive layouts with the React Container Component using Tailwind CSS. Supports fluid width, fixed breakpoints, and customizable spacing for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
