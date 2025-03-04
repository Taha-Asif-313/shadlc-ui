import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import "shadlc/style.css";

const geist = localFont({
  src: '../public/fonts/Geist.ttf',
  display: 'swap',
  variable: '--font-geist',
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
      <body
        className={`${geist.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
