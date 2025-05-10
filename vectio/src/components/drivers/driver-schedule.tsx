import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Mock data for driver schedules
const driverSchedules = [
  {
    id: 'DRV001',
    name: 'John Doe',
    status: 'available',
    currentLocation: 'New York, NY',
    upcomingTrips: [
      {
        id: 'TRIP001',
        route: 'New York → Boston',
        date: '2024-03-20',
        time: '09:00 AM',
        duration: '4h 30m',
        status: 'scheduled',
      },
      {
        id: 'TRIP002',
        route: 'Boston → Philadelphia',
        date: '2024-03-21',
        time: '08:00 AM',
        duration: '5h 15m',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'DRV002',
    name: 'Jane Smith',
    status: 'on_trip',
    currentLocation: 'Chicago, IL',
    upcomingTrips: [
      {
        id: 'TRIP003',
        route: 'Chicago → Detroit',
        date: '2024-03-20',
        time: '10:30 AM',
        duration: '4h 45m',
        status: 'in_progress',
      },
      {
        id: 'TRIP004',
        route: 'Detroit → Cleveland',
        date: '2024-03-21',
        time: '09:00 AM',
        duration: '3h 30m',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'DRV003',
    name: 'Mike Johnson',
    status: 'off_duty',
    currentLocation: 'Los Angeles, CA',
    upcomingTrips: [
      {
        id: 'TRIP005',
        route: 'Los Angeles → San Diego',
        date: '2024-03-21',
        time: '07:00 AM',
        duration: '2h 15m',
        status: 'scheduled',
      },
    ],
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'success'
    case 'on_trip':
      return 'warning'
    case 'off_duty':
      return 'secondary'
    default:
      return 'default'
  }
}

export function DriverSchedule() {
  return (
    <div className="space-y-4">
      {driverSchedules.map((driver) => (
        <Card key={driver.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{driver.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {driver.currentLocation}
                  </span>
                </div>
              </div>
              <Badge variant={getStatusColor(driver.status)}>
                {driver.status.replace('_', ' ')}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {driver.upcomingTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex items-start justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{trip.route}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {trip.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {trip.time} ({trip.duration})
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      trip.status === 'in_progress' ? 'warning' : 'default'
                    }
                  >
                    {trip.status.replace('_', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
