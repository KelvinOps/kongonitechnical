// app/iqa/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, ClipboardCheck, TrendingUp, FileText, Users, Award, Phone, Mail, MapPin, CheckCircle, BarChart, Eye, Shield, GraduationCap, Briefcase, Globe, Target, BookOpen } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'IQA Department | Internal Quality Assurance Services',
  description: 'Comprehensive Internal Quality Assurance services ensuring organizational excellence through systematic monitoring and evaluation.',
  keywords: 'IQA, Internal Quality Assurance, Quality Control, Audit, Compliance, Monitoring, Evaluation',
}

export default function IQADepartment() {
  const services = [
    {
      icon: <Search className="h-7 w-7" />,
      title: "Quality Audits",
      description: "Comprehensive internal audits to assess system effectiveness and compliance."
    },
    {
      icon: <ClipboardCheck className="h-7 w-7" />,
      title: "Process Monitoring",
      description: "Continuous monitoring and evaluation of organizational processes."
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Performance Analysis",
      description: "Data-driven analysis to identify improvement opportunities."
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Documentation Review",
      description: "Systematic review and validation of quality documentation."
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Training & Development",
      description: "Quality assurance training programs for staff and management."
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Compliance Verification",
      description: "Verification of compliance with standards and regulations."
    }
  ]

  const qualityAreas = [
    {
      area: "Academic Quality",
      description: "Curriculum, teaching, learning, and assessment quality assurance",
      icon: <Award className="h-10 w-10" />,
      metrics: ["Course Quality", "Teaching Excellence", "Student Outcomes", "Accreditation"]
    },
    {
      area: "Administrative Quality",
      description: "Administrative processes and service delivery optimization",
      icon: <FileText className="h-10 w-10" />,
      metrics: ["Process Efficiency", "Service Quality", "Resource Management", "Stakeholder Satisfaction"]
    },
    {
      area: "Institutional Quality",
      description: "Overall institutional effectiveness and strategic alignment",
      icon: <TrendingUp className="h-10 w-10" />,
      metrics: ["Strategic Goals", "Performance Indicators", "Continuous Improvement", "Best Practices"]
    }
  ]

  const achievements = [
    { number: "150+", label: "Quality Audits Completed" },
    { number: "95%", label: "Compliance Rate" },
    { number: "8", label: "Years of Excellence" },
    { number: "50+", label: "Improvement Projects" }
  ]

  // IQA Officer Profile Data
  const iqaOfficer = {
    name: "Mr. Nganyi Amos",
    title: "Head of Internal Quality Assurance",
    qualifications: [
      "PhD in Quality Management",
      "Certified Quality Auditor (CQA)",
      "ISO 9001 Lead Auditor",
      "MBA in Strategic Management"
    ],
    experience: "5+ years",
    specializations: [
      "Quality Systems Design",
      "Process Optimization",
      "Compliance Management",
      "Continuous Improvement"
    ],
    certifications: [
      "ASQ Certified Manager of Quality",
      "Six Sigma Black Belt",
      "Risk Management Professional"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Shield className="h-4 w-4" />
                Quality Assurance Excellence
              </span>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                IQA Department
                <span className="block text-2xl font-normal text-blue-200 mt-3">
                  Internal Quality Assurance
                </span>
              </h1>
              <p className="text-xl text-blue-100/90 mb-8 leading-relaxed max-w-xl">
                Ensuring organizational excellence through systematic quality assurance,
                continuous monitoring, and data-driven improvement initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  Get Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center bg-white/5 rounded-2xl py-6 px-3 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                      <div className="text-blue-200 text-sm">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IQA Officer Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our IQA Officer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by an experienced quality assurance professional dedicated to ensuring
              organizational excellence and continuous improvement.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Officer Photo and Basic Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-blue-100">
                    <Image
                      src="/images/admin/NGANYI AMOS.png"
                      alt="Mr. Nganyi Amos - Head of Internal Quality Assurance"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white rounded-full p-4 shadow-lg ring-4 ring-white">
                    <Award className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{iqaOfficer.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-6 text-center">{iqaOfficer.title}</p>

                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 mb-6">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700 text-sm font-medium">{iqaOfficer.experience} Experience</span>
                </div>

                <div className="flex space-x-3">
                  <div className="bg-white rounded-full p-3 shadow-sm border border-gray-100 hover:bg-blue-600 hover:text-white text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-sm border border-gray-100 hover:bg-blue-600 hover:text-white text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-sm border border-gray-100 hover:bg-blue-600 hover:text-white text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Qualifications and Specializations */}
              <div className="p-12 col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Qualifications */}
                  <div>
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="bg-blue-100 rounded-full p-3">
                        <GraduationCap className="h-7 w-7 text-blue-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Qualifications</h4>
                    </div>

                    <ul className="space-y-4">
                      {iqaOfficer.qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{qualification}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certifications */}
                    <div className="mt-10">
                      <div className="flex items-center space-x-3 mb-5">
                        <div className="bg-blue-100 rounded-full p-2">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <h5 className="text-xl font-semibold text-gray-900">Professional Certifications</h5>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {iqaOfficer.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="bg-blue-100 rounded-full p-3">
                        <Target className="h-7 w-7 text-blue-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Areas of Specialization</h4>
                    </div>

                    <div className="space-y-3">
                      {iqaOfficer.specializations.map((specialization, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300">
                            <div className="bg-white rounded-lg p-2.5 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                              <div className="w-2 h-2 bg-blue-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                            </div>
                            <span className="text-base font-medium text-gray-800">{specialization}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                      <h5 className="text-lg font-semibold mb-5">Key Contributions</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center bg-white/10 rounded-xl py-3">
                          <div className="text-2xl font-bold mb-1">45%</div>
                          <div className="text-xs text-blue-100">Process Efficiency Improvement</div>
                        </div>
                        <div className="text-center bg-white/10 rounded-xl py-3">
                          <div className="text-2xl font-bold mb-1">98%</div>
                          <div className="text-xs text-blue-100">Audit Compliance Rate</div>
                        </div>
                        <div className="text-center bg-white/10 rounded-xl py-3">
                          <div className="text-2xl font-bold mb-1">30+</div>
                          <div className="text-xs text-blue-100">Quality Training Programs</div>
                        </div>
                        <div className="text-center bg-white/10 rounded-xl py-3">
                          <div className="text-2xl font-bold mb-1">5</div>
                          <div className="text-xs text-blue-100">Industry Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h5 className="text-xl font-semibold text-gray-900 mb-4">Professional Biography</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Mr. Nganyi Amos brings over {iqaOfficer.experience} of experience in quality assurance and
                    organizational excellence. His expertise spans across multiple industries, with a proven
                    track record in designing and implementing robust quality management systems that drive
                    continuous improvement and operational excellence.
                  </p>
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
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
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
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-6 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
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
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Coverage
            </span>
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.area}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Metrics</h4>
                  {area.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
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
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Methodology
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IQA Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quality assurance ensuring comprehensive
              coverage and continuous improvement.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-200"></div>

            {[
              { icon: <Eye className="h-9 w-9 text-blue-600" />, step: "1. Assessment", desc: "Comprehensive evaluation of current quality systems and processes" },
              { icon: <BarChart className="h-9 w-9 text-blue-600" />, step: "2. Analysis", desc: "Data-driven analysis to identify gaps and improvement opportunities" },
              { icon: <ClipboardCheck className="h-9 w-9 text-blue-600" />, step: "3. Implementation", desc: "Strategic implementation of quality improvement initiatives" },
              { icon: <TrendingUp className="h-9 w-9 text-blue-600" />, step: "4. Monitoring", desc: "Continuous monitoring and evaluation for sustained improvement" },
            ].map((p, i) => (
              <div key={i} className="relative text-center">
                <div className="relative z-10 bg-white rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-md border-4 border-blue-50">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.step}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                About Us
              </span>
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
                {[
                  { icon: <Shield className="h-5 w-5 text-blue-600" />, title: "Risk-Based Approach", desc: "Proactive identification and mitigation of quality risks" },
                  { icon: <BarChart className="h-5 w-5 text-blue-600" />, title: "Data-Driven Decisions", desc: "Evidence-based quality improvements and decision making" },
                  { icon: <Users className="h-5 w-5 text-blue-600" />, title: "Stakeholder Engagement", desc: "Collaborative approach involving all stakeholders" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="bg-blue-100 rounded-full p-2.5 mt-0.5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">IQA Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Enhanced organizational performance",
                    "Improved stakeholder confidence",
                    "Regulatory compliance assurance",
                    "Continuous improvement culture",
                    "Risk mitigation and prevention",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors">
                      <div className="bg-white/20 rounded-full p-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
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
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Edge
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IQA Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Search className="h-10 w-10 text-blue-600" />, title: "Thorough Auditing", desc: "Comprehensive audits covering all aspects of quality management" },
              { icon: <Award className="h-10 w-10 text-blue-600" />, title: "Expert Team", desc: "Qualified professionals with extensive QA experience" },
              { icon: <TrendingUp className="h-10 w-10 text-blue-600" />, title: "Continuous Improvement", desc: "Focus on sustained quality enhancement and innovation" },
              { icon: <FileText className="h-10 w-10 text-blue-600" />, title: "Detailed Reporting", desc: "Comprehensive reports with actionable recommendations" },
            ].map((f, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-50 rounded-2xl p-6 mb-6 inline-flex">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Quality Standards</h2>
              <p className="text-xl text-gray-600">
                Partner with us to implement robust internal quality assurance systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Phone className="h-7 w-7 text-blue-600" />, label: "Phone", value: "+254 (0) 788 070 303" },
                { icon: <Mail className="h-7 w-7 text-blue-600" />, label: "Email", value: "iqa@kongonitechnical.ac.ke" },
                { icon: <MapPin className="h-7 w-7 text-blue-600" />, label: "Office", value: "Matunda, Kenya" },
              ].map((c, i) => (
                <div key={i} className="text-center bg-gray-50 rounded-2xl py-8 px-4 hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{c.label}</h3>
                  <p className="text-gray-600">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
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