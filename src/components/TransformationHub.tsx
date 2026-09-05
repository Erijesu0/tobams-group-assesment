// src/components/TransformationHub.tsx
import Image from "next/image";

export function TransformationHub() {
  const features = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto bg-[#EF435333] rounded-2xl p-8 md:p-12 space-y-8">
        {/* Header Text Block */}
        <div className="space-y-2">
          <p className="text-[#8C2052] font-medium italic text-sm sm:text-base">
            Learning With Our CEO:
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5C1D42] tracking-tight">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[#4A4A4A] text-xs sm:text-sm md:text-base leading-relaxed pt-2 max-w-5xl">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you’re seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-[380px] rounded-xl overflow-hidden">
            <Image
              src="/transformation-hub.jpg"
              alt="Transformation Hub presentation"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Feature Cards Grid & Button */}
          <div className="lg:col-span-6 space-y-6">
            {/* 2-Column Grid for White Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3.5 flex items-center space-x-3 shadow-xs border border-[#F2E3E6]"
                >
                  <svg
                    className="w-4 h-4 text-[#5C1D42] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-[#222222]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button className="bg-[#5C1D42] hover:bg-[#42142F] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors inline-flex items-center space-x-2 shadow-sm">
                <span>Learn More</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
