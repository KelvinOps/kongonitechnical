// src/components/toast-setup.tsx
"use client"

import { useToastSetup } from "@/hooks/use-toast"
import { useEffect } from "react"

export function ToastSetup() {
  const toastContext = useToastSetup()
  
  useEffect(() => {
    // Toast context is now available globally
  }, [toastContext])
  
  return null
}