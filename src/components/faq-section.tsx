"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I apply for courses at Kongoni TVC?",
    answer: "You can apply online through our application portal, visit the college in person, or contact our admissions office for assistance with the application process."
  },
  {
    id: 2,
    question: "What are the entry requirements for diploma courses?",
    answer: "Entry requirements vary by course, but generally require a KCSE mean grade of C- and above. Specific course requirements are listed in our course catalog."
  },
  {
    id: 3,
    question: "Are there accommodation facilities available?",
    answer: "Yes, we provide affordable accommodation facilities for both male and female students. Contact the administration office for availability and booking. registry@kongonitechnical.ac.ke"
  },
  {
    id: 4,
    question: "What payment options are available?",
    answer: "We accept bank transfers,and MPesa payments. Payment plans and installment options are also available for eligible students."
  },
  {
    id: 5,
    question: "Are there scholarship opportunities?",
    answer: "Yes, we offer various scholarship programs and financial aid options, through higher educations loan board. Contact our Deans office for more information on eligibility and application procedures. Dean@kongonitechnical.ac.ke"
  },
  {
    id: 6,
    question: "What career support services do you offer?",
    answer: "We provide career counseling, internship placements, job placement services, and career fairs to help our graduates transition into the workforce."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our college and programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Couldn&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="mailto:info@kongonitvc.ac.ke"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}