// app/dpadministration/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  DollarSign, 
  Users, 
  FileText, 
  ClipboardList, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "Deputy Principal Administration | Kongoni Technical Vocational Training College",
  description: "Office of the Deputy Principal Administration - overseeing institutional planning, administrative operations, and financial management.",
  keywords: "deputy principal, administration, institutional management",
};

const departmentFunctions = [
  {
    icon: Building2,
    title: "Institutional Planning",
    description: "Strategic planning, policy development, and institutional research to guide college growth and development."
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Budget preparation, financial control, procurement oversight, and resource allocation management."
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Staff recruitment, development, performance management, and employee welfare administration."
  },
  {
    icon: FileText,
    title: "Administrative Services",
    description: "General administration, records management, and coordination of institutional operations."
  },
  {
    icon: ClipboardList,
    title: "Quality Assurance",
    description: "Monitoring and evaluation of institutional processes to ensure quality service delivery."
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Tracking institutional performance indicators and implementing improvement strategies."
  }
];

const achievements = [
  "Successfully led academic operations at Shamberere National Polytechnic as Deputy Principal - Academics (2024-2025)",
  "Established robust quality assurance systems as Internal Quality Assurance Officer ensuring compliance with TVET standards",
  "Coordinated competency-based assessment programs as Assessment Center Officer serving over 500 trainees annually",
  "Managed institutional records and student services as Registrar at Shamberere National Polytechnic",
  "Trained over 1,000 National Youth Service trainees in technical skills during seven years as Technical Instructor",
  "Developed strategic institutional frameworks through Senior Management Course training at Kenya School of Government"
];

const upcomingProjects = [
  {
    title: "Digital Transformation Initiative",
    description: "Implementation of integrated management information systems",
    timeline: "Q2 2025",
    status: "In Progress"
  },
  {
    title: "Infrastructure Development Phase II",
    description: "Construction of new administrative block and modern laboratories",
    timeline: "Q3 2025",
    status: "Planning"
  },
  {
    title: "Staff Capacity Building Program",
    description: "Comprehensive training program for administrative and academic staff",
    timeline: "Q1 2025",
    status: "Ongoing"
  }
];

export default function DPAdministrationPage() {
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
                  Administration 
                </h2>
                <p className="text-xl opacity-80 leading-relaxed">
                  Driving institutional excellence through strategic planning, efficient administration, and sound financial management.
                </p>
              </div>
              <div className="text-center lg:text-right">
               
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
                    src="/images/admin/board/ezraorina.jpeg"
                    alt="Mr. Ezra Orina"
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
                    Mr. Ezra Orina
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Bachelor of Education | Diploma in Technical Education | Diploma in Mechanical Engineering
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mr. Orina brings over two decades of comprehensive experience in technical and vocational education spanning teaching, quality assurance, academic administration, and institutional management. His career journey from Technical Instructor to Deputy Principal reflects his deep commitment to TVET excellence. He has held key leadership positions including Deputy Principal - Academics, Registrar, and Internal Quality Assurance Officer at Shamberere National Polytechnic, where he honed his expertise in educational management and quality systems. 
                  </p>
       
                          
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="text-[#099cca]" size={16} />
                      <span>dpad@kongonitechnical.ac.ke</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#099cca]" size={16} />
                      <span>+254 788 070 303</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#099cca]" size={16} />
                      <span>Administration Block</span>
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

        {/* Department Functions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Functions & Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentFunctions.map((func, index) => (
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

        {/* Achievements and Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Key Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-[#099cca]" />
                Key Achievements
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

          {/* Upcoming Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-[#099cca]" />
                Upcoming Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-[#099cca] pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {project.title}
                      </h4>
                      <Badge 
                        variant={project.status === "Ongoing" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">
                      {project.description}
                    </p>
                    <p className="text-sm text-[#099cca] font-medium">
                      Timeline: {project.timeline}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Organizational Structure
          </h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Departments Under Administration
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Building2 className="text-[#099cca] w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Finance Office</h4>
                  <p className="text-sm text-gray-600">Budget & Accounting</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Users className="text-[#099cca] w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Human Resources</h4>
                  <p className="text-sm text-gray-600">Staff Management</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <ClipboardList className="text-[#099cca] w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Procurement</h4>
                  <p className="text-sm text-gray-600">Supply Chain Management</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <FileText className="text-[#099cca] w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Planning Unit</h4>
                  <p className="text-sm text-gray-600">Strategic Planning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Services Offered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Administrative Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Staff recruitment and deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Performance management systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Records and information management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Policy development and implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Budget preparation and monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Financial reporting and auditing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Procurement and supply chain management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full"></div>
                    <span>Revenue collection and management</span>
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
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For administrative matters, financial inquiries, or planning discussions, don&apos;t hesitate to contact our office.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-[#099cca]" size={16} />
                  <span>dpad@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-[#099cca]" size={16} />
                  <span>+254 788 070 303</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-[#099cca]" size={16} />
                  <span>Admin Block</span>
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