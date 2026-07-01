// ============================================
// COMPONENT FIX: components/news-section.tsx
// ============================================
// Your component is ALREADY correct and dynamic!
// It automatically fetches from the API, so no changes needed.
// The component will automatically show the new events once you update the API files.

// However, here's an ENHANCED version with better error handling:

'use client';

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { News } from "@/types/news";

export default function NewsSection() {
  const {
    data: allNews,
    isLoading,
    error,
  } = useQuery<News[]>({
    queryKey: ["/api/news"],
    queryFn: async () => {
      const res = await fetch("/api/news?limit=6");
      if (!res.ok) throw new Error("Failed to fetch news");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });

  // The news is already sorted by date in the API, but we ensure it here too
  const sortedNews = allNews?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const mostRecentNews = sortedNews?.[0];
  const olderNews = sortedNews?.slice(1, 6);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src = '/images/placeholder-news.jpg';
  };

  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:row-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-64 bg-gray-200 animate-pulse" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-8 bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-6 w-3/4 animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-16 bg-gray-200 rounded animate-pulse" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2 w-16 animate-pulse" />
                      <div className="h-5 bg-gray-200 rounded mb-2 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !allNews || allNews.length === 0) {
    return (
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest News</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-yellow-800">
              {error ? "News content is temporarily unavailable." : "No news articles available yet."}
            </p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-yellow-600 hover:bg-yellow-700"
            >
              Retry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest achievements, events, and developments at Kongoni Technical & Vocational Training College
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Article - ALWAYS shows the most recent */}
          {mostRecentNews && (
            <div className="lg:row-span-2">
              <Link href={`/news/${mostRecentNews.id}`} className="block">
                <Card className="h-full overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative w-full h-64 lg:h-80">
                    <Image
                      src={mostRecentNews.imageUrl || "/images/placeholder-news.jpg"}
                      alt={mostRecentNews.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      Latest News
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(mostRecentNews.createdAt).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{mostRecentNews.author}</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mb-3">
                      {mostRecentNews.category}
                    </Badge>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors leading-tight">
                      {mostRecentNews.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {mostRecentNews.excerpt}
                    </p>
                    
                    <Button className="bg-primary text-white hover:bg-primary/90 transition-colors group-hover:bg-primary/80">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          )}

          {/* Sidebar - Recent Updates */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Recent Updates</h3>
              <Link href="/news" className="text-primary hover:text-primary/80 font-medium text-sm flex items-center">
                View All News
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {olderNews && olderNews.length > 0 ? (
              olderNews.map((news, index) => (
                <Link key={news.id} href={`/news/${news.id}`} className="block">
                  <Card className="p-4 bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 border border-gray-100 cursor-pointer group">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={news.imageUrl || "/images/placeholder-news.jpg"}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                          sizes="80px"
                          onError={handleImageError}
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`w-2 h-2 rounded-full ${
                            index === 0 ? "bg-green-500" :
                            index === 1 ? "bg-blue-500" :
                            index === 2 ? "bg-purple-500" :
                            index === 3 ? "bg-orange-500" :
                            "bg-gray-400"
                          }`} />
                          <span className="text-xs text-gray-500">
                            {new Date(news.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <Badge variant="outline" className="text-xs px-2 py-0">
                            {news.category}
                          </Badge>
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors text-sm leading-tight line-clamp-2">
                          {news.title}
                        </h4>
                        
                        <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                          {news.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{news.author}</span>
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No additional news available</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link href="/news">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              View All News & Updates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}