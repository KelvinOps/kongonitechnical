// types/news.ts
export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  images?: string[]; // Support up to 10 images in slideshow
  videoUrl?: string; // YouTube, Vimeo, or direct video URL
  videoThumbnail?: string; // Thumbnail for video content
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
  category: string;
  eventDate?: string; // For event-specific news
  location?: string; // Event or news location
  tags?: string[]; // For categorization and filtering
}