// app/administration/page.tsx
import Image from 'next/image'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Calendar, Award, GraduationCap, Users, Download, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Administration Team | Kongoni Technical and Vocational College',
  description: 'Meet the dedicated leadership team at Kongoni Technical and Vocational College. Our experienced administrators are committed to providing quality technical and vocational education.',
  keywords: 'administration, leadership, technical college, vocational education, Kenya, management team',
  openGraph: {
    title: 'Administration Team | Kongoni Technical and Vocational College',
    description: 'Meet our experienced leadership team committed to excellence in technical and vocational education.',
    type: 'website',
  },
}

interface AdminMember {
  id: string
  name: string
  position: string
  department: string
  image: string
  email: string
  phone: string
  qualifications: string[]
  experience: string
  responsibilities: string[]
  bio: string
  joinDate: string
}

const administrationTeam: AdminMember[] = [
  {
    id: '1',
    name: 'Ms. Judith Akaranga',
    position: 'Principal',
    department: 'Executive Leadership',
    image: '/images/admin/JUDITH AKARANGA.png',
    email: 'principal@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['MSc in Education Administration'],
    experience: '15+ years in technical education',
    responsibilities: ['Strategic planning and institutional leadership', 'Academic quality assurance', 'Stakeholder relations', 'Policy implementation'],
    bio: 'Ms Akaranga brings over 15 years of experience in technical education leadership. She is passionate about developing skilled technical professionals who contribute to Kenya\'s economic growth.',
    joinDate: '2023'
  },
  {
    id: '2',
    name: 'Ms. Lucy Makhokha',
    position: 'Deputy Principal (Academic)',
    department: 'Academic Affairs',
    image: '/images/admin/LUCY MAKOKHA.png',
    email: 'dpac@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['MSc in Statistics'],
    experience: '12+ years in academic administration',
    responsibilities: ['Academic program oversight', 'Curriculum development', 'Faculty coordination', 'Student academic affairs'],
    bio: 'Ms. Makhokha oversees all academic programs ensuring they meet industry standards and prepare students for successful careers in technical fields.',
    joinDate: '2025'
  },
  {
    id: '3',
    name: 'Mr Ezra Orina',
    position: 'Deputy Principal (Administration)',
    department: 'Administrative Services',
    image: '/images/admin/EZRA ORINA.png',
    email: 'dpad@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['Bachelor of Education', 'Diploma in Technical Education', 'Diploma in Mechanical Engineering'],
    experience: '10+ years in institutional administration',
    responsibilities: ['Administrative operations', 'Human resource management', 'Financial oversight', 'Infrastructure development'],
    bio: 'Mr. Orina ensures smooth administrative operations and creates an enabling environment for effective teaching and learning.',
    joinDate: '2025'
  },
  {
    id: '4',
    name: 'Mr Kevin Masinde',
    position: 'Dean of Students',
    department: 'Engineering Faculty',
    image: '/images/admin/KEVIN MASINDE.png',
    email: 'dean@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['BSc in Information Technology'],
    experience: '14+ years in engineering education',
    responsibilities: ['Engineering programs leadership', 'Industry partnerships', 'Research coordination', 'Student projects supervision'],
    bio: 'Mr Masinde leads our engineering programs with a focus on practical skills development and industry relevance.',
    joinDate: '2019'
  },
  {
    id: '6',
    name: 'Mr. Andrew Juma',
    position: 'Registrar',
    department: 'Registry Services',
    image: '/images/admin/KHISA JUMA ANDREW.png',
    email: 'registrar@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['Diploma in Building Technology'],
    experience: '9+ years in academic registry',
    responsibilities: ['Student records management', 'Academic calendar coordination', 'Examination administration', 'Graduation ceremonies'],
    bio: 'Mr. Juma ensures efficient management of all student academic records and administrative processes.',
    joinDate: '2019'
  },
  {
    id: '7',
    name: 'Mr Cyrus Lagat',
    position: 'Internal Quality Assurance Coordinator',
    department: 'Research and Innovation',
    image: '/images/admin/CYRUS_LAGAT_KIMELI.png',
    email: 'iqa@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['MSc in Education'],
    experience: '13+ years in research and innovation',
    responsibilities: ['Research program coordination', 'Innovation initiatives', 'Grant applications', 'Industry collaborations'],
    bio: 'Mr Lagat leads our research efforts, focusing on applied research that addresses real-world technical challenges.',
    joinDate: '2018'
  },
  {
    id: '8',
    name: 'Ms. Millicent Nambo',
    position: 'Finance Officer',
    department: 'Finance and Accounts',
    image: '/images/admin/board/NAMBO MILLCENT.png',
    email: 'finance@kongonitecnhical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['MBA in Finance', 'CPA (K)', 'BSc in Finance and Accounting'],
    experience: '8+ years in financial management',
    responsibilities: ['Financial planning and control', 'Budget management', 'Financial reporting', 'Audit coordination'],
    bio: 'Ms Nambo ensures sound financial management and transparent use of institutional resources.',
    joinDate: '2021'
  },
  {
    id: '9',
    name: 'Mr. Kevin Magonya',
    position: 'Industry Liaison Officer',
    department: 'Industry Partnerships',
    image: '/images/admin/ODHIAMBO KEVIN  MAGONYA.png',
    email: 'ilo@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['BSc in Education'],
    experience: '11+ years in industry partnerships',
    responsibilities: ['Industry partnerships development', 'Student internship coordination', 'Alumni engagement', 'Corporate relations'],
    bio: 'Mr. Magonya bridges the gap between the institution and industry, ensuring our programs align with market needs and creating opportunities for students.',
    joinDate: '2020'
  },
  {
    id: '10',
    name: 'Ms. Charity Jepkorir',
    position: 'Performance Contracting Coordinator',
    department: 'Quality Assurance',
    image: '/images/admin/CHARITY JEPKORIR.png',
    email: 'pc@kongonitechnical.ac.ke',
    phone: '+254 788 070 303',
    qualifications: ['BSc in Public Administration'],
    experience: '9+ years in performance management',
    responsibilities: ['Performance contract development', 'Monitoring and evaluation', 'Reporting and documentation', 'Institutional planning'],
    bio: 'Ms. Joyline ensures the institution meets its strategic objectives through effective performance contracting and continuous monitoring of key performance indicators.',
    joinDate: '2022'
  }
]

