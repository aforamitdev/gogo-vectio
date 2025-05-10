import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ArrowDown, ArrowUp, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for trip comparison
const tripComparison = [
  {
    id: 'TRIP001',
    vehicle: 'Truck-001',
    route: 'NYC → Boston',
    distance: 215,
    duration: '4h 30m',
    costPerMile: 1.75,
    costPerHour: 83.5,
    previousCostPerMile: 1.85,
    previousCostPerHour: 88.0,
  },
  {
    id: 'TRIP002',
    vehicle: 'Truck-002',
    route: 'LA → SF',
    distance: 382,
    duration: '6h 15m',
    costPerMile: 1.05,
    costPerHour: 64.0,
    previousCostPerMile: 1.1,
    previousCostPerHour: 67.0,
  },
  {
    id: 'TRIP003',
    vehicle: 'Truck-003',
    route: 'Chicago → Detroit',
    distance: 282,
    duration: '4h 45m',
    costPerMile: 0.78,
    costPerHour: 46.37,
    previousCostPerMile: 0.82,
    previousCostPerHour: 48.5,
  },
]

const chartData = tripComparison.map((trip) => ({
  name: trip.vehicle,
  current: trip.costPerMile,
  previous: trip.previousCostPerMile,
}))

export function TripComparison() {
  const calculateChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100
    return {
      value: Math.abs(change).toFixed(1),
      isPositive: change < 0,
      isNeutral: change === 0,
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {tripComparison.map((trip) => {
          const mileChange = calculateChange(
            trip.costPerMile,
            trip.previousCostPerMile,
          )
          const hourChange = calculateChange(
            trip.costPerHour,
            trip.previousCostPerHour,
          )

          return (
            <Card key={trip.id}>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  {trip.vehicle} - {trip.route}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Cost per Mile
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        ${trip.costPerMile.toFixed(2)}
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          mileChange.isPositive
                            ? 'text-green-500'
                            : mileChange.isNeutral
                              ? 'text-gray-500'
                              : 'text-red-500'
                        }`}
                      >
                        {mileChange.isPositive ? (
                          <ArrowDown className="h-4 w-4" />
                        ) : mileChange.isNeutral ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <ArrowUp className="h-4 w-4" />
                        )}
                        {mileChange.value}%
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Cost per Hour
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        ${trip.costPerHour.toFixed(2)}
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          hourChange.isPositive
                            ? 'text-green-500'
                            : hourChange.isNeutral
                              ? 'text-gray-500'
                              : 'text-red-500'
                        }`}
                      >
                        {hourChange.isPositive ? (
                          <ArrowDown className="h-4 w-4" />
                        ) : hourChange.isNeutral ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <ArrowUp className="h-4 w-4" />
                        )}
                        {hourChange.value}%
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Distance: {trip.distance} miles
                    <br />
                    Duration: {trip.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost per Mile Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="current"
                  name="Current Cost/Mile"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="previous"
                  name="Previous Cost/Mile"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
