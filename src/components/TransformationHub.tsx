import Image from "next/image";

export function TransformationHub() {
  const skills = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full max-w-[1312px] mx-auto px-4 py-8">
      {/* Outer Card with exact Figma styling: 16px radius, 40px padding, #EF4353 20% bg */}
      <div className="w-full bg-[#EF435333] rounded-[16px] p-6 md:p-10 flex flex-col gap-8 md:gap-[64px]">
        {/* Top Header Section */}
        <div className="flex flex-col gap-2 max-w-[700px]">
          <span className="font-sans font-semibold text-[14px] leading-[150%] text-[#1671D9]">
            Learning With Our CEO:
          </span>

          <h2 className="font-nunito font-semibold italic text-[20px] md:text-[24px] leading-[130%] text-[#571244]">
            Transformation Hub With Jite Newton
          </h2>

          <p className="font-sans font-normal text-[14px] leading-[150%] text-[#151515] mt-2">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
        </div>

        {/* Bottom Grid Section: Left Image + Right Skill Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[16px] overflow-hidden">
            <Image
              src="/transformation-hub.jpg"
              alt="Transformation Hub With Jite Newton"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: 2-Column Pills Grid inside #FFFFFF4D wrapper */}
          <div className="bg-[#FFFFFF4D] backdrop-blur-sm rounded-[16px] p-6 flex flex-col justify-between gap-6 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 h-[56px] bg-white rounded-[12px] px-4 shadow-sm"
                >
                  {/* Bolt Icon with #571244 stroke and #DDD0DA fill */}
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="#DDD0DA"
                    stroke="#571244"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 1L1 10H7L6 17L13 8H7L8 1Z" />
                  </svg>

                  <span className="font-sans font-normal text-[14px] leading-[150%] text-[#151515]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Learn More Button matching Figma */}
            <button className="inline-flex items-center justify-center gap-2 bg-[#571244] text-white px-6 py-3 rounded-[8px] font-sans font-semibold text-[14px] self-start hover:opacity-90 transition-opacity mt-2">
              <span>Learn More</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
