import Link from "next/link";
import { Inter } from "next/font/google";

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

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/drivers", label: "Driver contacts" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#ffffff] text-[#1a1a1a]`}>
        <div className="min-h-screen bg-[#ffffff]">
          <header className="border-b border-[#ececee] bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Bus OG
              </Link>
              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#6b6b6b]">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-[#f0f0f2] hover:text-[#1a1a1a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/booking"
                className="hidden rounded-full bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#353535] sm:inline-flex"
              >
                Book now
              </Link>
            </div>
          </header>
          <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
