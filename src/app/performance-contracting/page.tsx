// app/performance-contracting/page.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  Target,  
  Users, 
  BarChart3, 
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  FileText,
  Calendar,
  Star,
  Clock,
  AlertCircle,
  Download,
  PieChart,
  Activity,
  ArrowUp,
  Building,
  GraduationCap,
  Briefcase,
  Shield
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Contracting Team | Kongoni Technical & Vocational College',
  description: 'Meet the Performance Contracting Team at Kongoni Technical and Vocational College. Learn about our commitment to excellence and accountability in service delivery.',
  keywords: 'Performance Contracting, Team, Kongoni Technical College, TVET, Excellence, Accountability',
};

// Performance Contracting Team Members Data
const teamMembers = [
  {
    name: "Ms. Judith Akaranga",
    title: "Team Leader & Principal",
    image: "/images/principal.png",
    email: "principal@kongonitvc.ac.ke",
    phone: "+254 788 070 303"
  },
  {
    name: "Mr. ",
    title: "Deputy Principal (Academics)",
    image: "/images/team/deputy-principal.png",
    email: "deputy.academics@kongonitvc.ac.ke",
    phone: "+254 722 345 678"
  },
  {
    name: "Ms. ",
    title: "Deputy Principal (Administration)",
    image: "/images/team/deputy-admin.png",
    email: "deputy.admin@kongonitvc.ac.ke",
    phone: "+254 733 456 789"
  },
  {
    name: "Mr. ",
    title: "Head of Department - Engineering",
    image: "/images/team/hod-engineering.png",
    email: "hod.engineering@kongonitvc.ac.ke",
    phone: "+254 744 567 890"
  },
  {
    name: "Ms. ",
    title: "Head of Department - Business Studies",
    image: "/images/team/hod-business.png",
    email: "hod.business@kongonitvc.ac.ke",
    phone: "+254 755 678 901"
  },
  {
    name: "Mrs Millicent Nambo",
    title: "Finance Officer",
    image: "/images/team/finance-manager.png",
    email: "finance@kongonitvc.ac.ke",
    phone: "+254 766 789 012"
  },
  {
    name: "Ms. Jesca Kitiavi",
    title: "Human Resources Manager",
    image: "/images/team/hr-manager.png",
    email: "hr@kongonitvc.ac.ke",
    phone: "+254 777 890 123"
  },
  {
    name: "Mr. Cyrus Lagat",
    title: "Quality Assurance Officer",
    image: "/images/team/qa-officer.png",
    email: "quality@kongonitvc.ac.ke",
    phone: "+254 788 901 234"
  },
  {
    name: "Mr. Kevin Masinde",
    title: "Dean of Students",
    image: "/images/team/student-affairs.png",
    email: "students@kongonitvc.ac.ke",
    phone: "+254 799 012 345"
  },
  {
    name: "Mr. Nelson Thuku",
    title: "ICT HOD ",
    image: "/images/hod/nelsonthuku.jpg",
    email: "ict@kongonitvc.ac.ke",
    phone: "+254 700 123 456"
  },
  {
    name: " Mr Makwila Kipkore",
    title: "Procurement Officer",
    image: "/images/team/procurement.png",
    email: "procurement@kongonitvc.ac.ke",
    phone: "+254 711 234 567"
  },
  {
    name: "Mr. ",
    title: "Internal Auditor",
    image: "/images/team/auditor.png",
    email: "audit@kongonitvc.ac.ke",
    phone: "+254 722 345 678"
  }
];

// Performance Statistics
const performanceStats = [
  { label: "Overall Performance Score", value: "92%", icon: Target, trend: "+3%" },
  { label: "Targets Achieved", value: "78/85", icon: CheckCircle, trend: "+5" },
  { label: "Key Partnerships", value: "45", icon: Briefcase, trend: "+8" },
  { label: "Compliance Rate", value: "96%", icon: Shield, trend: "+2%" }
];

