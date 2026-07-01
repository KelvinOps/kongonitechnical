// lib/types/course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate';
  featured?: boolean;
  category?: string;
  level?: string;
  intake?: string;
  mode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourseDetails {
  modules: string[];
  careerOpportunities: string[];
  entryRequirements: string[];
  duration: string;
  level: string;
  mode: string;
  intake: string;
}

export interface CourseCounts {
  all: number;
  diploma: number;
  certificate: number;
}

// API response types
export type CoursesResponse = Course[];
export type CourseResponse = Course;

// Filter types
export type CourseType = 'all' | 'diploma' | 'certificate';
export type CourseCategory = 'all' | 'engineering' | 'ict' | 'business' | 'health' | 'agriculture' | 'beauty' | 'construction';

// Query parameters
export interface CourseQueryParams {
  type?: CourseType;
  category?: CourseCategory;
  featured?: boolean;
  limit?: number;
  search?: string;
}

// Form types
export interface CourseFormData {
  title: string;
  description: string;
  duration: string;
  type: 'diploma' | 'certificate';
  category?: string;
  featured?: boolean;
}

export default Course;