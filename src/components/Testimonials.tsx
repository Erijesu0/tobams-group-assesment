// src/components/Testimonials.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/Testimonials/Aisha yusuf.png",
    content:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    id: 2,
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/Testimonials/John Davies.png",
    content:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    id: 3,
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/Testimonials/Chinonso Nwankwo.png",
    content:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    id: 4,
    name: "Zoe Mantis",
    role: "Founder, Alpha Group",
    avatar: "/Testimonials/Zoe Mantis.jpg",
    content:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch!",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    avatar: "/Testimonials/Aisha yusuf.png",
    content:
      "Their training programs drastically improved our team's productivity and operational clarity. The instructors were patient, structured, and deeply knowledgeable.",
  },
];

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Get 3 active cards for display
  const visibleTestimonials = [
    testimonialsData[startIndex],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
    testimonialsData[(startIndex + 2) % testimonialsData.length],
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 text-[#1A0A10]">
      <div className="max-w-[1280px] mx-auto space-y-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1A0A10] tracking-tight">
          Testimonials
        </h2>

        {/* Desktop View: 3 Active Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border-l-2 border-[#EF4353] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center space-x-3 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1A0A10]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-xs text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View: Single Active Card */}
        <div className="block lg:hidden">
          <div className="bg-white border-l-2 border-[#EF4353] rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center space-x-3 pt-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={testimonialsData[startIndex].avatar}
                  alt={testimonialsData[startIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#1A0A10]">
                  {testimonialsData[startIndex].name}
                </h3>
                <p className="text-xs text-gray-500">
                  {testimonialsData[startIndex].role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {testimonialsData[startIndex].content}
            </p>
          </div>
        </div>

        {/* Bottom Carousel Navigation Controls */}
        <div className="flex justify-end items-center space-x-3 pt-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-lg bg-[#F04354]/10 hover:bg-[#F04354]/20 text-[#F04354] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#F04354] focus:ring-offset-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-lg bg-[#F04354]/10 hover:bg-[#571244]/20 text-[#F04354] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#F04354] focus:ring-offset-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
