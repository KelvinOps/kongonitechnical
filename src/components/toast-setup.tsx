// src/components/toast-setup.tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"

export function ToastSetup() {
  const { toast } = useToast()
  
  useEffect(() => {
    // Toast context is now available globally
  }, [toast])
  
  return null
}