import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Kongoni Technical Vocational College",
  description:
    "Learn about Kongoni TVC — a government-sponsored institution under the Ministry of Education, equipping students with practical skills since 2019.",
  alternates: { canonical: "/about" },
};

// ─── Image map ────────────────────────────────────────────────────────────────
// Replace these paths with your actual images in /public/images/
// Suggested shots: workshop activity, students in class, campus exterior,
// instructor demonstrating, lab equipment, graduation/certificate ceremony
const IMGS = {
  hero1:      "/images/about/pathfromgate.png", // wide workshop shot
  hero2:      "/images/about/adminblock.png", // students in class
  hero3:      "/images/about/sideadminblock.png", // campus exterior
  hero4:      "/images/about/pathtoblock.png", // instructor / lab
  campus:     "/images/about/pathtoblock.png",
  workshop:   "/images/about/admission.jpg",
  students:   "/images/about/buildingworkshop.jpeg",
  lab:        "/images/about/ictlab.jpg",
  outdoor:    "/images/about/frontsideadmin.png",
  graduation: "/images/about/frontadmin.png",
  dual1:      "/images/about/dualtraining1.jpg",
  dual2:      "/images/about/dualtraining4.jpg",
};
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════════════
          HERO — asymmetric image mosaic + headline
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-950">

        {/* Image mosaic — 2-column grid, right side */}
        <div className="absolute inset-0 grid grid-cols-2 gap-0.5 opacity-50 lg:opacity-60">
          <div className="relative">
            <Image src={IMGS.hero1} alt="Workshop training" fill className="object-cover" priority />
          </div>
          <div className="grid grid-rows-2 gap-0.5">
            <div className="relative">
              <Image src={IMGS.hero2} alt="Students in class" fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative">
                <Image src={IMGS.hero3} alt="Campus exterior" fill className="object-cover" />
              </div>
              <div className="relative">
                <Image src={IMGS.hero4} alt="Instructor demonstrating" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Dark gradient over the mosaic so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/20" />

        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 max-w-7xl">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-secondary text-sm font-semibold tracking-wide uppercase">
                Government Sponsored · Est. 2019
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Skills that{" "}
              <span className="text-secondary">open doors.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl">
              Kongoni TVC is a Ministry of Education institution in Likuyani, Kakamega County —
              training the next generation of engineers, technicians, and entrepreneurs since 2019.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-gray-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Explore Courses
              </Link>
            </div>

            {/* Quick stats bar */}
            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/15 pt-8">
              {[
                { n: "2019", label: "Founded" },
                { n: "8", label: "Departments" },
                { n: "500+", label: "Graduates" },
                { n: "5 ac", label: "Campus" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="text-3xl font-black text-white">{n}</div>
                  <div className="text-sm text-white/50 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main>

        {/* ══════════════════════════════════════════════════════════════
            WHO WE ARE — text left, campus image right
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">About the College</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Practical training.<br />Real-world careers.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Kongoni Technical and Vocational College is a Government Sponsored Institution under
                  the Ministry of Education. We opened in October 2019 with 62 students and 12 staff —
                  today we offer programs from ICT and Business to Engineering, Agriculture, and Fashion Design.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Located next to Likuyani Sub-County Headquarters along the Kitale–Eldoret Road,
                  our 5-acre campus provides a serene environment purpose-built for hands-on learning
                  and personal development.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 mb-8">
                  <p className="text-primary font-bold text-base">
                    Centre of Excellence in Building &amp; Civil Engineering
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    TVETA Registration: <span className="font-mono font-semibold">TVETA/ASS/7/3440K (2)</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <div className="text-2xl font-black text-primary mb-1">95%</div>
                    <p className="text-sm text-gray-600">Graduate employment rate</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <div className="text-2xl font-black text-secondary mb-1">50%</div>
                    <p className="text-sm text-gray-600">Industry-based training</p>
                  </div>
                </div>
              </div>

              {/* Stacked images with offset */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[440px]">
                  <Image
                    src={IMGS.campus}
                    alt="Kongoni TVC campus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating inset image */}
                <div className="absolute -bottom-8 -left-8 w-52 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                  <Image
                    src={IMGS.workshop}
                    alt="Workshop session"
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                </div>
                {/* Accreditation badge */}
                <div className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl p-4 shadow-xl hidden lg:flex flex-col items-center text-center w-36">
                  <span className="text-3xl font-black">2019</span>
                  <span className="text-xs font-medium opacity-80 mt-1">TVETA Registered</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FACILITIES IMAGE STRIP — horizontal scroll
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl mb-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Facilities</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Built for hands-on learning</h2>
          </div>

          {/* Scrollable strip */}
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
               style={{ scrollbarWidth: "none" }}>
            {[
              { src: IMGS.lab,        label: "ICT & Computing Lab" },
              { src: IMGS.workshop,   label: "Engineering Workshop" },
              { src: IMGS.students,   label: "Lecture Rooms" },
              { src: IMGS.outdoor,    label: "College Grounds" },
              { src: IMGS.graduation, label: "Graduation Ceremony" },
              { src: IMGS.campus,     label: "Main Building" },
            ].map(({ src, label }) => (
              <div key={label} className="flex-shrink-0 snap-start w-72 lg:w-96 relative rounded-2xl overflow-hidden h-56 group">
                <Image src={src} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="384px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DUAL TRAINING — image left, text right
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Two stacked images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden h-64 col-span-2">
                    <Image src={IMGS.dual1} alt="Industry training" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-44">
                    <Image src={IMGS.dual2} alt="Classroom session" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="bg-primary rounded-2xl h-44 flex flex-col items-center justify-center text-white text-center p-6">
                    <span className="text-5xl font-black">50/50</span>
                    <span className="text-sm font-medium opacity-80 mt-2">College + Industry training</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">How We Train</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Half classroom.<br />Half industry floor.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our dual training system means trainees spend 50% of their time at college and 50%
                  embedded with partner companies — gaining real-world experience before they graduate.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  KTVC is equipped with modern training equipment and experienced instructors who bring
                  industry practice into every lesson — making us one of the most practically focused
                  colleges in the region.
                </p>

                <div className="space-y-4">
                  {[
                    "Modern, industry-standard workshops and labs",
                    "Experienced instructors with professional backgrounds",
                    "Direct links to employers for placement and jobs",
                    "NITA-certified programs recognized nationwide",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TIMELINE — clean horizontal-to-vertical
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gray-950 text-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our History</p>
            <h2 className="text-4xl font-extrabold text-center mb-16">From idea to institution</h2>

            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/15" />

              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  {
                    year: "2016",
                    title: "The Vision",
                    body: "Community and political leaders mooted the idea. Approximately 5 acres of land were purchased to serve as the college site.",
                    color: "bg-primary",
                  },
                  {
                    year: "Oct 2019",
                    title: "Doors Open",
                    body: "62 students enrolled in Building & Civil Engineering, ICT, and Business Studies, supported by 12 staff members.",
                    color: "bg-secondary",
                  },
                  {
                    year: "Nov 2019",
                    title: "TVETA Registered",
                    body: "Officially registered under TVETA/ASS/7/3440K (2) as a Centre of Excellence in Building and Civil Engineering.",
                    color: "bg-blue-500",
                  },
                  {
                    year: "2020",
                    title: "First Block Complete",
                    body: "Construction of the first permanent block was completed, housing offices, lecture rooms, and practical workshops.",
                    color: "bg-green-500",
                  },
                ].map(({ year, title, body, color }) => (
                  <div key={year} className="relative">
                    {/* Dot on the timeline line */}
                    <div className={`hidden lg:block absolute -top-[30px] left-0 w-4 h-4 ${color} rounded-full border-2 border-gray-950 shadow-lg`} />
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${color} text-white`}>
                        {year}
                      </div>
                      <h3 className="text-lg font-bold mb-3">{title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MISSION / VALUES — split with accent card
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Mission */}
              <div className="lg:col-span-1 bg-primary rounded-3xl p-8 text-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    To provide quality technical and vocational training in collaboration with
                    stakeholders — producing highly skilled, innovative, and employable graduates.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 uppercase tracking-widest font-semibold">Registered Body</p>
                  <p className="text-white font-mono font-bold mt-1">TVETA/ASS/7/3440K (2)</p>
                </div>
              </div>

              {/* Objectives */}
              <div className="lg:col-span-1 bg-gray-50 rounded-3xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Objectives</h3>
                <ul className="space-y-4">
                  {[
                    "Achieve and maintain training quality that enhances our reputation.",
                    "Ensure compliance with the Education Act and regulatory requirements.",
                    "Maximise student satisfaction with every service we provide.",
                  ].map((obj, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">
                        {i + 1}
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Values */}
              <div className="lg:col-span-1 bg-gray-50 rounded-3xl p-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Core Values</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "🤝", value: "Teamwork" },
                    { icon: "⚖️", value: "Equity" },
                    { icon: "⭐", value: "Professionalism" },
                    { icon: "👁️", value: "Transparency" },
                    { icon: "❤️", value: "Integrity" },
                    { icon: "📣", value: "Accountability" },
                  ].map(({ icon, value }) => (
                    <div key={value} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm">
                      <span>{icon}</span>
                      <span className="text-sm font-semibold text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DEPARTMENTS — clean icon grid
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Academics</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">8 Departments. Countless careers.</h2>
              <p className="text-gray-600">
                Every department is designed around what employers actually need — combining theory with
                intensive practical work in our workshops and partner companies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "💼", name: "Business", tagline: "Commerce & Entrepreneurship",     color: "bg-blue-600",   slug: "business" },
                { icon: "💻", name: "Computing & ICT", tagline: "Digital Skills & Tech",    color: "bg-violet-600", slug: "ict" },
                { icon: "🏗️", name: "Building & Civil", tagline: "Construction & Survey",   color: "bg-slate-700",  slug: "civil" },
                { icon: "⚡", name: "Electrical", tagline: "Power & Electronics",            color: "bg-yellow-500", slug: "electrical" },
                { icon: "🔧", name: "Automotive", tagline: "Vehicle & Mechanical",           color: "bg-green-600",  slug: "automotive" },
                { icon: "✂️", name: "Fashion & Beauty", tagline: "Design & Cosmetology",    color: "bg-pink-600",   slug: "fashion" },
                { icon: "🏨", name: "Hospitality", tagline: "Hotel & Tourism",               color: "bg-purple-600", slug: "hospitality-tourism" },
                { icon: "🌱", name: "Agriculture", tagline: "Farming & Agribusiness",        color: "bg-emerald-600",slug: "agriculture" },
              ].map((dept) => (
                <Link
                  key={dept.slug}
                  href={`/departments/${dept.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
                >
                  <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <span className="text-white text-2xl">{dept.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{dept.tagline}</p>
                  <span className="text-primary text-sm font-semibold group-hover:underline">
                    View courses →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA BANNER — full-bleed photo + overlay
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 overflow-hidden">
          <Image
            src={IMGS.graduation}
            alt="Students graduating at Kongoni TVC"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-950/75" />

          <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Ready to build your career?
            </h2>
            <p className="text-xl text-white/75 mb-10 max-w-xl mx-auto">
              Join a growing community of graduates who left Kongoni TVC with qualifications —
              and the skills to back them up.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl text-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
              >
                Browse Courses
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Contact strip */}
            <div className="mt-16 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-8 text-sm text-white/60">
              <span>📍 Along Eldoret–Kitale Road, Matunda, P.O. Box 45 - 30205</span>
              <span>📞 0788 070 303</span>
              <span>✉️ info@kongonitechnical.ac.ke</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}