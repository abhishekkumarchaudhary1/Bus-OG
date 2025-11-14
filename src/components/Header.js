"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/drivers", label: "Driver contacts" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-[#ececee] bg-white sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/busoglogo.svg"
            alt="Bus OG"
            width={180}
            height={60}
            className="h-18 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-[#6b6b6b]">
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

        {/* Desktop Book Now Button */}
        <Link
          href="/booking"
          className="hidden md:inline-flex rounded-full bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#353535]"
        >
          Book now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 pt-2 space-y-1 bg-white border-t border-[#ececee]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#6b6b6b] transition hover:bg-[#f0f0f2] hover:text-[#1a1a1a]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={closeMenu}
            className="block mt-4 rounded-lg bg-[#1a1a1a] px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-[#353535]"
          >
            Book now
          </Link>
        </nav>
      </div>
    </header>
  );
}

