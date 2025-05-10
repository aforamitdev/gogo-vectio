import React from 'react'
import { Clock, MapPin, Truck } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

// Mock data for active trips
const activeTrips = [
  {
    id: 'TRIP001',
    vehicle: 'Truck-001',
    driver: 'John Doe',
    from: 'New York',
    to: 'Boston',
    startTime: '2024-03-20 08:00',
    currentLocation: 'Hartford, CT',
    duration: '4h 30m',
    fuelCost: 150.75,
    driverCost: 120.0,
    totalCost: 270.75,
    status: 'In Progress',
  },
  {
    id: 'TRIP002',
    vehicle: 'Truck-002',
    driver: 'Jane Smith',
    from: 'Los Angeles',
    to: 'San Francisco',
    startTime: '2024-03-20 09:30',
    currentLocation: 'Bakersfield, CA',
    duration: '3h 45m',
    fuelCost: 180.5,
    driverCost: 95.0,
    totalCost: 275.5,
    status: 'In Progress',
  },
  {
    id: 'TRIP003',
    vehicle: 'Truck-003',
    driver: 'Mike Johnson',
    from: 'Chicago',
    to: 'Detroit',
    startTime: '2024-03-20 10:00',
    currentLocation: 'Gary, IN',
    duration: '2h 15m',
    fuelCost: 90.25,
    driverCost: 60.0,
    totalCost: 150.25,
    status: 'In Progress',
  },
]

export function ActiveTrips() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Trip ID</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Current Location</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Costs</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activeTrips.map((trip) => (
            <TableRow key={trip.id}>
              <TableCell>{trip.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                {trip.vehicle}
              </TableCell>
              <TableCell>{trip.driver}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {trip.from}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {trip.to}
                  </span>
                </div>
              </TableCell>
              <TableCell>{trip.currentLocation}</TableCell>
              <TableCell className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {trip.duration}
              </TableCell>
              <TableCell>
                <div className="flex flex-col text-sm">
                  <span>Fuel: ${trip.fuelCost.toFixed(2)}</span>
                  <span>Driver: ${trip.driverCost.toFixed(2)}</span>
                  <span className="font-semibold">
                    Total: ${trip.totalCost.toFixed(2)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="warning">{trip.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
