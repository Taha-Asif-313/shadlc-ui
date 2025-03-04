import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Flexbox Component – Responsive & Customizable | Tailwind CSS",
  description:
    "Build responsive layouts effortlessly with the React Flexbox Component using Tailwind CSS. Fully customizable with dynamic alignment, spacing, and direction for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
