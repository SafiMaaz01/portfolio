import { Suspense } from "react";
import {
  AboutSection,
  BlogSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections";

const SectionLoading = () => (
  <div className="w-full h-48 animate-pulse bg-muted/20 rounded-3xl mb-12" />
);

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<SectionLoading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <EducationSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <CertificationsSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default PortfolioContent;