// Performance Areas
const performanceAreas = [
  {
    title: "Academic Excellence",
    description: "Monitoring student outcomes, pass rates, and academic quality standards.",
    icon: GraduationCap,
    metrics: [
      { label: "Pass Rate Target", value: "85%" },
      { label: "Current Achievement", value: "87%" },
      { label: "Student Satisfaction", value: "92%" }
    ],
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    title: "Operational Efficiency",
    description: "Tracking resource utilization, cost management, and operational effectiveness.",
    icon: Building,
    metrics: [
      { label: "Budget Utilization", value: "94%" },
      { label: "Infrastructure Use", value: "88%" },
      { label: "Process Efficiency", value: "91%" }
    ],
    color: "from-green-500/10 to-green-600/10"
  },
  {
    title: "Staff Performance",
    description: "Evaluating teaching quality, professional development, and staff satisfaction.",
    icon: Users,
    metrics: [
      { label: "Staff Retention", value: "95%" },
      { label: "Training Compliance", value: "89%" },
      { label: "Performance Rating", value: "4.2/5" }
    ],
    color: "from-orange-500/10 to-orange-600/10"
  },
  {
    title: "Industry Partnerships",
    description: "Measuring industry collaboration, internship placements, and employer feedback.",
    icon: Briefcase,
    metrics: [
      { label: "Active Partnerships", value: "45" },
      { label: "Placement Rate", value: "78%" },
      { label: "Employer Rating", value: "4.5/5" }
    ],
    color: "from-purple-500/10 to-purple-600/10"
  }
];

// Key Performance Indicators
const keyPerformanceIndicators = [
  {
    category: "Academic Performance",
    indicators: [
      { name: "Overall Pass Rate", target: "85%", achieved: "87%", status: "exceeded" },
      { name: "Graduation Rate", target: "80%", achieved: "82%", status: "exceeded" },
      { name: "Student Retention", target: "90%", achieved: "89%", status: "near" },
      { name: "Program Completion", target: "75%", achieved: "78%", status: "exceeded" }
    ]
  },
  {
    category: "Financial Management",
    indicators: [
      { name: "Budget Execution", target: "95%", achieved: "94%", status: "near" },
      { name: "Revenue Generation", target: "100%", achieved: "103%", status: "exceeded" },
      { name: "Cost per Student", target: "≤50K", achieved: "48K", status: "exceeded" },
      { name: "Infrastructure Investment", target: "15%", achieved: "16%", status: "exceeded" }
    ]
  },
  {
    category: "Human Resource",
    indicators: [
      { name: "Staff Development", target: "100%", achieved: "95%", status: "near" },
      { name: "Lecturer Qualification", target: "80%", achieved: "85%", status: "exceeded" },
      { name: "Staff Satisfaction", target: "4.0", achieved: "4.2", status: "exceeded" },
      { name: "Training Hours/Staff", target: "40hrs", achieved: "42hrs", status: "exceeded" }
    ]
  }
];

// Performance Reports
const performanceReports = [
  {
    title: "Q4 2024 Performance Report",
    period: "October - December 2024",
    status: "Completed",
    overallScore: "92%",
    downloadUrl: "#"
  },
  {
    title: "Q3 2024 Performance Report", 
    period: "July - September 2024",
    status: "Completed",
    overallScore: "89%",
    downloadUrl: "#"
  },
  {
    title: "Q2 2024 Performance Report",
    period: "April - June 2024", 
    status: "Completed",
    overallScore: "87%",
    downloadUrl: "#"
  },
  {
    title: "Q1 2025 Performance Report",
    period: "January - March 2025",
    status: "In Progress",
    overallScore: "TBD",
    downloadUrl: "#"
  }
];

