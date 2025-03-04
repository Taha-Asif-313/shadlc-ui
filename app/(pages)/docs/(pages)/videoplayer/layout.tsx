import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Video Component – Responsive & Customizable | Tailwind CSS",
  description:
    "Enhance your UI with a responsive React Video Component built with Tailwind CSS. Supports autoplay, controls, lazy loading, and accessibility for seamless video playback.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
