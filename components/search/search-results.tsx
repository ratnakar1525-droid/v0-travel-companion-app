"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock, Phone, ExternalLink, Navigation } from "lucide-react"
import { useLocation } from "@/hooks/use-location"
import { findNearbyPlaces, type Place } from "@/lib/location-services"

export function SearchResults() {
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)
  const { location } = useLocation()

  useEffect(() => {
    if (location) {
      loadNearbyPlaces()
    }
  }, [location])

  const loadNearbyPlaces = async () => {
    if (!location) return

    setLoading(true)
    try {
      const nearbyPlaces = await findNearbyPlaces(location, { limit: 20 })
      setPlaces(nearbyPlaces)
    } catch (error) {
      console.error("Error loading places:", error)
    } finally {
      setLoading(false)
    }
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      restaurant: "bg-orange-100 text-orange-800",
      hotel: "bg-blue-100 text-blue-800",
      gas_station: "bg-green-100 text-green-800",
      hospital: "bg-red-100 text-red-800",
      police: "bg-purple-100 text-purple-800",
      park: "bg-emerald-100 text-emerald-800",
    }
    return colors[type] || "bg-gray-100 text-gray-800"
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Searching nearby places...</h3>
        </div>
        <div className="grid gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Found {places.length} places nearby</h3>
        <Button variant="outline" size="sm" onClick={loadNearbyPlaces}>
          Refresh
        </Button>
      </div>

      <div className="grid gap-4">
        {places.map((place) => (
          <Card key={place.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">{place.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge className={getTypeColor(place.type)}>{place.type.replace("_", " ")}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className={`h-4 w-4 ${place.isOpen ? "text-green-500" : "text-red-500"}`} />
                        <span className={`text-sm ${place.isOpen ? "text-green-600" : "text-red-600"}`}>
                          {place.isOpen ? "Open" : "Closed"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{place.distance} km</p>
                    <p className="text-xs text-muted-foreground">away</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{place.address}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {place.phone && (
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    )}
                    {place.website && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Website
                      </Button>
                    )}
                  </div>
                  <Button size="sm">
                    <Navigation className="h-4 w-4 mr-1" />
                    Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {places.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-medium mb-2">No places found</h4>
            <p className="text-sm text-muted-foreground">Try adjusting your search filters or search radius</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
