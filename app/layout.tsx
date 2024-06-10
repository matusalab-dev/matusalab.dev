import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const plus_jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff", weight: "400" },
    { path: "./fonts/Satoshi-Light.woff", weight: "100" },
    { path: "./fonts/Satoshi-Light.woff2", weight: "100" },
  ],
});

export const metadata: Metadata = {
  title: "Matusalab Personal website",
  description:
    "Matusalab is a personal website for business owners who need support for their online presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased w-full max-w-[1400px] mx-auto my-0 px-7 md:px-12`}
      >
        {children}
      </body>
    </html>
  );
}
