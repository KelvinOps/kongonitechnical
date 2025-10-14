import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, FileText, Calendar, Mail, Phone } from "lucide-react";

// Board of Governors Members
const boardMembers = [
  {
    id: 1,
    name: "Dr. Ruth Atidah Mitalo",
    position: "Chairperson",
    role: "Board of Governors",
    qualification: "Ph.D - Human Resource Management, CHRP (K), ICPS-K",
    image: "/images/admin/board/ruthatidah.jpeg",
    summary: "Registrar Administration and Human Resources at Kibabii University with extensive experience in human resource management across multiple universities. Previously served at Multimedia University and Jaramogi Oginga Odinga University of Science & Technology.",
    committee: "Chairperson of the Board"
  },
  {
    id: 2,
    name: "Collins Iwaret Omerikit",
    position: "Chairman - Finance Committee",
    role: "Board Member",
    qualification: "BCOM (Accounting), CPA-Finalist",
    image: "/images/admin/board/collinsiwaret.jpeg",
    summary: "Experienced accountant currently serving at St John Mission Hospital Sirende. Previously worked at Kingdom Faith Hospital Webuye and Community Breakthrough Support Mission High School with strong expertise in financial management.",
    committee: "Chairman - Finance, Procurement, Planning and Human Resource Committee"
  },
  {
    id: 3,
    name: "Tom Rasto S. Wekesa",
    position: "Chairman - Audit Committee",
    role: "Board Member",
    qualification: "Bachelor of Law (Moi University), Post-Graduate Diploma in Law",
    image: "/images/admin/board/tomrastocopy.png",
    summary: "Legal professional and director at Mental Health and Wellness Kenya. Former Vice President of KEPSA Youth with experience in legal advisory and corporate communications.",
    committee: "Chairman - Audit and Risk Management Committee"
  },
  {
    id: 4,
    name: "Nathan Ongechi Orora",
    position: "Member",
    role: "Board Member",
    qualification: "MBA - Strategic Management (University of Nairobi)",
    image: "/images/admin/board/nathanongechi.png",
    summary: "Regional Sales Manager at Harleys Pharmaceutical Ltd with over 15 years of experience in pharmaceutical sales and management, including tenure at GlaxoSmithKline (GSK) Pharmaceuticals Ltd.",
    committee: "Finance, Procurement, Planning and Human Resource Committee | Education Training and Research Committee"
  },
  {
    id: 5,
    name: "Priscilla Ogola",
    position: "Chairman - Education Committee",
    role: "Board Member",
    qualification: "BSc Education",
    image: "/images/admin/board/priscillaogola.png",
    summary: "Seasoned educator with over 24 years of teaching experience in Chemistry and Mathematics. Taught at Moi Girls Secondary School Nangili and Eshikulu Secondary School, bringing valuable educational insights to the board.",
    committee: "Chairman - Education Training and Research Committee | Audit and Risk Committee"
  },
  {
    id: 6,
    name: "Alex Adagala Igunza",
    position: "Member",
    role: "Board Member",
    qualification: "BCOM, MA Environmental Planning and Management, MAA-K, BORAQS",
    image: "/images/admin/board/alexadagala.jpeg",
    summary: "Principal Architect at Cubix Systems with extensive experience in architecture and green design. Previously served as Senior Architect at Plence Architects and holds memberships with BORAQS and Architectural Association of Kenya.",
    committee: "Education Training and Research Committee | Audit and Risk Management Committee"
  },
  {
    id: 7,
    name: "Pamela Munala Woyengo",
    position: "Member",
    role: "Board Member",
    qualification: "MA - Sociology (University of Nairobi), IHRM",
    image: "/images/admin/board/pamela.jpeg",
    summary: "Council Member at Taita Taveta National Polytechnic and former Deputy Director at Public Service Commission with expertise in compliance, quality assurance, and human resource management spanning over 15 years.",
    committee: "Finance, Procurement, Planning and Human Resource Committee"
  },
  {
    id: 8,
    name: "Judith Gahuya Akaranga",
    position: "Secretary",
    role: "Board Secretary & Principal",
    qualification: "MED - Educational Administration (Kenyatta University)",
    image: "/images/admin/board/judith.png",
    summary: "Principal of Kongoni Technical and Vocational College with extensive leadership experience. Previously served as Principal at Shamberere TTI, Musakasa TTI, and held various leadership positions in secondary schools across Kenya.",
    committee: "Secretary to the Board of Governors"
  }
];

