import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AmbientCanvas } from "@/components/ui/AmbientCanvas";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { site } from "@/lib/data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  authors: [{ name: site.name }],
  keywords: [
    "Muhammad Bilal Khan Lodhi",
    "Bilal Khan Lodhi",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Karachi",
    "Portfolio",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased selection:bg-accent selection:text-black">
        <Providers>
          <ScrollProgress />
          <Cursor />
          <AmbientCanvas />
          <FloatingWhatsApp />
          <div className="noise" aria-hidden />
          {children}
        </Providers>
      </body>
    </html>
  );
}
