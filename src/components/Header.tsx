"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#", hasDropdown: true },
    { label: "What We Do", href: "#", hasDropdown: true },
    { label: "Jobs", href: "#", hasDropdown: true },
    { label: "Projects", href: "/projects" },
    { label: "TG Academy", href: "#" },
    { label: "Strategic Partnership", href: "/strategic-partnership" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Consultation", href: "/consultation" },
  ];

  return (
    <header className="w-full bg-white border-b border-[#DDD0DA]">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        {/* Top Header Section */}
        <div className="max-w-[1440px] mx-auto px-16 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Tobams Group Logo"
              width={165}
              height={64}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="h-[48px] px-4 py-2 rounded-[4px] border border-[#571244] text-[#571244] text-sm font-semibold flex items-center gap-3 hover:bg-[#571244] hover:text-white transition-colors">
              Account
              <svg
                className="w-3.5 h-3.5"
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

            <button className="h-[48px] px-5 py-2.5 rounded-[4px] bg-[#EF4353] text-white text-sm font-semibold hover:bg-[#d83847] transition-colors">
              Take Assessment
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="border-t border-[#DDD0DA]/50 bg-white">
          <div className="max-w-[1440px] mx-auto px-16 flex items-center justify-center gap-8 py-3 text-sm font-medium text-[#151515]">
            {navLinks.map((link, index) =>
              link.hasDropdown ? (
                <button
                  key={index}
                  className="flex items-center gap-1 hover:text-[#571244] transition-colors cursor-pointer"
                >
                  {link.label}
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
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-[#571244] transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Header (Frame 1618869240 Specs: Bg #F9F9F9, Padding Top 18px, Bottom 16px, Left/Right 24px) */}
      <div className="lg:hidden bg-[#F9F9F9] pt-[18px] pb-[16px] px-[24px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tobams Group Logo"
            width={140}
            height={48}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Custom Figma Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-10 rounded-xl bg-black flex flex-col justify-center items-center gap-[4px] shadow-sm active:scale-95 transition-transform"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <span className="w-5 h-[2px] bg-white rounded-full"></span>
              <span className="w-5 h-[2px] bg-white rounded-full"></span>
              <span className="w-5 h-[2px] bg-white rounded-full"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#F9F9F9] border-t border-[#DDD0DA] px-[24px] pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 py-2 border-b border-[#DDD0DA]/60">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#151515] hover:text-[#571244] py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons for Mobile */}
          <div className="flex flex-col gap-3 pt-1">
            <button className="w-full h-[48px] rounded-[16px] border border-[#571244] text-[#571244] font-semibold text-sm flex items-center justify-center gap-2">
              Account
            </button>
            <button className="w-full h-[48px] rounded-[16px] bg-[#EF4353] text-white font-semibold text-sm">
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