// Key Management Team
const managementTeam = [
  {
    id: 1,
    name: "Judith Gahuya Akaranga",
    position: "Principal",
    qualification: "MED - Educational Administration (Kenyatta University)",
    image: "/images/admin/board/judith.png",
    summary: "Leads the institution with over 30 years of educational experience. Has served as Principal at multiple technical institutions and secondary schools, demonstrating strong leadership in educational administration and institutional development."
  },
  {
    id: 2,
    name: "Ezra Orina",
    position: "Deputy Principal (Administration)",
    qualification: "Bachelor of Education, Diploma in Technical Education, SMC",
    image: "/images/admin/board/ezraorina.jpeg",
    summary: "Oversees administrative functions with experience as Deputy Principal and Registrar at Shamberere National Polytechnic. Previously served as Assessment Center Officer and Technical Instructor at National Youth Service Technical College."
  },
  {
    id: 3,
    name: "Mrs. Lucy Makokha",
    position: "Deputy Principal (Academics)",
    qualification: "MSc Statistics (MMUST)",
    image: "/images/admin/board/lucymakokha.jpeg",
    summary: "Leads academic affairs with extensive experience as HOD Applied Science Department and Research, Innovation and Robotics Coordinator at Kisiwa TTI. Former Director of Studies with strong background in mathematics and chemistry education."
  },
  {
    id: 4,
    name: "Mr. Andrew Juma",
    position: "Registrar",
    qualification: "Diploma in Building",
    image: "/images/admin/board/andrewjuma.png",
    summary: "Manages institutional registration and records. Serves as trainer and has been with Kongoni TVC since 2019. Previously worked as trainer at Sigalagala National Polytechnic and Manager at Lurale Youth."
  },
  {
    id: 5,
    name: "Mr. Kevin Masinde",
    position: "Dean of Trainees",
    qualification: "BSc Information Technology (Moi University)",
    image: "/images/admin/board/kevinmasinde.png",
    summary: "Oversees student affairs and serves as ICT Trainer. Previously acted as Deputy Principal and served as HOD ICT at Musakasa TTI. Also taught at Kapsabet Boys and interned at University of Nairobi."
  },
  {
    id: 6,
    name: "CPA Nambo Wanyonyi Millcent",
    position: "Finance Officer",
    qualification: "BCOM - Accounting (JKUAT), CPAK, CIFA (Ongoing)",
    image: "/images/admin/board/millcentwanyonyi.jpeg",
    summary: "Manages financial operations including budgeting and financial reporting. Member of CPAK and IIA-K. Previously worked as Audit Senior at Bace Partners-K with strong expertise in accounting and auditing."
  }
];

const responsibilities = [
  "Strategic planning and institutional direction",
  "Policy formulation and review",
  "Budget approval and financial oversight",
  "Academic quality assurance",
  "Staff recruitment and performance evaluation",
  "Infrastructure development planning",
  "Stakeholder engagement and partnerships",
  "Risk management and compliance"
];

const committees = [
  {
    name: "Finance, Procurement, Planning and Human Resource Committee",
    chairman: "Collins Iwaret Omerikit"
  },
  {
    name: "Audit and Risk Management Committee",
    chairman: "Tom Rasto S. Wekesa"
  },
  {
    name: "Education Training and Research Committee",
    chairman: "Priscilla Ogola"
  }
];

export default function GoverningCouncilPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Board of Governors
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Providing strategic leadership and governance oversight to ensure excellence in technical and vocational education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mandate
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Board of Governors serves as the highest decision-making body of Kongoni Technical Vocational Training College. We are committed to providing strategic oversight, ensuring academic excellence, and fostering institutional growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our board comprises distinguished professionals from various fields, bringing diverse expertise to guide the college mission of empowering trainees through digital innovation and technical excellence.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Logo_imresizer.ico"
                alt="Board of Governors"
                width={350}
                height={150}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Board of Governors Members
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our board members bring extensive experience and expertise in education, finance, law, human resources, and technical fields to guide the institution strategic direction.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#099cca]">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    </div>
                    <Badge variant="secondary" className="mb-2 bg-[#099cca]/10 text-[#099cca] border-[#099cca]/20">
                      {member.role}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#099cca] mb-2">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-600 mb-3 italic">
                      {member.qualification}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {member.summary}
                  </p>
                  {member.committee && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Committee Role
                      </p>
                      <p className="text-xs text-gray-700">
                        {member.committee}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board Committees */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-[#099cca]/5 to-[#277DF5]/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Board Committees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {committees.map((committee, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-[#099cca]/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="text-[#099cca]" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {committee.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Chairman:</span> {committee.chairman}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Management Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Key Management Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our dedicated management team drives the day-to-day operations and ensures the delivery of quality technical and vocational education.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member) => (
              <Card key={member.id} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#277DF5]">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#277DF5] mb-2">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-600 mb-3 italic">
                      {member.qualification}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="text-[#099cca]" />
                Key Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-[#099cca] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{responsibility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact the Board of Governors
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For matters requiring board attention or to schedule meetings with board members, please contact our secretariat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="text-[#099cca]" />
                  <span>bog@kongonitechnical.ac.ke</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="text-[#099cca]" />
                  <span>+254 700 000 000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}