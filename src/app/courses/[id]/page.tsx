// app/courses/[id]/page.tsx
'use client';

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { LucideIcon } from "lucide-react";

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
  Clock,
  Calendar,
  BookOpen,
  Award,
  Users,
  ArrowLeft,
  CheckCircle,
  Target,
  Briefcase,
  Car
} from "lucide-react";

// Define the Course interface
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate' | 'artisan' | 'short_course' | 'nita_course' | 'driving_course';
  level?: string;
  featured?: boolean;
  category?: string;
  intake?: string;
  mode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Course details interface
interface CourseDetails {
  modules: string[];
  careerOpportunities: string[];
  entryRequirements: string[];
  duration: string;
  level: string;
  mode: string;
  intake: string;
}

// API response type
type CoursesResponse = Course[];

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;

  // Fetch all courses to find the specific one
  const {
    data: courses,
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

  const course = courses?.find((c: Course) => c.id === courseId);

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
    if (titleLower.includes("construction") || titleLower.includes("carpentry") || titleLower.includes("civil") || titleLower.includes("building")) return Hammer;
    if (titleLower.includes("fashion")) return Scissors;
    if (titleLower.includes("agriculture") || titleLower.includes("horticulture")) return Sprout;
    if (titleLower.includes("beauty") || titleLower.includes("hairdressing")) return Paintbrush;
    if (titleLower.includes("plumbing")) return Wrench;
    if (titleLower.includes("survey")) return Map;
    if (titleLower.includes("social work") || titleLower.includes("community")) return HandHeart;
    if (titleLower.includes("electrical")) return Zap;
    if (titleLower.includes("building technology")) return Building;
    if (titleLower.includes("driving")) return Car;
    return GraduationCap;
  };

  const getCourseTypeColor = (type: string): string => {
    switch (type) {
      case 'diploma':
        return 'bg-blue-100 text-blue-800';
      case 'certificate':
        return 'bg-green-100 text-green-800';
      case 'artisan':
        return 'bg-orange-100 text-orange-800';
      case 'short_course':
        return 'bg-purple-100 text-purple-800';
      case 'nita_course':
        return 'bg-red-100 text-red-800';
      case 'driving_course':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Generate sample course details based on the course type and title
  const getCourseDetails = (course: Course): CourseDetails => {
    const titleLower = course.title.toLowerCase();
    const isICT = titleLower.includes("information") || titleLower.includes("computer") || titleLower.includes("ict");
    const isEngineering = titleLower.includes("engineering") || titleLower.includes("electrical") || titleLower.includes("civil");
    const isBeauty = titleLower.includes("beauty") || titleLower.includes("fashion") || titleLower.includes("hairdressing");
    const isAgriculture = titleLower.includes("agriculture") || titleLower.includes("horticulture");
    const isOffice = titleLower.includes("office") || titleLower.includes("secretarial");
    const isDriving = course.type === 'driving_course';
    const isNita = course.type === 'nita_course';
    const isShort = course.type === 'short_course';

    let modules: string[] = [];
    let careerOpportunities: string[] = [];
    let entryRequirements: string[] = [];

    // Generate modules based on course type and content
    if (isDriving) {
      modules = [
        "Highway Code & Traffic Rules",
        "Vehicle Controls & Operations",
        "Defensive Driving Techniques",
        "Road Safety & Emergency Procedures",
        "Vehicle Maintenance Basics",
        "Parking & Maneuvering",
        "Weather Driving Conditions",
        "Practical Driving Tests"
      ];
      careerOpportunities = [
        "Private Driver",
        "Commercial Driver",
        "Delivery Driver",
        "Taxi/Uber Driver",
        "Truck Driver",
        "Bus Driver"
      ];
    } else if (isNita) {
      if (titleLower.includes("computer")) {
        modules = [
          "Computer Hardware & Software",
          "Office Applications (MS Office)",
          "Data Entry & Management",
          "Internet & Email Usage",
          "Computer Maintenance",
          "Troubleshooting Techniques",
          "Digital Communication",
          "File Management Systems"
        ];
        careerOpportunities = [
          "Computer Operator",
          "Data Entry Clerk",
          "Office Assistant",
          "IT Support Technician",
          "Administrative Assistant"
        ];
      } else if (titleLower.includes("electrical")) {
        modules = [
          "Electrical Theory & Principles",
          "Wiring Installation Techniques",
          "Safety Procedures & Regulations",
          "Electrical Tools & Equipment",
          "Circuit Testing & Troubleshooting",
          "Electrical Codes & Standards",
          "Motor Controls",
          "Practical Workshop Training"
        ];
        careerOpportunities = [
          "Electrical Wireman",
          "Maintenance Electrician",
          "Installation Technician",
          "Electrical Assistant",
          "Electrical Contractor"
        ];
      } else {
        // Generic NITA course modules
        modules = [
          "Trade Theory & Principles",
          "Practical Skills Training",
          "Safety & Health Procedures",
          "Tools & Equipment Usage",
          "Quality Control Standards",
          "Workshop Practice",
          "Industry Standards",
          "Professional Skills"
        ];
        careerOpportunities = [
          "Skilled Tradesperson",
          "Technical Assistant",
          "Workshop Technician",
          "Maintenance Worker",
          "Quality Inspector"
        ];
      }
    } else if (isShort || course.type === 'short_course') {
      if (titleLower.includes("food")) {
        modules = [
          "Food Safety & Hygiene",
          "Basic Cooking Techniques",
          "Menu Planning",
          "Customer Service",
          "Food Preparation",
          "Kitchen Management",
          "Nutrition Basics",
          "Restaurant Operations"
        ];
        careerOpportunities = [
          "Food Service Worker",
          "Kitchen Assistant",
          "Waiter/Waitress",
          "Restaurant Supervisor",
          "Catering Assistant"
        ];
      } else if (titleLower.includes("office")) {
        modules = [
          "Office Procedures",
          "Business Communication",
          "Record Keeping",
          "Customer Relations",
          "Computer Applications",
          "Filing Systems",
          "Phone Etiquette",
          "Administrative Tasks"
        ];
        careerOpportunities = [
          "Office Assistant",
          "Receptionist",
          "Data Entry Clerk",
          "Administrative Support",
          "Customer Service Representative"
        ];
      } else {
        modules = [
          "Introduction to Field",
          "Basic Techniques",
          "Safety Procedures",
          "Practical Applications",
          "Industry Overview",
          "Skills Development",
          "Professional Practice",
          "Assessment & Evaluation"
        ];
        careerOpportunities = [
          "Entry-Level Technician",
          "Assistant Worker",
          "Support Staff",
          "Trainee Position",
          "Apprentice"
        ];
      }
    } else if (isICT) {
      modules = [
        "Computer Applications & Office Suites",
        "Programming Fundamentals",
        "Database Management Systems",
        "Web Development & Design",
        "Networking Basics",
        "System Administration",
        "Project Management",
        "Digital Literacy & Communication"
      ];
      careerOpportunities = [
        "ICT Support Specialist",
        "Web Developer",
        "Database Administrator",
        "System Administrator",
        "Network Technician",
        "Software Developer",
        "IT Project Coordinator"
      ];
    } else if (isEngineering) {
      modules = [
        "Engineering Mathematics",
        "Technical Drawing & CAD",
        "Materials Science",
        "Circuit Analysis",
        "Power Systems",
        "Control Systems",
        "Project Design",
        "Safety & Standards"
      ];
      careerOpportunities = [
        "Engineering Technician",
        "Project Supervisor",
        "Maintenance Engineer",
        "Quality Control Inspector",
        "Design Assistant",
        "Installation Technician"
      ];
    } else if (isBeauty) {
      modules = [
        "Anatomy & Physiology",
        "Skincare & Facial Treatments",
        "Makeup Artistry",
        "Hair Styling & Cutting",
        "Nail Technology",
        "Business Management",
        "Customer Service",
        "Health & Safety"
      ];
      careerOpportunities = [
        "Beauty Therapist",
        "Makeup Artist",
        "Salon Manager",
        "Freelance Beauty Consultant",
        "Spa Therapist",
        "Beauty Product Sales"
      ];
    } else if (isAgriculture) {
      modules = [
        "Crop Production",
        "Soil Science",
        "Animal Husbandry",
        "Farm Management",
        "Agricultural Economics",
        "Pest & Disease Control",
        "Sustainable Farming",
        "Agricultural Extension"
      ];
      careerOpportunities = [
        "Agricultural Extension Officer",
        "Farm Manager",
        "Agricultural Consultant",
        "Crop Production Specialist",
        "Agricultural Sales Representative",
        "Rural Development Officer"
      ];
    } else if (isOffice) {
      modules = [
        "Business Communication",
        "Office Management",
        "Accounting Principles",
        "Human Resource Management",
        "Computer Applications",
        "Project Coordination",
        "Customer Relations",
        "Business Ethics"
      ];
      careerOpportunities = [
        "Administrative Assistant",
        "Office Manager",
        "Executive Secretary",
        "Customer Service Representative",
        "Data Entry Specialist",
        "Project Coordinator"
      ];
    } else {
      // Default modules for other courses
      modules = [
        "Foundation Studies",
        "Core Principles",
        "Practical Skills",
        "Industry Applications",
        "Project Work",
        "Professional Development",
        "Safety & Standards",
        "Communication Skills"
      ];
      careerOpportunities = [
        "Industry Technician",
        "Specialist Worker",
        "Supervisor",
        "Independent Contractor",
        "Quality Controller",
        "Maintenance Specialist"
      ];
    }

    // Entry requirements based on course level and type
    if (isDriving) {
      entryRequirements = [
        "Minimum age of 18 years",
        "Valid national ID or passport",
        "Medical certificate of fitness",
        "Basic literacy skills",
        "Good eyesight (with or without glasses)"
      ];
    } else if (isNita) {
      entryRequirements = [
        "Kenya Certificate of Primary Education (KCPE)",
        "Basic literacy and numeracy skills",
        "Interest in technical/vocational training",
        "Physical fitness for practical work"
      ];
    } else if (isShort || course.type === 'short_course') {
      entryRequirements = [
        "Basic literacy and numeracy skills",
        "Interest in the chosen field",
        "No formal educational requirements",
        "Willingness to learn practical skills"
      ];
    } else if (course.type === 'diploma') {
      entryRequirements = [
        "Kenya Certificate of Secondary Education (KCSE) with minimum grade D+ (Plus)",
        "Relevant Certificate from a recognized institution",
        "Mature entry: Minimum 3 years work experience in related field",
        "Good command of English language"
      ];
    } else if (course.type === 'certificate') {
      entryRequirements = [
        "Kenya Certificate of Secondary Education (KCSE) with minimum grade D (Plain)",
        "Kenya Certificate of Primary Education (KCPE)",
        "Basic literacy and numeracy skills",
        "Interest in the chosen field of study"
      ];
    } else if (course.type === 'artisan') {
      entryRequirements = [
        "Kenya Certificate of Primary Education (KCPE)",
        "Basic literacy and numeracy skills",
        "Physical fitness for practical work",
        "Interest in hands-on technical training"
      ];
    } else {
      entryRequirements = [
        "Basic educational background",
        "Interest in the field",
        "Willingness to learn",
        "Good communication skills"
      ];
    }

    // Determine level and other details
    let level = course.level || '';
    let mode = 'Full-time';
    let intake = 'January, May & September';

    if (isDriving) {
      level = 'Basic';
      mode = 'Flexible scheduling';
      intake = 'Any time';
    } else if (isNita) {
      level = course.level || 'NITA Certified';
      mode = 'Full-time';
      intake = 'Monthly';
    } else if (isShort) {
      level = course.level || 'Short Course';
      mode = 'Part-time/Full-time';
      intake = 'Quarterly';
    }

    return {
      modules,
      careerOpportunities,
      entryRequirements,
      duration: course.duration,
      level,
      mode,
      intake
    };
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Course</h1>
          <p className="text-gray-600 mb-6">Please check your connection and try again.</p>
          <Link href="/courses">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Back button skeleton */}
          <Skeleton className="h-10 w-32 mb-6" />
          
          {/* Header skeleton */}
          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              <Skeleton className="w-16 h-16 rounded-lg" />
              <div className="flex-1">
                <Skeleton className="h-8 w-96 mb-2" />
                <Skeleton className="h-6 w-20 mb-4" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          </div>
          
          {/* Content skeleton */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {Array.from({ length: 3 }, (_, i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <div className="space-y-2">
                    {Array.from({ length: 4 }, (_, j) => <Skeleton key={j} className="h-4 w-full" />)}
                  </div>
                </Card>
              ))}
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }, (_, i) => <Skeleton key={i} className="h-4 w-full" />)}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = getIcon(course.title, course.type);
  const courseDetails = getCourseDetails(course);

  // Get course type info for styling
  const getCourseTypeInfo = (type: string) => {
    switch (type) {
      case 'diploma':
        return { color: 'blue', label: 'Diploma Program' };
      case 'certificate':
        return { color: 'green', label: 'Certificate Program' };
      case 'artisan':
        return { color: 'orange', label: 'Artisan Program' };
      case 'short_course':
        return { color: 'purple', label: 'Short Course' };
      case 'nita_course':
        return { color: 'red', label: 'NITA Course' };
      case 'driving_course':
        return { color: 'indigo', label: 'Driving Course' };
      default:
        return { color: 'gray', label: 'Course' };
    }
  };

  const typeInfo = getCourseTypeInfo(course.type);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/courses">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </Link>

        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className={`w-16 h-16 bg-${typeInfo.color}-500 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <IconComponent className="text-white w-8 h-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {course.title}
                </h1>
                <Badge className={`${getCourseTypeColor(course.type)} capitalize`}>
                  {typeInfo.label}
                </Badge>
              </div>
              <p className="text-xl text-gray-600 mb-4 max-w-4xl">
                {course.description}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Modules */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BookOpen className={`w-5 h-5 text-${typeInfo.color}-600`} />
                  {course.type === 'driving_course' ? 'Training Modules' : 'Course Modules'}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid md:grid-cols-2 gap-3">
                  {courseDetails.modules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className={`w-5 h-5 text-${typeInfo.color}-600 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-800">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className={`w-5 h-5 text-${typeInfo.color}-600`} />
                  Career Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid md:grid-cols-2 gap-3">
                  {courseDetails.careerOpportunities.map((career, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 bg-${typeInfo.color}-50 rounded-lg`}>
                      <Target className={`w-5 h-5 text-${typeInfo.color}-600 flex-shrink-0`} />
                      <span className="text-gray-800">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Entry Requirements */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className={`w-5 h-5 text-${typeInfo.color}-600`} />
                  Entry Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  {courseDetails.entryRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Course Info Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500">Duration</span>
                      <p className="font-semibold">{courseDetails.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500">Level</span>
                      <p className="font-semibold">{courseDetails.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500">Mode of Study</span>
                      <p className="font-semibold">{courseDetails.mode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500">Intake</span>
                      <p className="font-semibold">{courseDetails.intake}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application CTA */}
            <Card className={`p-6 bg-${typeInfo.color}-50 border-${typeInfo.color}-200`}>
              <CardHeader className="px-0 pt-0">
                <CardTitle className={`text-xl text-${typeInfo.color}-900`}>Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className={`text-${typeInfo.color}-700 mb-4`}>
                  Take the first step towards your career in {course.title.toLowerCase()}.
                </p>
                <div className="space-y-3">
                  <Link href="/admissions" className="block">
                    <Button className={`w-full bg-${typeInfo.color}-600 hover:bg-${typeInfo.color}-700`}>
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className={`w-full border-${typeInfo.color}-600 text-${typeInfo.color}-600 hover:bg-${typeInfo.color}-600 hover:text-white`}>
                      Get More Information
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 mb-4">
                  Our admissions team is here to help you with any questions about this course.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
                  <p><strong>Email:</strong> admissions@kongonitechnical.ac.ke</p>
                  <p><strong>Office Hours:</strong> Mon-Fri, 8AM-5PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Courses */}
        {courses && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter(c => c.type === course.type && c.id !== course.id)
                .slice(0, 3)
                .map((relatedCourse) => {
                  const RelatedIcon = getIcon(relatedCourse.title, relatedCourse.type);
                  const relatedTypeInfo = getCourseTypeInfo(relatedCourse.type);
                  return (
                    <Card key={relatedCourse.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 bg-${relatedTypeInfo.color}-200 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <RelatedIcon className={`text-${relatedTypeInfo.color}-600 w-5 h-5`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                            {relatedCourse.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {relatedCourse.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className={`text-${relatedTypeInfo.color}-600 font-medium text-sm`}>
                              {relatedCourse.duration}
                            </span>
                            <Link href={`/courses/${relatedCourse.id}`}>
                              <Button size="sm" variant="outline">
                                View Course
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
      </div>
    </div>
  );
}