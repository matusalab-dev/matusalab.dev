import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff", weight: "400" },
    { path: "./fonts/Satoshi-Light.woff", weight: "100" },
    { path: "./fonts/Satoshi-Light.woff2", weight: "100" },
  ],
});

export const metadata: Metadata = {
  title: "Matusalab Front-End Developer | React.js | Next.js",
  description: "Matusalab is a personal website to showcase my Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-3">
      <GoogleTagManager gtmId="GTM-MLSWKVX8" />
      <body
        className={`${satoshi.className} antialiased w-full max-w-[87.5rem] mx-auto px-7 md:px-12`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
