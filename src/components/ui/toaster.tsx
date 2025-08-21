// src/components/ui/toaster.tsx
"use client"

import { ToastViewport, ToastProvider } from "@/components/ui/toast"
import { useToastSetup } from "@/hooks/use-toast"

export function Toaster() {
  // Initialize the toast manager with context
  useToastSetup()
  
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}