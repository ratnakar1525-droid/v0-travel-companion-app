import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UtensilsCrossed, Fuel, Phone, MapPin, Star, Clock } from "lucide-react"

export function ActionBlocks() {
  const restaurants = [
    { name: "The Italian Corner", rating: 4.8, time: "15 min", cuisine: "Italian" },
    { name: "Sushi Master", rating: 4.9, time: "8 min", cuisine: "Japanese" },
    { name: "Burger Palace", rating: 4.6, time: "12 min", cuisine: "American" },
  ]

  const petrolStations = [
    { name: "Shell Station", distance: "0.3 km", price: "$3.45/gal" },
    { name: "BP Express", distance: "0.7 km", price: "$3.42/gal" },
    { name: "Exxon", distance: "1.1 km", price: "$3.48/gal" },
  ]

  const emergencyServices = [
    { name: "City General Hospital", type: "Hospital", distance: "1.2 km" },
    { name: "Police Station 12th", type: "Police", distance: "0.8 km" },
    { name: "Fire Department", type: "Fire", distance: "1.5 km" },
  ]

  return (
    <div className="space-y-4">
      {/* Nearby Restaurants */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            <span>Nearby Restaurants</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="space-y-1">
                <p className="font-medium text-sm">{restaurant.name}</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{restaurant.time}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {restaurant.cuisine}
                </Badge>
              </div>
              <Button size="sm" variant="outline">
                <MapPin className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-sm">
            View All Restaurants
          </Button>
        </CardContent>
      </Card>

      {/* Petrol Stations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Fuel className="h-5 w-5 text-primary" />
            <span>Fuel Stations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {petrolStations.map((station, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="space-y-1">
                <p className="font-medium text-sm">{station.name}</p>
                <p className="text-xs text-muted-foreground">{station.distance}</p>
                <Badge variant="secondary" className="text-xs">
                  {station.price}
                </Badge>
              </div>
              <Button size="sm" variant="outline">
                <MapPin className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-sm">
            View All Stations
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Services */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Phone className="h-5 w-5 text-destructive" />
            <span>Emergency / SOS</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {emergencyServices.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
              <div className="space-y-1">
                <p className="font-medium text-sm">{service.name}</p>
                <p className="text-xs text-muted-foreground">{service.distance}</p>
                <Badge variant="destructive" className="text-xs">
                  {service.type}
                </Badge>
              </div>
              <Button size="sm" variant="destructive">
                Call
              </Button>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-sm text-destructive">
            Emergency Contacts
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
