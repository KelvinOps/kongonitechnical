// src/components/ui/toaster.tsx
"use client"

import { ToastViewport, ToastProvider } from "@/components/ui/toast"

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}