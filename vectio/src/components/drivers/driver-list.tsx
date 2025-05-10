import React from 'react'
import { Award, Clock, DollarSign, Mail, MapPin, Phone } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Mock data for drivers
const drivers = [
  {
    id: 'DRV001',
    name: 'John Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
    location: 'New York, NY',
    experience: '8 years',
    costPerHour: 35.0,
    status: 'Available',
    rating: 4.8,
    completedTrips: 156,
    specialties: ['Long Haul', 'Hazmat'],
    currentTrip: null,
  },
  {
    id: 'DRV002',
    name: 'Jane Smith',
    phone: '+1 (555) 234-5678',
    email: 'jane.smith@example.com',
    location: 'Los Angeles, CA',
    experience: '5 years',
    costPerHour: 32.5,
    status: 'On Trip',
    rating: 4.9,
    completedTrips: 98,
    specialties: ['Local Delivery', 'Refrigerated'],
    currentTrip: 'TRIP002',
  },
  {
    id: 'DRV003',
    name: 'Mike Johnson',
    phone: '+1 (555) 345-6789',
    email: 'mike.johnson@example.com',
    location: 'Chicago, IL',
    experience: '12 years',
    costPerHour: 38.0,
    status: 'Available',
    rating: 4.7,
    completedTrips: 243,
    specialties: ['Oversized Load', 'Long Haul'],
    currentTrip: null,
  },
]

export function DriverList() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {drivers.map((driver) => (
          <Card key={driver.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{driver.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ID: {driver.id}
                    </p>
                  </div>
                  <Badge
                    variant={
                      driver.status === 'Available' ? 'success' : 'warning'
                    }
                  >
                    {driver.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    {driver.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    {driver.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {driver.location}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Experience
                    </div>
                    <p className="text-sm font-medium">{driver.experience}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      Cost/Hour
                    </div>
                    <p className="text-sm font-medium">
                      ${driver.costPerHour.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    Specialties
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {driver.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Rating: </span>
                    <span className="font-medium">{driver.rating}/5.0</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Trips: </span>
                    <span className="font-medium">{driver.completedTrips}</span>
                  </div>
                </div>

                {driver.currentTrip && (
                  <div className="rounded-md bg-muted p-2 text-sm">
                    <span className="text-muted-foreground">
                      Current Trip:{' '}
                    </span>
                    <span className="font-medium">{driver.currentTrip}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Cost/Hour</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Specialties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{driver.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ID: {driver.id}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">{driver.phone}</div>
                      <div className="text-sm text-muted-foreground">
                        {driver.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{driver.experience}</TableCell>
                  <TableCell>${driver.costPerHour.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        driver.status === 'Available' ? 'success' : 'warning'
                      }
                    >
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{driver.rating}/5.0</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {driver.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
