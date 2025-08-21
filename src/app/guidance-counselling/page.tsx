// app/guidance-counselling/page.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  Lightbulb,
  Target,
  UserCheck,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Calendar
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guidance and Counselling Services | Kongoni Technical & Vocational College',
  description: 'Professional guidance and counselling services at Kongoni Technical and Vocational College. Supporting student wellbeing, academic success, and career development.',
  keywords: 'Guidance, Counselling, Student Support, Mental Health, Career Guidance, Academic Support, Kongoni TVC',
};

export default function GuidanceCounsellingPage() {
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
            <Link href="/student-life" className="text-primary hover:text-primary/80 transition-colors">
              Student Life
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Guidance and Counselling</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guidance and Counselling Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Supporting your journey to academic success, personal growth, and career excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Overview Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Wellbeing is Our Priority
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Kongoni Technical and Vocational College, we understand that academic success goes 
                hand-in-hand with personal wellbeing. Our dedicated Guidance and Counselling department 
                provides comprehensive support services to help you navigate your educational journey, 
                personal challenges, and career aspirations with confidence.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Academic Counselling",
                  description: "Support with study skills, time management, academic planning, and overcoming learning challenges",
                  icon: <BookOpen className="w-8 h-8 text-primary" />,
                  color: "from-blue-500/10 to-blue-600/10"
                },
                {
                  title: "Personal Counselling",
                  description: "Confidential support for personal issues, stress management, anxiety, and emotional wellbeing",
                  icon: <Heart className="w-8 h-8 text-primary" />,
                  color: "from-pink-500/10 to-pink-600/10"
                },
                {
                  title: "Career Guidance",
                  description: "Career exploration, job search strategies, interview preparation, and professional development",
                  icon: <Briefcase className="w-8 h-8 text-primary" />,
                  color: "from-green-500/10 to-green-600/10"
                },
                {
                  title: "Crisis Intervention",
                  description: "Immediate support and intervention for students facing crisis situations or emergencies",
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  color: "from-red-500/10 to-red-600/10"
                },
                {
                  title: "Group Counselling",
                  description: "Peer support groups, workshops, and seminars on various topics relevant to student life",
                  icon: <Users className="w-8 h-8 text-primary" />,
                  color: "from-purple-500/10 to-purple-600/10"
                },
                {
                  title: "Life Skills Training",
                  description: "Workshops on communication, leadership, financial literacy, and other essential life skills",
                  icon: <Lightbulb className="w-8 h-8 text-primary" />,
                  color: "from-orange-500/10 to-orange-600/10"
                }
              ].map((service, index) => (
                <div key={index} className={`bg-gradient-to-br ${service.color} rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Counselling Team */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Meet Our Counselling Team
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Wanjiku",
                  title: "Head of Guidance & Counselling",
                  qualifications: "PhD Counselling Psychology",
                  specialization: "Academic & Career Counselling",
                  image: "/images/counsellor-1.jpg"
                },
                {
                  name: "Mr. James Kiprotich",
                  title: "Senior Counsellor",
                  qualifications: "M.A. Clinical Psychology",
                  specialization: "Personal & Crisis Counselling",
                  image: "/images/counsellor-2.jpg"
                },
                {
                  name: "Ms. Grace Achieng",
                  title: "Counselling Psychologist",
                  qualifications: "B.A. Psychology, Cert. Counselling",
                  specialization: "Group Therapy & Life Skills",
                  image: "/images/counsellor-3.jpg"
                }
              ].map((counsellor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <UserCheck className="w-12 h-12 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {counsellor.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">{counsellor.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{counsellor.qualifications}</p>
                  <p className="text-xs text-gray-500">{counsellor.specialization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Help */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Support Your Success
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Personalized Support Plans
                    </h4>
                    <p className="text-gray-700">
                      We work with each student to develop individualized support plans that address 
                      their unique needs, goals, and circumstances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Confidential Environment
                    </h4>
                    <p className="text-gray-700">
                      All counselling sessions are strictly confidential, providing a safe space 
                      for students to express themselves freely without judgment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Flexible Scheduling
                    </h4>
                    <p className="text-gray-700">
                      We offer flexible appointment times to accommodate your academic schedule, 
                      including evening and weekend sessions when necessary.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Academic Integration
                    </h4>
                    <p className="text-gray-700">
                      Our services are integrated with academic departments to ensure holistic 
                      support that enhances your educational experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Peer Support Networks
                    </h4>
                    <p className="text-gray-700">
                      We facilitate peer support groups and mentorship programs that create 
                      lasting connections and mutual support among students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Follow-up Care
                    </h4>
                    <p className="text-gray-700">
                      We provide ongoing follow-up to ensure that the support you receive 
                      continues to meet your evolving needs throughout your studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact and Hours Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 text-primary mr-2" />
                Get Support Today
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:counselling@kongonitvc.ac.ke" className="text-primary hover:text-primary/80 transition-colors">
                      counselling@kongonitvc.ac.ke
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+254788070304" className="text-primary hover:text-primary/80 transition-colors">
                      +254 788 070 304
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-700">Student Services Building, Ground Floor</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Crisis Hotline:</strong> Available 24/7 for urgent situations
                </p>
                <a href="tel:+254700123456" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  +254 700 123 456
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-2" />
                Office Hours
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-700">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-700">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-700">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Walk-ins Welcome:</strong> No appointment necessary during office hours
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Appointments:</strong> Preferred for longer sessions or specific concerns
                </p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Resources
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Study Skills Workshop",
                  schedule: "Every Tuesday, 2:00 PM",
                  description: "Learn effective study techniques and time management"
                },
                {
                  title: "Stress Management Seminar",
                  schedule: "Monthly on Fridays, 3:00 PM",
                  description: "Develop healthy coping strategies for academic pressure"
                },
                {
                  title: "Career Planning Sessions",
                  schedule: "Every Thursday, 4:00 PM",
                  description: "Explore career options and develop professional skills"
                },
                {
                  title: "Peer Support Groups",
                  schedule: "Weekly on Wednesdays, 5:00 PM",
                  description: "Connect with fellow students facing similar challenges"
                }
              ].map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{resource.schedule}</p>
                  <p className="text-xs text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Take the First Step?
            </h3>
            <p className="text-lg mb-6">
              Remember, seeking support is a sign of strength, not weakness. 
              We&apos;re here to help you succeed in all aspects of your college experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </Link>
              <a 
                href="tel:+254788070304"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-white/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}