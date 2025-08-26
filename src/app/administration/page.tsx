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
    name: 'Ms. Judith akaranga',
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
    bio: 'Mr. Kiprotich oversees all academic programs ensuring they meet industry standards and prepare students for successful careers in technical fields.',
    joinDate: '2019'
  },
  {
    id: '3',
    name: 'Ms. ',
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
    name: 'Mr Kevin Masinde ',
    position: 'Dean of Students',
    department: 'Engineering Faculty',
    image: '/images/admin/dean-engineering.jpg',
    email: 'dean.engineering@kongoni.ac.ke',
    phone: '+254 745 678 901',
    qualifications: ['MSc in Civil Engineering', 'Professional Engineer (PE)', 'BSc in Civil Engineering'],
    experience: '14+ years in engineering education',
    responsibilities: ['Engineering programs leadership', 'Industry partnerships', 'Research coordination', 'Student projects supervision'],
    bio: 'Mr Masinde leads our engineering programs with a focus on practical skills development and industry relevance.',
    joinDate: '2017'
  },
  {

    id: '6',
    name: 'Mr. Andrew Juma',
    position: 'Registrar',
    department: 'Registry Services',
    image: '/images/admin/registrar.jpg',
    email: 'registrar@kongoni.ac.ke',
    phone: '+254 767 890 123',
    qualifications: ['MSc in Information Management', 'BSc in Computer Science', 'Diploma in Records Management'],
    experience: '9+ years in academic registry',
    responsibilities: ['Student records management', 'Academic calendar coordination', 'Examination administration', 'Graduation ceremonies'],
    bio: 'Mr. Ochieng ensures efficient management of all student academic records and administrative processes.',
    joinDate: '2021'
  },
  {
    id: '7',
    name: 'Ms Lucy Makhokha',
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
    id: '8',
    name: 'Ms. Millicent Nambo',
    position: 'Finance Officer',
    department: 'Finance and Accounts',
    image: '/images/admin/finance-manager.jpg',
    email: 'finance@kongoni.ac.ke',
    phone: '+254 789 012 345',
    qualifications: ['MBA in Finance', 'CPA (K)', 'BSc in Finance and Accounting'],
    experience: '8+ years in financial management',
    responsibilities: ['Financial planning and control', 'Budget management', 'Financial reporting', 'Audit coordination'],
    bio: 'Mr. Kariuki ensures sound financial management and transparent use of institutional resources.',
    joinDate: '2020'
  }
]

const stats = [
  { icon: Users, label: 'Leadership Team', value: '8+' },
  { icon: GraduationCap, label: 'Combined Experience', value: '90+ Years' },
  { icon: Award, label: 'Advanced Degrees', value: '75%' },
  { icon: Calendar, label: 'Average Tenure', value: '5+ Years' }
]

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Message</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              At Kongoni Technical and Vocational College, we are committed to providing world-class technical education that empowers our students with practical skills and knowledge needed to excel in their chosen fields. Our administration team works tirelessly to create an environment that fosters innovation, excellence, and personal growth.
            </blockquote>
            <cite className="text-blue-600 font-semibold">- Ms Judith Akaranga, Principal</cite>
          </div>
        </div>
      </section>

      {/* Administration Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrationTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Member Photo */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200">
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-1">Experience</p>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Qualifications</p>
                    <div className="space-y-1">
                      {member.qualifications.slice(0, 2).map((qual, index) => (
                        <p key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {qual}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Organizational Structure</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                Principal
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold mb-4">
                  Deputy Principal (Academic)
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Dean of Engineering</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Dean of Business Studies</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Director of Research</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold mb-4">
                  Deputy Principal (Administration)
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Registrar</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Finance Manager</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">HR Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch with Our Administration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">
                Kongoni Technical College<br />
                P.O. Box 1234-00100<br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">
                +254 700 123 456<br />
                +254 733 654 321
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">
                info@kongoni.ac.ke<br />
                admin@kongoni.ac.ke
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}