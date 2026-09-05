// src/components/CtaBanner.tsx

export function CtaBanner() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-8 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1134px] mx-auto bg-[#571244] text-white rounded-[8px] py-[32px] px-[24px] sm:px-[64px] flex flex-col items-center justify-center text-center space-y-[32px] shadow-sm">
        {/* Banner Heading */}
        <div className="space-y-1 max-w-2xl">
          <h2 className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-white leading-snug">
            Want to accelerate professional growth and development at your
            organisation?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-white">
            See how we can help.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-[#571244] px-6 py-3 rounded-[6px] text-sm font-semibold transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#571244]"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
