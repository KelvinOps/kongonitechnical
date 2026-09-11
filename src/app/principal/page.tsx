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
  MapPin,
  ArrowRight,
  Building2
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Principal - Mr. Stedi L. Bonface | Kongoni Technical & Vocational College',
  description: 'Meet Mr. Stedi L. Bonface, Principal of Kongoni Technical and Vocational College, leading the institution with a commitment to integrity, innovation, and industry-aligned technical education.',
  keywords: 'Principal, Stedi Bonface, Kongoni Technical College, TVET, Educational Leadership, Technical Education',
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
              Mr. Stedi L. Bonface<br />
              Principal, Kongoni Technical &amp; Vocational College
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
                    src="/images/admin/STEDI BONIFACE.png"
                    alt="Mr. Stedi L. Bonface - Principal"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Mr. Stedi L. Bonface
                  </h2>
                  <p className="text-primary font-semibold mb-3 text-lg">Principal</p>
                  <p className="text-gray-600 text-sm mb-1">
                    Kongoni Technical &amp; Vocational College
                  </p>
                  <p className="text-gray-500 text-xs mb-6">
                    Secretary to the Board of Governors
                  </p>
                  
                  {/* Career info */}
                  <div className="space-y-3 text-sm text-gray-700 mb-6">
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Formerly Principal, Turbo TVC</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Appointed Principal, August 2026</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>TVET Leadership</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href="mailto:principal@kongonitvc.ac.ke" className="hover:text-primary transition-colors text-xs">
                      principal@kongonitechnical.ac.ke
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href="tel:+254788070303" className="hover:text-primary transition-colors">
                      +254 788 070 303
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs">Matunda, Likuyani Sub-County</span>
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
                    Stepping into Kongoni Technical and Vocational College, I see a 
                    community built on resilience, creativity, and a shared vision for 
                    excellence. It is a privilege to join hands with you as we chart the 
                    next chapter of growth and innovation.
                  </p>

                  <p className="leading-relaxed">
                    At Kongoni, we do more than train, we inspire. Every workshop, every 
                    classroom, and every project is a space where ideas take shape, skills 
                    are sharpened, and futures are defined. Our mission is to nurture 
                    professionals who are not only competent in their fields but also 
                    courageous enough to lead change in society.
                  </p>

                  <p className="leading-relaxed">
                    As Principal, I am committed to strengthening our culture of integrity, 
                    teamwork, and continuous learning. Together, we will embrace emerging 
                    technologies, expand industry collaborations, and create opportunities 
                    that empower our trainees to thrive in a rapidly evolving world.
                  </p>

                  <p className="leading-relaxed">
                    Let us move forward with confidence, united by purpose, and driven by 
                    the belief that Kongoni TVC is not just a college, it is a launchpad 
                    for dreams, innovation, and lifelong success.
                  </p>
                </div>
              </div>

              {/* Career Journey */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 text-primary mr-2" />
                  Career Journey
                </h3>

                <div className="flex flex-col md:flex-row items-stretch gap-4">
                  <div className="flex-1 bg-white rounded-lg border border-gray-200 p-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Previously
                    </p>
                    <p className="font-semibold text-gray-900">Principal, Turbo TVC</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Uasin Gishu County
                    </p>
                  </div>

                  <div className="hidden md:flex items-center justify-center px-2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="md:hidden flex items-center justify-center text-primary rotate-90">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  <div className="flex-1 bg-primary/5 rounded-lg border border-primary/20 p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Since August 2026
                    </p>
                    <p className="font-semibold text-gray-900">Principal, Kongoni TVC</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Kakamega County
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Mr. Bonface&apos;s transfer to Kongoni TVC was part of a Ministry of 
                  Education reshuffle of TVET leadership, aimed at strengthening service 
                  delivery and addressing declining enrolment across technical and 
                  vocational institutions. He succeeds Ms. Judith Akaranga, who retired 
                  after a long career leading multiple TVET institutions.
                </p>
              </div>

              {/* Vision and Leadership Philosophy */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-primary mr-2" />
                  Leadership Philosophy
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kongoni TVC serves as a center of excellence in training highly qualified 
                  technical professionals, and my leadership is guided by that same standard: 
                  strengthening a culture of integrity, teamwork, and continuous learning 
                  across every workshop, classroom, and project.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  I believe in embracing emerging technologies and expanding industry 
                  collaborations so that our trainees graduate not just competent in their 
                  fields, but confident and courageous enough to lead change in society. 
                  Kongoni is not just a college, it is a launchpad for dreams, innovation, 
                  and lifelong success.
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
                &quot;Let us move forward with confidence, united by purpose, and driven by 
                the belief that Kongoni TVC is not just a college, it is a launchpad for 
                dreams, innovation, and lifelong success.&quot;
              </blockquote>
              <cite className="text-secondary font-semibold text-lg">
                - Mr. Stedi L. Bonface, Principal
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