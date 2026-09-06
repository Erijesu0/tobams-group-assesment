import Image from "next/image";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export function LmsBlock() {
  return (
    <section className="w-full  bg-[#571244]/10 py-10 lg:py-[40px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px]  mx-auto flex flex-col items-center gap-6 md:gap-10">
        {/* Section Heading */}
        <h2 className="font-heading text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-[#571244] text-center leading-[130%]">
          Learning Management System
        </h2>

        {/* Content Layout: Vertical on Mobile, Side-by-Side on Desktop */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Circular Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[556px] lg:h-[556px] rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
              <Image
                src="/lms-image.jpg"
                alt="Learning Management System team"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Highlight Box + Button Outside */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            {/* Highlighted Text Container */}
            <div className="flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 bg-[#5712441A] rounded-[16px] gap-6 text-left">
              {/* Description Paragraph */}
              <p className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-[#424242] leading-[160%]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest development frameworks to
                soft skills training in leadership, effective communication, and
                project management, TG Academy offers a wide range of courses to
                cater to diverse learning needs. With accessible and interactive
                learning materials, individuals can enhance their skills and
                stay ahead in today&apos;s competitive tech landscape.
              </p>

              <div className="space-y-4 w-full">
                {/* Sub-heading */}
                <h3 className="font-heading text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#2E1428]">
                  Some of our courses include:
                </h3>

                {/* Course Bullet List - Grid Layout */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 font-sans text-[14px] sm:text-[15px] md:text-[16px] text-[#424242]">
                  {courses.map((course) => (
                    <li key={course} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#424242] shrink-0" />
                      <span className="whitespace-nowrap">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button (Now outside the highlight box) */}
            <div className="flex justify-start">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-[8px] bg-[#571244] hover:bg-[#420d33] text-white font-sans font-medium px-[24px] py-[10.5px] h-[48px] rounded-[8px] transition-colors duration-200 text-[16px]"
              >
                <span>Learn More</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
