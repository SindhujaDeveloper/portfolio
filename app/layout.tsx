import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Providers from "./providers";
import Sparks from "@/components/Sparks";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sindhuja Developer | Frontend React Developer",
  description:
    "Sindhuja Developer is a Frontend Engineer with 4+ years of experience in React, Angular, and modern web development.",

  keywords: [
    "Sindhuja Developer",
    "Sindhuja",
    "Frontend Developer Sindhuja",
    "React Developer Sindhuja",
    "UI Developer India",
  ],

  openGraph: {
    title: "Sindhuja Developer | React Frontend Engineer",
    description:
      "Portfolio of Sindhuja Developer - React & Frontend Engineer with 4+ years experience.",
    url: "https://sindhujadeveloperportfolio.netlify.app/",
    siteName: "Sindhuja Developer",
    type: "website",
    images: [
      {
        url: "https://sindhujadeveloperportfolio.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sindhuja Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <div id="scroll-progress" className="scroll-progress"></div>

          <div className="bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>

          <Sparks />

          {children}
        </Providers>
      </body>
    </html>
  );
}