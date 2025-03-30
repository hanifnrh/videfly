// Libs
import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";

// Components
import ResponsiveNavbar from "./navbar";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl || "https://www.videfly.vercel.app"),
  applicationName: "Videfly",
  title: {
    default: "Videfly",
    template: "%s | Videfly"
  },
  keywords: [
    "videfly",
    "video AI",
  ],
  icons: {
    icon: `/favicon.ico`,
  },
  description:
    "Internship Submission Ziel",
  openGraph: {
    title: "Internship Submission",
    url: baseUrl,
    siteName: "Videfly",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og`,
        alt: "Videfly",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internship Submission",
    images: [`${baseUrl}/og`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-2xl mx-auto">
          <ResponsiveNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
