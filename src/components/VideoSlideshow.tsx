// components/VideoSlideshow.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
  ImageIcon,
  Video
} from 'lucide-react';

interface VideoSlideshowProps {
  images?: string[];
  videoUrl?: string;
  videoThumbnail?: string;
  title: string;
  className?: string;
  maxImages?: number; // Support up to 10 images
}

export default function VideoSlideshow({
  images = [],
  videoUrl,
  videoThumbnail,
  title,
  className = "",
  maxImages = 10
}: VideoSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Limit images to maxImages and combine with video thumbnail
  const limitedImages = images.slice(0, maxImages);
  const allMedia = [...(videoUrl && videoThumbnail ? [videoThumbnail] : []), ...limitedImages];
  const hasVideo = Boolean(videoUrl);
  const hasMultipleMedia = allMedia.length > 1;
  const totalImages = limitedImages.length;

  useEffect(() => {
    if (hasMultipleMedia && !showVideo) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allMedia.length);
      }, 5000); // Increased to 5 seconds for better viewing
      return () => clearInterval(timer);
    }
  }, [allMedia.length, hasMultipleMedia, showVideo]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const playVideo = () => {
    if (!videoUrl) return;
    setShowVideo(true);
    setIsVideoPlaying(true);
  };

  const stopVideo = () => {
    setShowVideo(false);
    setIsVideoPlaying(false);
    setVideoError(false);
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showVideo) return;
      
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape' && showVideo) {
        stopVideo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showVideo]);

  if (allMedia.length === 0) {
    return (
      <div className={`relative w-full h-96 bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p>No media available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-96 overflow-hidden bg-black rounded-lg ${className}`}>
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
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={media}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
            priority={index === 0 || index === currentSlide}
            onError={(e) => handleImageError(e, index)}
            quality={85}
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Media Indicators - Top Left */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20 max-w-[60%]">
        {hasVideo && (
          <Badge className="bg-red-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-xs font-medium">
            <Play className="w-3 h-3" />
            Video Available
          </Badge>
        )}
        {totalImages > 1 && (
          <Badge className="bg-blue-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-xs font-medium">
            <ImageIcon className="w-3 h-3" />
            {totalImages} Photos
          </Badge>
        )}
        {totalImages >= maxImages && (
          <Badge className="bg-orange-600/90 backdrop-blur-sm text-white text-xs font-medium">
            Gallery
          </Badge>
        )}
      </div>

      {/* Video Play Button */}
      {hasVideo && currentSlide === 0 && !showVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Button
            onClick={playVideo}
            className="bg-red-600/90 hover:bg-red-700 backdrop-blur-sm text-white rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            size="lg"
          >
            <Play className="w-8 h-8 ml-1" />
          </Button>
        </div>
      )}

      {/* Navigation Controls */}
      {hasMultipleMedia && (
        <>
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full z-20 transition-all duration-200 hover:scale-110"
            size="sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full z-20 transition-all duration-200 hover:scale-110"
            size="sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 max-w-[80%] flex-wrap justify-center">
            {allMedia.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-white shadow-lg' 
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
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium z-20">
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
    </div>
  );
}