// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

// 1. Konfiguracja Viewport (oddzielny eksport w nowym Next.js)
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Często wymagane, by aplikacja wyglądała jak "natywna"
};

// 2. Metadane aplikacji
export const metadata: Metadata = {
  title: "Moja PWA App",
  description: "Aplikacja stworzona w Next.js",
  manifest: "/manifest.json", // Next.js sam to podepnie z pliku manifest.ts, ale warto wiedzieć
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MojePWA",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}