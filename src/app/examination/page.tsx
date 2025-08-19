// app/examinations/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  Award, 
  BookOpen, 
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Shield,
  Target,
  TrendingUp,
  Bell
} from "lucide-react";

export const metadata: Metadata = {
  title: "Examinations Department | Kongoni Technical Vocational Training College",
  description: "Examinations Department - Managing CDACC, KNEC, NITA and KTVC board examinations with excellence and integrity.",
  keywords: "examinations, CDACC, KNEC, NITA, KTVC, assessment, certification",
};

const examinationBodies = [
  {
    name: "CDACC",
    fullName: "Curriculum Development, Assessment and Certification Council",
    description: "National body for curriculum development and assessment in TVET institutions.",
    programs: ["Diploma Programs", "Higher National Diploma", "Advanced Certificate"],
    color: "bg-blue-500",
    icon: Award
  },
  {
    name: "KNEC",
    fullName: "Kenya National Examinations Council",
    description: "National examinations body conducting various technical and vocational assessments.",
    programs: ["Technical Education Certificates", "Trade Tests", "Professional Courses"],
    color: "bg-green-500",
    icon: FileText
  },
  {
    name: "NITA",
    fullName: "National Industrial Training Authority",
    description: "Industrial training authority overseeing artisan and trade certification.",
    programs: ["Artisan Certificates", "Trade Tests", "Skills Upgrading"],
    color: "bg-orange-500",
    icon: Users
  },
  {
    name: "KTVC Board",
    fullName: "Kongoni Technical Vocational Training College Board",
    description: "Internal board managing short courses and institutional certifications.",
    programs: ["Short Courses", "Professional Development", "Continuing Education"],
    color: "bg-purple-500",
    icon: BookOpen
  }
];

const services = [
  {
    icon: Calendar,
    title: "Examination Scheduling",
    description: "Coordination of examination timetables across all certification bodies."
  },
  {
    icon: ClipboardCheck,
    title: "Assessment Management",
    description: "Oversight of continuous assessment, practical exams, and final examinations."
  },
  {
    icon: Shield,
    title: "Exam Security",
    description: "Maintaining examination integrity through secure processes and protocols."
  },
  {
    icon: Award,
    title: "Results Processing",
    description: "Efficient processing and release of examination results and certificates."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Proper documentation and record keeping of all examination activities."
  },
  {
    icon: Users,
    title: "Student Support",
    description: "Guidance and support for students throughout the examination process."
  }
];

const upcomingExams = [
  {
    body: "CDACC",
    examType: "Diploma Final Examinations",
    date: "March 15-28, 2025",
    status: "Registration Open",
    candidates: 450
  },
  {
    body: "KNEC",
    examType: "Technical Education Certificate",
    date: "April 10-20, 2025",
    status: "Preparation",
    candidates: 320
  },
  {
    body: "NITA",
    examType: "Trade Test Level 3",
    date: "May 5-12, 2025",
    status: "Upcoming",
    candidates: 280
  },
  {
    body: "KTVC Board",
    examType: "Short Course Assessments",
    date: "Ongoing",
    status: "Active",
    candidates: 150
  }
];

const examStats = [
  { label: "Total Candidates (2024)", value: "2,500+", icon: Users },
  { label: "Pass Rate Average", value: "87%", icon: TrendingUp },
  { label: "Examination Bodies", value: "4", icon: Award },
  { label: "Programs Assessed", value: "40+", icon: FileText }
];

export default function ExaminationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Examinations Department
                </h1>
                <p className="text-xl opacity-80 leading-relaxed mb-8">
                  Ensuring excellence and integrity in all assessments and certifications across CDACC, KNEC, NITA, and KTVC board examinations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    CDACC Certified
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    KNEC Approved
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    NITA Accredited
                  </Badge>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Image
                  src="/api/placeholder/500/400"
                  alt="Examinations Department"
                  width={500}
                  height={400}
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
                    alt="Paul Kimanzi"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4 shadow-md"
                  />
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Examinations Officer
                  </Badge>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Mr. Paul Kimanzi
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Bachelor of Education
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mr. Kimanzi brings experience in examination management and assessment coordination. He has been instrumental in establishing robust examination systems that maintain the highest standards of integrity and efficiency. His expertise spans across all major certification bodies in Kenya's TVET sector.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="text-[#099cca]" size={16} />
                      <span>examinations@kongonitechnical.ac.ke</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#099cca]" size={16} />
                      <span>+254 700 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#099cca]" size={16} />
                      <span>Examinations Block</span>
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

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Examination Bodies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Examination Bodies We Work With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {examinationBodies.map((body, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${body.color}`}>
                      <body.icon className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{body.name}</CardTitle>
                      <p className="text-sm text-gray-600">{body.fullName}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {body.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">Programs Managed:</h4>
                  <ul className="space-y-2">
                    {body.programs.map((program, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-[#099cca] w-4 h-4" />
                        <span className="text-gray-700 text-sm">{program}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <service.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Examinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming Examinations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingExams.map((exam, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="font-semibold">
                      {exam.body}
                    </Badge>
                    <Badge 
                      variant={exam.status === "Registration Open" ? "default" : 
                              exam.status === "Active" ? "destructive" : "secondary"}
                    >
                      {exam.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exam.examType}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#099cca] w-4 h-4" />
                      <span>Date: {exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-[#099cca] w-4 h-4" />
                      <span>Registered Candidates: {exam.candidates}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="text-[#099cca]" />
                  Important Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Registration for examinations closes 30 days before exam date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">All examination fees must be paid before registration confirmation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Students must achieve 75% attendance to be eligible for examinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Valid identification required for all examinations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="text-[#099cca]" />
                  Downloads & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Examination Registration Forms</h4>
                        <p className="text-sm text-gray-600">Forms for all examination bodies</p>
                      </div>
                      <Download className="text-[#099cca] w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Examination Timetables</h4>
                        <p className="text-sm text-gray-600">Current examination schedules</p>
                      </div>
                      <Download className="text-[#099cca] w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Examination Guidelines</h4>
                        <p className="text-sm text-gray-600">Rules and regulations handbook</p>
                      </div>
                      <Download className="text-[#099cca] w-5 h-5" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Examination Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Examination Process
          </h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-700 text-sm">Complete examination registration and pay required fees</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-700 text-sm">Attend revision sessions and complete coursework requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Examination</h3>
                  <p className="text-gray-700 text-sm">Sit for theory and practical examinations as scheduled</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                  <p className="text-gray-700 text-sm">Receive results and collect certificates upon completion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Examinations Department
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For examination inquiries, registration assistance, or result queries, please contact our office during business hours.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-[#099cca]" size={16} />
                  <span>examinations@kongonicollege.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-[#099cca]" size={16} />
                  <span>+254 700 456 789</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-[#099cca]" size={16} />
                  <span>Examinations Block, Office 101</span>
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