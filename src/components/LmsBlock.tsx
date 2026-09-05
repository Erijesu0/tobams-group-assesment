// src/components/LmsBlock.tsx
import Image from "next/image";

export function LmsBlock() {
  const courses = [
    "Financial Services",
    "Design Thinking",
    "Effective Communication",
    "Micro-learning",
    "Cross-Cultural Skill",
    "Business Management",
  ];

  return (
    <section className="w-full bg-[#F5F2F4] py-16 px-4 md:px-8 lg:px-16 text-[#1A0A10]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Circular Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border-8 border-white shadow-md">
            <Image
              src="/lms-image.jpg"
              alt="Learning Management System team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content & List */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B112C]">
            Learning Management System
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[#1A0A10] bg-[#571244]/10 p-4 ">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today&apos;s competitive tech
            landscape.
          </p>

          <h3 className="font-semibold text-[#3B112C] text-sm sm:text-base mb-3">
            Some of our courses include:
          </h3>

          <div>
            {/* Bullet List Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700 list-disc list-inside">
              {courses.map((course, index) => (
                <li key={index} className="marker:text-[#3B112C]">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <button className="bg-[#3B112C] hover:bg-[#2A0C20] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
              Learn More ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
