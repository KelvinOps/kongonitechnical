// components/VideoSlideshow.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Maximize,
  X,
  ImageIcon,
  Video,
  ZoomIn
} from 'lucide-react';

interface VideoSlideshowProps {
  images?: string[];
  videoUrl?: string;
  videoThumbnail?: string;
  title: string;
  className?: string;
  maxImages?: number; // Support up to 10 images
  height?: 'small' | 'medium' | 'large' | 'xl' | 'full'; // New height prop
}

export default function VideoSlideshow({
  images = [],
  videoUrl,
  videoThumbnail,
  title,
  className = "",
  maxImages = 10,
  height = 'large' // Default to large instead of the previous h-96
}: VideoSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Limit images to maxImages and combine with video thumbnail
  const limitedImages = images.slice(0, maxImages);
  const allMedia = [...(videoUrl && videoThumbnail ? [videoThumbnail] : []), ...limitedImages];
  const hasVideo = Boolean(videoUrl);
  const hasMultipleMedia = allMedia.length > 1;
  const totalImages = limitedImages.length;

  // Height classes based on the height prop - Reduced to 3/4 size
  const getHeightClass = (heightSize: string) => {
    switch (heightSize) {
      case 'small':
        return 'h-48 sm:h-60'; // 192px on mobile, 240px on sm+
      case 'medium':
        return 'h-60 sm:h-72'; // 240px on mobile, 288px on sm+
      case 'large':
        return 'h-72 sm:h-96 lg:h-[30rem]'; // 288px on mobile, 384px on sm+, 480px on lg+
      case 'xl':
        return 'h-96 sm:h-[30rem] lg:h-[36rem]'; // 384px on mobile, 480px on sm+, 576px on lg+
      case 'full':
        return 'h-[38vh] sm:h-[45vh] lg:h-[52vh]'; // Viewport-based heights (reduced)
      default:
        return 'h-72 sm:h-96 lg:h-[30rem]';
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const img = e.target as HTMLImageElement;
    img.src = '/images/placeholder-news.jpg';
    setImageErrors(prev => new Set([...prev, index]));
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1` : null;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0` : null;
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return getYouTubeEmbedUrl(url);
    } else if (url.includes('vimeo.com')) {
      return getVimeoEmbedUrl(url);
    }
    return url; // Assume direct video URL
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % allMedia.length);
  }, [allMedia.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  }, [allMedia.length]);

  const stopVideo = useCallback(() => {
    setShowVideo(false);
    setIsVideoPlaying(false);
    setVideoError(false);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const playVideo = () => {
    if (!videoUrl) return;
    setShowVideo(true);
    setIsVideoPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  // Auto slideshow
  useEffect(() => {
    if (hasMultipleMedia && !showVideo && !isImageFullscreen) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allMedia.length);
      }, 6000); // Increased from 5000 to 6000 for better viewing time
      return () => clearInterval(timer);
    }
  }, [allMedia.length, hasMultipleMedia, showVideo, isImageFullscreen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && !showVideo) {
        prevSlide();
      } else if (e.key === 'ArrowRight' && !showVideo) {
        nextSlide();
      } else if (e.key === 'Escape') {
        if (showVideo) {
          stopVideo();
        } else if (isImageFullscreen) {
          setIsImageFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showVideo, isImageFullscreen, prevSlide, nextSlide, stopVideo]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (allMedia.length === 0) {
    return (
      <div className={`relative w-full ${getHeightClass(height)} bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        <div className="text-center text-gray-500">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p>No media available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Image Fullscreen Modal */}
      {isImageFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <Image
              src={allMedia[currentSlide]}
              alt={`${title} - Image ${currentSlide + 1} (Fullscreen)`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              quality={95}
            />
            
            {/* Fullscreen Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                onClick={toggleImageFullscreen}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                size="sm"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Fullscreen Navigation */}
            {hasMultipleMedia && (
              <>
                <Button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
                  size="lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <Button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
                  size="lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Fullscreen Slide Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-lg font-medium">
                  {currentSlide + 1} / {allMedia.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Slideshow Container */}
      <div className={`relative w-full ${getHeightClass(height)} overflow-hidden bg-black rounded-lg ${className}`}>
        {/* Video Player Overlay */}
        {showVideo && videoUrl && (
          <div className="absolute inset-0 z-30 bg-black">
            <div className="relative w-full h-full">
              {/* Video Controls */}
              <div className="absolute top-4 right-4 z-40 flex gap-2">
                <Button
                  onClick={toggleFullscreen}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  size="sm"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
                <Button
                  onClick={stopVideo}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Video Embed */}
              {!videoError ? (
                <iframe
                  src={getEmbedUrl(videoUrl) || ''}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                  title={`${title} - Video`}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-white">
                  <div className="text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="mb-4">Unable to load video</p>
                    <Button onClick={stopVideo} variant="outline">
                      Close Video
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Slideshow */}
        {allMedia.map((media, index) => (
          <div
            key={`slide-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleImageFullscreen}
          >
            <Image
              src={media}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={index === 0 || index === currentSlide}
              onError={(e) => handleImageError(e, index)}
              quality={90}
            />
          </div>
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Media Indicators - Top Left */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20 max-w-[60%]">
          {hasVideo && (
            <Badge className="bg-red-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-sm font-medium px-3 py-2">
              <Play className="w-4 h-4" />
              Video Available
            </Badge>
          )}
          {totalImages > 1 && (
            <Badge className="bg-blue-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-sm font-medium px-3 py-2">
              <ImageIcon className="w-4 h-4" />
              {totalImages} Photos
            </Badge>
          )}
          {totalImages >= maxImages && (
            <Badge className="bg-orange-600/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2">
              Gallery
            </Badge>
          )}
        </div>

        {/* Zoom Button - Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <Button
            onClick={toggleImageFullscreen}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            size="sm"
            title="View fullscreen"
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
        </div>

        {/* Video Play Button */}
        {hasVideo && currentSlide === 0 && !showVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Button
              onClick={playVideo}
              className="bg-red-600/90 hover:bg-red-700 backdrop-blur-sm text-white rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
              size="lg"
            >
              <Play className="w-10 h-10 ml-1" />
            </Button>
          </div>
        )}

        {/* Navigation Controls */}
        {hasMultipleMedia && (
          <>
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-full z-20 transition-all duration-200 hover:scale-110"
              size="lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-4 rounded-full z-20 transition-all duration-200 hover:scale-110"
              size="lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 max-w-[80%] flex-wrap justify-center">
              {allMedia.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-white shadow-lg ring-2 ring-white/50' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Slide Counter - Bottom Right */}
        {hasMultipleMedia && (
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-medium z-20">
            {currentSlide + 1} / {allMedia.length}
          </div>
        )}

        {/* Loading State for Images */}
        {imageErrors.has(currentSlide) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
            <div className="text-center text-white">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p>Image unavailable</p>
            </div>
          </div>
        )}

        {/* Click to enlarge hint */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full opacity-70 z-20">
          Click to enlarge
        </div>
      </div>
    </>
  );
}