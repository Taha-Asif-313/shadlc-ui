import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "shadlc/style.css";
import Head from "next/head";

const geist = localFont({
  src: "../public/fonts/Geist.ttf",
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Shadlc UI - A light weight ui library",
  description: "Generated by create next app",
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
