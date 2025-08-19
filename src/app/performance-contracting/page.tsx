// app/performance-contract/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Award, 
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  Download,
  FileText,
  PieChart,
  Activity,
  Star,
  ArrowUp,
  Building,
  GraduationCap,
  BookOpen,
  Briefcase,
  DollarSign,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Contract | Kongoni Technical Vocational Training College",
  description: "Performance Contract Department - Monitoring institutional performance, strategic planning, and quality assurance at KTVC.",
  keywords: "performance contract, strategic planning, quality assurance, institutional performance, monitoring evaluation",
};

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
    color: "bg-blue-500"
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
    color: "bg-green-500"
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
    color: "bg-orange-500"
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
    color: "bg-purple-500"
  }
];

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

const contractObjectives = [
  {
    title: "Excellence in Technical Education",
    description: "Deliver high-quality technical and vocational training programs that meet industry standards and student expectations.",
    icon: Award,
    targets: [
      "Maintain 85% overall pass rate across all programs",
      "Achieve 90% student satisfaction rating",
      "Ensure 100% curriculum compliance with regulatory bodies",
      "Establish 5 new industry partnerships annually"
    ]
  },
  {
    title: "Financial Sustainability",
    description: "Maintain sound financial management practices and explore sustainable revenue generation opportunities.",
    icon: DollarSign,
    targets: [
      "Execute 95% of allocated budget effectively",
      "Generate 10% additional revenue through partnerships",
      "Reduce operational costs by 5% annually",
      "Maintain positive cash flow throughout the year"
    ]
  },
  {
    title: "Institutional Development",
    description: "Continuously improve infrastructure, systems, and processes to support institutional growth and effectiveness.",
    icon: Building,
    targets: [
      "Complete 3 major infrastructure projects annually",
      "Implement 2 new technology systems",
      "Achieve ISO certification for quality management",
      "Maintain 95% equipment functionality rate"
    ]
  },
  {
    title: "Community Engagement",
    description: "Strengthen relationships with local communities, industry partners, and government agencies.",
    icon: Users,
    targets: [
      "Conduct 10 community outreach programs",
      "Establish 5 new memoranda of understanding",
      "Achieve 80% graduate employment rate",
      "Maintain 90% stakeholder satisfaction"
    ]
  }
];

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

const performanceStats = [
  { label: "Overall Performance Score", value: "92%", icon: Target, trend: "+3%" },
  { label: "Targets Achieved", value: "78/85", icon: CheckCircle, trend: "+5" },
  { label: "Key Partnerships", value: "45", icon: Briefcase, trend: "+8" },
  { label: "Compliance Rate", value: "96%", icon: Shield, trend: "+2%" }
];

export default function PerformanceContractPage() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Performance Contract
                </h1>
                <p className="text-xl opacity-80 leading-relaxed mb-8">
                  Committed to excellence through transparent performance monitoring, strategic planning, and continuous institutional improvement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    92% Overall Score
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    ISO Certified
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Quality Assured
                  </Badge>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Image
                  src="/api/placeholder/500/400"
                  alt="Performance Contract Dashboard"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Leadership Profile */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Image
                    src="/api/placeholder/300/300"
                    alt="Dr. Sarah Mwangi"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4 shadow-md"
                  />
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Performance Contract Officer
                  </Badge>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Mrs.
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    PhD in Strategic Management, MBA in Performance Management
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mr.  is a seasoned strategic management professional with over 15 years of experience in performance contracting and institutional development. She leads our performance monitoring initiatives, ensuring that KTVC maintains the highest standards of excellence and accountability in all operational areas.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="text-[#099cca]" size={16} />
                      <span>performance@kongonitechnical.ac.ke</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#099cca]" size={16} />
                      <span>+254 700 123 456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-[#099cca]" size={16} />
                      <span>Administration Block, Office 205</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#099cca]" size={16} />
                      <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Performance Statistics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 mb-2">{stat.label}</p>
                  <Badge variant="outline" className="text-green-600">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance Areas Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Performance Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {performanceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${area.color}`}>
                      <area.icon className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{area.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {area.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[#099cca] mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contract Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            2025 Contract Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contractObjectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <objective.icon className="text-[#099cca] w-8 h-8" />
                    <CardTitle className="text-xl text-gray-900">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {objective.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Targets:</h4>
                  <ul className="space-y-2">
                    {objective.targets.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Target className="text-[#099cca] w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{target}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Performance Indicators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Performance Indicators (KPIs)
          </h2>
          <div className="space-y-8">
            {keyPerformanceIndicators.map((category, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.indicators.map((indicator, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{indicator.name}</h4>
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
                            <span className="font-medium text-[#099cca]">{indicator.achieved}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Performance Reports
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {performanceReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{report.title}</h3>
                    <Badge 
                      variant={report.status === "Completed" ? "default" : "secondary"}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#099cca] w-4 h-4" />
                      <span>Period: {report.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="text-[#099cca] w-4 h-4" />
                      <span>Overall Score: {report.overallScore}</span>
                    </div>
                  </div>
                  {report.status === "Completed" && (
                    <div className="flex items-center gap-2 text-[#099cca] cursor-pointer hover:text-[#277DF5]">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-medium">Download Report</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation Framework
          </h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                  <p className="text-gray-700 text-sm">Set clear objectives, targets, and performance indicators</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-gray-700 text-sm">Continuous tracking and measurement of performance metrics</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <PieChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>
                  <p className="text-gray-700 text-sm">Regular assessment of progress against set targets</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#099cca] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h3>
                  <p className="text-gray-700 text-sm">Implement corrective measures and enhance performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Performance Contract Inquiries
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For performance data requests, strategic planning consultations, or general inquiries about our performance contract initiatives.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-[#099cca]" size={16} />
                  <span>performance@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="text-[#099cca]" size={16} />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="text-[#099cca]" size={16} />
                  <span>Administration Block</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="text-[#099cca]" size={16} />
                  <span>Mon-Fri: 8AM-5PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}