// app/iqa/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, ClipboardCheck, TrendingUp, FileText, Users, Award, Phone, Mail, MapPin, CheckCircle, BarChart, Eye, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IQA Department | Internal Quality Assurance Services',
  description: 'Comprehensive Internal Quality Assurance services ensuring organizational excellence through systematic monitoring and evaluation.',
  keywords: 'IQA, Internal Quality Assurance, Quality Control, Audit, Compliance, Monitoring, Evaluation',
}

export default function IQADepartment() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Quality Audits",
      description: "Comprehensive internal audits to assess system effectiveness and compliance."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Process Monitoring",
      description: "Continuous monitoring and evaluation of organizational processes."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analysis",
      description: "Data-driven analysis to identify improvement opportunities."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Documentation Review",
      description: "Systematic review and validation of quality documentation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training & Development",
      description: "Quality assurance training programs for staff and management."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Compliance Verification",
      description: "Verification of compliance with standards and regulations."
    }
  ]

  const qualityAreas = [
    {
      area: "Academic Quality",
      description: "Curriculum, teaching, learning, and assessment quality assurance",
      icon: <Award className="h-12 w-12" />,
      metrics: ["Course Quality", "Teaching Excellence", "Student Outcomes", "Accreditation"]
    },
    {
      area: "Administrative Quality",
      description: "Administrative processes and service delivery optimization",
      icon: <FileText className="h-12 w-12" />,
      metrics: ["Process Efficiency", "Service Quality", "Resource Management", "Stakeholder Satisfaction"]
    },
    {
      area: "Institutional Quality",
      description: "Overall institutional effectiveness and strategic alignment",
      icon: <TrendingUp className="h-12 w-12" />,
      metrics: ["Strategic Goals", "Performance Indicators", "Continuous Improvement", "Best Practices"]
    }
  ]

  const achievements = [
    { number: "150+", label: "Quality Audits Completed" },
    { number: "95%", label: "Compliance Rate" },
    { number: "8", label: "Years of Excellence" },
    { number: "50+", label: "Improvement Projects" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                IQA Department
                <span className="block text-2xl font-normal text-orange-200 mt-2">
                  Internal Quality Assurance
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Ensuring organizational excellence through systematic quality assurance, 
                continuous monitoring, and data-driven improvement initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-900 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 group"
                >
                  Get Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-900 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                      <div className="text-orange-200 text-sm">{achievement.label}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IQA Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive internal quality assurance services designed to ensure 
              organizational excellence and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="text-orange-600 mb-6 group-hover:text-orange-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive quality assurance across all key organizational areas 
              to ensure holistic excellence and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="text-orange-600 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.area}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Metrics:</h4>
                  {area.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-700 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IQA Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quality assurance ensuring comprehensive 
              coverage and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of current quality systems and processes</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BarChart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Analysis</h3>
              <p className="text-gray-600">Data-driven analysis to identify gaps and improvement opportunities</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <ClipboardCheck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Implementation</h3>
              <p className="text-gray-600">Strategic implementation of quality improvement initiatives</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring and evaluation for sustained improvement</p>
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
                Excellence Through Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our IQA Department is dedicated to fostering a culture of quality and 
                continuous improvement across all organizational levels and functions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We employ rigorous methodologies and best practices to ensure that 
                quality standards are not only met but consistently exceeded, driving 
                organizational excellence and stakeholder satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Risk-Based Approach</h4>
                    <p className="text-gray-600">Proactive identification and mitigation of quality risks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <BarChart className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Evidence-based quality improvements and decision making</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stakeholder Engagement</h4>
                    <p className="text-gray-600">Collaborative approach involving all stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">IQA Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Enhanced organizational performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Improved stakeholder confidence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Regulatory compliance assurance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Continuous improvement culture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Risk mitigation and prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IQA Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-6 mb-6">
                <Search className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Thorough Auditing</h3>
              <p className="text-gray-600 text-sm">Comprehensive audits covering all aspects of quality management</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-6 mb-6">
                <Award className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 text-sm">Qualified professionals with extensive QA experience</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-6 mb-6">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600 text-sm">Focus on sustained quality enhancement and innovation</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-2xl p-6 mb-6">
                <FileText className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Detailed Reporting</h3>
              <p className="text-gray-600 text-sm">Comprehensive reports with actionable recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Quality Standards</h2>
              <p className="text-xl text-gray-600">
                Partner with us to implement robust internal quality assurance systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+254 (0) 123 456 792</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">iqa@company.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 group"
              >
                Contact IQA Department
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}