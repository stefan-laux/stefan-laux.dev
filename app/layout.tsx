import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stefan Laux",
  description:
    "Project Portfolio of Stefan Laux. Showcasing some live projects and social links.",
  keywords: ["Stefan Laux", "Stefan", "Laux", "Stefan Laux Developer"],
  openGraph: {
    title: "Stefan Laux",
    description:
      "Project Portfolio of Stefan Laux. Showcasing some live projects and social links.",
    url: "https://stefan-laux.dev",
    type: "website",
    images: "https://stefan-laux.dev/main.webp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
