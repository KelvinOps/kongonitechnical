// app/non-teaching-staff/page.tsx
import { Metadata } from 'next'
import { 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  Building, 
  FileText,
  Calculator,
  Wrench,
  CookingPot,
  TreePine,
  Sparkles,
  Monitor,
  Store,
  UserCog,
  ChefHat,
  Sprout,
  Computer
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Non-Teaching Staff | Kongoni Technical and Vocational College',
  description: 'Meet our dedicated non-teaching staff who ensure smooth operations and provide essential support services at Kongoni Technical and Vocational College.',
  keywords: 'non-teaching staff, support staff, administration, technical support, Kenya, TVET college',
  openGraph: {
    title: 'Non-Teaching Staff | Kongoni Technical and Vocational College',
    description: 'Dedicated professionals ensuring excellence in college operations and student support services.',
    type: 'website',
  },
}

interface StaffMember {
  id: number
  name: string
  position: string
  department: string
  email: string
  responsibilities: string[]
  qualifications: string[]
  joinDate: string
  icon: React.ReactNode
}

const nonTeachingStaff: StaffMember[] = [
  {
    id: 1,
    name: 'JESCAH KITIAVI',
    position: 'Human Resource Officer',
    department: 'Human Resources',
    email: 'hrm@kongonitechnical.ac.ke',
    responsibilities: [
      'Staff recruitment and selection',
      'Performance management',
      'Employee relations',
      'Training and development coordination'
    ],
    qualifications: ['MBA in Human Resource Management', 'CHRP Certification', 'BSc in Business Administration'],
    joinDate: '2025',
    icon: <UserCog className="h-8 w-8" />
  },
  {
    id: 6,
    name: 'MILLCENT WANYONYI',
    position: 'Finance Officer',
    department: 'Finance and Accounts',
    email: 'finance@kongonitechnical.ac.ke',
    responsibilities: [
      'Financial planning and budgeting',
      'Financial reporting',
      'Payroll management',
      'Grant management'
    ],
    qualifications: ['MBA in Finance', 'CPA(K)', 'BCom in Accounting'],
    joinDate: '2019',
    icon: <Calculator className="h-8 w-8" />
  },
  {
    id: 7,
    name: 'GEOFREY KIPKORIR',
    position: 'Procurement Officer',
    department: 'Procurement and Supplies',
    email: 'procurement@kongonitechnical.ac.ke',
    responsibilities: [
      'Vendor management',
      'Tender processing',
      'Inventory control',
      'Supply chain management'
    ],
    qualifications: ['Diploma in Procurement', 'CIPS Certification', 'BSc in Supply Chain'],
    joinDate: '2019',
    icon: <Store className="h-8 w-8" />
  },
  {
    id: 8,
    name: 'SUSSY N. WEKHUYI',
    position: 'Secretary',
    department: 'Administration',
    email: 'info@kongonitechnical.ac.ke',
    responsibilities: [
      'Administrative support',
      'Document management',
      'Appointment scheduling',
      'Office correspondence'
    ],
    qualifications: ['Diploma in Secretarial Studies', 'Certified Secretary', 'Computer Applications'],
    joinDate: '2020',
    icon: <FileText className="h-8 w-8" />
  },
  {
    id: 2,
    name: 'GABRIEL WAFULA',
    position: 'Accounts Assistant',
    department: 'Finance and Accounts',
    email: 'finance@kongonitechnical.ac.ke',
    responsibilities: [
      'Accounts payable/receivable',
      'Bank reconciliation',
      'Invoice processing',
      'Financial data entry'
    ],
    qualifications: ['Diploma in Accounting', 'CPA Section 2', 'Computerized Accounting'],
    joinDate: '2025',
    icon: <Calculator className="h-8 w-8" />
  },
  {
    id: 10,
    name: 'CHRISTINE NEKESA',
    position: 'Accounts Assistant Intern',
    department: 'Finance and Accounts',
    email: 'finance@kongonitechnical.ac.ke',
    responsibilities: [
      'Assisting with bookkeeping',
      'Document filing',
      'Data entry support',
      'Record maintenance'
    ],
    qualifications: ['BCom in Accounting (Ongoing)', 'Computer Packages'],
    joinDate: '2023',
    icon: <Calculator className="h-8 w-8" />
  },
  {
    id: 4,
    name: 'KELVIN BUGIGI',
    position: 'ICT Technician',
    department: 'Information Technology',
    email: 'ict@kongonitechnical.ac.ke',
    responsibilities: [
      'Network maintenance',
      'Computer repairs',
      'Software installation',
      'Technical support'
    ],
    qualifications: ['Diploma in IT', 'CCNA Certification', 'Hardware Maintenance'],
    joinDate: '2025',
    icon: <Monitor className="h-8 w-8" />
  },
  {
    id: 9,
    name: 'KUBENDE DELPHINE',
    position: 'System Administrator',
    department: 'Information Technology',
    email: 'sysadmin@kongonitechnical.ac.ke',
    responsibilities: [
      'Server management',
      'Database administration',
      'System security',
      'IT infrastructure'
    ],
    qualifications: ['BSc in Computer Science', 'MCSA Certification', 'Linux Administration'],
    joinDate: '2019',
    icon: <Computer className="h-8 w-8" />
  },
  {
    id: 13,
    name: 'MARK S. WANAMI',
    position: 'Welding Workshop Attendant',
    department: 'Technical Workshops',
    email: 'workshops@kongonitechnical.ac.ke',
    responsibilities: [
      'Workshop equipment maintenance',
      'Tool inventory management',
      'Safety supervision',
      'Student workshop support'
    ],
    qualifications: ['Artisan in Welding', 'Workshop Safety Certification', 'Equipment Maintenance'],
    joinDate: '2018',
    icon: <Wrench className="h-8 w-8" />
  },
  {
    id: 3,
    name: 'MAURICE INYANGALA',
    position: 'Store Keeper',
    department: 'Procurement and Supplies',
    email: 'procurement@kongonitechnical.ac.ke',
    responsibilities: [
      'Inventory management',
      'Stock control',
      'Store organization',
      'Issuance of materials'
    ],
    qualifications: ['Diploma in Store Keeping', 'Inventory Management', 'Stock Control'],
    joinDate: '2019',
    icon: <Store className="h-8 w-8" />
  },
  {
    id: 11,
    name: 'MARGARET KHAYERE',
    position: 'Cook',
    department: 'Catering Services',
    email: 'catering@kongonitechnical.ac.ke',
    responsibilities: [
      'Meal preparation',
      'Kitchen management',
      'Food safety compliance',
      'Menu planning'
    ],
    qualifications: ['Diploma in Food Production', 'Food Safety Certification', 'Culinary Arts'],
    joinDate: '2018',
    icon: <ChefHat className="h-8 w-8" />
  },
  {
    id: 5,
    name: 'PHILIP SAKARI',
    position: 'Cleaner',
    department: 'Facilities Management',
    email: 'facilities@kongonitechnical.ac.ke',
    responsibilities: [
      'General cleaning',
      'Waste management',
      'Sanitation maintenance',
      'Facility upkeep'
    ],
    qualifications: ['Cleaning Certification', 'Sanitation Training', 'Waste Management'],
    joinDate: '2025',
    icon: <Sparkles className="h-8 w-8" />
  },
  {
    id: 14,
    name: 'SYLVIA AWINJA',
    position: 'Cleaner',
    department: 'Facilities Management',
    email: 'facilities@kongonitechnical.ac.ke',
    responsibilities: [
      'Office cleaning',
      'Sanitation maintenance',
      'Waste disposal',
      'Facility hygiene'
    ],
    qualifications: ['Cleaning Certification', 'Sanitation Procedures'],
    joinDate: '2021',
    icon: <Sparkles className="h-8 w-8" />
  },
  {
    id: 12,
    name: 'CHARLES NYUKURI',
    position: 'Groundsman',
    department: 'Facilities Management',
    email: 'grounds@kongonitechnical.ac.ke',
    responsibilities: [
      'Grounds maintenance',
      'Landscaping',
      'Irrigation management',
      'Outdoor facility care'
    ],
    qualifications: ['Landscaping Training', 'Gardening Skills', 'Grounds Maintenance'],
    joinDate: '2019',
    icon: <TreePine className="h-8 w-8" />
  },
  {
    id: 16,
    name: 'JOHN WERUNGA',
    position: 'Groundsman',
    department: 'Facilities Management',
    email: 'grounds@kongonitechnical.ac.ke',
    responsibilities: [
      'Lawn maintenance',
      'Tree care',
      'Sports field upkeep',
      'General grounds work'
    ],
    qualifications: ['Horticulture Training', 'Grounds Keeping'],
    joinDate: '2020',
    icon: <Sprout className="h-8 w-8" />
  },
  {
    id: 15,
    name: 'ZARINA ABDALLAH',
    position: 'Secretary Intern',
    department: 'Administration',
    email: 'admin.intern@kongonitechnical.ac.ke',
    responsibilities: [
      'Front desk operations',
      'Filing assistance',
      'Reception duties',
      'Administrative support'
    ],
    qualifications: ['Diploma in Secretarial Studies (Ongoing)', 'Office Management'],
    joinDate: '2025',
    icon: <FileText className="h-8 w-8" />
  },
  {
    id: 17,
    name: 'CINDY AKINYI',
    position: 'H.R.O Intern',
    department: 'Human Resources',
    email: 'hr.intern@kongonitechnical.ac.ke',
    responsibilities: [
      'HR documentation',
      'Recruitment support',
      'Employee file maintenance',
      'Training coordination assistance'
    ],
    qualifications: ['BBA in HR (Ongoing)', 'HR Management'],
    joinDate: '2025',
    icon: <UserCog className="h-8 w-8" />
  }
]

