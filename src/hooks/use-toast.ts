// src/hooks/use-toast.ts
"use client"

import * as React from "react"
import { useToast as useToastContext } from "@/components/ui/toast"

// Re-export the context hook for backward compatibility
export const useToast = useToastContext

// Import ToastProps from the toast component
import type { ToastProps } from "@/components/ui/toast"

// Simplified toast input interface
interface ToastInput {
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: "default" | "destructive"
  duration?: number
  action?: ToastProps["action"]
}

// Simple toast manager using module-level state
let toastContextRef: ReturnType<typeof useToastContext> | null = null

// Hook to set up the toast context reference
export const useToastSetup = () => {
  const context = useToastContext()
  
  React.useEffect(() => {
    toastContextRef = context
  }, [context])
  
  return context
}

// Main toast function
export const toast = (input: ToastInput | string) => {
  if (!toastContextRef?.addToast) {
    console.warn("Toast system not initialized. Make sure Toaster component is mounted.")
    return {
      id: "",
      dismiss: () => {},
      update: () => {}
    }
  }

  // Handle string input
  const toastData: ToastInput = typeof input === 'string' 
    ? { description: input }
    : input

  // Add the toast
  const id = toastContextRef.addToast({
    title: toastData.title,
    description: toastData.description,
    variant: toastData.variant || "default",
    duration: toastData.duration ?? 5000,
    action: toastData.action
  })

  return {
    id,
    dismiss: () => toastContextRef?.dismissToast(id),
    update: (updates: Partial<ToastProps>) => toastContextRef?.updateToast(id, updates)
  }
}

// Convenience methods
toast.success = (message: string, options: Partial<ToastInput> = {}) => {
  return toast({
    title: "Success",
    description: message,
    variant: "default",
    ...options
  })
}

toast.error = (message: string, options: Partial<ToastInput> = {}) => {
  return toast({
    title: "Error", 
    description: message,
    variant: "destructive",
    ...options
  })
}

toast.info = (message: string, options: Partial<ToastInput> = {}) => {
  return toast({
    title: "Info",
    description: message,
    variant: "default",
    ...options
  })
}

// Promise helper
toast.promise = <T>(
  promise: Promise<T>,
  messages: {
    loading?: string
    success?: string | ((data: T) => string)
    error?: string | ((err: unknown) => string)
  }
) => {
  const loadingToast = toast({
    title: "Loading",
    description: messages.loading || "Please wait...",
    duration: 0
  })

  promise
    .then((data) => {
      loadingToast.dismiss()
      const successMsg = typeof messages.success === 'function' 
        ? messages.success(data) 
        : messages.success || "Success!"
      toast.success(successMsg)
      return data
    })
    .catch((error) => {
      loadingToast.dismiss()
      const errorMsg = typeof messages.error === 'function'
        ? messages.error(error)
        : messages.error || "Something went wrong!"
      toast.error(errorMsg)
      throw error
    })

  return loadingToast
}