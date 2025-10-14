// app/registry/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  GraduationCap, 
  Users, 
  ClipboardCheck, 
  Archive, 
  Award,
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
  CheckCircle,
  Database,
  Shield,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Registry Department | Kongoni Technical Vocational Training College",
  description: "Registry Department - Student records management, admissions, graduation, and academic documentation services.",
  keywords: "registry, student records, admissions, graduation, transcripts, certificates",
};

const registryServices = [
  {
    icon: Users,
    title: "Student Admissions",
    description: "Processing of student applications, enrollment, and admission documentation."
  },
  {
    icon: FileText,
    title: "Records Management",
    description: "Maintenance and safekeeping of all student academic records and documents."
  },
  {
    icon: GraduationCap,
    title: "Graduation Services",
    description: "Coordination of graduation ceremonies and issuance of certificates and diplomas."
  },
  {
    icon: ClipboardCheck,
    title: "Transcript Services",
    description: "Preparation and verification of official academic transcripts and statements."
  },
  {
    icon: Archive,
    title: "Document Verification",
    description: "Authentication and verification of academic credentials and certificates."
  },
  {
    icon: Award,
    title: "Certification Services",
    description: "Issuance of official certificates, diplomas, and other academic awards."
  }
];

const registryStats = [
  { label: "Active Students", value: "2,847", icon: Users },
  { label: "Alumni Records", value: "12,500+", icon: Archive },
  { label: "Certificates Issued (2024)", value: "1,250", icon: Award },
  { label: "Programs Registered", value: "24", icon: FileText }
];

const processes = [
  {
    title: "New Student Registration",
    steps: [
      "Submit completed application form",
      "Provide required academic documents", 
      "Pay registration fees",
      "Complete medical examination",
      "Receive student ID and welcome package"
    ]
  },
  {
    title: "Transcript Request",
    steps: [
      "Fill transcript request form",
      "Pay prescribed fees",
      "Submit identification documents",
      "Processing time: 5-7 working days",
      "Collection or postal delivery"
    ]
  },
  {
    title: "Certificate Replacement",
    steps: [
      "Report loss through police abstract",
      "Complete replacement application",
      "Pay replacement fees",
      "Provide supporting documents",
      "Collect replacement certificate"
    ]
  }
];

const staff = [
  {
    name: "Mr. Andrew Juma",
    position: "Registrar",
    qualification: "Diploma in Building",
    image: "/images/admin/board/andrewjumacopy.png",
    email: "registrar@kongonitechnical.ac.ke",
    phone: "+254 788 070 303"
  },
  {
    name: "Mr. Delphine Kubende",
    position: "Registry Clerk",
    qualification: "BSc in Information Technology",
    image: "/images/registry/delphine2.jpeg",
    email: "deputyregistrar@kongonitechnical.ac.ke", 
    phone: "+254 788 070 303"
  },
  {
    name: "Mr. Joseph Wanjala",
    position: "Records Officer",
    qualification: "Diploma in Records Management",
    image: "/images/registry/josephwanjala.jpeg",
    email: "records@kongonitechnical.ac.ke",
    phone: "+254 788 070 303"
  }
];

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Registry Department
                </h1>
                <p className="text-xl opacity-80 leading-relaxed">
                  Your gateway to academic records, student services, and certification. We maintain the integrity and accessibility of all student academic information.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Department Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Department Overview
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Registry Department serves as the custodian of all student academic records and the central hub for student services from admission to graduation.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {registryStats.map((stat, index) => (
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

        {/* Registry Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registryServices.map((service, index) => (
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

        {/* Staff Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Registry Staff
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 shadow-md"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {member.position}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.qualification}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Mail size={16} className="text-[#099cca]" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone size={16} className="text-[#099cca]" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Service Processes
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-[#099cca] text-center">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="bg-[#099cca] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Quick Links &amp; Downloads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Download className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Application Forms</h3>
                <p className="text-sm text-gray-600">Download admission and registration forms</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Transcript Request</h3>
                <p className="text-sm text-gray-600">Official transcript request form</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Shield className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Verification</h3>
                <p className="text-sm text-gray-600">Certificate verification services</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Search className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Student Portal</h3>
                <p className="text-sm text-gray-600">Access your academic records online</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-[#099cca]" />
                  Office Hours &amp; Processing Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#099cca] pl-4">
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 12:00 PM</p>
                  </div>
                  <div className="border-l-4 border-[#099cca] pl-4">
                    <h4 className="font-semibold text-gray-900">Processing Times</h4>
                    <p className="text-gray-700">Transcripts: 5-7 working days</p>
                    <p className="text-gray-700">Certificate replacement: 10-14 days</p>
                    <p className="text-gray-700">Verification letters: 2-3 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="text-[#099cca]" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">For New Admissions:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Original certificates and transcripts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        National ID copy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Passport photos (4 copies)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Medical certificate
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">For Services:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Valid identification
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Completed request forms
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#099cca]" />
                        Payment receipts
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fees Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Service Fees
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Services</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Official Transcript</span>
                      <span className="font-semibold text-[#099cca]">KSh 500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Certificate Copy</span>
                      <span className="font-semibold text-[#099cca]">KSh 300</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Verification Letter</span>
                      <span className="font-semibold text-[#099cca]">KSh 200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Duplicate Certificate</span>
                      <span className="font-semibold text-[#099cca]">KSh 2,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Expedited Processing</span>
                      <span className="font-semibold text-[#099cca]">+50%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Postal Delivery</span>
                      <span className="font-semibold text-[#099cca]">KSh 150</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">International Courier</span>
                      <span className="font-semibold text-[#099cca]">KSh 3,500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Document Authentication</span>
                      <span className="font-semibold text-[#099cca]">KSh 1,000</span>
                    </div>
                  </div>
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
                Contact Registry Department
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For all student records, admissions, and certification services, visit our office or contact us during business hours.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-[#099cca]" size={16} />
                  <span>registry@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-[#099cca]" size={16} />
                  <span>+254 788 070 303</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-[#099cca]" size={16} />
                  <span>Registry Block</span>
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