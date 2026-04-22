import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madhav Sachdeva | Creative Developer",
  description: "Personal portfolio of Madhav Sachdeva, bridging design and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
