import Image from "next/image";

export function ManagementProgram() {
  const highlights = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto bg-[#2C0922] text-white rounded-[20px] p-5 sm:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Section Heading for Mobile (Top Position) */}
          <h2 className="block lg:hidden font-nunito text-lg sm:text-xl font-bold tracking-[0.03em] text-white leading-tight text-center w-full px-2">
            Management Development Program
          </h2>
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative h-[240px] sm:h-[360px] lg:h-[480px] rounded-[16px] overflow-hidden shrink-0">
            <Image
              src="/management-program.jpg"
              alt="Management Development Program team"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center">
            {/* Section Heading for Desktop */}
            <h2 className="hidden lg:block font-nunito text-[24px] font-bold tracking-[0.03em] text-white leading-[150%] whitespace-nowrap">
              Management Development Program
            </h2>

            <div className="flex flex-col gap-3 text-[#E0E0E0] font-sans text-[14px] sm:text-[15px] leading-[160%]">
              <p>
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the
                high-performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-col gap-3 w-full">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full h-[40px] items-center gap-2 rounded-[8px] bg-[#8F6182] px-2 py-1 transition-colors"
                >
                  <svg
                    width="19"
                    height="24"
                    viewBox="0 0 19 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 text-white fill-current"
                    aria-hidden="true"
                  >
                    <path
                      d="M11 0L0 13.5H9.5L8 24L19 10.5H9.5L11 0Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  <span className=" shrink-0 font-sans font-normal text-[18px] text-white leading-[150%]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
