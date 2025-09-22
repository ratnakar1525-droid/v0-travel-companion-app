import { EmergencyHeader } from "@/components/emergency/emergency-header"
import { QuickActions } from "@/components/emergency/quick-actions"
import { NearbyServices } from "@/components/emergency/nearby-services"
import { EmergencyContacts } from "@/components/emergency/emergency-contacts"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-destructive">Emergency Services</h1>
          <p className="text-muted-foreground">Quick access to help when you need it most</p>
        </div>

        <QuickActions />

        <div className="grid lg:grid-cols-2 gap-6">
          <NearbyServices />
          <EmergencyContacts />
        </div>
      </main>
    </div>
  )
}
