"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PartnershipsSection() {
  const [mounted, setMounted] = useState(false);

  const partners = [
    {
      name: "HELB",
      image: "/images/collaborators/helb.jpg",
      alt: "Higher Education Loans Board Logo",
    },
    {
      name: "KUCCPS",
      image: "/images/partners/kuccps.jpg",
      alt: "Kenya Universities and Colleges Central Placement Service Logo",
    },
    {
      name: "KATTI",
      image: "/images/partners/katti.jpg",
      alt: "Kenya Association of Technical Training Institutes Logo",
    },
    {
      name: "Ministry of Education",
      image: "/images/partners/moe.jpg",
      alt: "Ministry of Education Logo",
    },
    {
      name: "TVETA",
      image: "/images/partners/tveta.jpg",
      alt: "Technical and Vocational Education and Training Authority Logo",
    },
    {
      name: "CDACC",
      image: "/images/partners/cdacc.jpg",
      alt: "Curriculum Development Assessment and Certification Council Logo",
    },
    {
      name: "NITA",
      image: "/images/partners/nita.jpg",
      alt: "National Industrial Training Authority Logo",
    },
    {
      name: "KNEC",
      image: "/images/partners/knec.jpg",
      alt: "Kenya National Examinations Council Logo",
    },
    {
      name: "JUAKALI",
      image: "/images/partners/juakali.png",
      alt: "Juakali Logo",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Partners & Collaborations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong partnerships with industry leaders ensure our graduates are
              job-ready and competitive
            </p>
          </div>
          <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Partners & Collaborations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong partnerships with industry leaders ensure our graduates are
            job-ready and competitive
          </p>
        </div>

        {/* Partners Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 text-center group hover:shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={48}
                  height={48}
                  className="object-contain rounded-lg"
                  onError={(e) => {
                    // fallback image
                    (e.target as HTMLImageElement).src =
                      "/images/placeholder-logo.png";
                  }}
                />
              </div>
              <p className="text-gray-700 font-medium text-xs">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}