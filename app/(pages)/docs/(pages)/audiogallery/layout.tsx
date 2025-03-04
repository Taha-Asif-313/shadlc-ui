import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Audio Gallery – Customizable & Accessible | Tailwind CSS",
  description:
    "Create an interactive and accessible React Audio Gallery with dynamic playlists, custom styling, and seamless playback controls. Built with Tailwind CSS for modern web applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
