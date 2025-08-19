"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
    {
    image: "/images/hero/block3.jpg",
    title: "Beautiful Campus",
    subtitle: "A conducive learning environment for your academic journey",
    buttonText: "Campus Tour",
    buttonLink: "/about",
  },
  {
    image: "/images/hero/hero1.jpg",
    title: "Excellence in Technical Education",
    subtitle: "Empowering the next generation of skilled professionals",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
  },
  {
    image: "/images/hero/cultural4.jpg",
    title: "Culture & Diversity",
    subtitle: "Modern workshops and laboratories for hands-on learning",
    buttonText: "View Facilities",
    buttonLink: "/about",
  },
  {
    image: "/images/hero/cultural8.jpg",
    title: "Success Stories",
    subtitle: "Join thousands of successful graduates building careers",
    buttonText: "Alumni Stories",
    buttonLink: "/about",
  },
  {
    image: "/images/admin/admin20.jpeg",
    title: "Expert Faculty",
    subtitle: "Learn from industry professionals and experienced educators",
    buttonText: "Meet Faculty",
    buttonLink: "/about",
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after component mounts
    const timer = setTimeout(() => setIsLoading(false), 100);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Increased from 5000ms (5s) to 8000ms (8s)

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (isLoading) {
    return (
      <section className="relative w-full h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[750px] overflow-hidden bg-gray-900" style={{ minHeight: '750px' }}>
      <div className="slideshow-container relative w-full h-full" style={{ minHeight: '750px' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 z-10 scale-100" 
                : "opacity-0 z-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={85}
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center z-20">
              <div className="max-w-4xl px-4 space-y-6">
                <h2 
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
                >
                  {slide.title}
                </h2>
                
                <p 
                  className={`text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed transition-all duration-700 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
                >
                  {slide.subtitle}
                </p>
                
                <div 
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '700ms' : '0ms' }}
                >
                  <Link href={slide.buttonLink}>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-30">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}