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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://amandatan.github.io/personal-site/"
  ),
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
    images: [{ url: "/og.png", width: 1792, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Tan",
    description: "Making complex technology feel possible.",
    images: ["/og.png"],
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
