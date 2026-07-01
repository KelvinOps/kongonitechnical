// app/news/page.tsx
'use client';

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import { Play, MapPin, Calendar, User, Tag, ImageIcon, Video, Star, TrendingUp, Filter } from "lucide-react";
import type { News } from "@/types/news";

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const {
    data: allNews,
    isLoading,
    error,
  } = useQuery<News[]>({
    queryKey: ["/api/news", searchTerm, selectedCategory, selectedTag, showFeaturedOnly],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (selectedTag) params.append('tags', selectedTag);
      if (showFeaturedOnly) params.append('featured', 'true');
      
      const res = await fetch(`/api/news?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch news");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const categories = [
    "all", "Achievements", "Student Life", "Events", "Facilities", 
    "Partnerships", "Technology", "Sustainability", "Innovation", 
    "Programs", "Alumni", "Community"
  ];

  // Extract unique tags from all news
  const allTags = allNews?.reduce((tags: string[], news) => {
    if (news.tags) {
      news.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []) || [];

  // Sort news based on selected criteria
  const sortedNews = allNews ? [...allNews].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'newest':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  }) : [];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src = '/images/placeholder-news.jpg';
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedTag("");
    setShowFeaturedOnly(false);
    setSortBy("newest");
  };

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedTag || showFeaturedOnly;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            News & Media Center
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 mb-6">
            Stay updated with the latest news, events, and achievements from Kongoni Technical & Vocational Training College
          </p>
          <div className="flex justify-center items-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Latest Updates
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Video className="w-3 h-3 mr-1" />
              Video Content
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <ImageIcon className="w-3 h-3 mr-1" />
              Photo Galleries
            </Badge>
          </div>
        </div>
      </section>

      {/* Enhanced Filters and Search */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Search and Stats Row */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full lg:w-96 pl-4 pr-10"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={showFeaturedOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                    className="flex items-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    Featured
                  </Button>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-input bg-background text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">By Title</option>
                    <option value="category">By Category</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {sortedNews && (
                  <span className="flex items-center gap-1">
                    <Filter className="w-4 h-4" />
                    {sortedNews.length} article{sortedNews.length !== 1 ? 's' : ''} found
                  </span>
                )}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-primary hover:text-primary/80"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
                Categories:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Tags Filter */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  Tags:
                </span>
                <Button
                  variant={selectedTag === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("")}
                  className="text-xs"
                >
                  All Tags
                </Button>
                {allTags.slice(0, 12).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="text-xs"
                  >
                    #{tag}
                  </Button>
                ))}
                {allTags.length > 12 && (
                  <span className="text-xs text-gray-500 px-2 py-1 flex items-center">
                    +{allTags.length - 12} more tags
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }, (_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-12" />
                    </div>
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error || !sortedNews ? (
            <div className="text-center py-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-yellow-800 mb-4">
                  News content is temporarily unavailable. Please try again later.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  Retry
                </Button>
              </div>
            </div>
          ) : sortedNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  No news articles match your current filter criteria.
                </p>
                <Button 
                  onClick={clearAllFilters}
                  className="mt-4"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedNews.map((news) => (
                <Link key={news.id} href={`/news/${news.id}`} className="block">
                  <Card className="h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                      
                      {/* Enhanced Media and Feature Badges */}
                      <div className="absolute top-3 left-3 flex gap-2 flex-wrap max-w-[70%]">
                        {news.featured && (
                          <Badge className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        {news.videoUrl && (
                          <Badge className="bg-red-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-xs font-medium">
                            <Play className="w-3 h-3" />
                            Video
                          </Badge>
                        )}
                        {news.images && news.images.length > 1 && (
                          <Badge className="bg-blue-600/90 backdrop-blur-sm text-white flex items-center gap-1 text-xs font-medium">
                            <ImageIcon className="w-3 h-3" />
                            {news.images.length}
                          </Badge>
                        )}
                        {news.images && news.images.length >= 10 && (
                          <Badge className="bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium">
                            Gallery
                          </Badge>
                        )}
                      </div>

                      {/* Category Badge - Top Right */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium">
                          {news.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(news.eventDate || news.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span className="truncate max-w-24">{news.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm leading-relaxed">
                        {news.excerpt}
                      </p>

                      {/* Location Info */}
                      {news.location && (
                        <div className="flex items-center space-x-1 mb-3 text-sm text-gray-500">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{news.location}</span>
                        </div>
                      )}

                      {/* Enhanced Tags Display */}
                      {news.tags && news.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {news.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-full transition-colors cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                          {news.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                              +{news.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90 group-hover:bg-primary/80 transition-all duration-200"
                        >
                          Read More
                        </Button>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          {news.videoUrl && <Video className="w-3 h-3" />}
                          {news.images && news.images.length > 1 && <ImageIcon className="w-3 h-3" />}
                          {news.featured && <Star className="w-3 h-3" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Load More Button (if needed for pagination in future) */}
          {sortedNews && sortedNews.length > 0 && (
            <div className="text-center mt-12">
              <div className="bg-white rounded-lg p-6 inline-block shadow-sm">
                <p className="text-gray-600 mb-4">
                  Showing {sortedNews.length} articles
                </p>
                <Link href="#top">
                  <Button variant="outline" size="sm">
                    Back to Top
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}