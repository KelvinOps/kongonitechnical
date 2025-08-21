// app/dean-of-students/page.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Users, 
  Home, 
  Utensils, 
  Heart,
  Trophy,
  DollarSign,
  Star,
  Shield,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  UserCheck,
  Building,
  Stethoscope,
  Music,
  Camera,
  TreePine,
  Award,
  Lightbulb,
  HandHeart
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dean of Students | Kongoni Technical & Vocational College',
  description: 'Office of the Dean of Students at Kongoni Technical and Vocational College. Supporting student welfare, accommodation, catering, medical services, sports, and student activities.',
  keywords: 'Dean of Students, Student Welfare, Accommodation, Catering, Medical Services, Sports, Clubs, Societies, TVET',
};

export default function DeanOfStudentsPage() {
  const services = [
    {
      title: "Accommodation Services",
      head: "Senior Housekeeper",
      description: "Coordination of room accommodation and maintenance of cleanliness in and around the hostels",
      icon: <Home className="w-8 h-8 text-primary" />,
      details: [
        "Room allocation and coordination",
        "Hostel cleanliness maintenance", 
        "Student accommodation support",
        "Facility management and upkeep"
      ],
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      title: "Catering Services",
      head: "Senior Cateress",
      description: "Provision of good quality meals in a clean environment under the Pay As You Eat system",
      icon: <Utensils className="w-8 h-8 text-primary" />,
      details: [
        "Quality meal provision",
        "Pay As You Eat system",
        "Clean dining environment",
        "Nutritious food programs"
      ],
      color: "from-green-500/10 to-green-600/10"
    },
    {
      title: "Medical Services",
      head: "Clinical Officer",
      description: "Ensures that students get medical services in college and transfers complicated cases to nearby hospitals",
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      details: [
        "On-campus medical care",
        "Health consultations",
        "Emergency response",
        "Hospital referrals when needed"
      ],
      color: "from-red-500/10 to-red-600/10"
    },
    {
      title: "Games & Sports",
      head: "HOD Physical Education",
      description: "Participation in games and sports under the Kenya Technical Institutions Sports Association",
      icon: <Trophy className="w-8 h-8 text-primary" />,
      details: [
        "KTISA competitions",
        "Inter-college tournaments",
        "Sports facilities management",
        "Athletic development programs"
      ],
      color: "from-purple-500/10 to-purple-600/10"
    }
  ];

  const bursaries = [
    {
      title: "HELB Loans",
      description: "Higher Education Loans Board financing for eligible students",
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      title: "College Bursaries",
      description: "Institution-specific financial assistance programs",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: "CDF Bursaries",
      description: "Constituency Development Fund educational support",
      icon: <HandHeart className="w-6 h-6 text-primary" />
    }
  ];

  const clubs = [
    {
      name: "Christian Union",
      description: "Spiritual growth and fellowship community",
      icon: <Star className="w-5 h-5 text-primary" />,
      category: "Spiritual"
    },
    {
      name: "SDA",
      description: "Seventh-day Adventist student organization focusing on faith and service",
      icon: <Users className="w-5 h-5 text-primary" />,
      category: "Spiritual"
    },
    {
      name: "Music and Drama",
      description: "Award-winning club excelling in national drama and music festivals",
      icon: <Music className="w-5 h-5 text-primary" />,
      category: "Creative",
      highlight: true
    },
    {
      name: "Rover Scouts",
      description: "Leadership development and community service",
      icon: <Shield className="w-5 h-5 text-primary" />,
      category: "Leadership"
    },
    {
      name: "Red Cross",
      description: "First aid training and humanitarian service",
      icon: <Heart className="w-5 h-5 text-primary" />,
      category: "Health"
    },
    {
      name: "KongoniTvc Science Technology Innovators Club",
      description: "Technology innovation and entrepreneurship development",
      icon: <Lightbulb className="w-5 h-5 text-primary" />,
      category: "Innovation"
    }
  ];

  const clubCategories = [...new Set(clubs.map(club => club.category))];

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
            <Link href="/administration" className="text-primary hover:text-primary/80 transition-colors">
              Administration
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Dean of Students</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Office of the Dean of Students
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Supporting student welfare and development from entry to graduation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Dean's Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Dean's Photo and Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center sticky top-8">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 ring-4 ring-primary/20">
                  <Image
                    src="/images/dean-of-students.png"
                    alt="Dean of Students"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Dean of Students
                  </h2>
                  <p className="text-primary font-semibold mb-1 text-lg">Student Welfare Office</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Kongoni Technical & Vocational College
                  </p>
                  
                  {/* Responsibilities Badge */}
                  <div className="space-y-3 text-sm text-gray-700 mb-6">
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Student Welfare</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Home className="w-4 h-4 text-primary" />
                      <span>Accommodation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg py-2 px-3">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>Student Activities</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:dean.students@kongonitvc.ac.ke" className="hover:text-primary transition-colors">
                      dean.students@kongonitvc.ac.ke
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
                    <span>Student Affairs Office</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dean's Message and Role */}
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Message */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  Office Overview
                </h2>
                
                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p className="leading-relaxed text-lg">
                    The Dean of Students is concerned with students&apos; welfare from entry to graduation. 
                    Our office has dedicated staff members whose responsibility is to help students settle 
                    down and adjust to college life, ensuring a supportive and conducive learning environment.
                  </p>

                  <p className="leading-relaxed">
                    We believe that a student&apos;s academic success is deeply connected to their overall 
                    well-being. Therefore, our comprehensive approach addresses not only academic needs 
                    but also social, emotional, and physical aspects of student life at Kongoni Technical 
                    and Vocational College.
                  </p>

                  <p className="leading-relaxed">
                    Our team works collaboratively to create an inclusive environment where every student 
                    can thrive. We address any social issues that can affect students&apos; academic performance, 
                    providing timely intervention and support services to ensure student success.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 text-primary mr-2" />
                  Our Mission
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide comprehensive student support services that promote academic excellence, 
                  personal development, and holistic growth, ensuring every student has the resources 
                  and guidance needed to succeed in their educational journey and beyond.
                </p>

                <ul className="space-y-2">
                  {[
                    "Facilitate smooth transition to college life",
                    "Provide comprehensive welfare services",
                    "Support academic and personal development",
                    "Foster a vibrant campus community"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Student Services Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Student Welfare Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-gradient-to-br ${service.color} rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm font-medium text-primary mb-2">
                        Headed by: {service.head}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bursaries Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Financial Support & Bursaries
            </h3>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  We provide various financial assistance programs to ensure that financial constraints 
                  do not hinder students from achieving their academic goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bursaries.map((bursary, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary/5 transition-colors duration-300">
                    <div className="flex justify-center mb-4">
                      {bursary.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {bursary.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {bursary.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clubs and Societies Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Clubs & Societies
            </h3>
            
            <div className="mb-8 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Our vibrant student community offers numerous opportunities for personal growth, 
                skill development, and meaningful engagement through various clubs and societies.
              </p>
            </div>

            {/* Clubs Grid by Category */}
            <div className="space-y-8">
              {clubCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                    {category} Clubs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {clubs
                      .filter(club => club.category === category)
                      .map((club, index) => (
                        <div key={index} className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 ${club.highlight ? 'ring-2 ring-primary/20' : ''}`}>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              {club.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                                {club.name}
                                {club.highlight && (
                                  <Star className="w-4 h-4 text-yellow-500 ml-1 fill-current" />
                                )}
                              </h5>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {club.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Comprehensive Student Support
            </h3>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              &quot;We address any social issue that can affect students&apos; academic performance, 
              providing holistic support for student success.&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/student-hub"
                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Student Hub
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white/20 hover:bg-white hover:text-primary text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Office
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}