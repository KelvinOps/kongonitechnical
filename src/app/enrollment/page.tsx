// app/enrollment/page.tsx - Fixed enrollment page

import type { Metadata } from "next";
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Enrollment",
  description: "Apply now for admission to Kongoni Technical Vocational Training College. Multiple intake periods available throughout the year.",
};

export default function EnrollmentPage() {
  const intakePeriods = [
    {
      name: "January",
      month: "January",
      deadline: "December 15",
      status: "upcoming"
    },
    {
      name: "May",
      month: "May", 
      deadline: "March 15",
      status: "current"
    },
    {
      name: "September",
      month: "September",
      deadline: "July 15", 
      status: "upcoming"
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with your personal details and academic history."
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload required documents including certificates, ID, and passport photos."
    },
    {
      step: 3,
      title: "Application Review",
      description: "Our admissions team will review your application within 5-7 business days."
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive your admission letter and complete enrollment requirements."
    }
  ];

  const requirements = [
    "Kenya Certificate of Secondary Education (KCSE) or equivalent",
    "Copy of National ID or Birth Certificate",
    "2 Passport-size photographs",
    "Completed application form",
    "Application fee receipt"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Start Your Journey Today
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Join Kongoni Technical Vocational Training College and empower yourself 
              through quality technical education and practical skills training.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <Calendar className="w-6 h-6 inline mr-2" />
                3 Intake Periods Yearly
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <Users className="w-6 h-6 inline mr-2" />
                Multiple Courses Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Periods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Intake Periods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer three intake periods throughout the year to give you flexibility 
              in starting your educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {intakePeriods.map((intake) => (
              <div 
                key={intake.name}
                className={`rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                  intake.status === 'current' 
                    ? 'bg-green-50 border-2 border-green-200' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {intake.status === 'current' && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    Current Intake
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {intake.name} Intake
                </h3>
                <div className="text-gray-600 mb-4">
                  <Clock className="w-5 h-5 inline mr-2" />
                  Application Deadline: {intake.deadline}
                </div>
                <div className="text-gray-600 mb-6">
                  Classes begin in {intake.month}
                </div>
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    intake.status === 'current'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {intake.status === 'current' ? 'Apply Now' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined application process makes it easy to apply and get started 
              with your technical education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-gray-400 mt-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Requirements
              </h2>
              <p className="text-gray-600">
                Please ensure you have all required documents before starting your application.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait! Start your application today and take the first step 
            towards a successful technical career.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Application
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}