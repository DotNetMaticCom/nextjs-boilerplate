// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css"; // Bu zaten src/app altında olacak
import Providers from "./providers"; // Kaynak projeden kopyalanacak

// Metadata ve Viewport kaynak projeden alınacak
export const metadata: Metadata = {
  title: "Sharp Angular Craft Next ERP", // Kaynak projeden
  description: "Lovable Generated Project & Vercel Integration", // Birleştirilmiş
  authors: [{ name: "Lovable" }, { name: "Entegre Eden" }], // Kaynak projeden (veya isteğe bağlı)
  openGraph: { // Kaynak projeden
    title: "Sharp Angular Craft Next ERP",
    description: "Lovable Generated Project",
    type: "website",
    images: ["/pnk-logo.png"], // public altına eklediğimiz logo
  },
  twitter: { // Kaynak projeden
    card: "summary_large_image",
    site: "@lovable_dev", // Kaynak projeden (veya isteğe bağlı)
    images: ["/pnk-logo.png"],
  },
  icons: { // Kaynak projeden (veya isteğe bağlı)
    icon: '/pnk-logo.png', // public altına eklediğimiz logo
    // apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { // Kaynak projeden
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-0-l))' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-0-l))' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <Providers> {/* Kaynak projeden gelen Providers ile sarıldı */}
          {children}
        </Providers>
      </body>
    </html>
  );
}