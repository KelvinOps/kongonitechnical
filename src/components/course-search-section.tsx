'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronDown, Search, FileText, GraduationCap, Award, Briefcase } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Define interfaces
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate' | 'artisan';
  level?: string;
  featured?: boolean;
}

type CoursesResponse = Course[];

// Course search section component
export default function CourseSearchSection() {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedTerm, setSelectedTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  // Fetch all courses for search
  const {
    data: allCourses,
    isLoading,
    error,
  } = useQuery<CoursesResponse>({
    queryKey: ["/api/courses"],
    queryFn: async (): Promise<CoursesResponse> => {
      const response = await fetch("/api/courses");
      if (!response.ok) throw new Error("Failed to fetch courses");
      return response.json();
    },
  });

  // Department options based on your courses
  const departments = [
    { value: "", label: "Select Department" },
    { value: "engineering", label: "Engineering & Technology" },
    { value: "ict", label: "Information Communication Technology" },
    { value: "business", label: "Business & Office Administration" },
    { value: "agriculture", label: "Agriculture & Extension" },
    { value: "beauty", label: "Beauty & Fashion" },
    { value: "construction", label: "Construction & Building" },
    { value: "automotive", label: "Automotive Technology" },
    { value: "hospitality", label: "Hospitality & Food Service" },
    { value: "community", label: "Social Work & Community Development" }
  ];

  // Level options
  const levels = [
    { value: "", label: "Select Level" },
    { value: "diploma", label: "Diploma (Level 6)" },
    { value: "certificate", label: "Certificate (Level 5)" },
    { value: "artisan", label: "Artisan (Level 3-4)" }
  ];

  // Term options
  const terms = [
    { value: "", label: "Select Term" },
    { value: "january", label: "January Intake" },
    { value: "may", label: "May Intake" },
    { value: "september", label: "September Intake" }
  ];

  // Filter courses based on selections
  const filteredCourses = allCourses?.filter(course => {
    const titleLower = course.title.toLowerCase();
    let matchesDepartment = true;
    let matchesLevel = true;

    if (selectedDepartment) {
      matchesDepartment = false;
      switch (selectedDepartment) {
        case 'engineering':
          matchesDepartment = titleLower.includes('engineering') || titleLower.includes('electrical') || titleLower.includes('mechanical');
          break;
        case 'ict':
          matchesDepartment = titleLower.includes('information') || titleLower.includes('computer') || titleLower.includes('ict');
          break;
        case 'business':
          matchesDepartment = titleLower.includes('business') || titleLower.includes('office') || titleLower.includes('human resource') || titleLower.includes('accountancy') || titleLower.includes('supply chain');
          break;
        case 'agriculture':
          matchesDepartment = titleLower.includes('agriculture') || titleLower.includes('horticulture');
          break;
        case 'beauty':
          matchesDepartment = titleLower.includes('beauty') || titleLower.includes('fashion') || titleLower.includes('hairdressing');
          break;
        case 'construction':
          matchesDepartment = titleLower.includes('construction') || titleLower.includes('building') || titleLower.includes('civil') || titleLower.includes('masonry') || titleLower.includes('welding');
          break;
        case 'automotive':
          matchesDepartment = titleLower.includes('automotive') || titleLower.includes('motor');
          break;
        case 'hospitality':
          matchesDepartment = titleLower.includes('food') || titleLower.includes('hospitality') || titleLower.includes('hotel');
          break;
        case 'community':
          matchesDepartment = titleLower.includes('social work') || titleLower.includes('community');
          break;
      }
    }

    if (selectedLevel) {
      matchesLevel = course.type === selectedLevel;
    }

    return matchesDepartment && matchesLevel;
  }) || [];

  const handleSearchCourses = () => {
    // Show loading toast first
    if (isLoading) {
      toast.info("Loading courses...");
      return;
    }

    // Handle API error
    if (error) {
      toast.error("Failed to load courses. Please try again.");
      return;
    }

    // Check if any filters are selected
    const hasFilters = selectedDepartment || selectedLevel || selectedTerm;
    
    if (!hasFilters) {
      toast.info("Please select at least one filter to search for courses.");
      return;
    }

    setShowResults(true);
    
    // Show results toast
    if (filteredCourses && filteredCourses.length > 0) {
      const courseWord = filteredCourses.length === 1 ? 'course' : 'courses';
      const departmentText = selectedDepartment ? departments.find(d => d.value === selectedDepartment)?.label : '';
      const levelText = selectedLevel ? levels.find(l => l.value === selectedLevel)?.label : '';
      
      let searchMessage = `Found ${filteredCourses.length} ${courseWord}`;
      if (departmentText || levelText) {
        searchMessage += ' in';
        if (departmentText) searchMessage += ` ${departmentText}`;
        if (levelText) searchMessage += ` ${levelText}`;
      }
      
      toast.success(searchMessage);
    } else {
      toast.info("No courses found matching your criteria. Try adjusting your filters or browse all courses.");
    }
  };

  const handleJoinNow = () => {
    try {
      // Show loading toast
      toast.info("Redirecting to admissions page...");
      
      // Navigate to admissions page
      router.push('/admissions');
      
      // Success toast will show after navigation
      setTimeout(() => {
        toast.success("Welcome to the admissions page!");
      }, 500);
    } catch {
      toast.error("Failed to navigate to admissions page. Please try again.");
    }
  };

  const handleApplicationProcedure = () => {
    try {
      // Create and trigger download
      const link = document.createElement('a');
      link.href = '/documents/application-procedure.pdf';
      link.download = 'application-procedure.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success toast
      toast.success("Application procedure document downloaded successfully!");
    } catch {
      // Show error toast if download fails
      toast.error("Failed to download application procedure. Please try again or contact support.");
    }
  };

  // Handle department change with toast feedback
  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    if (value && showResults) {
      // Reset results when changing filters after search
      setShowResults(false);
      toast.info("Filters updated. Click search to see new results.");
    }
  };

  // Handle level change with toast feedback
  const handleLevelChange = (value: string) => {
    setSelectedLevel(value);
    if (value && showResults) {
      // Reset results when changing filters after search
      setShowResults(false);
      toast.info("Filters updated. Click search to see new results.");
    }
  };

  // Handle term change with toast feedback
  const handleTermChange = (value: string) => {
    setSelectedTerm(value);
    if (value && showResults) {
      // Reset results when changing filters after search
      setShowResults(false);
      toast.info("Intake term selected. Click search to see updated results.");
    }
  };

  const getCourseIcon = (type: string) => {
    switch (type) {
      case 'diploma': return GraduationCap;
      case 'certificate': return Award;
      case 'artisan': return Briefcase;
      default: return FileText;
    }
  };

  const getCourseTypeColor = (type: string): string => {
    switch (type) {
      case 'diploma': return 'bg-blue-100 text-blue-800';
      case 'certificate': return 'bg-green-100 text-green-800';
      case 'artisan': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 relative">
      {/* Background Image with Overlay - Only for the search form area */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
             backgroundImage: `url('/images/searchcourse.jpg')`
          }}
        />
        
        {/* Gradient overlay for better background visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-cyan-700/45"></div>
        
        {/* Subtle geometric pattern overlay for added visual interest */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Application for Admission
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find and apply for your preferred course. Select your department, level, and preferred intake term to begin your journey with us.
            </p>
          </div>

          {/* Search Form - Enhanced with glassmorphism effect */}
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Department Dropdown */}
                <div className="relative">
                  <label className="block text-white text-sm font-semibold mb-3">
                    Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => handleDepartmentChange(e.target.value)}
                    className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm text-gray-800 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer text-lg font-medium shadow-lg hover:bg-white transition-all duration-200"
                  >
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value} className="bg-white text-gray-800">
                        {dept.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>

                {/* Level Dropdown */}
                <div className="relative">
                  <label className="block text-white text-sm font-semibold mb-3">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => handleLevelChange(e.target.value)}
                    className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm text-gray-800 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer text-lg font-medium shadow-lg hover:bg-white transition-all duration-200"
                  >
                    {levels.map((level) => (
                      <option key={level.value} value={level.value} className="bg-white text-gray-800">
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>

                {/* Term Dropdown */}
                <div className="relative">
                  <label className="block text-white text-sm font-semibold mb-3">
                    Term
                  </label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => handleTermChange(e.target.value)}
                    className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm text-gray-800 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer text-lg font-medium shadow-lg hover:bg-white transition-all duration-200"
                  >
                    {terms.map((term) => (
                      <option key={term.value} value={term.value} className="bg-white text-gray-800">
                        {term.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div className="text-center mb-8">
                <Button
                  onClick={handleSearchCourses}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl border border-cyan-400/50"
                  disabled={isLoading}
                >
                  <Search className="w-5 h-5 mr-2" />
                  {isLoading ? 'Loading...' : 'Search Courses'}
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleJoinNow}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-2xl border border-green-400/50"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Join Now
                </Button>
                <Button
                  onClick={handleApplicationProcedure}
                  className="bg-white/90 backdrop-blur-sm text-blue-800 hover:bg-white hover:text-blue-900 border-2 border-white/50 hover:border-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-2xl"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Application Procedure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results - Outside the background image area */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Show error message if API fails */}
          {error && (
            <div className="text-center mb-8">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
                <p>Failed to load courses. Please refresh the page or try again later.</p>
              </div>
            </div>
          )}

          {/* Search Results */}
          {showResults && filteredCourses && filteredCourses.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Found {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredCourses.slice(0, 6).map((course) => {
                  const IconComponent = getCourseIcon(course.type);
                  return (
                    <Card key={course.id} className="p-6 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 shadow-lg rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComponent className="text-white w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={`text-xs ${getCourseTypeColor(course.type)} capitalize shadow-sm font-medium`}>
                              {course.type}
                            </Badge>
                            <span className="text-sm text-gray-500 font-medium">{course.duration}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                            {course.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {course.description}
                          </p>
                          <Link href={`/courses/${course.id}`}>
                            <Button 
                              size="sm" 
                              className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 py-2.5"
                              onClick={() => toast.info(`Loading ${course.title} details...`)}
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              {filteredCourses.length > 6 && (
                <div className="text-center mt-8">
                  <Link href="/courses">
                    <Button 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-400/50"
                      onClick={() => toast.info("Loading all courses...")}
                    >
                      View All {filteredCourses.length} Courses
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* No Results Message */}
          {showResults && filteredCourses && filteredCourses.length === 0 && (
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-gray-200">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Courses Found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or view all available courses.
                </p>
                <Link href="/courses">
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg"
                    onClick={() => toast.info("Loading all available courses...")}
                  >
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}