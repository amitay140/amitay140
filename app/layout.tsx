import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layouts/Header";
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
  title: "מתכונים מדגי הים | קהילת צוללי הדיג הישראלית",
  description: "מתכונים מיוחדים מקהילת צוללי הדיג: סביצ'ה, גריל, אפייה וטיגון. למידה על ניקוי דגים, פילה ושיטות הכנה מהמומחים.",
  keywords: ["מתכונים", "דגים", "צלילה", "ים תיכון", "סביצ'ה", "גריל", "בישול דגים"],
  authors: [{ name: "קהילת צוללי הדיג הישראלית" }],
  openGraph: {
    title: "מתכונים מדגי הים",
    description: "מתכונים מקהילת צוללי הדיג הישראלית",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
