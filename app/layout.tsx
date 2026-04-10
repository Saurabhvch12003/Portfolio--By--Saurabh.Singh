import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Singh | Java Full Stack Developer Portfolio",

  description:
    "Saurabh Singh is a Java Full Stack Developer skilled in MERN stack, system design, and building scalable applications. Explore real-world projects and technical expertise.",

  keywords: [
    "Saurabh Singh Developer",
    "Java Backend Developer",
    "Full Stack Developer India",
    "MERN Stack Developer",
    "Software Engineer Portfolio",
    "DSA Problem Solver",
  ],

  authors: [{ name: "Saurabh Singh" }],

  creator: "Saurabh Singh",

  openGraph: {
    title: "Saurabh Singh Portfolio",
    description:
      "Explore projects, skills, and experience of Saurabh Singh – Backend Developer & Problem Solver.",
    url: "https://portfolio-of-saurabh-singh.vercel.app/", // 👈 change after deploy
    siteName: "Saurabh Portfolio",
    images: [
      {
        url: "/preview.png", // 👈 add preview image in public folder
        width: 1200,
        height: 630,
        alt: "Saurabh Singh Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saurabh Singh Portfolio",
    description:
      "Java Backend Developer | Full Stack Developer | Portfolio Website",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}