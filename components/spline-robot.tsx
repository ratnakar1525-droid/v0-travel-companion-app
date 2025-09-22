"use client"

import { Suspense } from "react"

export function SplineRobot() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-background/50 to-accent/10" />}>
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-N4W5aM1pFwXnBYMFgrZ9pEde/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          style={{
            pointerEvents: "auto",
            zIndex: 1,
          }}
          title="Interactive 3D Robot Animation"
        />
      </Suspense>

      <div
        className="absolute inset-0 bg-background/10 backdrop-blur-[0.5px] pointer-events-none"
        style={{ zIndex: 2 }}
      />
    </div>
  )
}
