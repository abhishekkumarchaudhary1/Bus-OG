import { Inter } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Bus OG - Corporate & Individual Vehicle Rentals",
  description:
    "Book vetted drivers with cars, buses, and canters tailored for corporate travel, events, and cargo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#ffffff] text-[#1a1a1a]`}>
        <div className="min-h-screen bg-[#ffffff]">
          <Header />
          <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
