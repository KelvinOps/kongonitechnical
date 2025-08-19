// components/vision-mission-section.tsx
'use client';

import { Card } from "@/components/ui/card";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-white to-cream-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Foundation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cream-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on excellence, driven by innovation, and committed to transforming lives through technical education
          </p>
        </div>

        {/* Vision, Mission, Motto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Vision Card */}
          <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Vision
              </h3>
              <div className="w-12 h-0.5 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-700 text-center leading-relaxed italic">
                "To be the top-rated technical and vocational college in technical training, innovation, and action research in Kenya and beyond."
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </Card>

          {/* Mission Card */}
          <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:scale-105">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cream-500 to-amber-400"></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cream-500 to-amber-500 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Mission
              </h3>
              <div className="w-12 h-0.5 bg-cream-500 mx-auto mb-6"></div>
              <p className="text-gray-700 text-center leading-relaxed italic">
                "To provide quality technical and vocational training in collaboration with stakeholders to produce highly skilled and innovative human resource."
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cream-100 to-amber-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            {/* Special glow for center card */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cream-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>

          {/* Motto Card */}
          <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cream-500"></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cream-500 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Motto
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-cream-500 mx-auto mb-6"></div>
              <p className="text-gray-700 text-center leading-relaxed italic font-semibold">
                "Technology and innovation to meet societal needs."
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cream-100 to-cyan-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cream-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Core Values</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-lg">
              {['Professionalism', 'Innovation', 'Integrity', 'Inclusivity', 'Accountability'].map((value, index) => (
                <span key={value} className="inline-flex items-center">
                  <span className="text-gray-700 font-medium hover:text-cyan-600 transition-colors duration-200 cursor-default">
                    {value}
                  </span>
                  {index < 4 && (
                    <span className="mx-3 w-2 h-2 bg-gradient-to-r from-cyan-500 to-cream-500 rounded-full"></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
}