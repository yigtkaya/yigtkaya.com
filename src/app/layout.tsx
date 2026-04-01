import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Yigit Kaya — Software Engineer",
  description:
    "Hasan Yigit Kaya — Software Engineer based in Istanbul. Backend systems, mobile apps, developer tooling.",
  openGraph: {
    title: "Yigit Kaya — Software Engineer",
    description:
      "Hasan Yigit Kaya — Software Engineer based in Istanbul. Backend systems, mobile apps, developer tooling.",
    url: "https://yigtkaya.com",
    siteName: "yigtkaya.com",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