const stats = [
  { icon: Users, label: 'Leadership Team', value: '10+' },
  { icon: GraduationCap, label: 'Combined Experience', value: '5+ Years' },
  { icon: Award, label: 'Advanced Degrees', value: '75%' },
  { icon: Calendar, label: 'Average Tenure', value: '5+ Years' }
]

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Using primary color */}
      <section className="bg-primary text-white py-16 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administration Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leadership team committed to excellence in technical and vocational education at Kongoni Technical and Vocational College
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-8">Leadership Message</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
              At Kongoni Technical and Vocational College, we are committed to providing world-class technical education that empowers our students with practical skills and knowledge needed to excel in their chosen fields. Our administration team works tirelessly to create an environment that fosters innovation, excellence, and personal growth.
            </blockquote>
            <cite className="text-primary font-semibold">- Ms Judith Akaranga, Principal</cite>
          </div>
        </div>
      </section>

      {/* Administration Team Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in-up">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrationTeam.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Member Photo */}
                <div className="flex justify-center pt-8 pb-4">
                  <div className="relative h-48 w-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 ring-4 ring-primary/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.department}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Experience</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.experience}</p>
                  </div>

                  {/* Bio with line clamp */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">{member.bio}</p>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Qualifications</p>
                    <div className="space-y-1">
                      {member.qualifications.slice(0, 2).map((qual, index) => (
                        <p key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {qual}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure - PDF Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Organizational Structure</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-scale-in">
            {/* PDF Preview */}
            <div className="relative w-full bg-gray-100 dark:bg-gray-700" style={{ minHeight: '600px' }}>
              <Image
                src="/images/organogram-preview.png"
                alt="Kongoni TVC Organogram"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={false}
              />
            </div>

            {/* Download Section - Using primary color */}
            <div className="bg-primary text-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-12 w-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Institutional Organogram</h3>
                    <p className="text-white/90">
                      Download our complete organizational structure document showing the hierarchical arrangement of positions and departments at Kongoni Technical and Vocational College.
                    </p>
                  </div>
                </div>
                
                <a
                  href="/documents/kongoni-tvc-organogram.pdf"
                  download="Kongoni-TVC-Organogram.pdf"
                  className="flex items-center gap-2 bg-secondary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200 whitespace-nowrap"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The organogram provides a clear view of our institutional structure, reporting relationships, and departmental organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Using primary color */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch with Our Administration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0s' }}>
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-white/90">
                Kongoni Technical and Vocational College<br />
                P.O. Box 45 - 30205<br />
                Matunda, Kenya
              </p>
            </div>
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Phone className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/90">
                +254 788 070 303
              </p>
            </div>
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Mail className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/90">
                info@kongonitechnical.ac.ke
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}