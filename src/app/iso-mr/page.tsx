// app/iso-mr/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Settings, Globe, FileCheck, Users, Phone, Mail, MapPin, Award, BarChart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ISO/MR Department | ISO Standards & Management Reviews',
  description: 'Expert ISO certification, implementation, and management review services to ensure organizational excellence and compliance.',
  keywords: 'ISO, Management Review, Quality Management, ISO 9001, ISO 14001, ISO 45001, Certification',
}

export default function ISOMRDepartment() {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "ISO Implementation",
      description: "Complete ISO standards implementation across various management systems."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Certification Support",
      description: "Comprehensive support for ISO certification processes and audits."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Management Reviews",
      description: "Strategic management review services for continuous improvement."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Gap Analysis",
      description: "Thorough gap analysis to identify areas for improvement and compliance."
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Documentation",
      description: "Development of comprehensive documentation and procedure manuals."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training & Awareness",
      description: "Employee training and awareness programs for ISO standards."
    }
  ]

  const isoStandards = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management",
      description: "Quality management systems to enhance customer satisfaction",
      color: "bg-blue-500"
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management",
      description: "Environmental management systems for sustainable operations",
      color: "bg-green-500"
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description: "OH&S management systems for workplace safety",
      color: "bg-red-500"
    },
    {
      standard: "ISO 27001:2013",
      title: "Information Security",
      description: "Information security management systems",
      color: "bg-purple-500"
    },
    {
      standard: "ISO 22000:2018",
      title: "Food Safety",
      description: "Food safety management systems",
      color: "bg-orange-500"
    },
    {
      standard: "ISO 50001:2018",
      title: "Energy Management",
      description: "Energy management systems for efficiency",
      color: "bg-yellow-500"
    }
  ]

  const achievements = [
    { number: "200+", label: "Organizations Certified" },
    { number: "15+", label: "ISO Standards" },
    { number: "99%", label: "Success Rate" },
    { number: "10", label: "Years Experience" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                ISO/MR Department
                <span className="block text-2xl font-normal text-purple-200 mt-2">
                  ISO Standards & Management Reviews
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Leading provider of ISO certification services and management review solutions 
                to help organizations achieve operational excellence and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 group"
                >
                  Get Certified
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#standards" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  ISO Standards
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                      <div className="text-purple-200 text-sm">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ISO services designed to help your organization achieve 
              certification and maintain continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="text-purple-600 mb-6 group-hover:text-purple-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Standards Section */}
      <section id="standards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ISO Standards We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert guidance and implementation support for a comprehensive 
              range of ISO management system standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isoStandards.map((standard, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className={`w-16 h-16 ${standard.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.standard}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{standard.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{standard.description}</p>
                <Link 
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our ISO Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ISO implementation ensuring smooth certification 
              and sustainable management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BarChart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Gap Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of current systems against ISO requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Implementation</h3>
              <p className="text-gray-600">Systematic implementation of management systems and processes</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Training</h3>
              <p className="text-gray-600">Staff training and awareness programs for effective implementation</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Certification</h3>
              <p className="text-gray-600">Support through certification audit and ongoing maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in ISO Implementation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our ISO/MR Department brings years of expertise in helping organizations 
                achieve and maintain ISO certification across multiple standards.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that ISO certification is not just about compliance – 
                it is about creating sustainable business improvements that drive 
                operational excellence and customer satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast-Track Certification</h4>
                    <p className="text-gray-600">Streamlined processes for quick certification achievement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Continuous support for maintenance and improvement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600">Certified consultants with extensive industry experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our ISO Services?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Customized implementation approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Cost-effective solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Comprehensive documentation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for ISO Certification?</h2>
              <p className="text-xl text-gray-600">
                Let us guide you through your ISO certification journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+254 (0) 123 456 791</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">iso@company.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 group"
              >
                Contact ISO/MR Department
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}