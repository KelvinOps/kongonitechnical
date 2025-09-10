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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header Skeleton */}
        <div className="bg-white border-b shadow-sm">
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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="w-full h-96 mb-8 rounded-lg" />
            <div className="space-y-6">
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-lg">
          <CardContent className="p-10 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-5">
          <Link href="/news" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Badges Section */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-yellow-500/10 text-yellow-700 px-3 py-1 text-sm font-medium">
                  Featured
                </Badge>
              )}
              {article.videoUrl && (
                <Badge className="bg-red-500/10 text-red-700 px-3 py-1 text-sm font-medium">
                  Video Available
                </Badge>
              )}
              {article.images && article.images.length > 1 && (
                <Badge className="bg-blue-500/10 text-blue-700 px-3 py-1 text-sm font-medium">
                  {article.images.length} Photos
                </Badge>
              )}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>
            
            {/* Meta Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-600 mb-10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {new Date(article.eventDate || article.createdAt).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">{article.author}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {article.location && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{article.location}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="flex items-center space-x-2 px-4 py-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Article</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            {article.tags && article.tags.length > 0 && (
              <div className="border-t pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2 text-gray-500 mt-1">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm font-medium">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg mb-12">
            {/* Enhanced Media Display with VideoSlideshow */}
            <VideoSlideshow
              images={article.images}
              videoUrl={article.videoUrl}
              videoThumbnail={article.videoThumbnail}
              title={article.title}
              className="rounded-t-lg"
            />
            
            {/* Article Body */}
            <CardContent className="p-8 lg:p-12">
              {/* Article Excerpt as Lead */}
              <div className="text-xl text-gray-800 font-medium leading-relaxed mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-primary shadow-sm">
                {article.excerpt}
              </div>

              {/* Main Content with Custom Bullet Point Styling */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6 [&>p]:mb-6 [&>ul]:my-8 [&>ol]:my-8 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-10 [&>h3]:mb-4 [&>blockquote]:my-8 [&>hr]:my-10 [&_ul]:list-none [&_ul]:pl-0 [&_ul_li]:relative [&_ul_li]:pl-6 [&_ul_li]:mb-3 [&_ul_li:before]:content-['•'] [&_ul_li:before]:absolute [&_ul_li:before]:left-0 [&_ul_li:before]:top-0 [&_ul_li:before]:text-primary [&_ul_li:before]:font-bold [&_ul_li:before]:text-lg [&_ol]:list-none [&_ol]:pl-0 [&_ol_li]:relative [&_ol_li]:pl-6 [&_ol_li]:mb-3 [&_ol_li:before]:content-['•'] [&_ol_li:before]:absolute [&_ol_li:before]:left-0 [&_ol_li:before]:top-0 [&_ol_li:before]:text-primary [&_ol_li:before]:font-bold [&_ol_li:before]:text-lg"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="text-sm text-gray-500 space-y-2">
                    <p className="font-medium">
                      Published: {new Date(article.createdAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    {article.createdAt !== article.updatedAt && (
                      <p>
                        Last updated: {new Date(article.updatedAt).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.print()}
                      className="px-4 py-2"
                    >
                      Print Article
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="px-4 py-2"
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
            <section className="mt-16">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.map((news) => (
                  <Link key={news.id} href={`/news/${news.id}`} className="block">
                    <Card className="h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group">
                      <div className="relative w-full h-48">
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
                        <div className="absolute top-3 right-3 flex gap-2">
                          {news.videoUrl && (
                            <Badge className="bg-red-600 text-white text-xs px-2 py-1">
                              Video
                            </Badge>
                          )}
                          {news.images && news.images.length > 1 && (
                            <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                              +{news.images.length}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3 text-xs text-gray-500">
                          <span className="font-medium">
                            {new Date(news.eventDate || news.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span>•</span>
                          <span className="text-primary font-medium">{news.category}</span>
                        </div>
                        
                        <h4 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg">
                          {news.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                          {news.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="mt-16 text-center">
            <Link href="/news">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg font-medium">
                <ArrowLeft className="w-5 h-5 mr-3" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}