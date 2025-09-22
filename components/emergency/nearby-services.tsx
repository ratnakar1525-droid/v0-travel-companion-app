"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Navigation, Clock, Shield, Heart, Flame, AlertTriangle } from "lucide-react"
import { useLocation } from "@/hooks/use-location"
import { findNearbyPlaces, type Place } from "@/lib/location-services"

export function NearbyServices() {
  const [services, setServices] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)
  const { location } = useLocation()

  useEffect(() => {
    if (location) {
      loadEmergencyServices()
    }
  }, [location])

  const loadEmergencyServices = async () => {
    if (!location) return

    setLoading(true)
    try {
      const [hospitals, police] = await Promise.all([
        findNearbyPlaces(location, { type: "hospital", limit: 5 }),
        findNearbyPlaces(location, { type: "police", limit: 5 }),
      ])
      setServices([...hospitals, ...police])
    } catch (error) {
      console.error("Error loading emergency services:", error)
    } finally {
      setLoading(false)
    }
  }

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "hospital":
        return Heart
      case "police":
        return Shield
      case "fire_station":
        return Flame
      default:
        return MapPin
    }
  }

  const getServiceColor = (type: string) => {
    switch (type) {
      case "hospital":
        return "bg-green-100 text-green-800"
      case "police":
        return "bg-blue-100 text-blue-800"
      case "fire_station":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Nearby Emergency Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-destructive" />
          <span>Nearby Emergency Services</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => {
          const ServiceIcon = getServiceIcon(service.type)
          return (
            <div key={service.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <ServiceIcon className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold">{service.name}</h4>
                  </div>
                  <Badge className={getServiceColor(service.type)}>{service.type.replace("_", " ")}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{service.distance} km</p>
                  <div className="flex items-center space-x-1">
                    <Clock className={`h-3 w-3 ${service.isOpen ? "text-green-500" : "text-red-500"}`} />
                    <span className={`text-xs ${service.isOpen ? "text-green-600" : "text-red-600"}`}>
                      {service.isOpen ? "Open 24/7" : "Closed"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{service.address}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Button size="sm" variant="destructive" className="flex-1">
                  <Phone className="h-4 w-4 mr-1" />
                  Call Now
                </Button>
                <Button size="sm" variant="outline">
                  <Navigation className="h-4 w-4 mr-1" />
                  Directions
                </Button>
              </div>
            </div>
          )
        })}

        {services.length === 0 && (
          <div className="text-center py-8">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-medium mb-2">No emergency services found</h4>
            <p className="text-sm text-muted-foreground">
              Unable to locate nearby emergency services. Please call 911 directly.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
