import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Video Gallery – Customizable & Responsive | Tailwind CSS",
  description:
    "Build a stunning and responsive React Video Gallery with custom styling, dynamic playlists, and smooth playback controls. Perfect for video portfolios, streaming, and multimedia apps using Tailwind CSS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
