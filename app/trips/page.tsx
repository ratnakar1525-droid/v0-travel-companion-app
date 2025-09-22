import { TripsHeader } from "@/components/trips/trips-header"
import { TripsList } from "@/components/trips/trips-list"
import { ActiveTrip } from "@/components/trips/active-trip"

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-background">
      <TripsHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">My Trips</h1>
          <p className="text-muted-foreground">Manage your travel plans and adventures</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TripsList />
          </div>
          <div>
            <ActiveTrip />
          </div>
        </div>
      </main>
    </div>
  )
}
