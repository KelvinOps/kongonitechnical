// app/departments/ilo/page.tsx
import Link from "next/link";
import { 
  Building, 
  Handshake, 
  Users, 
  Target, 
  Briefcase,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Factory,
  GraduationCap,
  Network,
  Lightbulb,
  FileText,
  Calendar
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Liaison Office (ILO) | Kongoni Technical & Vocational College',
  description: 'Bridging the gap between academia and industry. The ILO department facilitates partnerships, internships, and employment opportunities for students.',
  keywords: 'Industry Liaison, ILO, Partnerships, Internships, Employment, Industry Collaboration, Kongoni TVC',
};

export default function ILOPage() {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/departments" className="text-primary hover:text-primary/80 transition-colors">
              Departments
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Industry Liaison Office</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industry Liaison Office
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Bridging academia and industry to create opportunities for student success and economic growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Department Overview */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Connecting Education with Industry
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Industry Liaison Office (ILO) serves as the vital bridge between Kongoni Technical 
              and Vocational College and the industrial sector. We facilitate meaningful partnerships 
              that enhance practical learning, provide real-world experience, and ensure our graduates 
              are industry-ready professionals.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
              <p className="text-gray-700 italic">
                Our mission is to create sustainable partnerships that benefit students, industry, 
                and the broader economy through collaborative innovation and skills development.
              </p>
            </div>
          </div>

          {/* Key Functions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Key Functions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Industry Partnerships",
                  description: "Establish and maintain strategic partnerships with leading companies and organizations",
                  icon: <Handshake className="w-8 h-8 text-primary" />,
                  color: "from-blue-500/10 to-blue-600/10"
                },
                {
                  title: "Internship Coordination",
                  description: "Facilitate quality internship placements that provide hands-on industry experience",
                  icon: <Briefcase className="w-8 h-8 text-primary" />,
                  color: "from-green-500/10 to-green-600/10"
                },
                {
                  title: "Employment Services",
                  description: "Connect graduates with employment opportunities and career advancement programs",
                  icon: <Users className="w-8 h-8 text-primary" />,
                  color: "from-purple-500/10 to-purple-600/10"
                },
                {
                  title: "Skills Assessment",
                  description: "Conduct industry-aligned skills assessments to ensure graduate competency",
                  icon: <Target className="w-8 h-8 text-primary" />,
                  color: "from-orange-500/10 to-orange-600/10"
                },
                {
                  title: "Research Collaboration",
                  description: "Foster collaborative research projects between academia and industry",
                  icon: <Lightbulb className="w-8 h-8 text-primary" />,
                  color: "from-pink-500/10 to-pink-600/10"
                },
                {
                  title: "Industry Advisory",
                  description: "Provide industry advisory services and curriculum development support",
                  icon: <FileText className="w-8 h-8 text-primary" />,
                  color: "from-indigo-500/10 to-indigo-600/10"
                }
              ].map((function_, index) => (
                <div key={index} className={`bg-gradient-to-br ${function_.color} rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <div className="flex justify-center mb-4">
                    {function_.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {function_.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {function_.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Partners */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Industry Partners
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  sector: "Manufacturing",
                  partners: "10+ Companies",
                  icon: <Factory className="w-8 h-8 text-primary" />,
                  examples: ["Kenya Association of Manufacturers", "Local Manufacturing Firms"]
                },
                {
                  sector: "Construction",
                  partners: "15+ Companies",
                  icon: <Building className="w-8 h-8 text-primary" />,
                  examples: ["Construction Companies", "Architectural Firms"]
                },
                {
                  sector: "Technology",
                  partners: "5+ Companies",
                  icon: <Network className="w-8 h-8 text-primary" />,
                  examples: ["IT Companies", "Telecommunications"]
                },
                {
                  sector: "Agriculture",
                  partners: "10+ Organizations",
                  icon: <TrendingUp className="w-8 h-8 text-primary" />,
                  examples: ["Agribusiness Firms", "Cooperatives"]
                }
              ].map((sector, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {sector.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {sector.sector}
                  </h4>
                  <p className="text-primary font-medium mb-3">{sector.partners}</p>
                  <div className="space-y-1">
                    {sector.examples.map((example, idx) => (
                      <p key={idx} className="text-xs text-gray-600">{example}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services for Students */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Services for Students
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Academic Support
                </h4>
                <ul className="space-y-3">
                  {[
                    "Industry-relevant curriculum development and updates",
                    "Guest lectures and seminars from industry professionals",
                    "Real-world project assignments and case studies",
                    "Skills gap analysis and remedial training programs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Career Development
                </h4>
                <ul className="space-y-3">
                  {[
                    "Internship placement and coordination services",
                    "Job placement assistance for graduates",
                    "Career counseling and professional development",
                    "Alumni network and mentorship programs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact and Team Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 text-primary mr-2" />
                Contact ILO Department
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:ilo@kongonitvc.ac.ke" className="text-primary hover:text-primary/80 transition-colors">
                      ilo@kongonitvc.ac.ke
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+254788070305" className="text-primary hover:text-primary/80 transition-colors">
                      +254 788 070 305
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-700">Administration Block, 2nd Floor</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-900">Office Hours:</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-primary mr-2" />
                Our Team
              </h3>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900">Mr. Kevin Magonya</h4>
                  <p className="text-primary">Head of Industry Liaison</p>
                  <p className="text-sm text-gray-600">MBA Business Administration</p>
                  <p className="text-xs text-gray-500 mt-1">Industry Partnerships & Strategic Planning</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900">Ms. Polycub Mutsotso</h4>
                  <p className="text-primary">Internship Coordinator</p>
                  <p className="text-sm text-gray-600">B.Sc Human Resource Management</p>
                  <p className="text-xs text-gray-500 mt-1">Student Placements & Career Services</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Mr. </h4>
                  <p className="text-primary">Industry Relations Officer</p>
                  <p className="text-sm text-gray-600">B.A Public Relations</p>
                  <p className="text-xs text-gray-500 mt-1">Partnership Development & Communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="mb-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Our Success Story
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "150+",
                  label: "Industry Partners",
                  icon: <Building className="w-8 h-8" />
                },
                {
                  number: "95%",
                  label: "Graduate Employment Rate",
                  icon: <Award className="w-8 h-8" />
                },
                {
                  number: "500+",
                  label: "Annual Internship Placements",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  number: "85%",
                  label: "Industry Satisfaction Rate",
                  icon: <TrendingUp className="w-8 h-8" />
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-secondary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Connect with Industry?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Whether you&apos;re a student seeking opportunities or an industry partner looking to collaborate, 
              we&apos;re here to facilitate meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Link>
              <a 
                href="mailto:ilo@kongonitvc.ac.ke"
                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}