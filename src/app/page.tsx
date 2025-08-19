// app/page.tsx 
import type { Metadata } from "next";
import { Suspense } from "react";

// Components
import HeroSlideshow from "@/components/hero-slideshow";
import ProgramsSection from "@/components/programs-section";
import VisionMissionSection from "@/components/vision-mission-section"; // NEW: Vision Mission Section
import AboutSection from "@/components/about-section";
import PrincipalNote from "@/components/principal-note";
import DepartmentsSection from "@/components/departments-section";
import CourseSearchSection from "@/components/course-search-section";
import CoursesSection from "@/components/courses-section";
import ImageGallery from "@/components/image-gallery";
import NewsSection from "@/components/news-section";
import PartnershipsSection from "@/components/partnerships-section";
// ❌ Removed unused: import StudentPortal from "@/components/student-portal";

// Loading components for better UX
const SectionSkeleton = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full" />
);

// Enhanced metadata for the homepage
export const metadata: Metadata = {
  title: "Home | Kongoni Technical Vocational Training College",
  description:
    "Welcome to Kongoni Technical Vocational Training College - Empowering trainees through digital innovation and technical excellence. Discover our programs, departments, and educational opportunities.",
  keywords:
    "technical college, vocational training, diploma courses, certificate courses, artisan programs, Kenya education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kongoni Technical Vocational Training College",
    description:
      "Empowering trainees through digital innovation and technical excellence",
    type: "website",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-0 bg-gray-50">
      {/* Hero Section - Critical above fold content */}
      <HeroSlideshow />

      {/* Main content sections with lazy loading for performance */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProgramsSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PrincipalNote />
      </Suspense>

      {/* NEW: Vision Mission Section - Added after Programs Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <VisionMissionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <DepartmentsSection />
      </Suspense>

      {/* Course Search Section - Added before the regular courses section */}
      <Suspense fallback={<SectionSkeleton />}>
        <CourseSearchSection />
      </Suspense>

      {/* Regular Courses Section - Now appears after the search section */}
      <Suspense fallback={<SectionSkeleton />}>
        <CoursesSection />
      </Suspense>

      {/* Image Gallery - Lazy load for performance */}
      <Suspense fallback={<SectionSkeleton />}>
        <ImageGallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PartnershipsSection />
      </Suspense>
    </div>
  );
}
