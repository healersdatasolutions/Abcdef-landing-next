import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LocomotiveScrollProvider } from "@/components/LocomotiveScrollProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const porterSans = localFont({
  src: "./fonts/PorterSansBlock-Regular.ttf",
  variable: "--font-porter-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Healers Healthcare",
  description: "A Site Under Development for Healers Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${porterSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocomotiveScrollProvider>
            {children}
          </LocomotiveScrollProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

