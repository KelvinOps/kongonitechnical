
// app/admissions/page.tsx

import StudentPortal from "@/components/student-portal";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Admissions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Begin your journey to success. Apply today and join thousands of successful graduates.
            </p>
          </div>
        </div>
        
        {/* Student Portal Section - No additional spacing */}
        <StudentPortal />
      </main>
    </div>
  );
}