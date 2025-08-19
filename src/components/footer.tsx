// src/components/footer.tsx
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-3 xl:gap-4">
          {/* Section 1: Company Info - Takes 2 columns for better balance */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
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
                <h3 className="text-xl font-bold text-black">Kongoni Technical</h3>
                <p className="text-sm text-black/70">& Vocational College</p>
              </div>
            </div>
            <p className="text-black/80 mb-4 leading-relaxed">
              Leading technical and vocational college providing quality education and training. We prepare students for successful careers through hands-on learning and industry partnerships.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Section 2: Departments */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-black">Departments</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/departments/ict" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  ICT Department
                </Link>
              </li>
              <li>
                <Link href="/departments/agriculture" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/departments/business" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Business Studies
                </Link>
              </li>
              <li>
                <Link href="/departments/hospitality" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Hospitality & Tourism
                </Link>
              </li>
              <li>
                <Link href="/departments/engineering" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/cosmetology" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Cosmetology
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/career-services" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Career Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Academic Info */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-black">Academic</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/academic-calendar" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/course-catalog" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Course Catalog
                </Link>
              </li>
              <li>
                <Link href="/examination-results" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Examination Results
                </Link>
              </li>
              <li>
                <Link href="/academic-policies" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Academic Policies
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Library Services
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link href="/student-support" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                  Student Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 5: Contact Information */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-black">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 text-black w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black">Main Campus</p>
                  <p className="text-sm text-black/80">
                    Along Eldoret-Kitale Road<br/>
                    Matunda, Kenya<br/>
                    P.O. Box 45 - 30205
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-black w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black">Phone</p>
                  <p className="text-sm">
                    <a 
                      href="tel:+254788070303" 
                      className="text-black hover:text-white transition-colors duration-300 hover:underline"
                    >
                      +254 788 070 303
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-black w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black">Email</p>
                  <p className="text-sm">
                    <a 
                      href="mailto:kongonitvc@gmail.com" 
                      className="text-black hover:text-white transition-colors duration-300 hover:underline"
                    >
                      kongonitvc@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="text-black w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black">Office Hours</p>
                  <p className="text-sm text-black/80">
                    Mon-Fri: 8AM-5PM<br/>
                    Sat: 9AM-2PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/20 mt-12 pt-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="text-center">
              <p className="text-black/80">
                &copy; {new Date().getFullYear()} Kongoni Technical and Vocational College. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-black hover:text-white transition-colors duration-300 hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}