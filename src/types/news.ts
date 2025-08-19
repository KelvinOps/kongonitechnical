// types/news.ts
export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
  category: string;
}