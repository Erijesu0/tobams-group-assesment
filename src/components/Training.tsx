// src/components/Training.tsx
import Image from "next/image";

export function Training() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 text-[#1A0A10]">
      <div className="max-w-[1280px] mx-auto space-y-24">
        {/* 1. Corporate Trainings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B112C]">
              Corporate Trainings
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Empower your team with our customized Corporate Training programs
              designed to address the unique needs and objectives of your
              organization. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company’s goals and values.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-medium pt-2">
              {[
                "Leadership Training",
                "Strategic Planning and Implementation",
                "Project Management",
                "Sustainability Training",
                "Customised Training",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {/* Lightning Bolt SVG Icon */}
                  <span className="p-1 rounded-md  text-[#2C0922] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/corporate-training.jpg"
              alt="Corporate Trainings"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. Personalised Individual Training (Alternated layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1">
            <Image
              src="/individual-training.jpg"
              alt="Personalised Individual Training"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B112C]">
              Personalised Individual Training
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Begin a journey of lifelong learning and professional development
              with Tobams Group’s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today’s professionals.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-medium pt-2">
              {[
                "Leadership Development",
                "Soft Skills Development",
                "Industry Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management and Productivity",
                "Career Development",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {/* Lightning Bolt SVG Icon */}
                  <span className="p-1 rounded-md  text-[#2C0922] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Capacity Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B112C]">
              Capacity Development
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success.
            </p>

            <ul className="space-y-3 text-sm text-gray-700 font-medium pt-2">
              {[
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {/* Lightning Bolt SVG Icon */}
                  <span className="p-1 rounded-md  text-[#2C0922] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/capacity-development.jpg"
              alt="Capacity Development"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
