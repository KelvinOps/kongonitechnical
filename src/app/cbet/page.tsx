// app/cbet/page.tsx
import { Metadata } from 'next'
import { 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  BookOpen, 
  Briefcase, 
  Award, 
  Clock, 
  Building, 
  Lightbulb,
  GraduationCap,
  Shield,
  BarChart,
  Zap,
  Globe,
  Heart,
  ArrowRight,
  Calendar,
  FileText,
  UserCheck
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CBET Programs | Kongoni Technical and Vocational College',
  description: 'Discover our Competency Based Education and Training (CBET) programs designed to equip students with practical skills and industry-relevant competencies for today\'s job market.',
  keywords: 'CBET, Competency Based Education, TVET, technical training, vocational education, skills development, Kenya',
  openGraph: {
    title: 'CBET Programs | Kongoni Technical and Vocational College',
    description: 'Industry-focused competency based training programs for career success.',
    type: 'website',
  },
}

const cbetPrinciples = [
  {
    icon: <Target className="h-10 w-10" />,
    title: "Outcome-Focused",
    description: "Training focused on measurable skills and competencies"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Learner-Centered",
    description: "Personalized learning paths based on individual needs"
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "Competency Assessment",
    description: "Skills demonstration rather than theoretical exams"
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Continuous Improvement",
    description: "Regular curriculum updates based on industry feedback"
  }
]

const cbetPrograms = [
  {
    title: "Automotive Technology",
    duration: "2 Years",
    certification: "Artisan & Craftsman Level",
    competencies: ["Engine Diagnostics", "Electrical Systems", "Brake Systems", "Suspension"],
    industryPartners: ["Toyota Kenya", "Isuzu East Africa", "DT Dobie"],
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: "ICT & Digital Skills",
    duration: "18 Months",
    certification: "National Certificate",
    competencies: ["Software Development", "Networking", "Cybersecurity", "Digital Marketing"],
    industryPartners: ["Safaricom", "Microsoft", "Cisco Academy"],
    icon: <Globe className="h-8 w-8" />
  },
  {
    title: "Hospitality & Tourism",
    duration: "2 Years",
    certification: "Diploma in Hospitality",
    competencies: ["Food Production", "Front Office Operations", "Tour Guiding", "Customer Service"],
    industryPartners: ["Sarova Hotels", "Kenya Wildlife Service", "Tourism Fund"],
    icon: <Heart className="h-8 w-8" />
  },
  {
    title: "Building Technology",
    duration: "2.5 Years",
    certification: "Artisan & Technician",
    competencies: ["Masonry", "Carpentry", "Plumbing", "Electrical Installation"],
    industryPartners: ["Bamburi Cement", "Mabati Rolling Mills", "National Construction"],
    icon: <Building className="h-8 w-8" />
  },
  {
    title: "Agri-Business",
    duration: "18 Months",
    certification: "Certificate in Agri-Business",
    competencies: ["Smart Farming", "Agri-Marketing", "Value Addition", "Farm Management"],
    industryPartners: ["Kenya Agricultural Institute", "SNV Netherlands", "Equity Bank"],
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    title: "Health Sciences",
    duration: "2 Years",
    certification: "Certificate in Community Health",
    competencies: ["First Aid", "Health Education", "Community Outreach", "Basic Nursing"],
    industryPartners: ["Ministry of Health", "Red Cross", "AMREF"],
    icon: <Shield className="h-8 w-8" />
  }
]

const cbetBenefits = [
  {
    title: "Industry-Relevant Skills",
    description: "Direct alignment with current industry needs and standards",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    title: "Practical Experience",
    description: "70% hands-on training and 30% theory",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Flexible Learning",
    description: "Modular programs with flexible entry and exit points",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Employment Ready",
    description: "Immediate employability upon completion",
    icon: <UserCheck className="h-6 w-6" />
  },
  {
    title: "Certification",
    description: "Nationally recognized certificates and diplomas",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Continuous Assessment",
    description: "Ongoing evaluation of skills and competencies",
    icon: <BarChart className="h-6 w-6" />
  }
]

