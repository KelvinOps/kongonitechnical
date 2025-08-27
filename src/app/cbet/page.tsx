// app/administration/page.tsx
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Calendar, Award, GraduationCap, Users } from 'lucide-react'

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
    image: '/images/principal.png',
    email: 'principal@kongoni.ac.ke',
    phone: '+254 712 345 678',
    qualifications: ['PhD in Educational Leadership', 'MSc in Technical Education', 'BSc in Engineering'],
    experience: '15+ years in technical education',
    responsibilities: ['Strategic planning and institutional leadership', 'Academic quality assurance', 'Stakeholder relations', 'Policy implementation'],
    bio: 'Ms Akaranga brings over 15 years of experience in technical education leadership. She is passionate about developing skilled technical professionals who contribute to Kenya\'s economic growth.',
    joinDate: '2022'
  },
  {
    id: '2',
    name: 'Ms. Lucy Makhokha',
    position: 'Deputy Principal (Academic)',
    department: 'Academic Affairs',
    image: '/images/admin/deputy-academic.jpg',
    email: 'deputy.academic@kongoni.ac.ke',
    phone: '+254 723 456 789',
    qualifications: ['MSc in Mechanical Engineering', 'Diploma in Technical Education', 'BSc in Engineering Technology'],
    experience: '12+ years in academic administration',
    responsibilities: ['Academic program oversight', 'Curriculum development', 'Faculty coordination', 'Student academic affairs'],
    bio: 'Ms. Makhokha oversees all academic programs ensuring they meet industry standards and prepare students for successful careers in technical fields.',
    joinDate: '2019'
  },
  {
    id: '3',
    name: 'Ms. Sarah Achieng',
    position: 'Deputy Principal (Administration)',
    department: 'Administrative Services',
    image: '/images/admin/deputy-admin.jpg',
    email: 'deputy.admin@kongoni.ac.ke',
    phone: '+254 734 567 890',
    qualifications: ['MBA in Operations Management', 'BSc in Business Administration', 'Diploma in Human Resource Management'],
    experience: '10+ years in institutional administration',
    responsibilities: ['Administrative operations', 'Human resource management', 'Financial oversight', 'Infrastructure development'],
    bio: 'Ms. Achieng ensures smooth administrative operations and creates an enabling environment for effective teaching and learning.',
    joinDate: '2020'
  },
  {
    id: '4',
    name: 'Mr. Kevin Masinde',
    position: 'Dean of Students',
    department: 'Student Affairs',
    image: '/images/admin/dean-students.jpg',
    email: 'dean.students@kongoni.ac.ke',
    phone: '+254 745 678 901',
    qualifications: ['MSc in Educational Psychology', 'BSc in Social Sciences', 'Diploma in Guidance and Counseling'],
    experience: '11+ years in student affairs',
    responsibilities: ['Student welfare coordination', 'Disciplinary matters', 'Student activities oversight', 'Counseling services'],
    bio: 'Mr. Masinde leads student affairs with a focus on holistic student development and creating a supportive learning environment.',
    joinDate: '2018'
  },
  {
    id: '5',
    name: 'Mr. Andrew Juma',
    position: 'Registrar',
    department: 'Registry Services',
    image: '/images/admin/registrar.jpg',
    email: 'registrar@kongoni.ac.ke',
    phone: '+254 767 890 123',
    qualifications: ['MSc in Information Management', 'BSc in Computer Science', 'Diploma in Records Management'],
    experience: '9+ years in academic registry',
    responsibilities: ['Student records management', 'Academic calendar coordination', 'Examination administration', 'Graduation ceremonies'],
    bio: 'Mr. Juma ensures efficient management of all student academic records and administrative processes.',
    joinDate: '2021'
  },
  {
    id: '6',
    name: 'Dr. Margaret Mutua',
    position: 'Director of Research',
    department: 'Research and Innovation',
    image: '/images/admin/research-director.jpg',
    email: 'research@kongoni.ac.ke',
    phone: '+254 778 901 234',
    qualifications: ['PhD in Industrial Technology', 'MSc in Applied Sciences', 'BSc in Chemistry'],
    experience: '13+ years in research and innovation',
    responsibilities: ['Research program coordination', 'Innovation initiatives', 'Grant applications', 'Industry collaborations'],
    bio: 'Dr. Mutua leads our research efforts, focusing on applied research that addresses real-world technical challenges.',
    joinDate: '2018'
  },
  {
    id: '7',
    name: 'Ms. Millicent Nambo',
    position: 'Finance Officer',
    department: 'Finance and Accounts',
    image: '/images/admin/finance-manager.jpg',
    email: 'finance@kongoni.ac.ke',
    phone: '+254 789 012 345',
    qualifications: ['MBA in Finance', 'CPA (K)', 'BSc in Finance and Accounting'],
    experience: '8+ years in financial management',
    responsibilities: ['Financial planning and control', 'Budget management', 'Financial reporting', 'Audit coordination'],
    bio: 'Ms. Nambo ensures sound financial management and transparent use of institutional resources.',
    joinDate: '2020'
  }
]

