"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, UserPlus, Edit } from "lucide-react"

export function EmergencyContacts() {
  const emergencyContacts = [
    {
      id: "1",
      name: "John Doe",
      relationship: "Emergency Contact",
      phone: "+1 (555) 123-4567",
      isPrimary: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      relationship: "Family",
      phone: "+1 (555) 987-6543",
      isPrimary: false,
    },
    {
      id: "3",
      name: "Dr. Wilson",
      relationship: "Doctor",
      phone: "+1 (555) 456-7890",
      isPrimary: false,
    },
  ]

  const nationalEmergencyNumbers = [
    { service: "Emergency Services", number: "911", description: "Police, Fire, Medical" },
    { service: "Poison Control", number: "1-800-222-1222", description: "24/7 poison help" },
    { service: "Crisis Hotline", number: "988", description: "Mental health crisis" },
    { service: "Non-Emergency Police", number: "311", description: "Non-urgent police matters" },
  ]

  return (
    <div className="space-y-4">
      {/* Personal Emergency Contacts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>Emergency Contacts</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              <UserPlus className="h-4 w-4 mr-1" />
              Add Contact
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="p-3 border rounded-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{contact.name}</h4>
                    {contact.isPrimary && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Primary</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                  <p className="text-sm font-mono">{contact.phone}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Button size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Text
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* National Emergency Numbers */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Hotlines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {nationalEmergencyNumbers.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">{service.service}</h4>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-mono font-semibold">{service.number}</p>
                <Button size="sm" variant="outline">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
