import { LoginForm } from "@/components/auth/login-form"
import { SplineRobot } from "@/components/spline-robot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background/20 relative overflow-hidden">
      <SplineRobot />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground drop-shadow-lg mb-2">TravelMate</h1>
              <p className="text-muted-foreground text-lg drop-shadow-md">Your complete travel companion</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
