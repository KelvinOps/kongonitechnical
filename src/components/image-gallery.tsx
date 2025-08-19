'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
  category?: string;
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: GalleryImage[] = [
    {
      src: "/images/facilities/facilities12.jpg",
      alt: "Main Campus Entrance - Kongoni Technical",
      span: "lg:col-span-2 lg:row-span-2",
      category: "campus"
    },
    {
      src: "/images/departments/building/building3.jpg",
      alt: "Modern Building Equipment",
      span: "",
      category: "facilities"
    },
    {
      src: "/images/facilities/facilities5.jpg",
      alt: "College Water Storage Infrastructure",
      span: "",
      category: "facilities"
    },
    {
      src: "/images/admin/admin5.jpg",
      alt: "Collaboration Areas",
      span: "",
      category: "events"
    },
    {
      src: "/images/departments/automotive/automotive.jpg",
      alt: "Advanced Automotive Equipment",
      span: "lg:col-span-2",
      category: "departments"
    },
    {
      src: "/images/departments/ict/ict7.jpg",
      alt: "State-of-the-art Computer Laboratory",
      span: "",
      category: "facilities"
    },
    {
      src: "/images/departments/ict/ajira-workshop.jpg",
      alt: "Technical Workshops ",
      span: "",
      category: "events"
    },
    {
      src: "/images/newsevents/cultural/culturalday12.jpg",
      alt: "Cultural Day",
      span: "lg:col-span-2",
      category: "events"
    },
    {
      src: "/images/newsevents/guidancecounselling/guidance5.jpeg",
      alt: "Guidance & Counselling Day",
      span: "",
      category: "events"
    }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            KTVC Gallery
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            College Life & Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our vibrant college environment, modern facilities, and the exceptional learning 
            experiences that define life at Kongoni Technical
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1`}
              onClick={() => openLightbox(image.src)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                {image.category && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {image.category.replace('-', ' ').toUpperCase()}
                  </div>
                )}
                
                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {image.alt}
                  </h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}