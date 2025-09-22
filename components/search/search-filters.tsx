"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

export function SearchFilters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [radius, setRadius] = useState([5])
  const [rating, setRating] = useState([4])

  const placeTypes = [
    { id: "restaurant", label: "Restaurants", count: 45 },
    { id: "hotel", label: "Hotels", count: 23 },
    { id: "attraction", label: "Attractions", count: 67 },
    { id: "gas_station", label: "Gas Stations", count: 12 },
    { id: "hospital", label: "Hospitals", count: 8 },
    { id: "shopping", label: "Shopping", count: 34 },
    { id: "park", label: "Parks", count: 19 },
    { id: "museum", label: "Museums", count: 15 },
  ]

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setRadius([5])
    setRating([4])
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </CardTitle>
            {(selectedTypes.length > 0 || radius[0] !== 5 || rating[0] !== 4) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Place Types */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Place Types</h4>
            <div className="space-y-2">
              {placeTypes.map((type) => (
                <div key={type.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={type.id}
                      checked={selectedTypes.includes(type.id)}
                      onCheckedChange={() => toggleType(type.id)}
                    />
                    <label htmlFor={type.id} className="text-sm cursor-pointer">
                      {type.label}
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {type.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Distance */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">Distance</h4>
              <span className="text-sm text-muted-foreground">{radius[0]} km</span>
            </div>
            <Slider value={radius} onValueChange={setRadius} max={50} min={1} step={1} className="w-full" />
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">Minimum Rating</h4>
              <span className="text-sm text-muted-foreground">{rating[0]}+ ⭐</span>
            </div>
            <Slider value={rating} onValueChange={setRating} max={5} min={1} step={0.5} className="w-full" />
          </div>

          {/* Sort By */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Sort By</h4>
            <Select defaultValue="distance">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {selectedTypes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedTypes.map((type) => {
                const typeInfo = placeTypes.find((t) => t.id === type)
                return (
                  <Badge key={type} variant="secondary" className="text-xs">
                    {typeInfo?.label}
                    <Button variant="ghost" size="sm" className="h-auto p-0 ml-1" onClick={() => toggleType(type)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
