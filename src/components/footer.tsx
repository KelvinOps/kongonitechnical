// src/components/footer.tsx
import Link from "next/link";
import Image from "next/image";
import {  
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-black">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Section 1: Company Info */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Kongoni Technical Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Kongoni Technical</h3>
                  <p className="text-xs text-black/70">& Vocational College</p>
                </div>
              </div>
              <p className="text-black/80 mb-4 leading-relaxed text-sm">
                Leading technical and vocational college providing quality education and training. We prepare students for successful careers through hands-on learning and industry partnerships.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-2 bg-white/10 rounded-lg">
                  <Users className="w-5 h-5 mx-auto mb-1 text-black" />
                  <div className="text-xs font-semibold text-black">1000+</div>
                  <div className="text-xs text-black/70">Students</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg">
                  <Award className="w-5 h-5 mx-auto mb-1 text-black" />
                  <div className="text-xs font-semibold text-black">50+</div>
                  <div className="text-xs text-black/70">Programs</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/kongonitechnical"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/kongonitechnical"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/kongonitechnical"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/254788070303"
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Section 2: Academic Departments (matching header structure) */}
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-black flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Departments
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/departments/business" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Business Department
                  </Link>
                </li>
                <li>
                  <Link href="/departments/ict" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Computing & Informatics
                  </Link>
                </li>
                <li>
                  <Link href="/departments/civil" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Building & Civil Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/departments/electrical" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Electrical & Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/departments/automotive" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Automotive & Mechanical
                  </Link>
                </li>
                <li>
                  <Link href="/departments/fashion" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Fashion Design & Cosmetics
                  </Link>
                </li>
                <li>
                  <Link href="/departments/hospitality-tourism" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Hospitality & Tourism
                  </Link>
                </li>
                <li>
                  <Link href="/departments/agriculture" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Agriculture Department
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3: Quick Links & Administration */}
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-black flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/bog" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Board of Governance
                  </Link>
                </li>
                <li>
                  <Link href="/administration" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Administration Team
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/service-charter" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Service Charter
                  </Link>
                </li>
                <li>
                  <Link href="/performance-contracting" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Performance Contracting
                  </Link>
                </li>
                <li>
                  <Link href="/registry" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Registry
                  </Link>
                </li>
                <li>
                  <Link href="/examination" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Examination
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 4: Student Services & Resources */}
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-black flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Student Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/admissions" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/application-procedure" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Application Procedure
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/fee-structure" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/scholarship" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/hostel-booking" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Hostel Booking
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/student-forms" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Student Forms
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/trainee-rules" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Rules & Regulations
                  </Link>
                </li>
                <li>
                  <Link href="/student-hub/student-handbook" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                    Student Handbook
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 5: Contact & Resources */}
            <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-black flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Resources & Contact
              </h4>
              
              {/* Resources */}
              <div className="mb-6">
                <h5 className="font-medium text-black mb-2">Resources</h5>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/downloads" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                      Downloads
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/kongoni-technical-brochure.pdf" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                      Brochure
                    </Link>
                  </li>
                  <li>
                    <Link href="/news/latest" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                      Career Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link href="/tenders" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                      Tenders
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="mt-0.5 text-black w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-black/80">
                      Along Eldoret-Kitale Road<br/>
                      Matunda, Kenya<br/>
                      P.O. Box 45 - 30205
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="text-black w-4 h-4 flex-shrink-0" />
                  <a 
                    href="tel:+254788070303" 
                    className="text-sm text-black hover:text-white transition-colors duration-300 hover:underline"
                  >
                    +254 788 070 303
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="text-black w-4 h-4 flex-shrink-0" />
                  <a 
                    href="mailto:kongonitvc@gmail.com" 
                    className="text-sm text-black hover:text-white transition-colors duration-300 hover:underline"
                  >
                    kongonitvc@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="text-black w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-black/80">
                      Mon-Fri: 8AM-5PM<br/>
                      Sat: 9AM-2PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Full Width Cream Section */}
      <div className="border-t border-black/20 bg-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:flex-1">
              <p className="text-black text-sm font-medium">
                &copy; {new Date().getFullYear()} Kongoni Technical and Vocational College. All rights reserved.
              </p>
              <p className="text-black/70 text-xs mt-1">
                Empowering minds, building futures through technical excellence.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-end space-x-4 lg:space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-black hover:text-white hover:bg-black/20 px-2 py-1 rounded transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-black hover:text-white hover:bg-black/20 px-2 py-1 rounded transition-all duration-300">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-black hover:text-white hover:bg-black/20 px-2 py-1 rounded transition-all duration-300">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-black hover:text-white hover:bg-black/20 px-2 py-1 rounded transition-all duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}