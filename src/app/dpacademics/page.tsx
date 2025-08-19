// app/dpacademics/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  CheckCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Deputy Principal Academic Affairs | Kongoni Technical Vocational Training College",
  description: "Office of the Deputy Principal Academic Affairs - overseeing curriculum development, academic quality, and student academic excellence.",
  keywords: "deputy principal, academic affairs, curriculum, quality assurance, student success",
};

const academicFunctions = [
  {
    icon: BookOpen,
    title: "Curriculum Development",
    description: "Design and review of academic programs to meet industry standards and market demands."
  },
  {
    icon: GraduationCap,
    title: "Academic Quality Assurance",
    description: "Monitoring and maintaining high standards of academic delivery and assessment."
  },
  {
    icon: Users,
    title: "Faculty Development",
    description: "Training and capacity building for academic staff to enhance teaching effectiveness."
  },
  {
    icon: Award,
    title: "Student Assessment",
    description: "Coordination of examinations, assessments, and academic progression systems."
  },
  {
    icon: TrendingUp,
    title: "Academic Research",
    description: "Promoting research activities and innovation among staff and students."
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Planning and coordination of academic activities and institutional calendar."
  }
];

const achievements = [
  "Achieved 95% student completion rate across all programs",
  "Introduced 8 new industry-aligned courses in 2024",
  "Established partnerships with 15 industry leaders",
  "Implemented competency-based training approach",
  "Achieved 90% graduate employment rate within 6 months",
  "Obtained accreditation for 12 technical programs from NITA"
];

const departments = [
  {
    name: "Business Department",
    description: "Developing future leaders in commerce and entrepreneurship.",
    programs: ["Business Management", "Accounting", "Marketing", "Entrepreneurship", "Supply Chain Management"],
    hod: "Ms. Grace Mwangi",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Computing & Informatics Department", 
    description: "Empowering students with modern computing and digital skills.",
    programs: ["Computer Science", "Information Technology", "Software Development", "Cybersecurity", "Data Analytics"],
    hod: "Dr. Susan Wanjiru",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Building & Civil Engineering Department",
    description: "Training in structural design, construction, and surveying.",
    programs: ["Civil Engineering", "Building Construction", "Quantity Surveying", "Architectural Technology"],
    hod: "Eng. Patrick Mutua",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Electrical & Electronics Engineering Department",
    description: "Hands-on experience in electrical systems and installations.",
    programs: ["Electrical Engineering", "Electronics Engineering", "Telecommunications", "Power Systems"],
    hod: "Eng. Joseph Kipchoge",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Automotive & Mechanical Engineering Department",
    description: "Mastering vehicle diagnostics, repair, and maintenance.",
    programs: ["Mechanical Engineering", "Automotive Technology", "Welding & Fabrication", "Refrigeration Technology"],
    hod: "Eng. Michael Otieno",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Fashion Design and Cosmetics Department",
    description: "Creative training in fashion design, garment construction, and beauty techniques.",
    programs: ["Fashion Design", "Garment Construction", "Cosmetology", "Beauty Therapy", "Textile Design"],
    hod: "Ms. Sarah Akinyi",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Hospitality and Tourism Department",
    description: "Comprehensive training in hotel management, tourism operations, and customer service.",
    programs: ["Hotel Management", "Tourism Operations", "Food & Beverage", "Travel & Tours", "Event Management"],
    hod: "Mr. David Wanjiku",
    image: "/api/placeholder/400/300"
  },
  {
    name: "Agriculture Department",
    description: "Innovative farming techniques and agribusiness education.",
    programs: ["Agricultural Technology", "Agribusiness", "Animal Husbandry", "Horticulture", "Agricultural Engineering"],
    hod: "Dr. James Kiprotich",
    image: "/api/placeholder/400/300"
  }
];

