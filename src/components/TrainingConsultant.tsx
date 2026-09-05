// src/components/TrainingConsultant.tsx

export function TrainingConsultant() {
  const highlights = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="w-full bg-[#EAE3E8] py-16 px-4 md:px-8 lg:px-16 text-[#1A0A10]">
      <div className="max-w-[1280px] mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5C1D42] tracking-tight">
            Training The Consultant
          </h2>
          <p className="text-[#5C1D42] font-semibold text-sm sm:text-base">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-5xl">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
        </div>

        {/* Feature Grid Card (#571244) */}
        <div className="bg-[#571244] text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="bg-[#571244] hover:bg-[#430D34] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors inline-flex items-center space-x-2 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#571244] focus:ring-offset-2"
          >
            <span>Learn More</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
