//src/components/courses-section.tsx

'use client';

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import {
  Laptop,
  Zap,
  TrendingUp,
  Utensils,
  Heart,
  Wrench,
  Hammer,
  Scissors,
  Sprout,
  Paintbrush,
  Map,
  HandHeart,
  GraduationCap,
  Settings,
  Building,
  Car,
  Clock,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate' | 'artisan' | 'short_course' | 'nita_course' | 'driving_course';
  level?: string;
  featured?: boolean;
}

type CoursesResponse = Course[];

export default function CoursesSection() {
  const { data: diplomaCourses, isLoading: isDiplomaLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "diploma", featured: "true", limit: "4" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=diploma&featured=true&limit=4");
        if (!response.ok) throw new Error("Failed to fetch diploma courses");
        return response.json();
      },
    });

  const { data: certificateCourses, isLoading: isCertificateLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "certificate", featured: "true", limit: "4" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=certificate&featured=true&limit=4");
        if (!response.ok) throw new Error("Failed to fetch certificate courses");
        return response.json();
      },
    });

  const { data: artisanCourses, isLoading: isArtisanLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "artisan", featured: "true", limit: "4" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=artisan&featured=true&limit=4");
        if (!response.ok) throw new Error("Failed to fetch artisan courses");
        return response.json();
      },
    });

  const { data: shortCourses, isLoading: isShortLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "short_course", limit: "6" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=short_course&limit=6");
        if (!response.ok) throw new Error("Failed to fetch short courses");
        return response.json();
      },
    });

  const { data: nitaCourses, isLoading: isNitaLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "nita_course", limit: "4" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=nita_course&limit=4");
        if (!response.ok) throw new Error("Failed to fetch NITA courses");
        return response.json();
      },
    });

  const { data: drivingCourses, isLoading: isDrivingLoading } =
    useQuery<CoursesResponse>({
      queryKey: ["/api/courses", { type: "driving_course", limit: "2" }],
      queryFn: async (): Promise<CoursesResponse> => {
        const response = await fetch("/api/courses?type=driving_course&limit=2");
        if (!response.ok) throw new Error("Failed to fetch driving courses");
        return response.json();
      },
    });

  const isLoading =
    isDiplomaLoading ||
    isCertificateLoading ||
    isArtisanLoading ||
    isShortLoading ||
    isNitaLoading ||
    isDrivingLoading;

  const getIcon = (title: string, type?: string): LucideIcon => {
    const t = title.toLowerCase();
    if (type === 'driving_course') return Car;
    if (type === 'nita_course') return Settings;
    if (type === 'short_course') return Clock;
    if (t.includes("mechanical") || t.includes("electrical")) return Settings;
    if (t.includes("information") || t.includes("computer") || t.includes("ict")) return Laptop;
    if (t.includes("business") || t.includes("office") || t.includes("human resource")) return TrendingUp;
    if (t.includes("hotel") || t.includes("hospitality") || t.includes("food")) return Utensils;
    if (t.includes("nursing") || t.includes("health")) return Heart;
    if (t.includes("motor") || t.includes("automotive")) return Wrench;
    if (t.includes("construction") || t.includes("carpentry") || t.includes("civil") || t.includes("building") || t.includes("masonry")) return Hammer;
    if (t.includes("fashion") || t.includes("garment") || t.includes("dressmaking")) return Scissors;
    if (t.includes("agriculture") || t.includes("horticulture")) return Sprout;
    if (t.includes("beauty") || t.includes("hairdressing")) return Paintbrush;
    if (t.includes("plumbing")) return Wrench;
    if (t.includes("survey")) return Map;
    if (t.includes("social work") || t.includes("community")) return HandHeart;
    if (t.includes("electrical")) return Zap;
    if (t.includes("building technology")) return Building;
    if (t.includes("driving")) return Car;
    return GraduationCap;
  };

  const getIconColor = (index: number): string => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"];
    return colors[index % colors.length];
  };

  const getCourseTypeInfo = (type: string) => {
    switch (type) {
      case 'diploma':
        return { label: 'Diploma Programs', navPath: '/courses/diploma', description: 'Level 6 qualifications' };
      case 'certificate':
        return { label: 'Certificate Programs', navPath: '/courses/certificate', description: 'Level 5 qualifications' };
      case 'artisan':
        return { label: 'Artisan Programs', navPath: '/courses/artisan', description: 'Level 4 & 3 hands-on training' };
      case 'short_course':
        return { label: 'Short Courses', navPath: '/courses/short-courses', description: 'Flexible skill-focused programs' };
      case 'nita_course':
        return { label: 'NITA Courses', navPath: '/courses/nita-courses', description: 'Industry-approved training' };
      case 'driving_course':
        return { label: 'Driving School', navPath: '/courses/driving-school', description: 'Comprehensive driving training' };
      default:
        return { label: 'Other Courses', navPath: '/courses', description: '' };
    }
  };

  if (isLoading) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="p-4 text-center">
                <Skeleton className="h-4 w-16 mx-auto mb-2" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </Card>
            ))}
          </div>
          {Array.from({ length: 3 }, (_, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <Skeleton className="h-8 w-48 mx-auto mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {Array.from({ length: 4 }, (_, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-start space-x-4">
                      <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Render a single course-type section — returns null if no data to show
  const renderCourseSection = (courses: CoursesResponse | undefined, sectionType: string) => {
    if (!courses || courses.length === 0) return null;

    const typeInfo = getCourseTypeInfo(sectionType);
    const gridCols = sectionType === 'short_course' ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

    return (
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{typeInfo.label}</h3>
          <p className="text-gray-600 mb-6">{typeInfo.description}</p>
          <Link href={typeInfo.navPath}>
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              View All {typeInfo.label} →
            </Button>
          </Link>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 max-w-7xl mx-auto`}>
          {courses.map((course, index) => {
            const IconComponent = getIcon(course.title, course.type);
            return (
              <Card key={course.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${getIconColor(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {course.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-blue-600 font-semibold">{course.duration}</span>
                        {course.level && (
                          <span className="text-xs text-gray-500">{course.level}</span>
                        )}
                      </div>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="link" className="text-blue-600 hover:text-blue-800 font-medium p-0">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  // Check if we have any data at all to show the section
  const hasAnyCourses =
    (diplomaCourses && diplomaCourses.length > 0) ||
    (certificateCourses && certificateCourses.length > 0) ||
    (artisanCourses && artisanCourses.length > 0) ||
    (shortCourses && shortCourses.length > 0) ||
    (nitaCourses && nitaCourses.length > 0) ||
    (drivingCourses && drivingCourses.length > 0);

  if (!hasAnyCourses) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Our Academic Programs</h2>
        <p className="text-gray-500">Course information is currently unavailable. Please check back soon.</p>
        <div className="mt-6">
          <Link href="/admissions">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="academics" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to launch your career across diploma, certificate, artisan, and short course offerings.
          </p>
        </div>

        {/* Course Type Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto">
          {[
            { href: "/courses/diploma", label: "Diploma Programs", sub: "Level 6", color: "border-l-blue-500" },
            { href: "/courses/certificate", label: "Certificate Programs", sub: "Level 5", color: "border-l-green-500" },
            { href: "/courses/artisan", label: "Artisan Programs", sub: "Level 4 & 3", color: "border-l-orange-500" },
            { href: "/courses/short-courses", label: "Short Courses", sub: "Flexible", color: "border-l-purple-500" },
            { href: "/courses/nita-courses", label: "NITA Courses", sub: "Industry-Approved", color: "border-l-red-500" },
            { href: "/courses/driving-school", label: "Driving Courses", sub: "Professional", color: "border-l-indigo-500" },
          ].map(({ href, label, sub, color }) => (
            <Link href={href} key={href}>
              <Card className={`p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 ${color}`}>
                <div className="text-sm text-gray-600">{label}</div>
                <div className="text-xs text-gray-400 mt-1">{sub}</div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Course Sections */}
        {renderCourseSection(diplomaCourses, 'diploma')}
        {renderCourseSection(certificateCourses, 'certificate')}
        {renderCourseSection(artisanCourses, 'artisan')}
        {renderCourseSection(shortCourses, 'short_course')}
        {renderCourseSection(nitaCourses, 'nita_course')}
        {renderCourseSection(drivingCourses, 'driving_course')}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have launched successful careers through our comprehensive training programs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Explore All Courses
              </Button>
            </Link>
            <Link href="/admissions">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}