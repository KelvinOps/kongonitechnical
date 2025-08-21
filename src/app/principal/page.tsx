// app/principal/page.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Target, 
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Principal - Ms. Judith Akaranga | Kongoni Technical & Vocational College',
  description: 'Meet Ms. Judith Akaranga, Principal of Kongoni Technical and Vocational College. Learn about her vision, experience, and commitment to quality technical education.',
  keywords: 'Principal, Judith Akaranga, Kongoni Technical College, TVET, Leadership, Technical Education',
};

export default function PrincipalPage() {
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
            <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
              About Us
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Principal</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Office of the Principal
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Leadership committed to excellence in technical and vocational education
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Principal's Photo and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center sticky top-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-primary/20">
                  <Image
                    src="/images/principal.png"
                    alt="Ms. Judith Akaranga - Principal"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ms. Judith Akaranga
                  </h2>
                  <p className="text-primary font-semibold mb-1 text-lg">Principal</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Kongoni Technical & Vocational College
                  </p>
                  
                  {/* Qualifications */}
                  <div className="space-y-3 text-sm text-gray-700 mb-6">
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>M.Ed, B.Ed (TVET)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Award className="w-4 h-4 text-primary" />
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Educational Leadership</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:principal@kongonitvc.ac.ke" className="hover:text-primary transition-colors">
                      principal@kongonitvc.ac.ke
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+254788070303" className="hover:text-primary transition-colors">
                      +254 788 070 303
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span> Matunda,Likuyani SubCounty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Principal's Message and Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Message */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  Welcome Message
                </h2>
                
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p className="leading-relaxed text-lg">
                    It is with great pleasure that I welcome you to Kongoni Technical and Vocational College. 
                    Established with a vision to provide quality technical education, our institution has 
                    experienced remarkable growth in academic programs, faculty development, and the expansion 
                    of our physical infrastructure.
                  </p>

                  <p className="leading-relaxed">
                    At Kongoni TVC, our commitment lies in delivering high-quality education that meets industry 
                    standards and anticipates future job market demands. With our experienced faculty, 
                    state-of-the-art facilities, and innovative curriculum, we ensure comprehensive training 
                    across various technical and vocational fields.
                  </p>

                  <p className="leading-relaxed">
                    Our college has witnessed tremendous expansion since its inception, growing significantly 
                    in terms of academic programs, staffing, and physical facilities. This growth reflects 
                    our dedication to excellence and our commitment to serving our community and the broader 
                    region with quality technical education.
                  </p>

                  <p className="leading-relaxed">
                    We take pride in nurturing a supportive learning environment that fosters creativity, 
                    critical thinking, and practical skills. Our programs are meticulously designed to equip 
                    students with the competencies necessary to excel as technical professionals both regionally 
                    and globally.
                  </p>
                </div>
              </div>

              {/* Vision and Leadership Philosophy */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-primary mr-2" />
                  Leadership Philosophy
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kongoni TVC serves as a Center of Excellence in training highly qualified technical 
                  professionals, aligning with our vision to lead in technical and vocational education 
                  across the region. My leadership philosophy centers on collaborative excellence, 
                  innovation, and student-centered learning.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  I believe in empowering both our faculty and students to reach their full potential 
                  through continuous professional development, industry engagement, and the cultivation 
                  of an environment that promotes academic excellence and personal growth.
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Focus Areas */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Strategic Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Quality Education",
                  description: "Delivering industry-relevant technical and vocational training programs that meet international standards",
                  icon: <GraduationCap className="w-8 h-8 text-primary" />,
                  color: "from-blue-500/10 to-blue-600/10"
                },
                {
                  title: "Industry Partnership",
                  description: "Building strategic collaborations with industries to ensure our graduates are market-ready",
                  icon: <Users className="w-8 h-8 text-primary" />,
                  color: "from-green-500/10 to-green-600/10"
                },
                {
                  title: "Innovation Excellence",
                  description: "Fostering creativity, research, and innovation while maintaining the highest academic standards",
                  icon: <Award className="w-8 h-8 text-primary" />,
                  color: "from-purple-500/10 to-purple-600/10"
                },
                {
                  title: "Community Impact",
                  description: "Contributing to regional development through skilled workforce and community engagement",
                  icon: <Target className="w-8 h-8 text-primary" />,
                  color: "from-orange-500/10 to-orange-600/10"
                }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Institutional Mandates */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Institutional Mandates
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Educational Excellence
                </h4>
                <ul className="space-y-3">
                  {[
                    "Provision of comprehensive technical and vocational training programs",
                    "Development and implementation of industry-aligned curriculum",
                    "Assessment and certification of technical competencies and skills",
                    "Recognition of prior learning with flexible program pathways"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Professional Development
                </h4>
                <ul className="space-y-3">
                  {[
                    "Continuous faculty development and capacity building programs",
                    "Research and innovation in technical and vocational education",
                    "Collaboration with local and international educational institutions",
                    "Advisory services to government and industry stakeholders"
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

          {/* Closing Statement */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white text-center">
              <blockquote className="text-xl italic mb-6 leading-relaxed">
                &quot;In pursuit of efficient and quality education, we have implemented comprehensive programs 
                to monitor performance and continually enhance our service delivery to our students, 
                community, and all stakeholders. Together, we are building a brighter future through 
                technical excellence.&quot;
              </blockquote>
              <cite className="text-secondary font-semibold text-lg">
                - Ms. Judith Akaranga, Principal
              </cite>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact the Principal&apos;s Office
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}