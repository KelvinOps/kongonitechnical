//app/news/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Media | Kongoni Technical Vocational Training College",
  description: "Stay updated with the latest news, events, and achievements from Kongoni Technical & Vocational Training College. Read about our students' successes, new facilities, and college developments.",
  keywords: "Kongoni news, college events, student achievements, technical education news, TVET news Kenya",
  openGraph: {
    title: "News & Media - Kongoni Technical College",
    description: "Latest news and updates from Kongoni Technical & Vocational Training College",
    type: "website",
  }
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}