
// app/admissions/page.tsx

import StudentPortal from "@/components/student-portal";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
      
        {/* Student Portal Section - No additional spacing */}
        <StudentPortal />
      </main>
    </div>
  );
}