"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "Along Eldoret–Kitale Road",
      "Matunda, Kakamega County",
      "P.O. Box 45 - 30205",
    ],
    accent: "bg-blue-600",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+254 788 070 303"],
    accent: "bg-emerald-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["kongonitvc@gmail.com", "info@kongonitechnical.ac.ke"],
    accent: "bg-violet-600",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Saturday: 9:00 AM – 2:00 PM", "Sunday: Closed"],
    accent: "bg-amber-500",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validate = (): boolean => {
    const e: Partial<ContactForm> = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact error:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative bg-gray-950 py-24 overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">We respond within 24 hours</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Lets start a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              conversation.
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Whether youre a prospective student, a parent, or a partner — were here to help.
            Reach out and well get back to you quickly.
          </p>
        </div>
      </section>

      {/* ── Contact info strip ─────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {CONTACT_INFO.map(({ icon: Icon, label, lines, accent }) => (
              <div key={label} className="py-8 px-6 group">
                <div className={`w-10 h-10 ${accent} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{label}</p>
                {lines.map(line => (
                  <p key={line} className="text-sm text-gray-700 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-24 px-10">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Message received!</h3>
                  <p className="text-gray-500 max-w-sm mb-8">
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                  >
                    Send another message <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="px-8 pt-8 pb-4 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
                    <p className="text-sm text-gray-500 mt-1">All fields are required.</p>
                  </div>

                  <div className="px-8 py-6 space-y-5">
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="e.g. Jane Wanjiku"
                          value={formData.name}
                          onChange={e => handleChange("name", e.target.value)}
                          className={`h-11 rounded-xl ${errors.name ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={e => handleChange("email", e.target.value)}
                          className={`h-11 rounded-xl ${errors.email ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is your enquiry about?"
                        value={formData.subject}
                        onChange={e => handleChange("subject", e.target.value)}
                        className={`h-11 rounded-xl ${errors.subject ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={e => handleChange("message", e.target.value)}
                        className={`rounded-xl resize-none ${errors.message ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                      Your information is kept confidential and never shared.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick links card */}
              <div className="bg-blue-600 rounded-3xl p-7 text-white">
                <h3 className="text-lg font-bold mb-1">Looking to apply?</h3>
                <p className="text-white/75 text-sm mb-5">
                  Visit our admissions page for step-by-step guidance on joining Kongoni TVC.
                </p>
                <a
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Go to Admissions <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* FAQ quick links */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
                <h3 className="text-base font-bold text-gray-900 mb-4">Common enquiries</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Course requirements & intake dates", href: "/courses" },
                    { label: "Fee structure & payment plans",      href: "/admissions#fees" },
                    { label: "Hostel & accommodation",             href: "/facilities" },
                    { label: "HELB & bursary information",         href: "/admissions#funding" },
                    { label: "NITA & TVETA certification",         href: "/courses/nita-courses" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex items-center justify-between gap-3 text-sm text-gray-700 hover:text-blue-600 group transition-colors"
                      >
                        <span>{label}</span>
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social / quick contact */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
                <h3 className="text-base font-bold text-gray-900 mb-4">Prefer to call or email?</h3>
                <a
                  href="tel:+254788070303"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors mb-3 group"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </div>
                  +254 788 070 303
                </a>
                <a
                  href="mailto:kongonitvc@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  kongonitvc@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ────────────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Find Us</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Were easy to reach</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Along Eldoret–Kitale Road, next to Likuyani Sub-County Headquarters
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.27966292282!2d35.12947897568074!3d0.7764061631492019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17819f7b930cea91%3A0xf36b50077d897b78!2sKongoni%20Technical%20Vocational%20College!5e1!3m2!1sen!2ske!4v1754816363893!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Directions strip below map */}
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🚌", label: "By Matatu", detail: "Take any Kitale–Eldoret matatu and alight at Kongoni Shopping Centre just before Matunda." },
              { icon: "🚗", label: "By Car",    detail: "On the A1 highway, look for signage at the Kongoni Shopping Centre just before Matunda." },
              { icon: "📍", label: "Landmark",  detail: "Next to Likuyani Sub-County Headquarters." },
            ].map(({ icon, label, detail }) => (
              <div key={label} className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 flex gap-4 items-start">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}