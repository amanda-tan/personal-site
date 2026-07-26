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

const basePath = process.env.BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://amanda-tan.github.io/personal-site/";
const siteUrlObject = new URL(siteUrl);
const deploymentPath =
  basePath || siteUrlObject.pathname.replace(/\/$/, "");
const socialImageUrl = new URL(
  `${deploymentPath}/og.png`,
  siteUrlObject.origin
).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amanda Tan — Builder, educator, curious human",
  description:
    "Amanda Tan makes complex technology feel possible through thoughtful products, clear writing, and approachable learning experiences.",
  icons: {
    icon: `${basePath}/images/icon-projects.png`,
    shortcut: `${basePath}/images/icon-projects.png`,
  },
  openGraph: {
    title: "Amanda Tan",
    description: "Making complex technology feel possible.",
    images: [{ url: socialImageUrl, width: 1792, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Tan",
    description: "Making complex technology feel possible.",
    images: [socialImageUrl],
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
