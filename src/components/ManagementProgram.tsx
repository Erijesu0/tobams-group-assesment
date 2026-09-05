// src/components/ManagementProgram.tsx
import Image from "next/image";

export function ManagementProgram() {
  const highlights = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto bg-[#2C0922] text-white rounded-[20px] p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-[16px] overflow-hidden">
            <Image
              src="/management-program.jpg"
              alt="Management Development Program team"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Management Development Program
            </h2>

            <div className="space-y-4 text-gray-200 text-xs sm:text-sm leading-relaxed">
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

            {/* Light Purple Feature Pills with Lightning Icon */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#6B4B60]/50 hover:bg-[#6B4B60]/70 transition-colors border border-white/10 rounded-lg px-4 py-3 flex items-center space-x-3 text-sm font-medium text-white"
                >
                  {/* Lightning Bolt SVG Icon */}
                  <svg
                    className="w-4 h-4 text-white shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    width={12.44}
                    height={16}
                  >
                    <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
