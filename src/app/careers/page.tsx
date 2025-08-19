'use client';

import React, { useState, useMemo } from 'react';
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  Download,
  Clock,
  GraduationCap,
  FileText,
  Filter,
  SortAsc,
  ChevronDown
} from "lucide-react";

// export const metadata: Metadata = {
//   title: "Careers | Kongoni Technical Vocational Training College",
//   description: "Join our team at KTVC. Explore current job openings, career opportunities, and build your future in technical education.",
//   keywords: "careers, jobs, employment, teaching positions, KTVC jobs, technical education careers",
// };

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  deadline: string;
  postedDate: string;
  requirements: string[];
  description: string;
  experience: string;
  status: "open" | "closing-soon" | "closed";
  documentUrl: string;
  fileSize: string;
}

const jobOpenings: JobOpening[] = [
  {
    title: "Internal Auditor",
    department: "Finance Department",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "30 Sep 2025",
    postedDate: "15 Aug 2025",
    requirements: ["Bachelor's degree in Accounting/Finance", "CPA certification preferred", "Internal audit experience"],
    description: "Conduct internal audits, ensure compliance with financial regulations, and provide audit recommendations.",
    experience: "3+ years",
    status: "open",
    documentUrl: "/documents/internal-auditor-2025.pdf",
    fileSize: "2.1 MB"
  },
  {
    title: "Automotive Technology Instructor",
    department: "Automotive Department",
    location: "Kongoni Technical", 
    type: "Full-time",
    deadline: "25 Jun 2025",
    postedDate: "22 May 2025",
    requirements: ["Diploma/Degree in Automotive Technology", "Industry experience", "Teaching qualification"],
    description: "Deliver automotive technology courses and supervise practical sessions.",
    experience: "3+ years",
    status: "closed",
    documentUrl: "/documents/automotive-instructor-2025.pdf",
    fileSize: "2.3 MB"
  },
  {
    title: "Library Assistant",
    department: "Library Services",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "08 Jun 2025",
    postedDate: "15 May 2025",
    requirements: ["Diploma in Library Science", "Computer literacy", "Customer service skills"],
    description: "Assist students and staff with library services, catalog management, and research support.",
    experience: "1+ years",
    status: "closed",
    documentUrl: "/documents/library-assistant-2025.pdf",
    fileSize: "1.5 MB"
  },
  {
    title: "Electrical Engineering Trainer",
    department: "Engineering Department",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "30 Jun 2025",
    postedDate: "25 May 2025",
    requirements: ["Masters in Electrical Engineering", "Teaching experience", "Research publications preferred"],
    description: "Teach electrical engineering courses and conduct research activities.",
    experience: "4+ years",
    status: "closed",
    documentUrl: "/documents/electrical-lecturer-2025.pdf",
    fileSize: "2.0 MB"
  },
  {
    title: "Human Resource Assistant",
    department: "Human Resources",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "20 Jun 2025",
    postedDate: "28 May 2025",
    requirements: ["Bachelor's in HR/Business", "HR certification", "2+ years experience"],
    description: "Support HR operations, recruitment processes, and employee relations.",
    experience: "2+ years",
    status: "closed",
    documentUrl: "/documents/hr-assistant-2025.pdf",
    fileSize: "1.7 MB"
  }
];

const departments = ["All Departments", "Finance Department", "Automotive Department", "Library Services", "Engineering Department", "Human Resources"];