const departments = [
  {
    name: 'Administration',
    staffCount: 3,
    icon: <Building className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Finance & Accounts',
    staffCount: 4,
    icon: <Calculator className="h-6 w-6" />,
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Human Resources',
    staffCount: 3,
    icon: <UserCog className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Procurement & Supplies',
    staffCount: 2,
    icon: <Store className="h-6 w-6" />,
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    name: 'Facilities Management',
    staffCount: 5,
    icon: <TreePine className="h-6 w-6" />,
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    name: 'Information Technology',
    staffCount: 2,
    icon: <Computer className="h-6 w-6" />,
    color: 'bg-indigo-100 text-indigo-800'
  },
  {
    name: 'Technical Workshops',
    staffCount: 1,
    icon: <Wrench className="h-6 w-6" />,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    name: 'Catering Services',
    staffCount: 1,
    icon: <ChefHat className="h-6 w-6" />,
    color: 'bg-red-100 text-red-800'
  }
]

export default function NonTeachingStaffPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">SUPPORT SERVICES TEAM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Non-Teaching Staff
              <span className="block text-xl font-normal text-blue-200 mt-4">
                The Backbone of College Excellence
              </span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated team of professionals who work tirelessly behind the scenes to ensure 
              smooth operations, maintain our facilities, and provide essential support services that 
              enable quality education at Kongoni Technical and Vocational College.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Departments & Teams</h2>
            <p className="text-gray-600">Specialized teams working together for institutional excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${dept.color.split(' ')[0]}`}>
                    <div className={`${dept.color.split(' ')[1]}`}>
                      {dept.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{dept.staffCount}</div>
                    <div className="text-sm text-gray-500">Staff</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600">
                  Dedicated professionals ensuring operational efficiency and support services
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Administrative & Management Staff</h2>
            <p className="text-gray-600">Leadership and management professionals driving institutional operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTeachingStaff.filter(staff => 
              ['Human Resource Officer', 'Finance Officer', 'Procurement Officer'].includes(staff.position)
            ).map((staff) => (
              <div 
                key={staff.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      {staff.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {staff.department}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{staff.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{staff.position}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{staff.email}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {staff.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Joined: {staff.joinDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Administrative & Technical Support</h2>
            <p className="text-gray-600">Dedicated professionals providing essential operational support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTeachingStaff.filter(staff => 
              ['Secretary', 'Accounts Assistant', 'ICT Technician', 'System Administrator', 'Store Keeper', 'Welding Workshop Attendant'].includes(staff.position)
            ).map((staff) => (
              <div 
                key={staff.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
                      {staff.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{staff.name}</h3>
                      <p className="text-sm text-blue-600">{staff.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-3 w-3 mr-2 text-blue-600" />
                      <span className="truncate">{staff.email}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                    <ul className="space-y-1">
                      {staff.responsibilities.slice(0, 2).map((resp, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-blue-300 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{staff.department}</span>
                      <span className="text-xs text-gray-500">Joined {staff.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Operations Staff */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facilities & Operations Team</h2>
            <p className="text-gray-600">Ensuring a clean, safe, and functional learning environment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTeachingStaff.filter(staff => 
              ['Cook', 'Cleaner', 'Groundsman'].includes(staff.position)
            ).map((staff) => (
              <div 
                key={staff.id}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${
                    staff.position === 'Cook' ? 'bg-orange-100 text-orange-600' :
                    staff.position === 'Cleaner' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {staff.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-gray-600">{staff.position}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Main Duties:</h4>
                  <ul className="space-y-1">
                    {staff.responsibilities.slice(0, 2).map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">{staff.department}</span>
                    <span className="text-xs text-gray-500">Joined {staff.joinDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns & Trainees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interns & Trainees</h2>
            <p className="text-gray-600">Developing future professionals through practical experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nonTeachingStaff.filter(staff => 
              staff.position.includes('Intern')
            ).map((staff) => (
              <div 
                key={staff.id}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {staff.icon}
                  </div>
                  <div>
                    <div className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-1">
                      INTERN
                    </div>
                    <h3 className="font-bold text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-blue-600">{staff.position}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-3 w-3 mr-2 text-blue-600" />
                    <span>{staff.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="h-3 w-3 mr-2 text-blue-600" />
                    <span>{staff.department}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Learning Areas:</h4>
                  <ul className="space-y-1">
                    {staff.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-blue-300 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-blue-100">
                  <p className="text-xs text-gray-500">Started: {staff.joinDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Our Support Teams</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our dedicated staff are here to assist with all non-academic matters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Phone className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
              <p className="text-blue-200 leading-relaxed">
                Main Switchboard: <a href="tel:+254700123456" className="font-semibold hover:text-white">+254 788 070 303</a><br />
                Email: <a href="mailto:info@kongonitechnical.ac.ke" className="font-semibold hover:text-white">info@kongonitechnical.ac.ke</a>
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Briefcase className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Administrative Offices</h3>
              <p className="text-blue-200 leading-relaxed">
                Working Hours: 8:00 AM - 5:00 PM<br />
                Monday - Friday
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Building className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-blue-200 leading-relaxed">
                Kongoni Technical & Vocational College<br />
                Administration Building<br />
                First Floor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}