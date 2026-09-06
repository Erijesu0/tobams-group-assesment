// src/components/Hero.tsx
// src/components/Hero.tsx
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#000000] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Image Container with adjusted opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Woman working on laptop"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center space-y-6">
        <span className=" bg-[#FFFFFF1A] text-xs md:text-sm px-6 py-2.5 rounded-full uppercase tracking-wider font-semibold text-sm border border-white/20 backdrop-blur-sm text-[12px] font-['Nunito']">
          What We Do
        </span>

        <h1 className="font-heading font-semibold text-white leading-[120%] tracking-[0.03em] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
          {/* Mobile view (<768px) */}
          <span className="inline md:hidden">Learning and Development</span>

          {/* Tablet & Desktop view (≥768px) */}
          <span className="hidden md:inline">Training and Development</span>
        </h1>

        <p className="font-sans text-[18px] font-semibold leading-[150%] text-center text-white">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>

        <div className="pt-2">
          <button className="bg-[#571244] hover:bg-[#d63d47] text-white px-6 py-3 rounded-md text-sm md:text-base font-medium transition-colors shadow-lg">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
