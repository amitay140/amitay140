import type { Metadata } from "next";
import { Header } from "@/components/layouts/Header";
import "./globals.css";

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
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
