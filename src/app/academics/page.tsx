import Header from "@/components/header";
import Footer from "@/components/footer";
import CoursesSection from "@/components/courses-section";

export default function Academics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Academic Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Explore our comprehensive range of diploma and certificate programs designed to prepare you for success.
            </p>
          </div>
        </div>
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}
