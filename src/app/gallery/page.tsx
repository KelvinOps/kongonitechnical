'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, Play, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

// Types
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  description?: string;
}

// Sample data - using placeholder images that work without external configuration
const galleryItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/placeholder-workshop.jpg', // Replace with your actual images
    title: 'Engineering Workshop',
    category: 'facilities',
    description: 'State-of-the-art engineering workshop'
  },
  {
    id: '2',
    type: 'video',
    src: '/placeholder-campus-video.mp4', // Replace with your actual videos
    thumbnail: '/placeholder-campus.jpg',
    title: 'Campus Life',
    category: 'student-life',
    description: 'A day in the life of our students'
  },
  {
    id: '3',
    type: 'image',
    src: '/images/departments/ict/ict7.jpg',
    title: 'Computer Lab',
    category: 'facilities',
    description: 'Modern computer laboratory'
  },
  {
    id: '4',
    type: 'image',
    src: '/placeholder-graduation.jpg',
    title: 'Graduation Ceremony 2024',
    category: 'events',
    description: 'Our proud graduates receiving their certificates'
  },
  {
    id: '5',
    type: 'video',
    src: '/placeholder-training-video.mp4',
    thumbnail: '/placeholder-training.jpg',
    title: 'Technical Training',
    category: 'academics',
    description: 'Hands-on technical training sessions'
  },
  {
    id: '6',
    type: 'image',
    src: '/placeholder-library.jpg',
    title: 'Library',
    category: 'facilities',
    description: 'Well-equipped library with digital resources'
  },
  {
    id: '7',
    type: 'image',
    src: '/placeholder-sports.jpg',
    title: 'Sports Day',
    category: 'student-life',
    description: 'Annual inter-department sports competition'
  },
  {
    id: '8',
    type: 'video',
    src: '/placeholder-partnership-video.mp4',
    thumbnail: '/placeholder-partnership.jpg',
    title: 'Industry Partnership',
    category: 'academics',
    description: 'Collaborations with industry partners'
  }
];

const categories = [
  { id: 'all', name: 'All', count: galleryItems.length },
  { id: 'facilities', name: 'Facilities', count: galleryItems.filter(item => item.category === 'facilities').length },
  { id: 'student-life', name: 'Student Life', count: galleryItems.filter(item => item.category === 'student-life').length },
  { id: 'academics', name: 'Academics', count: galleryItems.filter(item => item.category === 'academics').length },
  { id: 'events', name: 'Events', count: galleryItems.filter(item => item.category === 'events').length },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = useCallback((item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  }, []);

  const navigateMedia = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);
  }, [currentIndex, filteredItems]);

  // Handle image load errors
  const handleImageError = (itemId: string) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-900/90 z-10" />
        {/* Using a solid background color fallback instead of external image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800" />
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in">
              Explore the vibrant life at Kongoni Technical and Vocational College through our collection of moments, achievements, and experiences
            </p>
            <div className="flex items-center justify-center space-x-8 text-white animate-fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold">{galleryItems.length}</div>
                <div className="text-sm opacity-80">Media Items</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-80">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Browse by Category</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {!imageErrors[item.id] ? (
                    <Image
                      src={item.type === 'video' ? (item.thumbnail || item.src) : item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    // Fallback placeholder when image fails to load
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                          {item.type === 'video' ? (
                            <Play className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                          ) : (
                            <div className="w-8 h-8 bg-gray-600 dark:bg-gray-400 rounded"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Image not available</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-blue-600 dark:text-blue-400 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {item.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation buttons */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateMedia('prev');
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateMedia('next');
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )}

          {/* Media content */}
          <div 
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              !imageErrors[selectedMedia.id] ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1200}
                  height={800}
                  sizes="100vw"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onError={() => handleImageError(selectedMedia.id)}
                />
              ) : (
                <div className="w-96 h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400">Image not available</p>
                </div>
              )
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg"
                onError={() => {
                  console.error('Video failed to load:', selectedMedia.src);
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
            
            {/* Media info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedMedia.title}
              </h3>
              {selectedMedia.description && (
                <p className="text-gray-300">
                  {selectedMedia.description}
                </p>
              )}
            </div>
          </div>

          {/* Counter */}
          {filteredItems.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}