export default function PerformanceContractingPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "exceeded": return "text-green-600 bg-green-50";
      case "achieved": return "text-blue-600 bg-blue-50";
      case "near": return "text-orange-600 bg-orange-50";
      default: return "text-red-600 bg-red-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "exceeded": return <ArrowUp className="w-4 h-4" />;
      case "achieved": return <CheckCircle className="w-4 h-4" />;
      case "near": return <AlertCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

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
            <span className="text-gray-700">Performance Contracting</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Performance Contracting Team
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Committed to excellence, accountability, and continuous improvement in service delivery through transparent performance monitoring and strategic planning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-secondary text-black px-4 py-2 rounded-lg font-semibold text-lg">
                    92% Overall Score
                  </span>
                  <span className="bg-secondary text-black px-4 py-2 rounded-lg font-semibold text-lg">
                    ISO Certified
                  </span>
                  <span className="bg-secondary text-black px-4 py-2 rounded-lg font-semibold text-lg">
                    Quality Assured
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Image
                  src="/images/performance-dashboard.jpg"
                  alt="Performance Contract Dashboard"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Performance Statistics */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 mb-2">{stat.label}</p>
                  <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-sm font-medium">
                    {stat.trend}
                  </span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary mr-3" />
                About Performance Contracting
              </h2>
              
              <div className="prose prose-lg text-gray-700 space-y-6 text-left">
                <p className="leading-relaxed text-lg">
                  Performance Contracting at Kongoni Technical and Vocational College is a strategic 
                  management tool that enhances service delivery, accountability, and institutional 
                  effectiveness. Our dedicated team works collaboratively to ensure that we meet and 
                  exceed our performance targets across all key areas of operation.
                </p>

                <p className="leading-relaxed">
                  The Performance Contracting framework enables us to establish clear performance 
                  indicators, monitor progress systematically, and implement corrective measures 
                  where necessary. This approach ensures continuous improvement in our educational 
                  services and operational efficiency.
                </p>
              </div>
            </div>

            {/* Key Performance Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {performanceAreas.map((area, index) => (
                <div key={index} className={`bg-gradient-to-br ${area.color} rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary text-white">
                      <area.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {area.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Performance Contracting Team
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 ring-4 ring-primary/20">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold text-sm mb-3">
                      {member.title}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-3 h-3 text-primary" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-3 h-3 text-primary" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Performance Indicators */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Performance Indicators (KPIs)
            </h3>
            <div className="space-y-8">
              {keyPerformanceIndicators.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.indicators.map((indicator, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900 text-sm">{indicator.name}</h5>
                          <div className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(indicator.status)}`}>
                            {getStatusIcon(indicator.status)}
                            {indicator.status}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Target:</span>
                            <span className="font-medium">{indicator.target}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Achieved:</span>
                            <span className="font-medium text-primary">{indicator.achieved}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Framework */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Performance Framework & Objectives
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Strategic Objectives
                </h4>
                <ul className="space-y-3">
                  {[
                    "Enhance quality of technical and vocational education delivery",
                    "Improve student completion rates and employment outcomes",
                    "Strengthen industry partnerships and stakeholder engagement",
                    "Optimize resource utilization and operational efficiency"
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
                  <Star className="w-6 h-6 mr-2" />
                  Performance Indicators
                </h4>
                <ul className="space-y-3">
                  {[
                    "Student satisfaction rates and academic performance metrics",
                    "Staff development and professional growth indicators",
                    "Infrastructure development and facility utilization rates",
                    "Community engagement and service delivery benchmarks"
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

          {/* Performance Reports Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Performance Reports
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {performanceReports.map((report, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{report.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-primary w-4 h-4" />
                      <span>Period: {report.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="text-primary w-4 h-4" />
                      <span>Overall Score: {report.overallScore}</span>
                    </div>
                  </div>
                  {report.status === "Completed" && (
                    <div className="flex items-center gap-2 text-primary cursor-pointer hover:text-primary/80">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">Download Report</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Framework */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Implementation Framework
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Planning</h4>
                  <p className="text-gray-700 text-sm">Set clear objectives, targets, and performance indicators</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h4>
                  <p className="text-gray-700 text-sm">Continuous tracking and measurement of performance metrics</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <PieChart className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h4>
                  <p className="text-gray-700 text-sm">Regular assessment of progress against set targets</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h4>
                  <p className="text-gray-700 text-sm">Implement corrective measures and enhance performance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white text-center">
              <blockquote className="text-xl italic mb-6 leading-relaxed">
                &quot;Through our Performance Contracting framework, we are committed to delivering 
                exceptional technical education while maintaining the highest standards of accountability, 
                transparency, and continuous improvement. Together, we strive for excellence in all 
                aspects of our institutional operations.&quot;
              </blockquote>
              <cite className="text-secondary font-semibold text-lg">
                - Performance Contracting Team, Kongoni TVC
              </cite>
            </div>
          </div>

          {/* Contact Section */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Performance Contract Inquiries
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For performance data requests, strategic planning consultations, or general inquiries about our performance contract initiatives.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-primary" size={16} />
                  <span>performance@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-primary" size={16} />
                  <span>+254 788 070 303</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-primary" size={16} />
                  <span>Administration Block</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="text-primary" size={16} />
                  <span>Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Performance Team
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}