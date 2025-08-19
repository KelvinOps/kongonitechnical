// src/lib/queryClient.ts
import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Error handling utility
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Generic API request function
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// Types for better TypeScript support
type UnauthorizedBehavior = "returnNull" | "throw";

// Enhanced query function with proper error handling
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey, signal }) => {
    const url = queryKey.join("/") as string;
    
    const res = await fetch(url, {
      credentials: "include",
      signal, // Support for AbortController for better cancellation
    });

    // Handle unauthorized access based on configuration
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// ✅ FIXED: Updated QueryClient with corrected syntax and types
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      
      // ✅ STRATEGY 1: Smart caching for different data types
      staleTime: 5 * 60 * 1000, // 5 minutes (instead of Infinity)
      gcTime: 30 * 60 * 1000, // 30 minutes cache (was cacheTime)
      
      // ✅ STRATEGY 2: Selective refetch optimization
      refetchOnWindowFocus: false, // Keep your preference
      refetchOnMount: false, // Prevent unnecessary refetches on component mount
      refetchOnReconnect: true, // Good for network reconnection
      refetchInterval: false, // Keep your preference
      
      // ✅ STRATEGY 3: Smart retry logic for better UX - FIXED SYNTAX
      retry: (failureCount, error: unknown) => {
        // Don't retry client errors (4xx) but retry server/network errors
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage?.includes('400')) return false;
        if (errorMessage?.includes('401') || errorMessage?.includes('403')) return false;
        if (errorMessage?.includes('404')) return false;
        return failureCount < 2; // Maximum 2 retries
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      
      // ✅ STRATEGY 4: Performance optimizations
      throwOnError: true, // Keep your setting
      networkMode: 'online', // Only run queries when online
    },
    mutations: {
      retry: false, // Keep your original conservative setting
      networkMode: 'online',
      
      // ✅ STRATEGY 5: Mutation error handling - FIXED SYNTAX
      throwOnError: (error: unknown) => {
        // Don't throw on expected errors, handle them in components
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage?.includes('400') || errorMessage?.includes('409')) {
          return false;
        }
        return true;
      },
    },
  },
});

// ✅ STRATEGY 6: Query-specific optimizations for your components
export const queryConfigs = {
  // Static content - cache longer
  departments: {
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnMount: false,
  },
  
  // Semi-static content  
  courses: {
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnMount: false,
  },
  
  // Dynamic content - shorter cache
  news: {
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: false,
    retry: 1, // News can fail gracefully
  },
  
  // User-specific content - fresh data
  userProfile: {
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnMount: true,
  },
  
  // Search results - very short cache
  search: {
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchOnMount: false,
  },
};

// ✅ STRATEGY 7: Enhanced query hooks for your components
export const useOptimizedQuery = <T>(
  queryKey: string[],
  queryFn?: () => Promise<T>,
  options?: {
    type?: keyof typeof queryConfigs;
    placeholderData?: T;
    enabled?: boolean;
  }
) => {
  const config = options?.type ? queryConfigs[options.type] : {};
  
  return {
    queryKey,
    queryFn,
    ...config,
    ...options, // User options override defaults
  };
};

// ✅ STRATEGY 8: Prefetch utilities for performance
export const prefetchQueries = {
  departments: () => queryClient.prefetchQuery({
    queryKey: ['/api/departments'],
    ...queryConfigs.departments,
  }),
  
  courses: () => queryClient.prefetchQuery({
    queryKey: ['/api/courses'],
    ...queryConfigs.courses,
  }),
  
  news: () => queryClient.prefetchQuery({
    queryKey: ['/api/news'],
    ...queryConfigs.news,
  }),
};

// ✅ STRATEGY 9: Cache invalidation utilities
export const invalidateQueries = {
  departments: () => queryClient.invalidateQueries({ queryKey: ['/api/departments'] }),
  courses: () => queryClient.invalidateQueries({ queryKey: ['/api/courses'] }),
  news: () => queryClient.invalidateQueries({ queryKey: ['/api/news'] }),
  all: () => queryClient.invalidateQueries(),
};

// ✅ STRATEGY 10: Development helpers
if (process.env.NODE_ENV === 'development') {
  // Add query debugging in development
  queryClient.setQueryDefaults(['/api/debug'], {
    meta: {
      persist: false,
    },
  });
}

export default queryClient;