const stats = [
  { icon: Users, label: 'Leadership Team', value: '7' },
  { icon: GraduationCap, label: 'Combined Experience', value: '78+ Years' },
  { icon: Award, label: 'Advanced Degrees', value: '86%' },
  { icon: Calendar, label: 'Average Tenure', value: '4+ Years' }
]

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#0775c7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administration Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
              Meet the dedicated leadership team committed to excellence in technical and vocational education at Kongoni Technical and Vocational College
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership Message</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-primary">
            <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Kongoni Technical and Vocational College, we are committed to providing world-class technical education that empowers our students with practical skills and knowledge needed to excel in their chosen fields. Our administration team works tirelessly to create an environment that fosters innovation, excellence, and personal growth.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <cite className="text-primary font-semibold text-lg">Ms. Judith Akaranga</cite>
                <p className="text-gray-600 text-sm mt-1">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to advancing technical and vocational education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrationTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Member Photo */}
                <div className="relative h-56 bg-gradient-to-br from-primary/10 to-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Experience</p>
                    <p className="text-sm text-gray-600 bg-secondary/20 px-3 py-2 rounded-lg">{member.experience}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-3">Key Qualifications</p>
                    <div className="space-y-2">
                      {member.qualifications.slice(0, 2).map((qual, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-700">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <Calendar className="h-3 w-3 mr-2" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <p className="text-gray-600 text-lg">Clear governance structure ensuring effective leadership and decision-making</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg">
                Principal
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="bg-primary/10 border-2 border-primary/20 text-primary px-6 py-4 rounded-xl font-bold mb-6 text-lg">
                  Deputy Principal (Academic)
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Dean of Engineering
                  </div>
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Dean of Business Studies
                  </div>
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Director of Research
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 border-2 border-primary/20 text-primary px-6 py-4 rounded-xl font-bold mb-6 text-lg">
                  Deputy Principal (Administration)
                </div>
                <div className="space-y-3">
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Registrar
                  </div>
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Finance Officer
                  </div>
                  <div className="bg-secondary/20 border border-secondary/40 px-4 py-3 rounded-lg text-sm font-medium text-gray-700">
                    Dean of Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch with Our Administration</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our leadership team is committed to maintaining open communication with all stakeholders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-white/90 leading-relaxed">
                Kongoni Technical & Vocational College<br />
                P.O. Box 45 - 30205<br />
                Matunda, Kenya
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-white/90 leading-relaxed">
                <a href="tel:+254700123456" className="hover:text-secondary transition-colors">+254 700 123 456</a><br />
                <a href="tel:+254733654321" className="hover:text-secondary transition-colors">+254 733 654 321</a>
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-white/90 leading-relaxed">
                <a href="mailto:info@kongoni.ac.ke" className="hover:text-secondary transition-colors">info@kongoni.ac.ke</a><br />
                <a href="mailto:admin@kongoni.ac.ke" className="hover:text-secondary transition-colors">admin@kongoni.ac.ke</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}