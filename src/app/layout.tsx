// app/layout.tsx - Updated with Enrollment Banner

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🧠 Global Providers - Client Components
import { Providers } from "@/components/providers";

// 🧱 Shared Layout Components
import Header from "@/components/header";
import Footer from "@/components/footer";

// 🎯 NEW: Enrollment Banner Component
import EnrollmentBanner from "@/components/enrollment-banner";

// ✅ Toast System
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kongoni Technical Vocational Training College",
    template: "%s | Kongoni Technical",
  },
  description: "Empowering trainees through digital innovation and technical excellence",
  keywords: ["technical training", "vocational education", "Kongoni", "technical college"],
  authors: [{ name: "Kongoni Technical" }],
  creator: "Kongoni Technical College",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kongoni-technical.edu",
    title: "Kongoni Technical Vocational Training College",
    description: "Empowering trainees through digital innovation and technical excellence",
    siteName: "Kongoni Technical College",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kongoni Technical Vocational Training College",
    description: "Empowering trainees through digital innovation and technical excellence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-white text-gray-900 min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable}`}
      >
        <ToastProvider>
          <Providers>
            <Header />
            <main className="flex-1 px-4 py-6">{children}</main>
            <Footer />
            <Toaster />
            
            {/* 🎯 Enrollment Banner - Shows automatically based on intake periods */}
            <EnrollmentBanner />
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}