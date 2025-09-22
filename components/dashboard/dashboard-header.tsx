"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Plus, User, AlertTriangle } from "lucide-react"
import { ProfileSidebar } from "./profile-sidebar"
import { TripPlanSidebar } from "./trip-plan-sidebar"
import Link from "next/link"

export function DashboardHeader() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [tripPlanOpen, setTripPlanOpen] = useState(false)

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet open={profileOpen} onOpenChange={setProfileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <User className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <ProfileSidebar onClose={() => setProfileOpen(false)} />
              </SheetContent>
            </Sheet>
            <div>
              <h2 className="text-xl font-bold text-foreground">TravelMate</h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link href="/emergency">
              <Button variant="destructive" size="sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                SOS
              </Button>
            </Link>

            <Sheet open={tripPlanOpen} onOpenChange={setTripPlanOpen}>
              <SheetTrigger asChild>
                <Button className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Plan Trip</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-96">
                <TripPlanSidebar onClose={() => setTripPlanOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