const cbetProcess = [
  {
    step: "01",
    title: "Competency Identification",
    description: "Industry consultation to identify required skills",
    icon: <Target className="h-8 w-8" />
  },
  {
    step: "02",
    title: "Curriculum Development",
    description: "Design modular training programs based on competencies",
    icon: <FileText className="h-8 w-8" />
  },
  {
    step: "03",
    title: "Training Delivery",
    description: "Practical hands-on training with industry exposure",
    icon: <BookOpen className="h-8 w-8" />
  },
  {
    step: "04",
    title: "Assessment",
    description: "Demonstration of skills through practical tests",
    icon: <CheckCircle className="h-8 w-8" />
  },
  {
    step: "05",
    title: "Certification",
    description: "Award of competency-based certificates",
    icon: <Award className="h-8 w-8" />
  },
  {
    step: "06",
    title: "Employment Linkage",
    description: "Connection to industry opportunities",
    icon: <Briefcase className="h-8 w-8" />
  }
]

export default function CBETPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-sm font-semibold">COMPETENCY BASED EDUCATION & TRAINING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              CBET Programs
              <span className="block text-2xl font-normal text-blue-200 mt-4">
                Empowering Skills for Industry Excellence
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              At Kongoni Technical  College, we pioneer Competency Based Education and Training designed to 
              bridge the skills gap and prepare learners for immediate employment in dynamic industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="#programs" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 group shadow-lg"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/admissions" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CBET */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <Lightbulb className="h-4 w-4 mr-2" />
                INNOVATIVE APPROACH
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is <span className="text-blue-600">Competency Based Education?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Competency Based Education and Training (CBET) is an innovative approach that focuses on 
                developing specific skills and competencies required by industries. Unlike traditional 
                education, CBET emphasizes <span className="font-semibold text-blue-700">what learners can do</span> rather than what they know.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our CBET programs are designed in collaboration with industry partners to ensure graduates 
                possess the exact skills needed for todays job market, making them immediately employable 
                and productive from day one.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Mission in CBET</h4>
                    <p className="text-gray-700">
                      To transform TVET education by producing highly skilled, industry-ready professionals 
                      who can drive economic growth and innovation in Kenya and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {cbetPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    {principle.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our CBET Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience education thats directly connected to real-world success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cbetBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBET Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our CBET Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to developing industry-ready professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cbetProcess.map((process, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-blue-600 opacity-20">{process.step}</div>
                    <div className="text-blue-600">
                      {process.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < cbetProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our CBET Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused training programs designed for career success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cbetPrograms.map((program, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-blue-600">
                      {program.icon}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {program.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Competencies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.competencies.map((competency, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                        >
                          {competency}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Certification:</h4>
                    <p className="text-gray-700">{program.certification}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Industry Partners:</h4>
                    <p className="text-gray-600 text-sm">
                      {program.industryPartners.join(', ')}
                    </p>
                  </div>
                </div>
                
                <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-gray-50 border-t border-gray-100">
                  <Link 
                    href={`/programs/${program.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Partnerships</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Collaborating with leading companies to ensure relevant training
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Safaricom PLC", logo: "S" },
              { name: "Toyota Kenya", logo: "T" },
              { name: "Sarova Hotels", logo: "S" },
              { name: "Microsoft", logo: "M" },
              { name: "Bamburi Cement", logo: "B" },
              { name: "Red Cross", logo: "RC" },
              { name: "Cisco Academy", logo: "C" },
              { name: "DT Dobie", logo: "DT" },
            ].map((partner, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{partner.logo}</span>
                </div>
                <h4 className="font-semibold">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates making an impact in various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Kamau",
                program: "Automotive Technology",
                achievement: "Senior Technician at Toyota Kenya",
                quote: "The hands-on training at Kongoni gave me the exact skills needed in the automotive industry."
              },
              {
                name: "Sarah Akinyi",
                program: "ICT & Digital Skills",
                achievement: "Software Developer at Safaricom",
                quote: "CBET approach prepared me for real-world challenges. I was productive from day one at work."
              },
              {
                name: "Michael Ochieng",
                program: "Building Technology",
                achievement: "Site Supervisor at National Construction",
                quote: "The competency-based assessment gave me confidence in my practical skills."
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-blue-600">{story.program}</p>
                  </div>
                </div>
                
                
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-sm font-semibold text-gray-900">{story.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Career?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Join our CBET programs and acquire the skills that industries demand
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/admissions"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 group shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Request Information
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100">
              Need guidance? Contact our CBET Coordinators: 
              <a href="tel:+254700123456" className="font-semibold ml-2 hover:text-white">+254 700 123 456</a> | 
              <a href="mailto:cbet@kongoni.ac.ke" className="font-semibold ml-2 hover:text-white">cbet@kongoni.ac.ke</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}