import type { Metadata } from "next";
import localFont from "next/font/local";
import { assetUrl } from "@/lib/assetUrl";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/plus-jakarta-sans-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/plus-jakarta-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/plus-jakarta-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/plus-jakarta-sans-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inclusiveSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/inclusive-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inclusive",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Bonhardt Roof & Trades Co | Denver Metro & Colorado Front Range Roofing Experts",
  description:
    "Haag-certified Colorado roofing contractors specializing in hail damage restoration, insurance claims, residential roof replacement, and commercial flat roofing in Lakewood and Denver Metro.",
  icons: {
    icon: assetUrl("/lead-assets/bonhardt-logo.png"),
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
      className={`${plusJakartaSans.variable} ${inclusiveSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
