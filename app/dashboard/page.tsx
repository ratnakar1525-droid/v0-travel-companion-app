import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MapView } from "@/components/dashboard/map-view"
import { ActionBlocks } from "@/components/dashboard/action-blocks"
import { SearchBar } from "@/components/dashboard/search-bar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
          <p className="text-muted-foreground">Discover amazing places around you</p>
        </div>

        <SearchBar />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapView />
          </div>
          <div className="space-y-4">
            <ActionBlocks />
          </div>
        </div>
      </main>
    </div>
  )
}
