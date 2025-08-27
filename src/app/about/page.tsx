import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Metadata for SEO
export const metadata: Metadata = {
  title: "About Us | Kongoni Technical Locational Training College",
  description: "Learn about Kongoni Technical Locational Training College - over 5 years of excellence in technical education, empowering students with practical skills and industry-relevant training.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-blue-700 text-white py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.05)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-secondary">Kongoni TVC</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 mb-6 leading-relaxed">
              A Government Sponsored Institution under the Ministry of Education
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
              <div className="text-lg opacity-90 space-y-2">
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Along Eldoret-Kitale Road, P.O.Box 45 - 30205 Matunda
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Contact: 0788 070 303 | Email: kongonitvc@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Website: www.kongonitechnical.ac.ke
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Introduction Section with Enhanced Layout and Images */}
          <section className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                  About Our Institution
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Kongoni TVC is a Government Sponsored Institution under the Ministry of Education. It was established with the core mandate of equipping youths with skills needed to secure employment in todays market.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The institution opened its doors to the first batch of students in <strong className="text-primary">October 2019</strong> and is well equipped to offer courses ranging from ICT, Business to Engineering courses at certificate and diploma level.
                    </p>
                    <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                      <p className="text-primary font-semibold text-lg">
                        Centre of Excellence in Building and Civil Engineering
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Campus Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <div className="relative w-full h-64">
                        <Image 
                          src="/images/facilities/facilities12.jpg" 
                          alt="Kongoni TVC Campus View - Modern Technical College Building" 
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold">Our Beautiful Campus</p>
                        <p className="text-sm opacity-90">Serene Learning Environment</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h3 className="font-bold text-foreground mb-4">Our Location</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Located in Likuyani Sub-County of Kakamega County next to Likuyani Sub County Headquarters along Kitale-Eldoret Road in a serene environment conducive for learning and personal development.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
                      <h3 className="font-bold text-foreground mb-4">Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        To provide quality technical and vocational training in collaboration with stakeholders to produce highly skilled and innovative human resource.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* History Timeline Section */}
          <section className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">Our Journey</h2>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary/20 hidden lg:block"></div>
                
                <div className="space-y-12">
                  {/* 2016 */}
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 lg:ml-auto lg:text-right">
                        <div className="text-primary font-bold text-xl mb-3">2016</div>
                        <h3 className="font-bold text-foreground text-lg mb-4">Foundation Laid</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The idea to start the college was mooted by political and community leadership. Funds were availed to purchase approximately 5 acres of land.
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="lg:w-1/2 lg:pl-12"></div>
                  </div>

                  {/* 2019 */}
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12"></div>
                    <div className="hidden lg:block w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="lg:w-1/2 lg:pl-12 mb-6 lg:mb-0">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="text-secondary font-bold text-xl mb-3">November 2019</div>
                        <h3 className="font-bold text-foreground text-lg mb-4">Official Registration</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The college was registered by TVETA under Registration Certificate number TVETA/ASS/7/3440K (2) as a centre of excellence in Building and Civil Engineering.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2019 First Batch */}
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 lg:ml-auto lg:text-right">
                        <div className="text-primary font-bold text-xl mb-3">October 2019</div>
                        <h3 className="font-bold text-foreground text-lg mb-4">First Students</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The first batch of 62 trainees was enrolled in Building and Civil Engineering, ICT, and Business Studies with 12 staff members.
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="lg:w-1/2 lg:pl-12"></div>
                  </div>

                  {/* 2020 */}
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12"></div>
                    <div className="hidden lg:block w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="lg:w-1/2 lg:pl-12 mb-6 lg:mb-0">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="text-secondary font-bold text-xl mb-3">2020</div>
                        <h3 className="font-bold text-foreground text-lg mb-4">Infrastructure Complete</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The first block construction was completed, housing offices, lecture rooms, and workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Information - Enhanced Design */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <pattern id="triangles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20 20L0 40L40 40z" fill="rgba(255,255,255,0.1)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#triangles)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Official Accreditation</h2>
                  <p className="text-xl opacity-90">Recognized by TVETA</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-6">TVETA Registration</h3>
                      <div className="space-y-4">
                        <p className="text-lg">Registration Certificate Number:</p>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl font-mono text-lg border border-white/30">
                          TVETA/ASS/7/3440K (2)
                        </div>
                        <p className="text-sm opacity-80">Registered: November 2019</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-6">Centre of Excellence</h3>
                      <div className="space-y-4">
                        <p className="text-lg">Specialization:</p>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl text-lg font-semibold border border-white/30">
                          Building and Civil Engineering (BCE)
                        </div>
                        <p className="text-sm opacity-80">Government Recognized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objectives and Core Values - Modern Cards */}
          <section className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">Our Foundation</h2>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Objectives */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-primary text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Objectives</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Achieve and maintain a level of quality training which enhances the institution's reputation with customers.",
                    "Ensure compliance with the Education Act and other relevant statutory and regulatory requirements.",
                    "Endeavour to always maximize customer satisfaction with services provided by Kongoni TVC."
                  ].map((objective, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-primary/20 transition-colors">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-secondary text-2xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: "🤝", value: "Teamwork", color: "bg-primary" },
                    { icon: "⚖️", value: "Equity", color: "bg-secondary" },
                    { icon: "⭐", value: "Professionalism", color: "bg-blue-600" },
                    { icon: "👁️", value: "Transparency & Accountability", color: "bg-green-600" },
                    { icon: "❤️", value: "Integrity", color: "bg-red-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group hover:bg-gray-50 p-3 rounded-xl transition-colors">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <span className="text-white text-lg">{item.icon}</span>
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Academic Departments - Enhanced with Descriptions */}
          <section className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">Academic Departments</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { 
                  icon: "💼", 
                  name: "Business Department", 
                  description: "Developing future leaders in commerce and entrepreneurship.",
                  color: "bg-primary",
                  gradient: "from-primary to-blue-600",
                  slug: "business"
                },
                { 
                  icon: "💻", 
                  name: "Computing & Informatics Department", 
                  description: "Empowering students with modern computing and digital skills.",
                  color: "bg-secondary",
                  gradient: "from-secondary to-yellow-500",
                  slug: "computing-and-informatics"
                },
                { 
                  icon: "🏗️", 
                  name: "Building & Civil Engineering Department", 
                  description: "Training in structural design, construction, and surveying.",
                  color: "bg-blue-600",
                  gradient: "from-blue-600 to-blue-800",
                  slug: "building-and-civil-engineering"
                },
                { 
                  icon: "⚡", 
                  name: "Electrical & Electronics Engineering Department", 
                  description: "Hands-on experience in electrical systems and installations.",
                  color: "bg-yellow-600",
                  gradient: "from-yellow-600 to-orange-500",
                  slug: "electrical-and-electronics-engineering"
                },
                { 
                  icon: "🔧", 
                  name: "Automotive & Mechanical Engineering Department", 
                  description: "Mastering vehicle diagnostics, repair, and maintenance.",
                  color: "bg-green-600",
                  gradient: "from-green-600 to-emerald-600",
                  slug: "automotive-and-mechanical-engineering"
                },
                { 
                  icon: "✂️", 
                  name: "Fashion Design and Cosmetics Department", 
                  description: "Creative training in fashion design, garment construction, and beauty techniques.",
                  color: "bg-pink-600",
                  gradient: "from-pink-600 to-purple-600",
                  slug: "fashion-design-and-cosmetics"
                },
                { 
                  icon: "🏨", 
                  name: "Hospitality and Tourism Department", 
                  description: "Comprehensive training in hotel management, tourism operations, and customer service.",
                  color: "bg-purple-600",
                  gradient: "from-purple-600 to-indigo-600",
                  slug: "hospitality-and-tourism"
                },
                { 
                  icon: "🌱", 
                  name: "Agriculture Department", 
                  description: "Innovative farming techniques and agribusiness education.",
                  color: "bg-emerald-600",
                  gradient: "from-emerald-600 to-green-700",
                  slug: "agriculture"
                }
              ].map((dept, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                  {/* Background gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <span className="text-white text-2xl">{dept.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight mb-4 text-center">{dept.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">{dept.description}</p>
                    
                    {/* Learn More Button */}
                    <div className="text-center">
                      <Link 
                        href={`/departments/${dept.slug}`}
                        className={`inline-flex items-center text-sm font-semibold ${dept.color.replace('bg-', 'text-')} hover:underline transition-colors group-hover:scale-105 transform transition-transform`}
                      >
                        Learn More
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Department Stats */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Academic Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With 8 comprehensive departments offering both certificate and diploma programs, we provide industry-relevant training that prepares students for successful careers in their chosen fields.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <p className="text-sm text-gray-600">Departments</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">25+</div>
                    <p className="text-sm text-gray-600">Programs</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                    <p className="text-sm text-gray-600">Qualified Instructors</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                    <p className="text-sm text-gray-600">Employment Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Statistics - Enhanced */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">Our Impact in Numbers</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { number: "5", label: "Years of Excellence", subtitle: "(Since 2019)", color: "text-primary" },
                  { number: "8", label: "Academic Departments", subtitle: "(Comprehensive Programs)", color: "text-secondary" },
                  { number: "500+", label: "Graduates", subtitle: "(Growing Strong)", color: "text-blue-600" },
                  { number: "5", label: "Acres Campus", subtitle: "(Serene Environment)", color: "text-green-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-3`}>{stat.number}</div>
                    <p className="text-gray-700 font-semibold mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us - Modern Layout with Images */}
          <section className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16">Why Choose Kongoni TVC</h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: "01",
                  title: "State-of-the-Art Training Equipment",
                  description: "KTVC proudly holds the stature of one of the country's most equipped colleges in terms of modern training equipment and experienced staff.",
                  gradient: "from-primary to-blue-600",
                  fallbackImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  number: "02",
                  title: "Dual Training System",
                  description: "Innovative dual system of training where trainees are trained 50% at college and 50% at the industry for real-world experience.",
                  gradient: "from-secondary to-yellow-500",
                  fallbackImage: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  number: "03",
                  title: "Excellence in Education",
                  description: "Equity in education, a well-rounded approach to training, and a focus on discipline and ethics are hallmarks in skill transfer at KTVC.",
                  gradient: "from-green-600 to-emerald-600",
                  fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative group">
                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src={feature.fallbackImage}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <span className="text-white text-lg font-bold">{feature.number}</span>
                    </div>
                  </div>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-6 leading-tight">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action - Enhanced */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-primary via-primary/90 to-blue-700 text-white py-16 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id="cta-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M50 50L0 100L100 100z M50 50L100 0L100 100z" fill="rgba(255,255,255,0.1)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Shape Your Future?</h2>
                <p className="text-xl lg:text-2xl mb-12 opacity-95 leading-relaxed">
                  Join thousands of successful graduates who started their careers at Kongoni Technical College
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="/programs" 
                    className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-w-[200px] justify-center"
                  >
                    <span className="mr-2">📚</span>
                    View Programs
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-w-[200px] justify-center"
                  >
                    <span className="mr-2">📞</span>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}