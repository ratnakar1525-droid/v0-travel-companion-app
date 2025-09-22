"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Clock, Navigation, Phone, AlertTriangle } from "lucide-react"

export function ActiveTrip() {
  const activeTrip = {
    name: "Road Trip to California",
    currentLocation: "Denver, CO",
    destination: "Los Angeles, CA",
    progress: 35,
    timeRemaining: "8h 30m",
    nextStop: "Flagstaff, AZ",
    distanceToNext: "245 miles",
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Navigation className="h-5 w-5 text-primary" />
            <span>Active Trip</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">{activeTrip.name}</h4>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>
                {activeTrip.currentLocation} → {activeTrip.destination}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>{activeTrip.progress}%</span>
            </div>
            <Progress value={activeTrip.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-muted-foreground">Time Remaining</p>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{activeTrip.timeRemaining}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Next Stop</p>
              <p className="font-medium">{activeTrip.nextStop}</p>
              <p className="text-xs text-muted-foreground">{activeTrip.distanceToNext}</p>
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full">
              <Navigation className="h-4 w-4 mr-2" />
              Continue Navigation
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-1" />
                Emergency
              </Button>
              <Button variant="outline" size="sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Report Issue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="ghost" className="w-full justify-start">
            <MapPin className="h-4 w-4 mr-2" />
            Find Nearby Gas Stations
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MapPin className="h-4 w-4 mr-2" />
            Restaurants & Food
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MapPin className="h-4 w-4 mr-2" />
            Hotels & Lodging
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Services
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
