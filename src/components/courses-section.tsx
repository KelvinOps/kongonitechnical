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
  Building
} from "lucide-react";

// Define the Course interface to replace the shared schema import
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate' | 'artisan';
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

  const getIcon = (title: string): LucideIcon => {
    const titleLower = title.toLowerCase();
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
    return GraduationCap;
  };

  const getIconColor = (index: number): string => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500"];
    return colors[index % colors.length];
  };

  // ✅ Error fallback
  if (diplomaError || certificateError || artisanError) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Courses</h2>
        <p className="text-gray-600">Please check your connection or try again later.</p>
      </section>
    );
  }

  // ✅ Loading fallback
  if (isDiplomaLoading || isCertificateLoading || isArtisanLoading) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          {/* Three sections skeleton */}
          {Array.from({ length: 3 }, (_, sectionIndex) => (
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

  // ✅ Success state - Display featured courses only
  return (
    <section id="academics" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most sought-after diploma, certificate, and artisan programs designed to launch your career
          </p>
        </div>

        {/* Diploma Programs - Only show if we have featured courses */}
        {diplomaCourses && diplomaCourses.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Featured Diploma Programs
              </h3>
              <Link href="/courses/diploma">
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  View All Diplomas
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {diplomaCourses.map((course, index) => {
                const IconComponent = getIcon(course.title);
                return (
                  <Card key={course.id} className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
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
                          <span className="text-blue-600 font-semibold">
                            {course.duration}
                          </span>
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
        )}

        {/* Certificate Programs - Only show if we have featured courses */}
        {certificateCourses && certificateCourses.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Featured Certificate Programs
              </h3>
              <Link href="/courses/certificate">
                <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                  View All Certificates
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {certificateCourses.map((course, index) => {
                const IconComponent = getIcon(course.title);
                return (
                  <Card key={course.id} className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-green-500">
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
                          <span className="text-green-600 font-semibold">
                            {course.duration}
                          </span>
                          <Link href={`/courses/${course.id}`}>
                            <Button variant="link" className="text-green-600 hover:text-green-800 font-medium p-0">
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
        )}

        {/* Artisan Programs - Only show if we have featured courses */}
        {artisanCourses && artisanCourses.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Featured Artisan Programs
              </h3>
              <Link href="/courses/artisan">
                <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
                  View All Artisan Programs
                </Button>
              </Link>
            </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {artisanCourses.map((course, index) => {
                const IconComponent = getIcon(course.title);
                return (
                  <Card key={course.id} className="p-6 hover:shadow-xl transition-shadow border-l-4 border-l-orange-500">
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
                          <span className="text-orange-600 font-semibold">
                            {course.duration}
                          </span>
                          <Link href={`/courses/${course.id}`}>
                            <Button variant="link" className="text-orange-600 hover:text-orange-800 font-medium p-0">
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
        )}

        {/* Call to Action */}
        <div className="text-center mt-4">
          <Link href="/courses">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Explore All Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}