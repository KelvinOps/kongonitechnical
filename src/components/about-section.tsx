'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Play, Users, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
  const router = useRouter();

  // Function to determine current intake based on date
  const getCurrentIntake = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const currentYear = currentDate.getFullYear();
    
    if (currentMonth >= 12 || currentMonth <= 1) {
      // December - January: Show January intake
      const year = currentMonth === 12 ? currentYear + 1 : currentYear;
      return {
        intake: "January",
        year: year,
        period: "Jan"
      };
    } else if (currentMonth >= 4 && currentMonth <= 5) {
      // April - May: Show May intake
      return {
        intake: "May",
        year: currentYear,
        period: "May"
      };
    } else if (currentMonth >= 8 && currentMonth <= 9) {
      // August - September: Show September intake
      return {
        intake: "September",
        year: currentYear,
        period: "Sep"
      };
    } else {
      // Other months: Show next upcoming intake
      if (currentMonth < 4) {
        return {
          intake: "May",
          year: currentYear,
          period: "May"
        };
      } else if (currentMonth < 8) {
        return {
          intake: "September",
          year: currentYear,
          period: "Sep"
        };
      } else {
        return {
          intake: "January",
          year: currentYear + 1,
          period: "Jan"
        };
      }
    }
  };

  const currentIntake = getCurrentIntake();

  // Navigation functions
  const handleApplyNow = () => {
    router.push('/admissions');
  };

  const handleIntakeClick = () => {
    router.push('/admissions');
  };

  const handleVisitCampus = () => {
    router.push('/contact');
  };

  const handleDownloadBrochure = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/documents/kongoni-technical-brochure.pdf';
    link.download = 'kongoni-technical-brochure.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 text-xs">ABOUT</span>
            KTVC
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Centre of Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to Kongoni Technical & Vocational Training College, a Government Sponsored Institution 
            under the Ministry of Education. Established with the core mandate of equipping youths with 
            skills needed to secure employment in today&apos;s market, we strive to produce 
            <span className="font-semibold text-blue-600"> job creators rather than job seekers</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-gray-600 text-sm font-medium">Graduates</div>
                <div className="text-xs text-gray-500 mt-1">Since 2019</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-gray-600 text-sm font-medium">Departments</div>
                <div className="text-xs text-gray-500 mt-1">Certificate & Diploma</div>
              </div>
            </div>

            {/* Excellence Badge - Dynamic Intake */}
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleIntakeClick}
            >
              <Award className="h-8 w-8 text-white mx-auto mb-2" />
              <h4 className="text-white font-bold text-lg mb-1">
                {currentIntake.intake} {currentIntake.year} Intake
              </h4>
              <p className="text-white/90 text-sm">Applications Now Open</p>
              <p className="text-white/80 text-xs mt-1">TVETA Registered Institution</p>
              <p className="text-white/80 text-xs mt-2">Click to Apply →</p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <button 
                onClick={handleApplyNow}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Now
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleVisitCampus}
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm"
                >
                  Visit Campus
                </button>
                <button 
                  onClick={handleDownloadBrochure}
                  className="border-2 border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Video (Now Bigger) */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Watch Our Story</h3>
                    <p className="text-gray-600">Shaping Minds Since 2019</p>
                  </div>
                </div>
                
                {/* YouTube Embed - Made Bigger */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/CxudOprDncE?si=SRTPvFNrW-XeT8a5" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>

                {/* Optional: Add some additional info below video */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Experience our state-of-the-art facilities and vibrant campus life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;