// components/vision-mission-section.tsx
'use client';

import { Card } from "@/components/ui/card";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-8 relative overflow-hidden">

      {/* ── Layer 1: Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('/images/hero/vision-mission-bg.png')` }}
      />

      {/* ── Layer 2: Strong gradient overlay — keeps text legible ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-blue-900/82 to-slate-900/88" />

      {/* ── Layer 3: Subtle noise texture for depth ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Layer 4: Decorative glow blobs ── */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{ backgroundColor: '#0893f0' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-15"
        style={{ backgroundColor: '#0ea5e9' }} />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 relative z-10">

        {/* Section label */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-3"
            style={{ backgroundColor: 'rgba(8,147,240,0.2)', color: '#38bdf8', border: '1px solid rgba(8,147,240,0.3)' }}>
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Our Foundation
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(to right, #0893f0, #38bdf8)' }} />
        </div>

        {/* Vision, Mission, Motto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* Vision Card */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-3 bg-white">
            <div className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(to right, #0893f0, #0ea5e9)' }} />
            <div className="p-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0893f0, #0ea5e9)' }}>
                <Eye className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Vision</h3>
              <div className="w-16 h-0.5 mx-auto mb-4 rounded-full"
                style={{ backgroundColor: '#0893f0' }} />
              <p className="text-gray-600 text-center leading-relaxed italic text-sm">
                &ldquo;To be the top-rated technical and vocational college in technical training, innovation, and action research in Kenya and beyond.&rdquo;
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #0893f0, #38bdf8)' }} />
          </Card>

          {/* Mission Card — elevated center */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-3 lg:scale-105 bg-white">
            <div className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(to right, #0893f0, #f59e0b)' }} />
            <div className="p-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0893f0, #f59e0b)' }}>
                <Target className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Mission</h3>
              <div className="w-16 h-0.5 mx-auto mb-4 rounded-full"
                style={{ background: 'linear-gradient(to right, #0893f0, #f59e0b)' }} />
              <p className="text-gray-600 text-center leading-relaxed italic text-sm">
                &ldquo;To provide quality technical and vocational training in collaboration with stakeholders to produce highly skilled and innovative human resource.&rdquo;
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #0893f0, #fbbf24)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom right, rgba(8,147,240,0.03), rgba(245,158,11,0.03))' }} />
          </Card>

          {/* Motto Card */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-3 bg-white">
            <div className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(to right, #0ea5e9, #0893f0)' }} />
            <div className="p-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0893f0, #0ea5e9)' }}>
                <Lightbulb className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Motto</h3>
              <div className="w-16 h-0.5 mx-auto mb-4 rounded-full"
                style={{ background: 'linear-gradient(to right, #0893f0, #0ea5e9)' }} />
              <p className="text-gray-600 text-center leading-relaxed italic font-semibold text-sm">
                &ldquo;Technology and innovation to meet societal needs.&rdquo;
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' }} />
          </Card>

        </div>

        {/* Core Values */}
        <div className="mt-8 text-center">
          <div className="rounded-2xl p-6 max-w-5xl mx-auto shadow-2xl bg-white relative overflow-hidden">
            {/* Top accent bar matching the other cards */}
            <div className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(to right, #0893f0, #38bdf8)' }} />
            {/* Subtle decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-5"
              style={{ background: 'linear-gradient(135deg, #0893f0, #38bdf8)' }} />
            <div className="flex items-center justify-center mb-5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mr-3 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0893f0, #0ea5e9)' }}>
                <div className="w-3.5 h-3.5 bg-white rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Core Values</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-lg">
              {['Professionalism', 'Innovation', 'Integrity', 'Inclusivity', 'Accountability'].map((value, index) => (
                <span key={value} className="inline-flex items-center">
                  <span
                    className="font-semibold hover:opacity-80 transition-opacity duration-200 cursor-default"
                    style={{ color: '#0893f0' }}
                  >
                    {value}
                  </span>
                  {index < 4 && (
                    <span className="mx-3 inline-block w-2 h-2 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #0893f0, #0ea5e9)' }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 flex justify-center">
          <div className="w-40 h-px opacity-40 rounded-full"
            style={{ background: 'linear-gradient(to right, transparent, #0893f0, transparent)' }} />
        </div>

      </div>
    </section>
  );
}