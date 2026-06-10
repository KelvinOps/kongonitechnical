'use client';

import React, { useState, useMemo } from 'react';
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
  ChevronDown,
  Wrench,
  HardHat,
  ChevronRight
} from "lucide-react";

// ── Single source of truth for the advert PDF ──────────────────────
const ADVERT_PDF = "/documents/KONGONITVC_JOBADVERT_10-06-2026.pdf";
const ADVERT_PDF_FILENAME = "KONGONITVC_JOBADVERT_10-06-2026.pdf";
const ADVERT_FILE_SIZE = "2.5 MB";

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
  fileSize: string;
  jobGroup?: string;
  reportsTo?: string;
  posts?: number;
  qualification?: string;
}

const jobOpenings: JobOpening[] = [
  // ── LEGACY / CLOSED ──────────────────────────────────────────────
  {
    title: "Store Keeper",
    department: "Procurement",
    location: "Kongoni Technical",
    type: "Permanent",
    deadline: "08 Apr 2026",
    postedDate: "18 Mar 2026",
    requirements: [
      "Diploma in Supply Chain Management or Store Keeping II or equivalent",
      "Registered member of Kenya Institute of Supplies Management (KISM)",
      "Minimum 2 years of relevant experience",
      "Computer literacy",
      "Knowledge of Public Procurement and Asset Disposal Act and Regulations",
      "Meet Chapter Six of the Constitution of Kenya requirements"
    ],
    description: "Responsible for managing stores operations including scheduling deliveries, keeping stores records, attending to queries on stores, and preparing store documentation.",
    experience: "2+ years",
    status: "closed",
    fileSize: "1.8 MB",
    jobGroup: "G",
    reportsTo: "Procurement Officer"
  },
  {
    title: "Internal Auditor",
    department: "Finance Department",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "06 Sep 2025",
    postedDate: "15 Aug 2025",
    requirements: ["Bachelor's degree in Accounting/Finance", "CPA certification preferred", "Internal audit experience"],
    description: "Conduct internal audits, ensure compliance with financial regulations, and provide audit recommendations.",
    experience: "3+ years",
    status: "closed",
    fileSize: "2.1 MB"
  },
  {
    title: "Automotive Technology Trainer",
    department: "Automotive Department",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "25 Jun 2024",
    postedDate: "22 May 2024",
    requirements: ["Diploma/Degree in Automotive Technology", "Industry experience", "Teaching qualification"],
    description: "Deliver automotive technology courses and supervise practical sessions.",
    experience: "3+ years",
    status: "closed",
    fileSize: "2.3 MB"
  },
  {
    title: "Librarian",
    department: "Library Services",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "08 Jun 2024",
    postedDate: "15 May 2024",
    requirements: ["Diploma in Library Science", "Computer literacy", "Customer service skills"],
    description: "Assist students and staff with library services, catalog management, and research support.",
    experience: "1+ years",
    status: "closed",
    fileSize: "1.5 MB"
  },
  {
    title: "Electrical Engineering Trainer",
    department: "Engineering Department",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "30 Jun 2024",
    postedDate: "25 May 2024",
    requirements: ["Masters in Electrical Engineering", "Teaching experience", "Research publications preferred"],
    description: "Teach electrical engineering courses and conduct research activities.",
    experience: "4+ years",
    status: "closed",
    fileSize: "2.0 MB"
  },
  {
    title: "Human Resource Officer",
    department: "Human Resources",
    location: "Kongoni Technical",
    type: "Full-time",
    deadline: "20 May 2025",
    postedDate: "28 Apr 2025",
    requirements: ["Bachelor's in HR/Business", "HR certification", "3+ years experience"],
    description: "Support HR operations, recruitment processes, and employee relations.",
    experience: "3+ years",
    status: "closed",
    fileSize: "1.7 MB"
  },

  // ── NEW OPENINGS – June 2026 ──────────────────────────────────────

  // Agriculture & Environmental Studies
  {
    title: "Trainer – General Agriculture",
    department: "Agriculture & Environmental Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in General Agriculture", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Training in General Agriculture, developing technical training materials, and guiding trainees in practical exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
  {
    title: "Trainer – Agribusiness Management / Agricultural Extension",
    department: "Agriculture & Environmental Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Agribusiness Management or Agricultural Extension", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Training in Agribusiness Management and Agricultural Extension, developing curricula, and evaluating trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },

  // Computing & Informatics
  {
    title: "Trainer – Computer Science / Software Engineering",
    department: "Computing & Informatics",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Computer Science / Computer Studies / Software Engineering", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver computing and software engineering training, develop technical materials, and evaluate trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 2,
    qualification: "Degree"
  },
  {
    title: "Trainer – ICT / IT / Computer Studies",
    department: "Computing & Informatics",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in ICT, IT or Computer Science / Computer Studies", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver ICT and IT training at diploma level, develop learning materials, and support practical sessions.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },

  // Building & Civil Engineering
  {
    title: "Trainer – Water Resources & Environmental Management",
    department: "Building & Civil Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Water Resources and Environmental Management", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Teach Water Resources and Environmental Management, develop training materials, and guide trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },
  {
    title: "Trainer – Building Technology",
    department: "Building & Civil Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Building Technology", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Building Technology training, develop materials, and supervise practical exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
  {
    title: "Technician – Civil Engineering",
    department: "Building & Civil Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Civil Engineering", "Computer literacy", "Knowledge of Occupational Safety and Health Act"],
    description: "Issue training resources, supervise workshop health & safety, maintain equipment security, and assist in practical session preparation.",
    experience: "1+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },

  // Hospitality & Tourism
  {
    title: "Trainer – Hospitality / Hotel Management",
    department: "Hospitality & Tourism",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Hospitality Management / Hotel Management", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Hospitality Management training, develop curricula, and guide students in practical exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },
  {
    title: "Trainer – Food & Beverage / Catering & Accommodation",
    department: "Hospitality & Tourism",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Food & Beverage / Catering and Accommodation", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Train students in catering, food & beverage service and accommodation operations.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },

  // Electrical & Electronics Engineering
  {
    title: "Trainer – Electrical & Electronic Technology",
    department: "Electrical & Electronics Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Electrical and Electronic Technology", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver electrical and electronics engineering training, develop materials, and evaluate trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 2,
    qualification: "Degree"
  },
  {
    title: "Trainer – Electrical Engineering (Power Option)",
    department: "Electrical & Electronics Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Electrical Engineering (Power Option)", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver electrical power engineering training at diploma level and supervise practical sessions.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
  {
    title: "Workshop Attendant – Electrical Installation",
    department: "Electrical & Electronics Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Craft certificate in Electrical Installation or equivalent", "Computer literacy", "Knowledge of Occupational Safety and Health Act"],
    description: "Support trainers and trainees, maintain workshop inventory, enforce health & safety, prepare maintenance schedules, and oversee workshop cleanliness.",
    experience: "1+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Craft"
  },

  // Business Studies
  {
    title: "Trainer – Supply Chain Management",
    department: "Business Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Supply Chain Management", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Supply Chain Management training, develop materials, and evaluate trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },
  {
    title: "Trainer – Human Resource Management",
    department: "Business Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree or HND in Human Resource Management", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Train students in Human Resource Management concepts, develop materials, and guide practical exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree/HND"
  },
  {
    title: "Trainer – Social Work & Community Development",
    department: "Business Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Social Work and Community Development", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Social Work and Community Development training and guide trainees in field exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
  {
    title: "Trainer – Business Management (Accounting Option)",
    department: "Business Studies",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Business Management (Accounting Option)", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Business Management with Accounting training, develop learning materials, and evaluate trainees.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },

  // Fashion Design & Cosmetology
  {
    title: "Trainer – Fashion & Design / Textile Fashion",
    department: "Fashion Design & Cosmetology",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Fashion and Design / Textile Fashion and Design or equivalent", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Fashion & Design training at degree level, develop materials, and guide practical work.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },
  {
    title: "Trainer – Fashion and Design",
    department: "Fashion Design & Cosmetology",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Fashion and Design", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Fashion and Design training at diploma level and supervise practical sessions.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
  {
    title: "Trainer – Cosmetology / Hairdressing & Beauty Therapy",
    department: "Fashion Design & Cosmetology",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma or NAVCET Level 2 in Cosmetology / Hairdressing and Beauty Therapy", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Train students in cosmetology, hairdressing, and beauty therapy; develop materials and guide practical exercises.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 2,
    qualification: "Diploma/NAVCET Level 2"
  },

  // Mechanical Engineering
  {
    title: "Trainer – Power Mechanics Technology",
    department: "Mechanical Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Degree in Power Mechanics Technology", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Power Mechanics Technology training, develop materials, and evaluate trainees in practical exercises.",
    experience: "1+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Degree"
  },
  {
    title: "Trainer – Automotive Engineering",
    department: "Mechanical Engineering",
    location: "Kongoni Technical",
    type: "Contract",
    deadline: "23 Jun 2026",
    postedDate: "10 Jun 2026",
    requirements: ["Diploma in Automotive Engineering", "CBET background", "Pedagogy skills", "Computer literate", "Kenyan Citizen"],
    description: "Deliver Automotive Engineering training, develop technical materials, and supervise practical sessions.",
    experience: "2+ years",
    status: "open",
    fileSize: ADVERT_FILE_SIZE,
    posts: 1,
    qualification: "Diploma"
  },
];

const allDepartments = [
  "All Departments",
  "Agriculture & Environmental Studies",
  "Computing & Informatics",
  "Building & Civil Engineering",
  "Hospitality & Tourism",
  "Electrical & Electronics Engineering",
  "Business Studies",
  "Fashion Design & Cosmetology",
  "Mechanical Engineering",
  "Procurement",
  "Finance Department",
  "Automotive Department",
  "Library Services",
  "Engineering Department",
  "Human Resources",
];

// ── Expandable Role Requirements Card ──────────────────────────────
interface RoleCardProps {
  icon: React.ElementType;
  accentColor: string;
  title: string;
  subtitle: string;
  qualifications: string[];
  responsibilities: string[];
}

function RoleRequirementsCard({ icon: Icon, accentColor, title, subtitle, qualifications, responsibilities }: RoleCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-l-4`} style={{ borderColor: accentColor }}>
      {/* Header – always visible */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${accentColor}18` }}>
            <Icon className="w-6 h-6" style={{ color: accentColor }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Qualifications – always visible */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Qualifications</p>
          <ul className="space-y-1">
            {qualifications.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                {q}
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: accentColor }}
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          {open ? 'Hide' : 'View'} Key Responsibilities ({responsibilities.length})
        </button>
      </div>

      {/* Responsibilities – collapsible */}
      {open && (
        <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Key Responsibilities</p>
          <ol className="space-y-2">
            {responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: accentColor }}
                >
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [sortBy, setSortBy] = useState('posted');
  const [showFilters, setShowFilters] = useState(false);
  const [showClosedJobs, setShowClosedJobs] = useState(false);

  const openJobs = jobOpenings.filter(j => j.status === 'open');
  const openPostsCount = openJobs.reduce((sum, j) => sum + (j.posts ?? 1), 0);
  const openDepartments = [...new Set(openJobs.map(j => j.department))].length;

  const jobStats = [
    { label: "Open Positions", value: String(openJobs.length), icon: Briefcase },
    { label: "Total Posts Available", value: String(openPostsCount), icon: Users },
    { label: "Departments Hiring", value: String(openDepartments), icon: Calendar },
    { label: "Application Deadline", value: "23 Jun 2026", icon: Clock }
  ];

  const filteredAndSortedJobs = useMemo(() => {
    const pool = showClosedJobs ? jobOpenings : jobOpenings.filter(j => j.status !== 'closed');
    const filtered = pool.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
      return matchesSearch && matchesDept;
    });
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'deadline': return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'title': return a.title.localeCompare(b.title);
        case 'department': return a.department.localeCompare(b.department);
        case 'posted': return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        default: return 0;
      }
    });
    return filtered;
  }, [searchTerm, selectedDepartment, sortBy, showClosedJobs]);

  // ── Fixed download: always serves the single advert PDF ──────────
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ADVERT_PDF;
    link.download = ADVERT_PDF_FILENAME;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: string) => {
    const base = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "open": return `${base} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case "closing-soon": return `${base} bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200`;
      case "closed": return `${base} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
      default: return `${base} bg-gray-100 text-gray-800`;
    }
  };

  const formatDeadline = (deadline: string) => {
    if (deadline === "TBA") return "To be announced";
    const date = new Date(deadline);
    const now = new Date();
    const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days left`;
  };

  // ── Role data ────────────────────────────────────────────────────
  const trainerData: RoleCardProps = {
    icon: GraduationCap,
    accentColor: "#099cca",
    title: "Trainers",
    subtitle: "All trainer positions share these baseline requirements",
    qualifications: [
      "Background training in Competency Based Education (CBET)",
      "Pedagogy skills",
      "Registration with TVETA is an added advantage",
      "Must be a Kenyan Citizen",
      "Computer literate",
    ],
    responsibilities: [
      "Training in specific subject area",
      "Development of technical training materials",
      "Instructing, guiding and evaluating trainees in practical exercises",
      "Reporting on progress and overall performance of individual trainees",
      "Performing any other responsibility that may be assigned from time to time",
    ],
  };

  const workshopAttendantData: RoleCardProps = {
    icon: Wrench,
    accentColor: "#e07b00",
    title: "Electrical Workshop Attendant",
    subtitle: "Electrical & Electronics Engineering Department",
    qualifications: [
      "Craft certificate in Electrical Installation or equivalent",
      "Computer literacy",
      "Knowledge of Occupational Safety and Health Act",
    ],
    responsibilities: [
      "Provide support to trainers and trainees in solving technical problems and practical work",
      "Maintain workshop inventories by receiving, issuing tools and materials in the workshop and ensuring sufficient materials are available",
      "Observe and ensure health and safety procedures are practiced and enforced, and accidents are reported to the section head",
      "Supervise the trainees while in the workshop to ensure all health and safety procedures are observed",
      "Prepare maintenance schedules for all workshop equipment for approval by the section head and maintain requisite records on servicing schedules",
      "Advise the section head on budgeting requirements of the workshop to ensure all workshop requirements are budgeted for",
      "Segregate non-functional equipment and machinery to promote safety in the workshop",
      "Provide procurement specifications for workshop equipment to be purchased to ensure correct equipment/machinery is acquired",
      "Report breakdown of machinery and equipment to the head of section to advise on replacement needs",
      "Supervise cleaning of the workshop to promote general cleanliness and provide a conducive environment for trainings and practicals",
      "Any other duty assigned from time to time",
    ],
  };

  const civilTechnicianData: RoleCardProps = {
    icon: HardHat,
    accentColor: "#5a7d2b",
    title: "Building & Civil Engineering Technician",
    subtitle: "Building & Civil Engineering Department",
    qualifications: [
      "Diploma in Civil Engineering",
      "Computer literacy",
      "Knowledge of Occupational Safety and Health Act",
    ],
    responsibilities: [
      "Issue trainees with the required training resources during practicals to ensure practical trainings run smoothly",
      "Supervise trainees while in the workshop to ensure all health and safety procedures are observed",
      "Clean the workshop and equipment to ensure a conducive working environment",
      "Maintain the security of equipment and materials in the workshop by ensuring it is opened and locked at appropriate times",
      "Store workshop equipment at the right locations to ensure ease of access and security",
      "Provide assistance in the preparation of practical sessions by setting up apparatus/equipment required for practicals",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Join our dedicated team of educators and professionals. Build your career in technical and vocational education at KTVC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#f0df83] text-gray-800 text-lg px-4 py-2 rounded-full font-medium">
                {openJobs.length} Open Roles · {openPostsCount} Posts
              </div>
              <div className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-medium">
                Contract Positions
              </div>
              <div className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-medium">
                Equal Opportunity Employer
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobStats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <stat.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search & Filter */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Search Career Opportunities</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
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
                className="px-6 py-3 bg-[#f0df83] hover:bg-[#F5BB27] text-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="showClosed"
                checked={showClosedJobs}
                onChange={(e) => setShowClosedJobs(e.target.checked)}
                className="w-4 h-4 accent-[#099cca]"
              />
              <label htmlFor="showClosed" className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                Show closed / past positions
              </label>
            </div>

            {showFilters && (
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department</label>
                    <div className="relative">
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                      >
                        {allDepartments.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                      >
                        <option value="posted">Date Posted (Newest First)</option>
                        <option value="deadline">Deadline</option>
                        <option value="title">Job Title</option>
                        <option value="department">Department</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Showing <span className="font-semibold text-[#099cca]">{filteredAndSortedJobs.length}</span> position{filteredAndSortedJobs.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Jobs Table */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-2xl font-bold text-foreground">Current Openings</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">Deadline: 23 June 2026, 5:00 PM</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#099cca] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">JOB TITLE</th>
                    <th className="px-6 py-4 text-left font-semibold">DEPARTMENT</th>
                    <th className="px-6 py-4 text-left font-semibold">POSTS / EXP.</th>
                    <th className="px-6 py-4 text-left font-semibold">DEADLINE</th>
                    <th className="px-6 py-4 text-left font-semibold">STATUS</th>
                    <th className="px-6 py-4 text-left font-semibold">DOCUMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedJobs.map((job, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          {job.qualification && (
                            <div className="text-xs text-[#099cca] font-medium mt-0.5">Qualification: {job.qualification}</div>
                          )}
                          {job.jobGroup && (
                            <div className="text-xs text-[#099cca] font-medium mt-0.5">Job Group: {job.jobGroup}</div>
                          )}
                          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 mt-1">
                            <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</div>
                            <div className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-foreground">{job.department}</span>
                        {job.reportsTo && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Reports to: {job.reportsTo}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-foreground">{job.posts ?? 1} post{(job.posts ?? 1) > 1 ? 's' : ''}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{job.experience} experience</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-foreground">{job.deadline}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{formatDeadline(job.deadline)}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={getStatusBadge(job.status)}>
                          {job.status === 'open' ? 'Open' : job.status === 'closing-soon' ? 'Closing Soon' : 'Closed'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {/* ── Every row downloads the same single advert PDF ── */}
                        <button
                          onClick={handleDownload}
                          className="flex items-center gap-2 text-[#099cca] hover:text-[#277DF5] transition-colors"
                          title={`Download ${ADVERT_PDF_FILENAME}`}
                        >
                          <Download className="w-4 h-4" />
                          <div className="text-left">
                            <div className="text-sm font-medium">Download</div>
                            <div className="text-xs text-gray-500">{ADVERT_FILE_SIZE}</div>
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

        {/* ── Role Requirements Section ─────────────────────────────── */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground">Role Requirements & Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
              Qualifications and key duties for each role category. Click View Key Responsibilities to expand.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <RoleRequirementsCard {...trainerData} />
            <RoleRequirementsCard {...workshopAttendantData} />
            <RoleRequirementsCard {...civilTechnicianData} />
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Application Process */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-[#099cca] w-6 h-6" />
                <h3 className="text-xl font-bold text-foreground">Application Process</h3>
              </div>
              <div className="space-y-4">
                {[
                  { n: 1, title: "Review Requirements", desc: "Download and carefully read the job description and requirements." },
                  { n: 2, title: "Prepare Documents", desc: "Gather your CV, cover letter, certificates, and references." },
                  { n: 3, title: "Submit Application", desc: "Email to vacancies@kongonitechnical.ac.ke or deliver hard copy to the college." },
                  { n: 4, title: "Interview Process", desc: "Shortlisted candidates will be contacted. Only shortlisted candidates will be notified." },
                ].map(step => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div className="bg-[#099cca] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">{step.n}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#099cca]/10 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Application Guidelines</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Deadline: <strong>5:00 PM, 23rd June 2026</strong></li>
                  <li>• Email: <strong>vacancies@kongonitechnical.ac.ke</strong></li>
                  <li>• Hard copy: Principal, Kongoni TVC, P.O. Box 45-30205, Matunda</li>
                  <li>• Include CVs and copies of relevant certificates</li>
                  <li>• Any canvassing leads to automatic disqualification</li>
                  <li>• Women and persons with disability are encouraged to apply</li>
                </ul>
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Why Work With Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, title: "Professional Growth", desc: "Continuous learning and development opportunities" },
                  { icon: Users, title: "Great Team", desc: "Collaborative and supportive work environment" },
                  { icon: FileText, title: "Competitive Benefits", desc: "Attractive package and comprehensive benefits" },
                  { icon: MapPin, title: "Great Location", desc: "Modern campus along Eldoret–Kitale Road, Matunda" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg p-4 bg-gray-50 dark:bg-gray-700 text-center hover:shadow transition-shadow">
                    <item.icon className="text-[#099cca] w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions About Our Opportunities?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our Human Resources team for more information about career opportunities, the application process, or general inquiries.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Users className="text-[#099cca]" size={16} />
                <span>vacancies@kongonitechnical.ac.ke</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="text-[#099cca]" size={16} />
                <span>+254 788 070 303</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="text-[#099cca]" size={16} />
                <span>Along Eldoret – Kitale Road, Matunda</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}