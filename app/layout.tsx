"use client";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) progressBar.style.width = scrolled + "%";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div id="scroll-progress" className="scroll-progress"></div>
        <div className="bg-blobs">
          <div className="blob"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
