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
  title: 'Inmobi Export - Premium Furniture Export from Türkiye | Quality Furniture Manufacturing',
  description: 'Premium furniture export from Türkiye to worldwide markets. Traditional craftsmanship meets modern design with international quality standards. We bring Türkiye\'s rich furniture heritage to global markets.',
  keywords: 'furniture export, Türkiye furniture, premium furniture, furniture manufacturing, İnegöl furniture, Bursa furniture, custom design, logistics, quality control',
  authors: [{ name: 'Inmobi Export' }],
  creator: 'Inmobi Export',
  publisher: 'Inmobi Export',
  robots: 'index, follow',
  openGraph: {
    title: 'Inmobi Export - Premium Furniture Export from Türkiye',
    description: 'Premium furniture export from Türkiye to worldwide markets. Traditional craftsmanship meets modern design.',
    url: 'https://inmobi.com.tr',
    siteName: 'Inmobi Export',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/services/furniture.jpg',
        width: 800,
        height: 600,
        alt: 'Premium Furniture Export from Türkiye',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inmobi Export - Premium Furniture Export from Türkiye',
    description: 'Premium furniture export from Türkiye to worldwide markets.',
    images: ['/images/services/furniture.jpg'],
  },
  alternates: {
    canonical: 'https://inmobi.com.tr',
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
