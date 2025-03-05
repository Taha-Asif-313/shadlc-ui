import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "shadlc/style.css";

const geist = localFont({
  src: "../public/fonts/Geist.ttf",
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Shadlc - A light weight ui library",
  description:
    "Build beautiful, fast, and responsive web apps with our modern shadlc UI library. Fully customizable, lightweight, and accessible components for React, Vue, and more.",
  keywords:
    "UI library, React components, Vue UI kit, Web design, Frontend framework, Accessible UI, Customizable components, CSS framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Uhg0BH9AxM8cuz_gUbffteq2_oeYyOTcbKg_BYK5l54"
        />
      </head>
      <body className={`${geist.variable} antialiased `}>{children}</body>
    </html>
  );
}
