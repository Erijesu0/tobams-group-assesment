import Image from "next/image";

interface TrainingCategory {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

const trainingData: TrainingCategory[] = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    imageSrc: "/corporate-training.jpg",
    imageAlt: "Corporate Trainings presentation",
  },
  {
    title: "Personalised Individual Training",
    description:
      "Embark on a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      "Leadership Training",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    imageSrc: "/individual-training.jpg",
    imageAlt: "Personalised Individual Training workshop",
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we believe in the power of continuous learning. Our capacity building programs are designed to strengthen skillsets and drive performance, ensuring individuals and organisations remain competitive in their fields.",
    bullets: [
      "Skill Gap Analysis",
      "Customised Workshops",
      "Performance Coaching",
      "Organizational Development",
    ],
    imageSrc: "/capacity-development.jpg",
    imageAlt: "Capacity Development Programs session",
  },
];

function ThunderIcon() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M7.5 0.5L1 9.5H6.5L5.5 15.5L12 6.5H6.5L7.5 0.5Z"
        fill="#1D0617"
        stroke="#480F39"
        strokeWidth="1.52"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Training() {
  return (
    <section className="w-full bg-white py-[40px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px] lg:gap-[60px]">
        {trainingData.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={item.title}
              className={`flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-start lg:items-center gap-6 lg:gap-16`}
            >
              {/* Heading: Placed at the top on mobile */}
              <h2 className="block lg:hidden w-full font-heading text-[22px] sm:text-[26px] font-semibold leading-[125%] tracking-normal text-[#151515] break-words">
                {item.title}
              </h2>

              {/* Image Block: Renders immediately under heading on mobile, side-by-side on desktop */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-t-[24px] rounded-b-[8px] lg:rounded-[16px] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* Heading: Hidden on mobile (rendered above image), visible on desktop */}
                <h2 className="hidden lg:block font-heading text-[34px] md:text-[40px] font-semibold leading-[150%] tracking-[0.03em] text-[#151515]">
                  {item.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[150%] tracking-normal text-[#696969]">
                  {item.description}
                </p>

                {/* Bullet Points with Thunder Vector Symbol */}
                <ul className="flex flex-col gap-3 pt-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <ThunderIcon />
                      <span className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[150%] tracking-normal text-[#696969]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
