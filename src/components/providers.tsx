// src/components/providers.tsx
"use client";

import * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/ui/toast";
import { ToastViewport } from "@/components/ui/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a stable query client instance using your existing configuration
  const [client] = React.useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <ToastProvider>
        <TooltipProvider>
          {children}
          {/* ToastViewport renders the actual toasts */}
          <ToastViewport />
        </TooltipProvider>
      </ToastProvider>
      {/* Add React Query DevTools for development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}