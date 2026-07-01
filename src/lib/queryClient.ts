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

// Helper to extract status code from error message
function getStatusCode(error: unknown): number | null {
  const msg = error instanceof Error ? error.message : String(error);
  const match = msg.match(/^(\d{3}):/);
  return match ? parseInt(match[1], 10) : null;
}

// Enhanced query function with proper error handling
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey, signal }) => {
    const url = queryKey.join("/") as string;

    const res = await fetch(url, {
      credentials: "include",
      signal,
    });

    // Handle unauthorized access based on configuration
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    // Return null for 404s instead of throwing — missing routes are not fatal
    if (res.status === 404) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// Smart retry logic — no retries on client errors
const smartRetry = (failureCount: number, error: unknown): boolean => {
  const status = getStatusCode(error);
  if (status !== null && status >= 400 && status < 500) return false; // Never retry 4xx
  return failureCount < 2; // Up to 2 retries for server/network errors
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),

      staleTime: 5 * 60 * 1000,       // 5 minutes
      gcTime: 30 * 60 * 1000,          // 30 minutes

      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchInterval: false,

      retry: smartRetry,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

      throwOnError: true,
      networkMode: "online",
    },
    mutations: {
      retry: false,
      networkMode: "online",

      throwOnError: (error: unknown) => {
        const status = getStatusCode(error);
        if (status === 400 || status === 409) return false;
        return true;
      },
    },
  },
});

// Query-specific config presets
export const queryConfigs = {
  departments: {
    staleTime: 10 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnMount: false,
  },
  courses: {
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnMount: false,
  },
  news: {
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnMount: false,
    retry: 1,
  },
  userProfile: {
    staleTime: 1 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: true,
  },
  search: {
    staleTime: 30 * 1000,
    gcTime: 2 * 60 * 1000,
    refetchOnMount: false,
  },
};

// Helper to build optimized query options
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
  return { queryKey, queryFn, ...config, ...options };
};

// Prefetch utilities
export const prefetchQueries = {
  departments: () =>
    queryClient.prefetchQuery({ queryKey: ["/api/departments"], ...queryConfigs.departments }),
  courses: () =>
    queryClient.prefetchQuery({ queryKey: ["/api/courses"], ...queryConfigs.courses }),
  news: () =>
    queryClient.prefetchQuery({ queryKey: ["/api/news"], ...queryConfigs.news }),
};

// Cache invalidation utilities
export const invalidateQueries = {
  departments: () => queryClient.invalidateQueries({ queryKey: ["/api/departments"] }),
  courses: () => queryClient.invalidateQueries({ queryKey: ["/api/courses"] }),
  news: () => queryClient.invalidateQueries({ queryKey: ["/api/news"] }),
  all: () => queryClient.invalidateQueries(),
};

if (process.env.NODE_ENV === "development") {
  queryClient.setQueryDefaults(["/api/debug"], { meta: { persist: false } });
}

export default queryClient;