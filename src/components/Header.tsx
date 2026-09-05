// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#DDD0DA]">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tobams Group Logo"
            width={160}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 bg-[#4A0033] hover:bg-[#330023] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A0033]">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Account
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button className="bg-[#E94E58] hover:bg-[#d63d47] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E94E58]">
            Take Assessment
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Bar (Desktop) */}
      <nav className="hidden md:block border-t border-[#DDD0DA]/50 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-center gap-8 py-3 text-sm text-gray-800 font-medium">
          <button className="flex items-center gap-1 hover:text-[#4A0033] transition-colors">
            About
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button className="flex items-center gap-1 hover:text-[#4A0033] transition-colors">
            What We Do
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button className="flex items-center gap-1 hover:text-[#4A0033] transition-colors">
            Jobs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <Link
            href="/projects"
            className="hover:text-[#4A0033] transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/strategic-partnership"
            className="hover:text-[#4A0033] transition-colors"
          >
            Strategic Partnership
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#4A0033] transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/consultation"
            className="hover:text-[#4A0033] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-[#DDD0DA] bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 py-2 border-b border-[#DDD0DA]">
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              About
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              What We Do
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              Jobs
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              Projects
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              Strategic Partnership
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              Pricing
            </Link>
            <Link href="#" className="py-1 text-gray-700 hover:text-[#4A0033]">
              Book a Consultation
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-[#4A0033] text-white py-2 rounded-md text-sm font-medium">
              Account
            </button>
            <button className="w-full bg-[#E94E58] text-white py-2 rounded-md text-sm font-medium">
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
