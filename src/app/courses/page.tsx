'use client';

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Import Lucide React icons
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
  Briefcase,
  BookOpen,
  Car,
  Clock
} from "lucide-react";

// Define the Course interface to replace the shared schema import
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate' | 'artisan' | 'short_course' | 'nita_course' | 'driving_course';
  level?: string;
  featured?: boolean;
}

// API response type
type CoursesResponse = Course[];

export default function CoursesSection() {
  // ✅ Fetch only featured diploma courses (limit 4 for homepage)
  const {
    data: diplomaCourses,
    isLoading: isDiplomaLoading,
    error: diplomaError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "diploma", featured: "true", limit: "4" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=diploma&featured=true&limit=4");
      if (!response.ok) throw new Error("Failed to fetch featured diploma courses");
      return response.json();
    },
  });

  // ✅ Fetch only featured certificate courses (limit 4 for homepage)
  const {
    data: certificateCourses,
    isLoading: isCertificateLoading,
    error: certificateError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "certificate", featured: "true", limit: "4" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=certificate&featured=true&limit=4");
      if (!response.ok) throw new Error("Failed to fetch featured certificate courses");
      return response.json();
    },
  });

  // ✅ Fetch only featured artisan courses (limit 4 for homepage)
  const {
    data: artisanCourses,
    isLoading: isArtisanLoading,
    error: artisanError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "artisan", featured: "true", limit: "4" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=artisan&featured=true&limit=4");
      if (!response.ok) throw new Error("Failed to fetch featured artisan courses");
      return response.json();
    },
  });

  // ✅ Fetch featured short courses (limit 6 for homepage)
  const {
    data: shortCourses,
    isLoading: isShortLoading,
    error: shortError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "short_course", limit: "6" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=short_course&limit=6");
      if (!response.ok) throw new Error("Failed to fetch short courses");
      return response.json();
    },
  });

  // ✅ Fetch NITA courses (limit 4 for homepage)
  const {
    data: nitaCourses,
    isLoading: isNitaLoading,
    error: nitaError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "nita_course", limit: "4" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=nita_course&limit=4");
      if (!response.ok) throw new Error("Failed to fetch NITA courses");
      return response.json();
    },
  });

  // ✅ Fetch driving courses (limit 2 for homepage)
  const {
    data: drivingCourses,
    isLoading: isDrivingLoading,
    error: drivingError,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "driving_course", limit: "2" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=driving_course&limit=2");
      if (!response.ok) throw new Error("Failed to fetch driving courses");
      return response.json();
    },
  });

  const getIcon = (title: string, type?: string): LucideIcon => {
    const titleLower = title.toLowerCase();
    
    // Special handling for course types
    if (type === 'driving_course') return Car;
    if (type === 'nita_course') return Settings;
    if (type === 'short_course') return Clock;
    
    // Original icon mapping
    if (titleLower.includes("mechanical") || titleLower.includes("electrical")) return Settings;
    if (titleLower.includes("information") || titleLower.includes("computer") || titleLower.includes("ict")) return Laptop;
    if (titleLower.includes("business") || titleLower.includes("office") || titleLower.includes("human resource")) return TrendingUp;
    if (titleLower.includes("hotel") || titleLower.includes("hospitality") || titleLower.includes("food")) return Utensils;
    if (titleLower.includes("nursing") || titleLower.includes("health")) return Heart;
    if (titleLower.includes("motor") || titleLower.includes("automotive")) return Wrench;
    if (titleLower.includes("construction") || titleLower.includes("carpentry") || titleLower.includes("civil") || titleLower.includes("building") || titleLower.includes("masonry")) return Hammer;
    if (titleLower.includes("fashion") || titleLower.includes("garment") || titleLower.includes("dressmaking")) return Scissors;
    if (titleLower.includes("agriculture") || titleLower.includes("horticulture")) return Sprout;
    if (titleLower.includes("beauty") || titleLower.includes("hairdressing")) return Paintbrush;
    if (titleLower.includes("plumbing")) return Wrench;
    if (titleLower.includes("survey")) return Map;
    if (titleLower.includes("social work") || titleLower.includes("community")) return HandHeart;
    if (titleLower.includes("electrical")) return Zap;
    if (titleLower.includes("building technology")) return Building;
    if (titleLower.includes("welding")) return Settings;
    if (titleLower.includes("store keeping")) return Building;
    if (titleLower.includes("driving")) return Car;
    return GraduationCap;
  };

  const getIconColor = (index: number): string => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"];
    return colors[index % colors.length];
  };

  const getCourseTypeInfo = (type: string) => {
    switch (type) {
      case 'diploma':
        return { color: 'blue', label: 'Diploma Programs', navPath: '/courses/diploma', description: 'Level 6 qualifications' };
      case 'certificate':
        return { color: 'green', label: 'Certificate Programs', navPath: '/courses/certificate', description: 'Level 5 qualifications' };
      case 'artisan':
        return { color: 'orange', label: 'Artisan Programs', navPath: '/courses/artisan', description: 'Level 4 & 3 hands-on training' };
      case 'short_course':
        return { color: 'purple', label: 'Short Courses', navPath: '/courses/short-courses', description: 'Flexible skill-focused programs' };
      case 'nita_course':
        return { color: 'red', label: 'NITA Courses', navPath: '/courses/nita-courses', description: 'Industry-approved training' };
      case 'driving_course':
        return { color: 'indigo', label: 'Driving School', navPath: '/courses/driving-school', description: 'Comprehensive driving training' };
      default:
        return { color: 'gray', label: 'Other Courses', navPath: '/courses', description: '' };
    }
  };

  // ✅ Error fallback
  if (diplomaError || certificateError || artisanError || shortError || nitaError || drivingError) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Courses</h2>
        <p className="text-gray-600">Please check your connection or try again later.</p>
      </section>
    );
  }

  // ✅ Loading fallback
  if (isDiplomaLoading || isCertificateLoading || isArtisanLoading || isShortLoading || isNitaLoading || isDrivingLoading) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          {/* Statistics skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="p-4 text-center">
                <Skeleton className="h-8 w-8 mx-auto mb-2" />
                <Skeleton className="h-4 w-16 mx-auto" />
              </Card>
            ))}
          </div>
          
          {/* Six sections skeleton */}
          {Array.from({ length: 6 }, (_, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <Skeleton className="h-8 w-48 mx-auto mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {Array.from({ length: 4 }, (_, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-start space-x-4">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-20" />
                        </div>
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

  // Helper function to render course section
  const renderCourseSection = (courses: Course[] | undefined, sectionType: string) => {
    if (!courses || courses.length === 0) return null;
    
    const typeInfo = getCourseTypeInfo(sectionType);
    const gridCols = sectionType === 'short_course' ? 'lg:grid-cols-3' : 'lg:grid-cols-4';
    
    return (
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            {typeInfo.label}
          </h3>
          <p className="text-gray-600 mb-6">{typeInfo.description}</p>
          <Link href={typeInfo.navPath}>
            <Button variant="outline" size="lg" className={`text-${typeInfo.color}-600 border-${typeInfo.color}-600 hover:bg-${typeInfo.color}-600 hover:text-white`}>
              View All {typeInfo.label} →
            </Button>
          </Link>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 max-w-7xl mx-auto`}>
          {courses.map((course, index) => {
            const IconComponent = getIcon(course.title, course.type);
            return (
              <Card key={course.id} className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-${typeInfo.color}-500`}>
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
                        <span className={`text-${typeInfo.color}-600 font-semibold`}>
                          {course.duration}
                        </span>
                        {course.level && (
                          <span className="text-xs text-gray-500">
                            {course.level}
                          </span>
                        )}
                      </div>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="link" className={`text-${typeInfo.color}-600 hover:text-${typeInfo.color}-800 font-medium p-0`}>
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

  // ✅ Success state - Display featured courses only
  return (
    <section id="academics" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to launch your career across diploma, certificate, artisan, and short course offerings
          </p>
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto">
          <Link href="/courses/diploma">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-blue-500">
              <div className="text-sm text-gray-600">Diploma Programs</div>
              <div className="text-xs text-blue-500 mt-1">Level 6</div>
            </Card>
          </Link>
          <Link href="/courses/certificate">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-green-500">
              <div className="text-sm text-gray-600">Certificate Programs</div>
              <div className="text-xs text-green-500 mt-1">Level 5</div>
            </Card>
          </Link>
          <Link href="/courses/artisan">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-orange-500">
              <div className="text-sm text-gray-600">Artisan Programs</div>
              <div className="text-xs text-orange-500 mt-1">Level 4 & 3</div>
            </Card>
          </Link>
          <Link href="/courses/short-courses">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-purple-500">
              <div className="text-sm text-gray-600">Short Courses</div>
              <div className="text-xs text-purple-500 mt-1">Flexible</div>
            </Card>
          </Link>
          <Link href="/courses/nita-courses">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-red-500">
              <div className="text-sm text-gray-600">NITA Courses</div>
              <div className="text-xs text-red-500 mt-1">Industry-Approved</div>
            </Card>
          </Link>
          <Link href="/courses/driving-school">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-l-4 border-l-indigo-500">
              <div className="text-sm text-gray-600">Driving Courses</div>
              <div className="text-xs text-indigo-500 mt-1">Professional</div>
            </Card>
          </Link>
        </div>

        {/* Render all course sections */}
        {renderCourseSection(diplomaCourses, 'diploma')}
        {renderCourseSection(certificateCourses, 'certificate')}
        {renderCourseSection(artisanCourses, 'artisan')}
        {renderCourseSection(shortCourses, 'short_course')}
        {renderCourseSection(nitaCourses, 'nita_course')}
        {renderCourseSection(drivingCourses, 'driving_course')}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
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