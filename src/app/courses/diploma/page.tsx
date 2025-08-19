// app/courses/diploma/page.tsx
'use client';

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
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
  Search,
  Clock,
  ArrowLeft,
  Award,
  Star
} from "lucide-react";

// Define the Course interface
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate';
  featured?: boolean;
}

type CoursesResponse = Course[];

export default function DiplomaCoursesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch diploma courses only
  const {
    data: diplomaCourses,
    isLoading,
    error,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses", { type: "diploma" }],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses?type=diploma");
      if (!response.ok) throw new Error("Failed to fetch diploma courses");
      return response.json();
    },
  });

  // Filter courses by search term
  const filteredCourses = useMemo((): Course[] => {
    if (!diplomaCourses) return [];
    
    if (searchTerm) {
      return diplomaCourses.filter((course: Course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return diplomaCourses;
  }, [diplomaCourses, searchTerm]);

  const getIcon = (title: string): LucideIcon => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("mechanical") || titleLower.includes("electrical")) return Settings;
    if (titleLower.includes("information") || titleLower.includes("computer") || titleLower.includes("ict")) return Laptop;
    if (titleLower.includes("business") || titleLower.includes("office") || titleLower.includes("human resource")) return TrendingUp;
    if (titleLower.includes("hotel") || titleLower.includes("hospitality") || titleLower.includes("food")) return Utensils;
    if (titleLower.includes("nursing") || titleLower.includes("health")) return Heart;
    if (titleLower.includes("motor") || titleLower.includes("automotive")) return Wrench;
    if (titleLower.includes("construction") || titleLower.includes("carpentry") || titleLower.includes("civil") || titleLower.includes("building")) return Hammer;
    if (titleLower.includes("fashion")) return Scissors;
    if (titleLower.includes("agriculture") || titleLower.includes("horticulture")) return Sprout;
    if (titleLower.includes("beauty") || titleLower.includes("hairdressing")) return Paintbrush;
    if (titleLower.includes("plumbing")) return Wrench;
    if (titleLower.includes("survey")) return Map;
    if (titleLower.includes("social work") || titleLower.includes("community")) return HandHeart;
    if (titleLower.includes("electrical")) return Zap;
    if (titleLower.includes("building technology")) return Building;
    return GraduationCap;
  };

  const getIconColor = (index: number): string => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"];
    return colors[index % colors.length];
  };

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Diploma Courses</h1>
          <p className="text-gray-600">Please check your connection and try again.</p>
          <div className="mt-6 space-x-4">
            <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
              Retry
            </Button>
            <Link href="/courses">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Back button skeleton */}
          <Skeleton className="h-10 w-32 mb-6" />
          
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-128 mx-auto" />
          </div>
          
          {/* Search skeleton */}
          <div className="mb-8">
            <Skeleton className="h-10 w-full max-w-md mx-auto" />
          </div>
          
          {/* Courses grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start space-x-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-8 w-24" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/courses">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Courses
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Diploma Programs
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Our diploma programs offer comprehensive, in-depth training in specialized fields. These Level 6 programs typically run for 2-3 years and provide advanced skills for professional careers and higher education pathways.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2-3 Years Duration</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>Level 6 Qualification</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>University Pathway</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search diploma programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCourses.length}</span> diploma program{filteredCourses.length !== 1 ? 's' : ''}
            {searchTerm && (
              <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course: Course, index: number) => {
              const IconComponent = getIcon(course.title);
              return (
                <Card key={course.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${getIconColor(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      {/* Course Type Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-blue-100 text-blue-800 text-xs">
                          Diploma
                        </Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                      
                      {/* Course Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      
                      {/* Course Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {course.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-semibold">
                          Level 6
                        </span>
                        <div className="flex gap-2">
                          <Link href={`/courses/${course.id}`}>
                            <Button 
                              size="sm" 
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          // No results state
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No diploma programs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms to find what you're looking for.
              </p>
              <Button 
                onClick={() => setSearchTerm("")}
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Advance Your Career with a Diploma
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our diploma programs provide comprehensive education and advanced skills training. With strong industry connections and university transfer opportunities, you'll be well-prepared for professional success.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply for Diploma Program
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get Program Information
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}