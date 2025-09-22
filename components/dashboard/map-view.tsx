"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation } from "lucide-react"

export function MapView() {
  // Mock data for nearby places
  const nearbyPlaces = [
    { id: 1, name: "Central Park", type: "Park", distance: "0.5 km", rating: 4.8 },
    { id: 2, name: "Metropolitan Museum", type: "Museum", distance: "1.2 km", rating: 4.9 },
    { id: 3, name: "Times Square", type: "Landmark", distance: "2.1 km", rating: 4.6 },
    { id: 4, name: "Brooklyn Bridge", type: "Bridge", distance: "3.4 km", rating: 4.7 },
  ]

  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Navigation className="h-5 w-5" />
          <span>Nearby Tourist Places</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map placeholder - in a real app, this would be Google Maps or similar */}
        <div className="h-80 bg-gradient-to-br from-accent/20 to-primary/10 relative overflow-hidden rounded-lg mx-6 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Interactive Map View</p>
              <p className="text-xs text-muted-foreground">Your location and nearby places</p>
            </div>
          </div>

          {/* Mock location pins */}
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full p-2">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="absolute top-12 right-8 bg-secondary text-secondary-foreground rounded-full p-2">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="absolute bottom-8 left-12 bg-accent text-accent-foreground rounded-full p-2">
            <MapPin className="h-4 w-4" />
          </div>
        </div>

        {/* Nearby places list */}
        <div className="px-6 pb-4 space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground mb-3">NEARBY PLACES</h4>
          {nearbyPlaces.map((place) => (
            <div
              key={place.id}
              className="flex items-center justify-between p-2 hover:bg-accent/50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">{place.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {place.distance} • {place.type}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                ★ {place.rating}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
