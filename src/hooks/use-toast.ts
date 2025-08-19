// src/hooks/use-toast.ts
"use client"

import { useToast as useToastContext } from "@/components/ui/toast"

// Re-export the context hook for backward compatibility
export const useToast = useToastContext

// Convenience function to create toasts
export const toast = (props: {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  variant?: "default" | "destructive"
  duration?: number
}) => {
  // This function needs to be called from within a component
  // that has access to the ToastProvider context
  console.warn("toast() function should be used through the useToast hook within a component")
  return {
    id: "",
    dismiss: () => {},
    update: () => {}
  }
}