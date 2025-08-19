'use client';

import { Calendar, X } from 'lucide-react';
import { useEnrollmentBanner } from '@/hooks/useEnrollmentBanner';

const EnrollmentBanner = () => {
  const { isVisible, currentIntake, closeBanner } = useEnrollmentBanner();

  const handleJoinNow = () => {
    window.location.href = '/admissions';
  };

  if (!isVisible || !currentIntake) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeBanner}
      >
        {/* Banner Modal */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 relative transform transition-all duration-500 ease-out scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-t-2xl"></div>
          
          {/* Close Button */}
          <button
            onClick={closeBanner}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 z-10 group"
            aria-label="Close enrollment banner"
          >
            <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>

          {/* Banner Content */}
          <div className="p-8 pt-12 text-center">
            {/* Header Section */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Calendar className="w-4 h-4" />
                Enrollment Open
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {currentIntake.name} {currentIntake.year} Intake
              </h2>
              
              <div className="text-lg text-gray-600 font-medium">
                Now Accepting Applications
              </div>
            </div>

            {/* Main Message */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong className="text-gray-900">{currentIntake.name} {currentIntake.year} intake</strong> is now open
                for all our technical and vocational courses. Secure your spot today!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleJoinNow}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide text-sm flex items-center justify-center gap-2 group"
              >
                Apply Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button
                onClick={closeBanner}
                className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentBanner;
