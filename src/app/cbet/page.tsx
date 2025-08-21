// app/cbet/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Wrench, Users, Trophy, BookOpen, Target, Phone, Mail, MapPin, Lightbulb, Settings, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CBET Department | Competency-Based Education and Training',
  description: 'Excellence in Competency-Based Education and Training programs designed to meet industry standards and workforce needs.',
  keywords: 'CBET, Competency Based Education, Training, Skills Development, Technical Education, Vocational Training',
}

export default function CBETDepartment() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Curriculum Development",
      description: "Designing competency-based curricula aligned with industry requirements and standards."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Training",
      description: "Hands-on technical skills training across various trades and professions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Instructor Training",
      description: "Comprehensive training programs for CBET instructors and trainers."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Assessment & Certification",
      description: "Competency-based assessment and certification programs."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning Materials",
      description: "Development of competency-based learning materials and resources."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Industry Partnerships",
      description: "Facilitating partnerships between training institutions and industry."
    }
  ]

  const achievements = [
    { number: "1000+", label: "Students Trained" },
    { number: "25", label: "Training Programs" },
    { number: "95%", label: "Employment Rate" },
    { number: "100+", label: "Industry Partners" }
  ]

  const programs = [
    {
      title: "Automotive Technology",
      description: "Comprehensive automotive repair and maintenance training",
      duration: "18 months",
      level: "Certificate"
    },
    {
      title: "Electrical Installation",
      description: "Electrical systems installation and maintenance",
      duration: "12 months", 
      level: "Diploma"
    },
    {
      title: "Welding & Fabrication",
      description: "Advanced welding techniques and metal fabrication",
      duration: "15 months",
      level: "Certificate"
    },
    {
      title: "ICT Support",
      description: "Computer systems and network support training",
      duration: "24 months",
      level: "Diploma"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                CBET Department
                <span className="block text-2xl font-normal text-green-200 mt-2">
                  Competency-Based Education & Training
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Delivering world-class competency-based education and training programs 
                that bridge the gap between education and industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-full hover:bg-green-50 transition-all duration-300 group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#programs" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-900 transition-all duration-300"
                >
                  View Programs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                      <div className="text-green-200 text-sm">{achievement.label}</div>
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
              Comprehensive CBET services designed to develop practical skills and 
              competencies aligned with industry standards and market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="text-green-600 mb-6 group-hover:text-green-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-aligned training programs designed to equip learners with 
              practical skills and competencies for immediate employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>📅 {program.duration}</span>
                  </div>
                  <Link 
                    href="/contact"
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in CBET Implementation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our CBET Department is at the forefront of competency-based education, 
                delivering training programs that are directly aligned with industry needs 
                and global best practices.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We focus on practical skills development, ensuring our graduates are 
                job-ready and equipped with the competencies demanded by todays employers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovative Learning</h4>
                    <p className="text-gray-600">Modern teaching methodologies and technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Settings className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Practical Training</h4>
                    <p className="text-gray-600">Hands-on experience with industry-standard equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                    <p className="text-gray-600">Nationally recognized certifications and qualifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">CBET Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Industry-relevant curriculum</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Competency-based assessment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Flexible learning pathways</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Job placement assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your CBET Journey</h2>
              <p className="text-xl text-gray-600">
                Ready to develop industry-relevant skills and competencies?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+254 (0) 123 456 790</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">cbet@company.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Campus</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 group"
              >
                Contact CBET Department
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}