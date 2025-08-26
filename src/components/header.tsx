"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Globe, Phone, Mail, Menu, X } from "lucide-react";

// Type definitions
interface NavItem {
  href: string;
  label: string;
}

interface CategoryItem {
  label: string;
  isCategory: true;
  items: NavItem[];
}

interface SubItem extends NavItem {
  isCategory?: false;
}

interface NavLink {
  href: string;
  label: string;
  hasDropdown: boolean;
  subItems?: (SubItem | CategoryItem)[];
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname() ?? "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsLanguageDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActiveLink = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const navLinks: NavLink[] = [
    { 
      href: "/", 
      label: "Home",
      hasDropdown: false
    },
    { 
      href: "/about", 
      label: "About Us",
      hasDropdown: true,
      subItems: [
        { href: "/about", label: "Our History" },
        { href: "/service-charter", label: "Service Charter" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact us" },
        { href: "/administration", label: "Administration Team" },
        { href: "/performance-contracting", label: "Performance Contracting" }
      ]
    },
    { 
      href: "/academics", 
      label: "Academics",
      hasDropdown: true,
      subItems: [
        { 
          label: "Administration",
          isCategory: true as const,
          items: [
            { href: "/principal", label: "Principal's Office" },
            { href: "/bog", label: "Board of Governance" },
            { href: "/dpadministration", label: "Deputy Principal Planning, Administration and Finance" },
            { href: "/dpacademics", label: "Deputy Principal Academic Affair" },
            { href: "/registry", label: "Registry" },
            { href: "/dean-of-students", label: "Dean of Students" }

          ]
        },
        { 
          label: "Academic Departments",
          isCategory: true as const,
          items: [
            { href: "/departments/business", label: "Business Department" },
            { href: "/departments/ict", label: "Computing & Informatics Department" },
            { href: "/departments/civil", label: "Building & Civil Engineering Department" },
            { href: "/departments/electrical", label: "Electrical & Electronics Engineering Department" },
            { href: "/departments/automotive", label: "Automotive & Mechanical Engineering Department" },
            { href: "/departments/fashion", label: "Fashion Design and Cosmetology Department" },
            { href: "/departments/hospitality-tourism", label: "Hospitality and Tourism Department" },
            { href: "/departments/agriculture", label: "Agriculture Department" }
          ]
        },
        { 
          label: "Non-Academic Departments",
          isCategory: true as const,
          items: [
            { href: "/examination", label: "Examination" },
            { href: "/guidance-counselling", label: "Guidance and Counselling" },
            { href: "/ilo", label: "Industry Liaison Office" },
            { href: "/cbet", label: "Competency-Based Education and Training" },
            { href: "/iso-mr", label: "ISO Standards & Management Reviews" },
            { href: "/iqa", label: "Internal Quality Assurance Services" }
          ]
        }
      ]
    },
    { 
      href: "/opportunities", 
      label: "Opportunities",
      hasDropdown: true,
      subItems: [
        { href: "/careers", label: "Career" },
        { href: "/tenders", label: "Tenders" },
        { href: "/suppliers", label: "List of Prequalified Suppliers" }
      ]
    },
    { 
      href: "/admissions", 
      label: "Admissions",
      hasDropdown: true,
      subItems: [
        { href: "/documents/september-advert.pdf", label: "Download September Advert" },
        { href: "/admissions", label: "Student Application" }
      ]
    },
    { 
      href: "/news", 
      label: "News & Events",
      hasDropdown: true,
      subItems: [
        { 
          label: "Government Resources",
          isCategory: true as const,
          items: [
            { href: "/news/executive-order", label: "Executive Order" },
            { href: "/news/legal-order", label: "Legal Order" },
            { href: "/news/legislation-tvet", label: "Legislation on TVET" },
            { href: "/news/circulars", label: "Circulars" },
            { href: "/news/other-resources", label: "Other Resources" },
            { href: "/news/ktvc-documents", label: "KTVC Documents" },
            { href: "/news/research", label: "Research" }
          ]
        },
        { 
          label: "Website & NoticeBoard",
          isCategory: true as const,
          items: [
            { href: "/news/latest", label: "News" },
            { href: "/news/events", label: "Events" },
            { href: "/news/career", label: "Career" }
          ]
        }
      ]
    },
    { 
      href: "/downloads", 
      label: "Downloads",
      hasDropdown: true,
      subItems: [
        { 
          label: "Downloadable resources",
          isCategory: true as const,
          items: [
            { href: "/documents/kongoni-technical-brochure.pdf", label: "Brochure" },
            { href: "/downloads/trainee-rules", label: "Trainee Rules and Regulations" }
          ]
        }
      ]
    },
    { 
      href: "/student-hub", 
      label: "Student Hub",
      hasDropdown: true,
      subItems: [
        { 
          label: "Prospect Students",
          isCategory: true as const,
          items: [
            { href: "/student-hub/application-procedure", label: "Application Procedure" },
            { href: "/student-hub/online-registration", label: "Online Registration" },
            { href: "/student-hub/fee-structure", label: "Fee Structure" },
            { href: "/student-hub/scholarship", label: "Scholarship Application" },
            { href: "/student-hub/hostel-booking", label: "Hostel Booking" },
            { href: "/student-hub/join-us", label: "Join Us" }
          ]
        },
        { 
          label: "Current Student",
          isCategory: true as const,
          items: [
            { href: "/student-hub/student-forms", label: "All Student Forms" },
            { href: "/student-hub/trainee-rules", label: "Trainee Rules & Regulations" },
            { href: "/student-hub/examination", label: "Examination" },
            { href: "/student-hub/unit-registration", label: "Unit Registration Procedure" },
            { href: "/student-hub/course-transfer", label: "Course Transfer Form" },
            { href: "/student-hub/clearance-form", label: "Clearance Form" },
            { href: "/student-hub/student-handbook", label: "Student Handbook" }
          ]
        }
      ]
    }
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "sw", name: "Kiswahili", flag: "🇰🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const handleLanguageChange = (language: typeof languages[0]) => {
    setSelectedLanguage(language.name);
    setIsLanguageDropdownOpen(false);
  };

