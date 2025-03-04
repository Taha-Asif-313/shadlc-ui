import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Audio Component – Customizable & Accessible | Tailwind CSS",
  description:
    "Integrate a fully customizable React Audio Component with Tailwind CSS. Supports playback controls, streaming, autoplay, and accessibility for modern web apps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
