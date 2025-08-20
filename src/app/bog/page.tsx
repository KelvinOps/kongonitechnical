// app/bog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, FileText, Calendar, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Board of Governance | Kongoni Technical Vocational Training College",
  description: "Meet the Board of Governance of Kongoni Technical Vocational Training College - dedicated leaders overseeing the strategic direction and governance of the institution.",
  keywords: "Board of Governance, leadership, governance, board members, institutional leadership",
};

// Mock data - replace with actual data
const councilMembers = [
  {
    id: 1,
    name: "Dr. ",
    position: "Chairperson",
    qualification: "PhD in Educational Leadership",
    image: "/api/placeholder/300/400",
    bio: "Dr.  brings over 20 years of experience in educational leadership and governance.",
    email: "chair@kongonitechnical.ac.ke",
    phone: "+254 700 000 001"
  },
  {
    id: 2,
    name: "Eng. ",
    position: "Vice Chairperson",
    qualification: "M.Eng, Registered Engineer",
    image: "/api/placeholder/300/400",
    bio: "Eng.  is a seasoned engineering professional with expertise in technical education.",
    email: "vice.chair@kongonitechnical.ac.ke",
    phone: "+254 700 000 002"
  },
  {
    id: 3,
    name: "Prof. ",
    position: "Member",
    qualification: "PhD in Business Administration",
    image: "/api/placeholder/300/400",
    bio: "Prof.  specializes in institutional management and strategic planning.",
    email: "s.mwangi@kongonitechnical.ac.ke",
    phone: "+254 700 000 003"
  },
  {
    id: 4,
    name: "Dr. ",
    position: "Member",
    qualification: "PhD in Technical Education",
    image: "/api/placeholder/300/400",
    bio: "Dr.  has extensive experience in curriculum development and quality assurance.",
    email: "p.ochieng@kongonitechnical.ac.ke",
    phone: "+254 700 000 004"
  },
  {
    id: 5,
    name: "Ms. Judith Akaranga",
    position: "Secretary",
    qualification: "MBA",
    image: "/images/principal.png",
    bio: "Ms. Akaranga oversees governance compliance and institutional legal matters.",
    email: "secretary@kongonitechnical.ac.ke",
    phone: "+254 700 000 005"
  },
];

const responsibilities = [
  "Strategic planning and institutional direction",
  "Policy formulation and review",
  "Budget approval and financial oversight",
  "Academic quality assurance",
  "Staff recruitment and performance evaluation",
  "Infrastructure development planning",
  "Stakeholder engagement and partnerships",
  "Risk management and compliance"
];

const meetingSchedule = [
  { type: "Regular Meeting", frequency: "Quarterly", nextDate: "March 15, 2025" },
  { type: "Strategic Planning", frequency: "Annually", nextDate: "June 20, 2025" },
  { type: "Budget Review", frequency: "Bi-annually", nextDate: "April 10, 2025" },
];

export default function GoverningCouncilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Board of Governance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Providing strategic leadership and governance oversight to ensure excellence in technical and vocational education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mandate
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Board of Governance serves as the highest decision-making body of Kongoni Technical Vocational Training College. We are committed to providing strategic oversight, ensuring academic excellence, and fostering institutional growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our council comprises distinguished professionals from various fields, bringing diverse expertise to guide the college&apos;s mission of empowering trainees through digital innovation and technical excellence.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Logo_imresizer.ico"
                alt="Board of Governance Meeting"
                width={350}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Council Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Council Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councilMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
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
                    <p className="text-sm text-gray-600 mb-3">
                      {member.qualification}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 text-center">
                    {member.bio}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Responsibilities and Meeting Schedule */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Key Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-[#099cca]" />
                Key Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#099cca] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Meeting Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-[#099cca]" />
                Meeting Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {meetingSchedule.map((meeting, index) => (
                  <div key={index} className="border-l-4 border-[#099cca] pl-4">
                    <h4 className="font-semibold text-gray-900">
                      {meeting.type}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Frequency: {meeting.frequency}
                    </p>
                    <p className="text-sm text-[#099cca] font-medium">
                      Next: {meeting.nextDate}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents and Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Documents & Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Council Charter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Official mandate and governance framework
                </p>
                <button className="bg-[#099cca] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Download PDF
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Award className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Meeting Minutes</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Records of council decisions and proceedings
                </p>
                <button className="bg-[#099cca] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  View Archive
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Annual Reports</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Yearly performance and achievement reports
                </p>
                <button className="bg-[#099cca] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Access Reports
                </button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact the Board of Governance 
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For matters requiring council attention or to schedule meetings with council members, please contact our secretariat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Mail className="text-[#099cca]" />
                  <span>council@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-[#099cca]" />
                  <span>+254 700 000 000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}