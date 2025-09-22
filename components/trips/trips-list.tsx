"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Car, Plane, Train, MoreVertical, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function TripsList() {
  const trips = [
    {
      id: 1,
      name: "Weekend in Paris",
      startLocation: "New York",
      destination: "Paris, France",
      startDate: "2024-03-15",
      endDate: "2024-03-18",
      transport: "flight",
      status: "upcoming",
      estimatedTime: "8h 30m",
    },
    {
      id: 2,
      name: "Road Trip to California",
      startLocation: "Denver",
      destination: "Los Angeles",
      startDate: "2024-02-20",
      endDate: "2024-02-25",
      transport: "car",
      status: "active",
      estimatedTime: "12h 45m",
    },
    {
      id: 3,
      name: "Business Trip to Chicago",
      startLocation: "Boston",
      destination: "Chicago",
      startDate: "2024-01-10",
      endDate: "2024-01-12",
      transport: "train",
      status: "completed",
      estimatedTime: "22h 15m",
    },
  ]

  const getTransportIcon = (transport: string) => {
    switch (transport) {
      case "flight":
        return Plane
      case "car":
        return Car
      case "train":
        return Train
      default:
        return MapPin
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "upcoming":
        return "bg-blue-500"
      case "completed":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">All Trips</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            All
          </Button>
          <Button variant="ghost" size="sm">
            Active
          </Button>
          <Button variant="ghost" size="sm">
            Upcoming
          </Button>
          <Button variant="ghost" size="sm">
            Completed
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {trips.map((trip) => {
          const TransportIcon = getTransportIcon(trip.transport)
          return (
            <Card key={trip.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{trip.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(trip.status)}`}></div>
                      <Badge variant="secondary" className="text-xs capitalize">
                        {trip.status}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Trip
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Trip
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{trip.startLocation}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-sm font-medium">{trip.destination}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TransportIcon className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{trip.estimatedTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant={trip.status === "active" ? "default" : "outline"}>
                    {trip.status === "active"
                      ? "View Details"
                      : trip.status === "upcoming"
                        ? "Prepare"
                        : "View Summary"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
