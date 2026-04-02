import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Switchback",
  description: "By Tyler Dane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${robotoMono.variable} min-h-screen bg-warm-50 text-warm-900 antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