  // Quick Links for header top section - removed opportunities items as requested
  const quickLinks = [
    { href: "/downloads/brochures", label: "Brochure" },
    { href: "/news/latest", label: "News" }
  ];

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      {/* Top Contact Row with Enhanced Features and Quick Links */}
      <div className="bg-secondary text-black text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Contact Information and Social Media */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {/* Contact Information */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                <a href="tel:+254788070303" className="text-black hover:text-white hover:underline transition-colors duration-200 text-xs">
                  <span className="hidden sm:inline">+254 788070303</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Mail className="w-4 h-4 text-black" />
                <a href="mailto:kongonitvc@gmail.com" className="text-black hover:text-white hover:underline transition-colors duration-200 text-xs">
                  kongonitvc@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-2 sm:space-x-3">
              <a 
                href="https://facebook.com/kongonitechnical" 
                aria-label="Facebook" 
                className="text-black hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-xs sm:text-sm"></i>
              </a>
              <a 
                href="https://wa.me/254788070303" 
                aria-label="WhatsApp" 
                className="text-black hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xs sm:text-sm"></i>
              </a>
              <a 
                href="https://instagram.com/kongonitechnical" 
                aria-label="Instagram" 
                className="hidden sm:inline text-black hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xs sm:text-sm"></i>
              </a>
              <a 
                href="https://twitter.com/kongonitechnical" 
                aria-label="Twitter" 
                className="hidden sm:inline text-black hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xs sm:text-sm"></i>
              </a>
            </div>
          </div>

