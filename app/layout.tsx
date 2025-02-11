import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quynh Le - A web developer showcasing skills and projects.",
  description:
    "Hi! I'm Quynh Le, a passionate web developer who loves turning ideas into reality. Explore my portfolio to discover my skills, projects, and journey in the world of web development. Let's connect and create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [outfit.className];
  return (
    <html lang="en">
      <body className={fonts.join(" ")}>
        {children}
      </body>
    </html>
  );
}
