// components/vision-mission-section.tsx
'use client';

import { Card } from "@/components/ui/card";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#0893f0' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Vision, Mission, Motto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Vision Card */}
          <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, #0893f0, #0ea5e9)` }}></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-18 h-18 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ background: `linear-gradient(135deg, #0893f0, #0ea5e9)` }}>
                <Eye className="text-white w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Vision
              </h3>
              <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#0893f0' }}></div>
              <p className="text-gray-700 text-center leading-relaxed italic text-lg">
                &ldquo;To be the top-rated technical and vocational college in technical training, innovation, and action research in Kenya and beyond.&rdquo;
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, #0893f0, #38bdf8)` }}></div>
          </Card>

          {/* Mission Card */}
          <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 lg:scale-105">
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, #0893f0, #f59e0b)` }}></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-18 h-18 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ background: `linear-gradient(135deg, #0893f0, #f59e0b)` }}>
                <Target className="text-white w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Mission
              </h3>
              <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: `linear-gradient(to right, #0893f0, #f59e0b)` }}></div>
              <p className="text-gray-700 text-center leading-relaxed italic text-lg">
                &ldquo;To provide quality technical and vocational training in collaboration with stakeholders to produce highly skilled and innovative human resource.&rdquo;
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, #0893f0, #fbbf24)` }}></div>
            {/* Special glow for center card */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, rgba(8, 147, 240, 0.03), rgba(245, 158, 11, 0.03))` }}></div>
          </Card>

          {/* Motto Card */}
          <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, #0ea5e9, #0893f0)` }}></div>
            <div className="p-8">
              <div className="flex items-center justify-center w-18 h-18 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ background: `linear-gradient(135deg, #0893f0, #0ea5e9)` }}>
                <Lightbulb className="text-white w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Motto
              </h3>
              <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: `linear-gradient(to right, #0893f0, #0ea5e9)` }}></div>
              <p className="text-gray-700 text-center leading-relaxed italic font-semibold text-lg">
                &ldquo;Technology and innovation to meet societal needs.&rdquo;
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, #0ea5e9, #38bdf8)` }}></div>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto border border-white/30 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-lg" style={{ background: `linear-gradient(135deg, #0893f0, #0ea5e9)` }}>
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Our Core Values</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-xl">
              {['Professionalism', 'Innovation', 'Integrity', 'Inclusivity', 'Accountability'].map((value, index) => (
                <span key={value} className="inline-flex items-center">
                  <span 
                    className="font-semibold hover:opacity-80 transition-opacity duration-200 cursor-default"
                    style={{ color: '#0893f0' }}
                  >
                    {value}
                  </span>
                  {index < 4 && (
                    <span className="mx-4 w-3 h-3 rounded-full shadow-sm" style={{ background: `linear-gradient(135deg, #0893f0, #0ea5e9)` }}></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-20 flex justify-center">
          <div className="w-40 h-1 opacity-40" style={{ background: `linear-gradient(to right, transparent, #0893f0, transparent)` }}></div>
        </div>
      </div>
    </section>
  );
}