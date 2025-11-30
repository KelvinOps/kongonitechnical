"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FeedbackType = 'complaint' | 'compliment' | 'suggestion';

interface FeedbackForm {
  type: FeedbackType;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function FeedbackSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FeedbackForm>({
    type: 'suggestion',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send feedback to the API endpoint
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit feedback');
      }

      toast({
        title: "Feedback Submitted Successfully!",
        description: "Thank you for your feedback. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        type: 'suggestion',
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Feedback submission error:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Feedback & Contact
          </h2>
          <p className="mt-4 text-lg text-gray-800 font-medium">
            We value your feedback. Share your complaints, compliments, or suggestions with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-900 font-medium">info@kongonitechnical.ac.ke</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-900 font-medium">+254 788 070 303</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Us</h4>
                  <p className="text-gray-900 font-medium">
                    Kongoni Technical and Vocational College<br />
                    P.O. Box 45 - 30205<br />
                    Matunda, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Response Time
              </h4>
              <p className="text-gray-900 font-medium text-base">
                We strive to respond to all feedback within 24-48 hours during working days. 
                Your concerns are important to us and help us improve our services.
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-base font-semibold text-gray-900 mb-3">
                  Feedback Type *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white"
                  required
                >
                  <option value="complaint" className="text-gray-900">Complaint</option>
                  <option value="compliment" className="text-gray-900">Compliment</option>
                  <option value="suggestion" className="text-gray-900">Suggestion</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-semibold text-gray-900 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500"
                  placeholder="Brief description of your feedback"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-500 resize-vertical"
                  placeholder="Please provide detailed feedback about your experience, suggestions for improvement, or any concerns you'd like to share..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}