import { SignUpForm } from "@/components/auth/signup-form"
import { SplineRobot } from "@/components/spline-robot"

export default function SignUpPage() {
  return (
    <div className="min-h-screen relative">
      <SplineRobot />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2 drop-shadow-lg">TravelMate</h1>
              <p className="text-muted-foreground text-lg drop-shadow-md">Start your travel journey today</p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}
