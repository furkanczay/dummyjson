import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Starter from "@/components/Starter";
import Sidebar from "@/components/Sidebar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy JSON by Furkan ÖZAY",
  description: "Dummy Data for Frontend Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={lexend.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
