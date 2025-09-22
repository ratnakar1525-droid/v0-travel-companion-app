"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, CalendarIcon, Car, Bike, Bus, Train, Plane, Users, Plus } from "lucide-react"
import { format } from "date-fns"

interface TripPlanSidebarProps {
  onClose: () => void
}

export function TripPlanSidebar({ onClose }: TripPlanSidebarProps) {
  const [tripData, setTripData] = useState({
    name: "",
    startLocation: "",
    destination: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    transport: "",
  })

  const [showRideSharing, setShowRideSharing] = useState(false)
  const [rideShareData, setRideShareData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  })

  const transportOptions = [
    { id: "bike", label: "Bike", icon: Bike, needsRideShare: true },
    { id: "car", label: "Car", icon: Car, needsRideShare: true },
    { id: "bus", label: "Bus", icon: Bus, needsRideShare: false },
    { id: "train", label: "Train", icon: Train, needsRideShare: false },
    { id: "flight", label: "Flight", icon: Plane, needsRideShare: false },
  ]

  const handleTransportSelect = (transport: string) => {
    setTripData({ ...tripData, transport })
    const option = transportOptions.find((opt) => opt.id === transport)
    setShowRideSharing(option?.needsRideShare || false)
  }

  const handleCreateTrip = () => {
    // TODO: Implement trip creation logic
    console.log("Creating trip:", tripData, showRideSharing ? rideShareData : null)
    onClose()
  }

  const isFormValid =
    tripData.name &&
    tripData.startLocation &&
    tripData.destination &&
    tripData.startDate &&
    tripData.endDate &&
    tripData.transport

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">Plan Your Trip</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Trip Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Trip Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="trip-name">Trip Name</Label>
              <Input
                id="trip-name"
                placeholder="e.g., Weekend Getaway to Paris"
                value={tripData.name}
                onChange={(e) => setTripData({ ...tripData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="start-location">Starting Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="start-location"
                  placeholder="Enter starting location"
                  value={tripData.startLocation}
                  onChange={(e) => setTripData({ ...tripData, startLocation: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="destination"
                  placeholder="Enter destination"
                  value={tripData.destination}
                  onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {tripData.startDate ? format(tripData.startDate, "PPP") : "Pick date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tripData.startDate}
                      onSelect={(date) => setTripData({ ...tripData, startDate: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {tripData.endDate ? format(tripData.endDate, "PPP") : "Pick date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tripData.endDate}
                      onSelect={(date) => setTripData({ ...tripData, endDate: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transport Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transportation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {transportOptions.map((option) => {
                const Icon = option.icon
                return (
                  <Button
                    key={option.id}
                    variant={tripData.transport === option.id ? "default" : "outline"}
                    className="h-16 flex-col space-y-1"
                    onClick={() => handleTransportSelect(option.id)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs">{option.label}</span>
                  </Button>
                )
              })}
            </div>

            {tripData.transport && !showRideSharing && (
              <div className="p-3 bg-accent/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Third-party booking will open for{" "}
                  {transportOptions.find((opt) => opt.id === tripData.transport)?.label} tickets
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ride Sharing Details */}
        {showRideSharing && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Ride Sharing Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rider-name">Name</Label>
                <Input
                  id="rider-name"
                  placeholder="Enter your name"
                  value={rideShareData.name}
                  onChange={(e) => setRideShareData({ ...rideShareData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rider-age">Age</Label>
                  <Input
                    id="rider-age"
                    type="number"
                    placeholder="Age"
                    value={rideShareData.age}
                    onChange={(e) => setRideShareData({ ...rideShareData, age: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select
                    value={rideShareData.gender}
                    onValueChange={(value) => setRideShareData({ ...rideShareData, gender: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rider-contact">Contact Details</Label>
                <Input
                  id="rider-contact"
                  placeholder="Phone number or email"
                  value={rideShareData.contact}
                  onChange={(e) => setRideShareData({ ...rideShareData, contact: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Estimated Time */}
        {tripData.startLocation && tripData.destination && tripData.transport && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Estimated Travel Time</p>
                <div className="text-2xl font-bold text-primary">
                  {tripData.transport === "flight"
                    ? "2h 30m"
                    : tripData.transport === "train"
                      ? "4h 15m"
                      : tripData.transport === "bus"
                        ? "5h 45m"
                        : tripData.transport === "car"
                          ? "4h 30m"
                          : "6h 15m"}
                </div>
                <Badge variant="secondary">
                  {tripData.startLocation} → {tripData.destination}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Create Trip Button */}
      <div className="p-6 border-t">
        <Button className="w-full h-12" onClick={handleCreateTrip} disabled={!isFormValid}>
          <Plus className="h-4 w-4 mr-2" />
          Create Trip
        </Button>
      </div>
    </div>
  )
}
