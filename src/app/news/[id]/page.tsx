// app/news/[id]/page.tsx
'use client';

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Share2, MapPin, Tag } from "lucide-react";
import type { News } from "@/types/news";
import { use } from "react";
import VideoSlideshow from "@/components/VideoSlideshow";

interface NewsArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  // Unwrap the params Promise
  const { id } = use(params);

  const {
    data: article,
    isLoading,
    error,
  } = useQuery<News>({
    queryKey: [`/api/news/${id}`],
    queryFn: async () => {
      const res = await fetch(`/api/news/${id}`);
      if (!res.ok) throw new Error("Failed to fetch article");
      return res.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });

  // Fetch related articles
  const {
    data: relatedNews,
  } = useQuery<News[]>({
    queryKey: [`/api/news/related/${id}`],
    queryFn: async () => {
      const res = await fetch(`/api/news?limit=3&category=${article?.category}`);
      if (!res.ok) throw new Error("Failed to fetch related articles");
      const allNews = await res.json();
      return allNews.filter((news: News) => news.id !== id).slice(0, 3);
    },
    enabled: !!article,
    staleTime: 10 * 60 * 1000,
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src = '/images/placeholder-news.jpg';
  };

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to clipboard if share fails
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Skeleton */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-10 w-3/4 mb-2" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="w-full h-96 mb-8 rounded-lg" />
            <div className="space-y-4">
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The news article you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/news">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/news" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-yellow-500/10 text-yellow-700">
                  Featured
                </Badge>
              )}
              {article.videoUrl && (
                <Badge className="bg-red-500/10 text-red-700">
                  Video Available
                </Badge>
              )}
              {article.images && article.images.length > 1 && (
                <Badge className="bg-blue-500/10 text-blue-700">
                  {article.images.length} Photos
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 mb-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(article.eventDate || article.createdAt).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {article.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{article.location}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <Tag className="w-4 h-4 text-gray-500 mr-2" />
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden mb-8">
            {/* Enhanced Media Display with VideoSlideshow */}
            <VideoSlideshow
              images={article.images}
              videoUrl={article.videoUrl}
              videoThumbnail={article.videoThumbnail}
              title={article.title}
              className="rounded-t-lg"
            />
            
            {/* Article Body */}
            <CardContent className="p-8">
              {/* Article Excerpt as Lead */}
              <div className="text-lg text-gray-700 font-medium leading-relaxed mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                {article.excerpt}
              </div>

              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Article Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-500">
                    <p>Published: {new Date(article.createdAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</p>
                    {article.createdAt !== article.updatedAt && (
                      <p className="mt-1">Last updated: {new Date(article.updatedAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.print()}
                    >
                      Print Article
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                    >
                      Share Article
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedNews && relatedNews.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Related Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNews.map((news) => (
                  <Link key={news.id} href={`/news/${news.id}`} className="block">
                    <Card className="h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
                      <div className="relative w-full h-40">
                        <Image
                          src={news.imageUrl || news.images?.[0] || "/images/placeholder-news.jpg"}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={handleImageError}
                          loading="lazy"
                        />
                        {/* Media indicators for related articles */}
                        <div className="absolute top-2 right-2 flex gap-1">
                          {news.videoUrl && (
                            <Badge className="bg-red-600 text-white text-xs">
                              Video
                            </Badge>
                          )}
                          {news.images && news.images.length > 1 && (
                            <Badge className="bg-blue-600 text-white text-xs">
                              +{news.images.length}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                          <span>
                            {new Date(news.eventDate || news.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span>•</span>
                          <span className="text-primary">{news.category}</span>
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {news.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {news.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/news">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}