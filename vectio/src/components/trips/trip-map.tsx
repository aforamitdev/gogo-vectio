import React from 'react'
import { MapPin, Truck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Mock data for vehicle locations
const vehicleLocations = [
  {
    id: 'TRIP001',
    vehicle: 'Truck-001',
    driver: 'John Doe',
    location: 'Hartford, CT',
    coordinates: { lat: 41.7658, lng: -72.6734 },
    status: 'In Progress',
  },
  {
    id: 'TRIP002',
    vehicle: 'Truck-002',
    driver: 'Jane Smith',
    location: 'Bakersfield, CA',
    coordinates: { lat: 35.3733, lng: -119.0187 },
    status: 'In Progress',
  },
  {
    id: 'TRIP003',
    vehicle: 'Truck-003',
    driver: 'Mike Johnson',
    location: 'Gary, IN',
    coordinates: { lat: 41.5934, lng: -87.3464 },
    status: 'In Progress',
  },
]

export function TripMap() {
  return (
    <div className="space-y-4">
      <div className="h-[400px] rounded-lg border bg-muted">
        {/* Map component will be integrated here */}
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">Map integration coming soon</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {vehicleLocations.map((vehicle) => (
          <Card key={vehicle.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span className="font-medium">{vehicle.vehicle}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{vehicle.location}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Driver: {vehicle.driver}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Lat: {vehicle.coordinates.lat.toFixed(4)}
                  <br />
                  Lng: {vehicle.coordinates.lng.toFixed(4)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