const upcomingInitiatives = [
  {
    title: "Digital Learning Platform",
    description: "Implementation of comprehensive e-learning management system",
    timeline: "Q2 2025",
    status: "Development"
  },
  {
    title: "Industry Mentorship Program",
    description: "Connecting students with industry professionals for practical guidance",
    timeline: "Q1 2025",
    status: "Launch"
  },
  {
    title: "Research & Innovation Center",
    description: "Establishment of dedicated facility for student and faculty research",
    timeline: "Q3 2025",
    status: "Planning"
  }
];

export default function DPAcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Deputy Principal
                </h1>
                <h2 className="text-2xl md:text-3xl opacity-90 mb-6">
                  Academic Affairs
                </h2>
                <p className="text-xl opacity-80 leading-relaxed">
                  Fostering academic excellence through innovative curriculum, quality assurance, and student-centered learning approaches.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <Image
                  src="/api/placeholder/400/500"
                  alt="Deputy Principal Academic Affairs"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Leadership Profile */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Image
                    src="/api/placeholder/300/300"
                    alt="Prof. David Kiprotich"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4 shadow-md"
                  />
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Deputy Principal
                  </Badge>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Prof. David Kiprotich Cheruiyot
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    PhD in Technical Education, MEd Curriculum Development
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Prof. Cheruiyot is a distinguished academic leader with over 18 years of experience in technical and vocational education. His expertise in curriculum development and quality assurance has been instrumental in positioning the college as a center of excellence in technical education. He has published extensively on competency-based training methodologies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="text-[#099cca]" size={16} />
                      <span>dp.academics@kongonitechnical.ac.ke</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#099cca]" size={16} />
                      <span>+254 700 234 567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#099cca]" size={16} />
                      <span>Academic Block, Office 301</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#099cca]" size={16} />
                      <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Functions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academic Functions & Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFunctions.map((func, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <func.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {func.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {func.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Departments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academic Departments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-[#099cca]">{dept.name}</CardTitle>
                  <p className="text-sm text-gray-600">Head of Department: {dept.hod}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Programs Offered:</h4>
                  <ul className="space-y-2">
                    {dept.programs.map((program, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-[#099cca] w-4 h-4" />
                        <span className="text-gray-700">{program}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics and Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Key Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-[#099cca]" />
                Academic Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Academic Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-[#099cca]" />
                Academic Statistics 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Total Students Enrolled</span>
                  <span className="font-semibold text-[#099cca]">2,847</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Academic Programs</span>
                  <span className="font-semibold text-[#099cca]">24</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Academic Staff</span>
                  <span className="font-semibold text-[#099cca]">156</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Graduate Employment Rate</span>
                  <span className="font-semibold text-[#099cca]">90%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Course Completion Rate</span>
                  <span className="font-semibold text-[#099cca]">95%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Industry Partnerships</span>
                  <span className="font-semibold text-[#099cca]">15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming Academic Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Lightbulb className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {initiative.title}
                    </h3>
                    <Badge variant="outline" className="mb-4">
                      {initiative.status}
                    </Badge>
                  </div>
                  <p className="text-gray-700 text-center mb-4">
                    {initiative.description}
                  </p>
                  <p className="text-[#099cca] font-medium text-center">
                    Timeline: {initiative.timeline}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academic Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <GraduationCap className="text-[#099cca]" />
                  Student Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Academic counseling and guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Course registration and scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Academic progress monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Examination and assessment coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Industrial attachment coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Users className="text-[#099cca]" />
                  Faculty Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Professional development programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Curriculum development support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Research and publication assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Teaching methodology training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-[#099cca] w-4 h-4" />
                    <span>Academic resource allocation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Academic Affairs Office
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For academic inquiries, curriculum matters, or student academic issues, please contact our office during business hours.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-[#099cca]" size={16} />
                  <span>dp.academics@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-[#099cca]" size={16} />
                  <span>+254 700 234 567</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-[#099cca]" size={16} />
                  <span>Academic Block, Office 301</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="text-[#099cca]" size={16} />
                  <span>Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}