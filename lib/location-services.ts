// Mock location services - in a real app, these would integrate with Google Maps API, OpenStreetMap, etc.

export interface Place {
  id: string
  name: string
  type: string
  address: string
  distance: number
  rating: number
  isOpen: boolean
  phone?: string
  website?: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface LocationServiceOptions {
  radius?: number // in kilometers
  limit?: number
  type?: string
}

// Mock data for demonstration
const mockPlaces: Place[] = [
  {
    id: "1",
    name: "Central Park",
    type: "park",
    address: "New York, NY 10024",
    distance: 0.5,
    rating: 4.8,
    isOpen: true,
    coordinates: { lat: 40.7829, lng: -73.9654 },
  },
  {
    id: "2",
    name: "Joe's Pizza",
    type: "restaurant",
    address: "123 Main St, New York, NY",
    distance: 0.3,
    rating: 4.6,
    isOpen: true,
    phone: "+1 (555) 123-4567",
    coordinates: { lat: 40.7589, lng: -73.9851 },
  },
  {
    id: "3",
    name: "Shell Gas Station",
    type: "gas_station",
    address: "456 Broadway, New York, NY",
    distance: 0.8,
    rating: 4.2,
    isOpen: true,
    phone: "+1 (555) 987-6543",
    coordinates: { lat: 40.7505, lng: -73.9934 },
  },
  {
    id: "4",
    name: "Mount Sinai Hospital",
    type: "hospital",
    address: "1 Gustave L. Levy Pl, New York, NY",
    distance: 1.2,
    rating: 4.4,
    isOpen: true,
    phone: "+1 (212) 241-6500",
    coordinates: { lat: 40.7904, lng: -73.9531 },
  },
  {
    id: "5",
    name: "NYPD 19th Precinct",
    type: "police",
    address: "153 E 67th St, New York, NY",
    distance: 0.9,
    rating: 3.8,
    isOpen: true,
    phone: "+1 (212) 452-0600",
    coordinates: { lat: 40.7677, lng: -73.9658 },
  },
]

export async function findNearbyPlaces(
  userLocation: { latitude: number; longitude: number },
  options: LocationServiceOptions = {},
): Promise<Place[]> {
  const { radius = 5, limit = 10, type } = options

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredPlaces = mockPlaces

  // Filter by type if specified
  if (type) {
    filteredPlaces = filteredPlaces.filter((place) => place.type === type)
  }

  // Filter by radius (simplified calculation)
  filteredPlaces = filteredPlaces.filter((place) => place.distance <= radius)

  // Sort by distance
  filteredPlaces.sort((a, b) => a.distance - b.distance)

  // Limit results
  return filteredPlaces.slice(0, limit)
}

export async function searchPlaces(
  query: string,
  userLocation: { latitude: number; longitude: number },
): Promise<Place[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const filteredPlaces = mockPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.type.toLowerCase().includes(query.toLowerCase()) ||
      place.address.toLowerCase().includes(query.toLowerCase()),
  )

  return filteredPlaces.sort((a, b) => a.distance - b.distance)
}

export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLng = (lng2 - lng1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export function getDirectionsUrl(
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number },
): string {
  return `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destination.lat},${destination.lng}`
}