          {/* Right Side - Quick Links and Language Selector */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {/* Quick Access Links - Horizontal scroll on mobile */}
            <div className="hidden xl:flex items-center space-x-2 text-xs">
              {quickLinks.map((link, index) => (
                <span key={link.href} className="flex items-center space-x-2">
                  <Link href={link.href} className="text-black hover:text-white hover:underline font-medium transition-colors duration-200 whitespace-nowrap">
                    {link.label}
                  </Link>
                  {index < quickLinks.length - 1 && <span className="text-black/50">|</span>}
                </span>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-2 py-1 rounded text-black hover:bg-black/10 transition-colors duration-200"
                aria-label="Select Language"
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs font-medium">
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.name === selectedLanguage)?.flag} {selectedLanguage}
                  </span>
                  <span className="sm:hidden">
                    {languages.find(lang => lang.name === selectedLanguage)?.flag}
                  </span>
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[130px] sm:min-w-[150px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center space-x-2 transition-colors duration-200"
                    >
                      <span>{language.flag}</span>
                      <span className="text-xs sm:text-sm">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity flex-shrink-0"
            >
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
                <h1 className="text-lg font-bold text-black leading-tight">Kongoni Technical</h1>
                <p className="text-xs text-black/80 leading-tight">& Vocational College</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <div key={link.href} className="relative group">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(link.label)}
                          className={`flex items-center space-x-1 font-medium transition-all duration-200 py-2 whitespace-nowrap text-sm ${
                            isActiveLink(link.href)
                              ? "text-white font-semibold border-b-2 border-white pb-1"
                              : "text-black hover:text-white hover:scale-105"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === link.label ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Enhanced Dropdown Menu */}
                        {openDropdown === link.label && (
                          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[280px] max-w-[400px] z-50 animate-fade-in max-h-96 overflow-y-auto">
                            {link.subItems?.map((subItem, index) => (
                              <div key={`${subItem.label}-${index}`}>
                                {subItem.isCategory ? (
                                  <div className="px-4 py-2">
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 border-b pb-1">
                                      {subItem.label}
                                    </div>
                                    {subItem.items.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 rounded mb-1"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {subItem.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                          isActiveLink(link.href)
                            ? "text-white font-semibold border-b-2 border-white pb-1"
                            : "text-black hover:text-white hover:scale-105"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link href="/admissions">
                <Button className="bg-secondary text-black hover:bg-secondary/90 hover:scale-105 transition-all duration-200 font-semibold border-2 border-secondary shadow-lg px-6 py-2">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-black hover:text-white hover:bg-black/10 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-black/20 py-4 bg-primary/95 backdrop-blur-sm animate-fade-in max-h-96 overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(`mobile-${link.label}`)}
                          className={`w-full flex items-center justify-between py-3 px-2 font-medium transition-colors rounded-md ${
                            isActiveLink(link.href)
                              ? "text-white font-semibold bg-black/20"
                              : "text-black hover:text-white hover:bg-black/10"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === `mobile-${link.label}` ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Dropdown Items */}
                        {openDropdown === `mobile-${link.label}` && (
                          <div className="ml-4 mt-1 space-y-1">
                            {link.subItems?.map((subItem, index) => (
                              <div key={`mobile-${subItem.label}-${index}`}>
                                {subItem.isCategory ? (
                                  <div className="py-2">
                                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-2 px-2">
                                      {subItem.label}
                                    </div>
                                    {subItem.items.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block py-1 px-4 text-sm text-black hover:text-white hover:bg-black/10 rounded transition-colors duration-200"
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setOpenDropdown(null);
                                        }}
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 px-2 text-sm text-black hover:text-white hover:bg-black/10 rounded transition-colors duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                  >
                                    {subItem.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-3 px-2 font-medium transition-colors rounded-md ${
                          isActiveLink(link.href)
                            ? "text-white font-semibold bg-black/20"
                            : "text-black hover:text-white hover:bg-black/10"
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-black/20">
                  <div className="px-2 space-y-2 text-black text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+254788070303" className="text-black hover:text-white transition-colors duration-200">
                        +254 788070303
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:kongonitvc@gmail.com" className="text-black hover:text-white transition-colors duration-200 break-all">
                        kongonitvc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/admissions" onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
              }}>
                <Button className="w-full mt-4 bg-secondary text-black hover:bg-secondary/90 transition-colors font-semibold">
                  Apply Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Add CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}