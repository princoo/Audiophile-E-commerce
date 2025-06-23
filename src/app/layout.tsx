import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ToastProvider } from "@/components/providers/ToastProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "audiophile",
  description: "Audiophile E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} antialiased`}>
        <ReduxProvider>
          <Navbar />
          <Banner />
          {children}
          <Footer />
        </ReduxProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
