"use client";

export function CtaBanner() {
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-8 md:py-16 px-4 flex justify-center items-center">
      <div
        className="w-full max-w-[327px] md:max-w-[1006px] min-h-[240px] md:min-h-[160px] bg-[#571244] rounded-[8px] 
                   px-[24px] py-[32px] md:px-[48px] md:py-[40px] flex flex-col items-center justify-center 
                   gap-[32px] md:gap-[24px] text-center shadow-sm"
      >
        {/* Mobile Headline */}
        <p className="block md:hidden font-['Nunito',sans-serif] font-semibold text-[16px] leading-[150%] tracking-[0.03em] text-white max-w-[279px]">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your
          project with Tobams Group. Your journey to digital excellence begins
          here.
        </p>

        {/* Desktop Headline */}
        <p className="hidden md:block font-['Nunito',sans-serif] font-semibold text-[20px] leading-[150%] tracking-[0.03em] text-white max-w-[800px]">
          Want to accelerate professional growth and development at your
          organisation? See how we can help.
        </p>

        {/* Action Button */}
        <button
          onClick={scrollToHero}
          className="bg-white text-[#151515] hover:bg-gray-100 font-['Nunito',sans-serif] font-semibold text-[14px] leading-[150%] px-6 py-3 rounded-[8px] transition-colors inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
