// app/home/page.tsx

import HeroSlideshow from "@/components/hero-slideshow";
import ProgramsSection from "@/components/programs-section";
import PrincipalNote from "@/components/principal-note";
import DepartmentsSection from "@/components/departments-section";
import CoursesSection from "@/components/courses-section";
import ImageGallery from "@/components/image-gallery";
import NewsSection from "@/components/news-section";
import PartnershipsSection from "@/components/partnerships-section";
import StudentPortal from "@/components/student-portal";

export default function HomePage() {
  return (
    <div className="space-y-16 bg-gray-50">
      <HeroSlideshow />
      <ProgramsSection />
      <PrincipalNote />
      <DepartmentsSection />
      <CoursesSection />
      <ImageGallery />
      <NewsSection />
      <PartnershipsSection />
      <StudentPortal />
    </div>
  );
}
