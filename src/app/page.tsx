// src/app/page.tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LmsBlock } from "@/components/LmsBlock";
import { Training } from "@/components/Training";
import { ManagementProgram } from "@/components/ManagementProgram";
import { TransformationHub } from "@/components/TransformationHub";
import { TrainingConsultant } from "@/components/TrainingConsultant";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LmsBlock />
      <Training />
      <ManagementProgram />
      <TransformationHub />
      <TrainingConsultant />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
