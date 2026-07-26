import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteUrl = "https://amanda-tan.io";
const socialImageUrl = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: "Amanda Tan — Builder, educator, curious human",
  description:
    "Amanda Tan makes complex technology feel possible through thoughtful products, clear writing, and approachable learning experiences.",
  icons: {
    icon: "/images/icon-projects.png",
    shortcut: "/images/icon-projects.png",
  },
  openGraph: {
    title: "Amanda Tan",
    description: "Making complex technology feel possible.",
    url: siteUrl,
    images: [{ url: socialImageUrl, width: 1792, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Tan",
    description: "Making complex technology feel possible.",
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
