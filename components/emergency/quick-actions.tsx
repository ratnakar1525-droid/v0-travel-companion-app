"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, AlertTriangle, Shield, Heart, Flame } from "lucide-react"

export function QuickActions() {
  const emergencyActions = [
    {
      id: "911",
      label: "Call 911",
      description: "Emergency services",
      icon: Phone,
      color: "bg-red-500 hover:bg-red-600 text-white",
      action: () => window.open("tel:911"),
    },
    {
      id: "police",
      label: "Police",
      description: "Law enforcement",
      icon: Shield,
      color: "bg-blue-500 hover:bg-blue-600 text-white",
      action: () => console.log("Calling police"),
    },
    {
      id: "medical",
      label: "Medical",
      description: "Ambulance/Hospital",
      icon: Heart,
      color: "bg-green-500 hover:bg-green-600 text-white",
      action: () => console.log("Calling medical"),
    },
    {
      id: "fire",
      label: "Fire Dept",
      description: "Fire emergency",
      icon: Flame,
      color: "bg-orange-500 hover:bg-orange-600 text-white",
      action: () => console.log("Calling fire dept"),
    },
    {
      id: "location",
      label: "Share Location",
      description: "Send GPS coordinates",
      icon: MapPin,
      color: "bg-purple-500 hover:bg-purple-600 text-white",
      action: () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const coords = `${position.coords.latitude},${position.coords.longitude}`
            navigator.clipboard.writeText(coords)
            alert("Location copied to clipboard")
          })
        }
      },
    },
    {
      id: "sos",
      label: "SOS Alert",
      description: "Send emergency alert",
      icon: AlertTriangle,
      color: "bg-red-600 hover:bg-red-700 text-white",
      action: () => console.log("Sending SOS alert"),
    },
  ]

  return (
    <Card className="border-destructive/20">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {emergencyActions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.id}
                variant="outline"
                className={`h-24 flex-col space-y-2 ${action.color} border-0`}
                onClick={action.action}
              >
                <Icon className="h-6 w-6" />
                <div className="text-center">
                  <p className="font-semibold text-sm">{action.label}</p>
                  <p className="text-xs opacity-90">{action.description}</p>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
