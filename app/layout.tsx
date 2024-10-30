
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NavBar } from "@/components/NavBar";
import { navItems } from "@/data/content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// TODO: SEO
export const metadata: Metadata = {
  title: "Luisel Muller",
  description: "Luisel Muller's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* TODO: Mobile navbar */}
        <NavBar 
          navItems={navItems}
        />
        {children}
      </body>
    </html>
  );
}
