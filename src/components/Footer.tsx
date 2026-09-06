import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#0F000B] text-white font-['Nunito',sans-serif]">
      {/* Top Banner: Call to Action */}
      <div className="bg-[#1F0018] border-b border-[#2E1428] px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-gray-300 font-normal">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <Link
            href="/contact"
            className="bg-[#571244] hover:bg-[#430D34] text-white font-medium text-sm px-6 py-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F0018]"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12 space-y-16">
        {/* Top Grid: Brand Column + Navigation Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info & Social Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Tobams Group Logo"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white text-[#0F000B] flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="font-bold text-sm">in</span>
              </a>
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-white text-[#0F000B] flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="font-bold text-sm">🌐</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white text-[#0F000B] flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="font-bold text-sm">𝕏</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* What We Do */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wide">
                What We Do
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F8F8F8]">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Strategy Planning and Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tech Talent Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Training and Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    IT Consulting Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Impact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Talent Recruitment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wide">
                Company
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F8F8F8]">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Founder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Business Model
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    The Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#FFFFFF] tracking-wide">
                Solution
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F8F8F8]">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tobams Group Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help a Tech Talent
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Campus Ambassadors Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Join Our Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Book a Consultation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Join Our Slack Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Box: Registered Offices & Contact Information Card */}
        <div className="bg-[#FFFFFF0F] border border-[#2E1428] rounded-xl p-6 sm:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8 text-xs text-gray-300">
          {/* Contact Information (Mobile First: Order 1, Desktop: Order 2) */}
          <div className="order-1 lg:order-2 lg:col-span-4 space-y-4 lg:border-l lg:border-[#2E1428] lg:pl-8">
            <h4 className="text-base font-bold text-white">
              Contact Information
            </h4>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-[#E94E58]">✉</span>
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="hover:underline text-gray-300"
                >
                  theteam@tobamsgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#E94E58]">📞</span>
                <a
                  href="tel:+447886600748"
                  className="hover:underline text-gray-300"
                >
                  +447886600748
                </a>
              </div>
            </div>
          </div>

          {/* Registered Offices (Mobile: Order 2, Desktop: Order 1) */}
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-4">
            <h4 className="text-base font-bold text-white">
              Registered Offices
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* UK Office */}
              <div className="space-y-1">
                <p className="font-semibold text-[#E94E58]">United Kingdom</p>
                <p className="text-gray-300">
                  07451196 (Registered by Company House)
                </p>
                <p className="text-gray-300">
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>

              {/* Nigeria Office */}
              <div className="space-y-1">
                <p className="font-semibold text-[#E94E58]">Nigeria</p>
                <p className="text-gray-300">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                </p>
                <p className="text-gray-300">4, Muaz Close, Angwari-Rimi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#2E1428] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© Copyright Tobams Group, 2024. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