const jobStats = [
  { label: "Open Positions", value: "1", icon: Briefcase },
  { label: "Departments Hiring", value: "1", icon: Users },
  { label: "Application Deadline", value: "Sep 2025", icon: Calendar },
  { label: "Average Response Time", value: "2 weeks", icon: Clock }
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [sortBy, setSortBy] = useState('deadline');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = jobOpenings.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'department':
          return a.department.localeCompare(b.department);
        case 'posted':
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedDepartment, sortBy]);

  const handleDownload = (job: JobOpening) => {
    const link = document.createElement('a');
    link.href = job.documentUrl;
    link.download = `${job.title.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Downloading: ${job.title}`);
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "open":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case "closing-soon":
        return `${baseClasses} bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200`;
      case "closed":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days left`;
  };

  const openJobsCount = jobOpenings.filter(job => job.status === 'open').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Join our dedicated team of educators and professionals. Build your career in technical and vocational education at KTVC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#f0df83] text-gray-800 text-lg px-4 py-2 rounded-full font-medium">
                {openJobsCount} Open Position{openJobsCount !== 1 ? 's' : ''}
              </div>
              <div className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-medium">
                Competitive Benefits
              </div>
              <div className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-medium">
                Professional Development
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Statistics */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <stat.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Search Career Opportunities</h2>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search job titles, departments, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none transition-colors bg-white dark:bg-gray-700 text-foreground"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-[#f0df83] hover:bg-[#F5BB27] text-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center sm:justify-start"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="animate-fade-in border-t border-gray-200 dark:border-gray-600 pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Department
                    </label>
                    <div className="relative">
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sort By
                    </label>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                      >
                        <option value="deadline">Deadline</option>
                        <option value="title">Job Title</option>
                        <option value="department">Department</option>
                        <option value="posted">Date Posted</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="flex items-end">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Showing <span className="font-semibold text-[#099cca]">{filteredAndSortedJobs.length}</span> of {jobOpenings.length} positions
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Jobs Table */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-2xl font-bold text-foreground">Current Openings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#099cca] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">JOB TITLE</th>
                    <th className="px-6 py-4 text-left font-semibold">DEPARTMENT</th>
                    <th className="px-6 py-4 text-left font-semibold">DEADLINE</th>
                    <th className="px-6 py-4 text-left font-semibold">STATUS</th>
                    <th className="px-6 py-4 text-left font-semibold">DOCUMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedJobs.map((job, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}>
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-1">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-foreground">{job.department}</span>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Experience: {job.experience}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-foreground">{job.deadline}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {formatDeadline(job.deadline)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={getStatusBadge(job.status)}>
                          {job.status === 'open' ? 'Open' : job.status === 'closing-soon' ? 'Closing Soon' : 'Closed'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => handleDownload(job)}
                          className="flex items-center gap-2 text-[#099cca] hover:text-[#277DF5] transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Download</div>
                            <div className="text-xs text-gray-500">{job.fileSize}</div>
                          </div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Job Details Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Job - Internal Auditor */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-[#099cca] w-6 h-6" />
                <h3 className="text-xl font-bold text-foreground">Featured Position</h3>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Internal Auditor
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#099cca]" />
                  <span>Finance Department</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#099cca]" />
                  <span>Kongoni Technical</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#099cca]" />
                  <span>Deadline: September 30, 2025</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We are seeking an experienced internal auditor to join our finance team. The role involves conducting internal audits, ensuring compliance with financial regulations, and providing audit recommendations.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Bachelor's degree in Accounting/Finance</li>
                <li>• CPA certification preferred</li>
                <li>• Internal audit experience required</li>
                <li>• Minimum 3 years experience</li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#099cca] w-6 h-6" />
                <h3 className="text-xl font-bold text-foreground">Application Process</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#099cca] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Review Requirements</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Download and carefully read the job description and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#099cca] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Prepare Documents</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Gather CV, cover letter, certificates, and references.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#099cca] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Submit Application</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Email your application to hr@kongonicollege.ac.ke before the deadline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#099cca] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interview Process</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Shortlisted candidates will be contacted for interviews within 2 weeks.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#099cca]/10 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Application Guidelines:</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Submit applications before 5:00 PM on the deadline</li>
                  <li>• Include "Position Title" in email subject</li>
                  <li>• Attach documents in PDF format only</li>
                  <li>• Maximum attachment size: 5MB</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <GraduationCap className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Professional Growth</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Continuous learning and development opportunities</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Users className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Great Team</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Collaborative and supportive work environment</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <FileText className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Competitive Benefits</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Attractive package and comprehensive benefits</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <MapPin className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semivold text-foreground mb-2">Great Location</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Modern campus with excellent facilities</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Have Questions About Our Opportunities?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our Human Resources team for more information about career opportunities, application process, or general inquiries.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Users className="text-[#099cca]" size={16} />
                <span>hr@kongonitechnical.ac.ke</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="text-[#099cca]" size={16} />
                <span>+254 700 123 789</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="text-[#099cca]" size={16} />
                <span>HR Office, Administration Block</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}