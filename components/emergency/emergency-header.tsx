"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function EmergencyHeader() {
  return (
    <header className="border-b bg-destructive/5 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h2 className="text-xl font-bold text-foreground">Emergency SOS</h2>
            </div>
          </div>

          <Button variant="destructive" size="lg" className="font-semibold">
            Call 911
          </Button>
        </div>
      </div>
    </header>
  )
}
